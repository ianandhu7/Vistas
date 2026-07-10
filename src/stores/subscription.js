import { defineStore } from 'pinia'
import axios from 'axios'
import {
  checkMobileExists,
  sendOtpExistingUser,
  sendOtpNewUser,
  verifyOtpExistingUser,
  verifyOtpNewUser,
  registerNewUser
} from '../services/api'
import {
  saveUserToLocalStorage,
  clearUserFromLocalStorage,
  getUserFromLocalStorage,
  isLoggedIn,
  isSubscribed,
  isTokenExpired
} from '../services/storage'

const JAVA_API = 'https://api-prod.vistaslearning.com'

// Axios interceptor for token refresh
let isRefreshing = false
let refreshSubscribers = []

function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb)
}

function onRefreshed(token) {
  refreshSubscribers.map(cb => cb(token))
  refreshSubscribers = []
}

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error
    const originalRequest = config

    if (
      response &&
      response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh')
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`
            resolve(axios(originalRequest))
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const auth = getUserFromLocalStorage()
        const refreshToken = auth.refreshToken
        const refreshRes = await axios.post(
          `${JAVA_API}/api/v1/auth/refresh`,
          { refreshToken }
        )
        const newToken = refreshRes.data.data?.accessToken

        if (newToken) {
          auth.accessToken = newToken
          localStorage.setItem('vista-auth', JSON.stringify(auth))
          const store = useSubscriptionStore()
          store.accessToken = newToken
          onRefreshed(newToken)
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`
          isRefreshing = false
          return axios(originalRequest)
        }
      } catch (refreshErr) {
        isRefreshing = false
        clearUserFromLocalStorage()
        const store = useSubscriptionStore()
        store.accessToken = null
        store.userData = null
        return Promise.reject(refreshErr)
      }
    }
    return Promise.reject(error)
  }
)

