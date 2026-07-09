<script setup>
import { ref, onUnmounted, computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useSubscriptionStore } from '../../stores/subscription'

const authStore = useAuthStore()
const subscriptionStore = useSubscriptionStore()

const step = ref(1) // 1: Info, 2: OTP
const fullName = ref('')
const mobileNumber = ref('')
const otp = ref(['', '', '', '', '', ''])
const errorMsg = ref('')
const otpInputs = ref([])

const resendTimer = ref(45)
let timerInterval = null

const startResendTimer = () => {
  resendTimer.value = 45
  if (timerInterval) clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    if (resendTimer.value > 0) {
      resendTimer.value--
    } else {
      clearInterval(timerInterval)
    }
  }, 1000)
}

const formattedTimer = computed(() => {
  const m = Math.floor(resendTimer.value / 60)
  const s = resendTimer.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})

const handleSendOTP = async () => {
  errorMsg.value = ''
  if (!fullName.value || fullName.value.trim().length < 3) {
    errorMsg.value = 'Please enter a valid full name.'
    return
  }
  if (!mobileNumber.value || !/^\d{10}$/.test(mobileNumber.value)) {
    errorMsg.value = 'Please enter a valid 10-digit mobile number.'
    return
  }

  try {
    subscriptionStore.setMobileNumber(mobileNumber.value)
    subscriptionStore.setUserName(fullName.value)
    await subscriptionStore.sendOtp()
    subscriptionStore.currentModal = null // prevent the other modal from showing
    
    // Move to OTP step
    step.value = 2
    startResendTimer()
    // Auto focus first OTP input after small delay
    setTimeout(() => {
      if (otpInputs.value[0]) otpInputs.value[0].focus()
    }, 100)
  } catch (err) {
    errorMsg.value = subscriptionStore.error || 'Failed to send OTP.'
  }
}

const handleOtpInput = (e, index) => {
  const numeric = e.target.value.replace(/\D/g, '')
  if (e.target.value !== numeric) {
    e.target.value = numeric
  }
  otp.value[index] = numeric
  if (numeric && index < 5) {
    otpInputs.value[index + 1]?.focus()
  }
}

const handleOtpKeyDown = (e, index) => {
  if (e.key === 'Backspace' && !otp.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
}

const handleVerify = async () => {
  const otpCode = otp.value.join('')
  if (otpCode.length < 6) {
    errorMsg.value = 'Please enter the complete 6-digit OTP.'
    return
  }

  try {
    subscriptionStore.otp = otp.value
    subscriptionStore.termsAccepted = true // implicitly accept terms for auto-checkout
    subscriptionStore.selectedPlan = '14months' // set default plan
    
    await subscriptionStore.verifyOtpAndCheckout(true)
    
    if (subscriptionStore.error) {
      errorMsg.value = subscriptionStore.error
      return
    }

    // Verify and close locally if successful
    authStore.verifyUser({
      fullName: fullName.value,
      mobileNumber: mobileNumber.value
    })
  } catch (err) {
    errorMsg.value = 'Verification failed. Please try again.'
  }
}

</script>

<template>
  <Transition name="fade">
    <div 
      v-if="authStore.isVerifyModalOpen" 
      class="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div 
        class="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transition-all duration-300"
        @click.stop
      >
        <!-- Header -->
        <div class="relative p-6 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent border-b border-[var(--border-light)] flex justify-between items-center">
          <div>
            <h2 class="text-xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {{ step === 1 ? 'Verify Details' : 'Enter OTP' }}
            </h2>
            <p class="text-xs text-[var(--text-secondary)] mt-1">
              {{ step === 1 ? 'Please provide your details to continue' : `OTP sent to ${mobileNumber}` }}
            </p>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6 flex flex-col gap-5">
          <Transition name="slide" mode="out-in">
            <!-- Step 1 -->
            <div v-if="step === 1" class="flex flex-col gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-[11px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Full Name</label>
               <input 
                  v-model="fullName"
                  type="text" 
                  placeholder="Enter your full name"
                  class="w-full bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl px-4 py-3 text-[14px] text-[var(--text-primary)] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder:text-[var(--text-secondary)]/50"
                  @keyup.enter="handleSendOTP"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="text-[11px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Mobile Number</label>
                <div class="relative flex">
                  <div class="flex items-center justify-center bg-[var(--bg-secondary)] border border-r-0 border-[var(--border-light)] rounded-l-xl px-3 text-[14px] font-bold text-[var(--text-primary)]">
                    +91
                  </div>
                  <input 
                    v-model="mobileNumber"
                    type="tel" 
                    inputmode="numeric"
                    pattern="[0-9]*"
                    maxlength="10"
                    placeholder="Enter your mobile number"
                    class="w-full bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-r-xl px-4 py-3 text-[14px] text-[var(--text-primary)] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder:text-[var(--text-secondary)]/50"
                    @keyup.enter="handleSendOTP"
                  />
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div v-else-if="step === 2" class="flex flex-col gap-6">
              <div class="flex justify-between gap-2">
                <input
                  v-for="(digit, index) in 6"
                  :key="index"
                  ref="otpInputs"
                  v-model="otp[index]"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="1"
                  class="w-12 h-14 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl text-center text-xl font-bold text-[var(--text-primary)] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all shadow-inner"
                  @input="(e) => handleOtpInput(e, index)"
                  @keydown="(e) => handleOtpKeyDown(e, index)"
                  @keyup.enter="handleVerify"
                />
              </div>
              <div class="flex justify-between items-center px-1">
                <span class="text-xs font-medium text-[var(--text-secondary)]">
                  Didn't receive code? 
                  <button 
                    class="font-bold ml-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                    :class="resendTimer > 0 ? 'text-[var(--text-secondary)]' : 'text-[#8B5CF6] hover:underline'"
                    @click="handleSendOTP"
                    :disabled="resendTimer > 0"
                  >
                    Resend OTP
                  </button>
                  <span v-if="resendTimer > 0" class="ml-1 text-[var(--text-secondary)] font-bold">
                    {{ formattedTimer }}
                  </span>
                </span>
                <button class="text-xs font-bold text-[var(--text-secondary)] hover:text-[#8B5CF6] hover:underline transition-colors" @click="step = 1">
                  Change Number
                </button>
              </div>
            </div>
          </Transition>

          <!-- Error Message -->
          <div v-if="errorMsg" class="text-xs text-red-500 font-medium px-1 flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">error</span>
            {{ errorMsg }}
          </div>

          <!-- Action Button -->
          <button 
            v-if="step === 1"
            @click="handleSendOTP"
            class="w-full bg-[#8B5CF6] text-white py-3.5 rounded-xl text-[13px] font-black uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.98] transition-all mt-2"
          >
            Send OTP
          </button>
          <button 
            v-else
            @click="handleVerify"
            class="w-full bg-[#8B5CF6] text-white py-3.5 rounded-xl text-[13px] font-black uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.98] transition-all mt-2"
          >
            Verify & Continue
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