export const useSubscriptionStore = defineStore('subscription', {
  state: () => ({
    // Modal control — keeps all your existing modal names
    currentModal: null,
    // null | 'comparison' | 'mobile' | 'otp' | 'already_subscribed' | 'terms'

    selectedPlan: null,
    mobileNumber: '',
    userName: '',
    otp: ['', '', '', '', '', ''],
    isHeroFlow: false,

    loading: false,
    error: null,
    toastMessage: null,
    termsAccepted: false,
    termsError: false,

    // Flow control
    isExistingUser: false,
    isStatusChecking: false,
    isHeroFlow: false,

    // Auth — loaded from localStorage on startup
    accessToken: getUserFromLocalStorage().accessToken,
    userData: getUserFromLocalStorage().userData,
    subscriptionStatus: getUserFromLocalStorage().isSubscribed ? 'active' : null
  }),

  getters: {
    selectedProductObj: (state) => {
      if (!state.selectedPlan) return null

      // Map the string plan ID to the backend's expected product object
      switch (state.selectedPlan) {
        case '3months':
          return {
            "idProduct": 93,
            "idProductGroup": 51,
            "idProductLine": 11,
            "ageGroup": "10-20",
            "productName": "Student Plan",
            "productCd": "AD_FREE_SUBSCRIPTION",
            "extraCurrCategory": "NA",
            "batchSize": 0,
            "idProductPricing": 3,
            "promoText": "NA",
            "planDescription": "##Self-Assessment & Study Materials##Academic Live Classes for all Subjects##Access to all Academic Animated Videos##Learn from Conceptual Learning Videos##Talent Showcasing Platform##Extra Curricular Training##Spoken English Classes",
            "idProductAmount": 3,
            "amount": 999.0,
            "oldAmount": null,
            "amountCode": "TRIPLE_NINE",
            "amountName": "999",
            "idProductDuration": 2,
            "duration": 90,
            "durationCode": "QUARTER",
            "durationName": "QUARTERLY",
            "couponCode": null,
            "iosEnabled": true,
            "isVisible": true,
            "activeFlag": true
          }
        case '6months':
          return {
            "idProduct": 93,
            "idProductGroup": 51,
            "idProductLine": 11,
            "ageGroup": "10-20",
            "productName": "Student Plan",
            "productCd": "AD_FREE_SUBSCRIPTION",
            "extraCurrCategory": "NA",
            "batchSize": 0,
            "idProductPricing": 9,
            "promoText": "NA",
            "planDescription": "NA",
            "idProductAmount": 9,
            "amount": 1499.0,
            "oldAmount": null,
            "amountCode": "ONE_FOUR_NINE_NINE",
            "amountName": "1499.0",
            "idProductDuration": 4,
            "duration": 180,
            "durationCode": "HALF_YEAR",
            "durationName": "HALF YEARLY",
            "couponCode": null,
            "iosEnabled": null,
            "isVisible": null,
            "activeFlag": true
          }
        case '14months':
          return {
            "idProduct": 1222,
            "idProductGroup": 51,
            "idProductLine": 11,
            "ageGroup": "10-20",
            "productName": "Premium plan",
            "productCd": "ANNUAL_PREMIUM",
            "extraCurrCategory": "NA",
            "batchSize": 0,
            "idProductPricing": 7,
            "promoText": null,
            "planDescription": "##Self-Assessment & Study Materials##Academic Live Classes for all Subjects##Access to all Academic Animated Videos##Learn from Conceptual Learning Videos##Talent Showcasing Platform##Extra Curricular Training##Spoken English Classes\n",
            "idProductAmount": 7,
            "amount": 1999.0,
            "oldAmount": null,
            "amountCode": "ONE_NINE_NINE_NINE",
            "amountName": "1999.0",
            "idProductDuration": 6,
            "duration": 425,
            "durationCode": "14MONTH_PLAN",
            "durationName": "14MONTH PLAN",
            "couponCode": null,
            "iosEnabled": null,
            "isVisible": true,
            "activeFlag": true
          }

        default:
          return null
      }
    }
  },

  actions: {

    // Helper to set error with auto-dismiss after 5 seconds
    setError(msg) {
      this.error = msg
      if (msg) {
        setTimeout(() => {
          if (this.error === msg) {
            this.error = null
          }
        }, 5000)
      }
    },

    // ─── Modal helpers ──────────────────────────────────────────────

    async openModal(type, planId = null) {
      if (planId) this.selectedPlan = planId
      this.error = null

      // If user is already logged in, skip the mobile verification modal and check subscription
      if (type === 'mobile' && this.accessToken) {
        if (isTokenExpired(this.accessToken)) {
          this.logout()
        } else {
          this.loading = true
          try {
            const res = await fetch(
              `${JAVA_API}/api/v1/subscription/user-subscription-postlogin?userSurId=${this.userData.userSurId}`,
              {
                headers: {
                  'Authorization': `Bearer ${this.accessToken}`,
                  'Content-Type': 'application/json'
                }
              }
            )
            const data = await res.json()
            const subFlag = data.data
            const alreadySubscribed = subFlag === true || (subFlag && subFlag.subscribedFlag === true)

            if (alreadySubscribed) {
              const auth = getUserFromLocalStorage()
              auth.isSubscribed = true
              auth.subscriptionFlag = subFlag
              if (auth.userData) {
                auth.userData.subscriptionFlag = subFlag
              }
              localStorage.setItem('vista-auth', JSON.stringify(auth))

              this.subscriptionStatus = 'active'
              this.currentModal = 'already_subscribed'
              this.loading = false
              return
            }
          } catch (e) {
            console.error('Verify status on checkout open fail:', e)
          } finally {
            this.loading = false
          }

          this.initiateCheckoutPayment(this.accessToken)
          return
        }
      }

      this.currentModal = type
      if (type === 'terms') this.termsAccepted = false
    },

    closeModal() {
      this.currentModal = null
      this.otp = ['', '', '', '', '', '']
      this.error = null
      this.loading = false
      this.isStatusChecking = false
      this.isHeroFlow = false
    },

    showToast(msg) {
      this.toastMessage = msg
      setTimeout(() => { this.toastMessage = null }, 3000)
    },

    setMobileNumber(number) {
      this.mobileNumber = number.replace(/[^0-9]/g, '')
    },

    setUserName(name) {
      this.userName = name.replace(/[0-9]/g, '')
    },

    setOtpDigit(index, digit) {
      this.otp[index] = digit
    },

    setOtpFromPaste(digits) {
      this.otp = digits
    },

    setSelectedPlan(plan) {
      this.selectedPlan = plan
    },

    toggleTermsAccepted() {
      this.termsAccepted = !this.termsAccepted
    },

    triggerValidation() {
      this.termsError = true
      this.openModal('terms')
      const tcSection = document.querySelector('.pricing-shell')
      if (tcSection) {
        tcSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      setTimeout(() => { this.termsError = false }, 3000)
    },

    // ─── Plan selection ──────────────────────────────────────────────

    handlePlanSelect(planId) {
      this.selectedPlan = planId
      this.termsAccepted = false

      if (planId === '3months' || planId === '6months') {
        this.openModal('comparison', planId)
      } else {
        this.openModal('mobile')
      }
    },

    // ─── Logout ──────────────────────────────────────────────────────

    logout() {
      clearUserFromLocalStorage()
      this.accessToken = null
      this.userData = null
      this.subscriptionStatus = null
    },

    // ─── Direct Checkout Initiation (Bypassing OTP if Logged In) ─────

    async initiateCheckoutPayment(token) {
      this.loading = true
      try {
        if (!this.selectedProductObj) {
          this.setError('Plan details not found. Please try again.')
          this.loading = false
          return
        }

        const payRes = await fetch(
          'https://api-prod.vistaslearning.com/api/v2/subscription/user-newsubscription',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this.selectedProductObj)
          }
        )

        const payData = await payRes.json()

        if (!payRes.ok || !payData.data) {
          this.setError(payData.message || 'Payment initiation failed. Please try again.')
          this.loading = false
          return
        }

        const params = payData.data.paymentParameters

        // Save for retry
        localStorage.setItem('vista-pending-payment', JSON.stringify({
          params,
          plan: this.selectedPlan,
          timestamp: Date.now()
        }))

        const form = document.createElement('form')
        form.method = 'POST'
        form.action = import.meta.env.VITE_PAYTM_URL || 'https://securegw.paytm.in/order/process'

        let domainString = ''
        if (window.location.hostname.includes('vistaslearning.com')) {
          domainString = ' domain=.vistaslearning.com;'
        }
        document.cookie = `marketing_return_url=${encodeURIComponent(window.location.origin + '/payment-status')};${domainString} path=/; max-age=3600`

        Object.entries(params).forEach(([key, value]) => {
          const input = document.createElement('input')
          input.type = 'hidden'
          input.name = key
          input.value = value
          form.appendChild(input)
        })

        document.body.appendChild(form)

        const hasCallbackUrl = Object.keys(params).some(
          (key) => key.toUpperCase() === 'CALLBACK_URL'
        )

        if (!hasCallbackUrl) {
          const returnInput = document.createElement('input')
          returnInput.type = 'hidden'
          returnInput.name = 'CALLBACK_URL'
          returnInput.value = window.location.origin + '/payment-callback'
          form.appendChild(returnInput)
        }

        form.submit()

      } catch (err) {
        console.error('Payment initiation error:', err)
        this.setError('Payment initiation failed. Please try again.')
        this.loading = false
      }
    },

    // ─── Verify subscription for already-logged-in users ─────────────

    async verifySubscriptionAndAccess() {
      if (this.accessToken) {
        if (isTokenExpired(this.accessToken)) {
          this.logout()
        } else {
          this.loading = true
          try {
            const res = await fetch(
              `${JAVA_API}/api/v1/subscription/user-subscription-postlogin?userSurId=${this.userData.userSurId}`,
              {
                headers: {
                  'Authorization': `Bearer ${this.accessToken}`,
                  'Content-Type': 'application/json'
                }
              }
            )
            const data = await res.json()
            const subFlag = data.data
            const alreadySubscribed =
              subFlag === true ||
              (subFlag && subFlag.subscribedFlag === true)

            if (alreadySubscribed) {
              this.subscriptionStatus = 'active'
              this.showToast('Subscription Verified!')
              this.openModal('already_subscribed')
            } else {
              this.openModal('already_subscribed')
              this.setError('No active subscription found. Please complete payment.')
            }
          } catch (e) {
            this.setError('Verification failed. Please try again.')
          } finally {
            this.loading = false
          }
          return
        }
      }

      this.isStatusChecking = true
      this.openModal('mobile')
    },

    // ─── STEP 1: Send OTP ─────────────────────────────────────────────

    async sendOtp() {
      if (this.loading) return

      if (!this.userName || this.userName.trim().length < 2) {
        this.setError('Please enter your name')
        return
      }

      if (/[0-9]/.test(this.userName)) {
        this.setError('Name cannot contain numbers')
        return
      }

      if (this.mobileNumber.length !== 10) {
        this.setError('Please enter a valid 10-digit mobile number')
        return
      }

      this.loading = true
      this.error = null

      try {
        // Check if this mobile number already exists in the system
        const checkResult = await checkMobileExists(this.mobileNumber)
        this.isExistingUser = checkResult.data === true

        if (this.isExistingUser) {
          // Existing registered user — use login OTP endpoint
          const res = await sendOtpExistingUser(this.mobileNumber)
          if (res && (res.status === false || res.statusCode === 500)) {
            throw new Error(res.message || 'Failed to send OTP')
          }
        } else {
          // New user — send OTP directly (name already validated above)
          const res = await sendOtpNewUser(this.mobileNumber, this.userName)
          if (res && (res.data === false || res.statusCode === 500)) {
            throw new Error(res.message || 'Failed to send OTP')
          }
        }

        this.openModal('otp')
        this.showToast('OTP sent to your mobile')

      } catch (err) {
        console.error('Send OTP error:', err)
        let errMsg = err.message || 'Failed to send OTP. Please try again.'
        try {
          const parsed = JSON.parse(errMsg)
          if (parsed && parsed.message) {
            errMsg = parsed.message
          }
        } catch (e) {
          // Keep original string if not JSON
        }
        this.setError(errMsg)
      } finally {
        this.loading = false
      }
    },

    // ─── STEP 2: Verify OTP and proceed to checkout ───────────────────

    async verifyOtpAndCheckout(skipCheckout = false) {
      if (this.loading) return

      if (!this.termsAccepted) {
        this.setError('Please agree to the Terms & Conditions to proceed')
        return
      }

      const fullOtp = this.otp.join('')
      if (fullOtp.length !== 6) {
        this.setError('Enter a valid 6-digit OTP')
        return
      }

      this.loading = true
      this.error = null

      try {
        let userData = null

        if (this.isExistingUser) {
          // Existing user — verify OTP and get token directly
          const result = await verifyOtpExistingUser(
            this.mobileNumber,
            fullOtp
          )

          // Backend returns status:true or statusCode:200 on success
          if (!result.status && result.statusCode !== 200) {
            this.setError(result.message || 'Invalid OTP. Please try again.')
            this.loading = false
            return
          }

          userData = result.data

        } else {
          // New user — first verify OTP
          const verifyResult = await verifyOtpNewUser(
            this.mobileNumber,
            fullOtp
          )

          if (!verifyResult.data) {
            this.setError('Invalid OTP. Please try again.')
            this.loading = false
            return
          }

          // Then register the user
          const registerResult = await registerNewUser(
            this.mobileNumber,
            this.userName,
            fullOtp
          )

          if (registerResult.statusCode !== 200) {
            this.setError(registerResult.message || 'Registration failed.')
            this.loading = false
            return
          }

          userData = registerResult.data
        }
        // --- END OTP VERIFICATION ---

        // Save everything to localStorage
        saveUserToLocalStorage(userData)

        // Update store state
        this.accessToken = userData.accessToken
        this.userData = userData

        const subFlag = userData.subscriptionFlag
        const alreadySubscribed =
          subFlag === true ||
          (subFlag && subFlag.subscribedFlag === true)

        this.error = null

        // ── Handle status checking flow (verify subscription) ──
        if (this.isStatusChecking) {
          if (alreadySubscribed) {
            this.subscriptionStatus = 'active'
            this.showToast('Subscription Verified!')
            this.openModal('already_subscribed')
          } else {
            this.openModal('already_subscribed')
            this.setError('No active subscription found. Please complete payment.')
          }
          this.loading = false
          return
        }

        // ── Already subscribed — skip payment ──
        if (alreadySubscribed) {
          this.subscriptionStatus = 'active'
          this.openModal('already_subscribed')
          this.loading = false
          return
        }

        // ── Skip checkout if requested (e.g., initial page load verify or hero flow) ──
        if (skipCheckout || this.isHeroFlow) {
          this.closeModal()
          this.showToast('Successfully verified!')
          this.loading = false
          return
        }



        await this.initiateCheckoutPayment(userData.accessToken)

      } catch (err) {
        console.error('Verify OTP error:', err)
        let errMsg = err.message || 'Something went wrong. Please try again.'
        try {
          const parsed = JSON.parse(errMsg)
          if (parsed && parsed.message) {
            errMsg = parsed.message
          }
        } catch (e) {
          // Keep original string if not JSON
        }
        this.setError(errMsg)
      } finally {
        this.loading = false
      }
    }
  }
})
