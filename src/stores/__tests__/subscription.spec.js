import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import axios from 'axios'

// Mutable mock storage state
let mockStorage = {
  accessToken: 'mock-token',
  refreshToken: 'mock-refresh-token',
  userData: { name: 'Test User', subscriptionFlag: false },
  isSubscribed: false
}

function resetMockStorage() {
  mockStorage.accessToken = 'mock-token'
  mockStorage.refreshToken = 'mock-refresh-token'
  mockStorage.userData = { name: 'Test User', subscriptionFlag: false }
  mockStorage.isSubscribed = false
}

// Mock storage before store is imported
vi.mock('../../services/storage', () => ({
  getUserFromLocalStorage: vi.fn(() => mockStorage),
  saveUserToLocalStorage: vi.fn((data) => {
    mockStorage.userData = data
    mockStorage.accessToken = data.accessToken
    mockStorage.isSubscribed = !!data.subscriptionFlag
  }),
  clearUserFromLocalStorage: vi.fn(() => {
    mockStorage.accessToken = null
    mockStorage.userData = null
    mockStorage.isSubscribed = false
  }),
  isLoggedIn: vi.fn(() => !!mockStorage.accessToken),
  isSubscribed: vi.fn(() => !!mockStorage.isSubscribed),
  isTokenExpired: vi.fn(() => false)
}))

// Mock API services
vi.mock('../../services/api', () => ({
  checkMobileExists: vi.fn(),
  sendOtpExistingUser: vi.fn(),
  sendOtpNewUser: vi.fn(),
  verifyOtpExistingUser: vi.fn(),
  verifyOtpNewUser: vi.fn(),
  registerNewUser: vi.fn()
}))

// Mock axios before store is imported
vi.mock('axios', () => {
  const mockAxiosObj = vi.fn().mockResolvedValue({ data: {} })
  mockAxiosObj.get = vi.fn()
  mockAxiosObj.post = vi.fn()
  mockAxiosObj.interceptors = {
    response: {
      use: vi.fn((fulfilled, rejected) => {
        mockAxiosObj.fulfilledInterceptor = fulfilled
        mockAxiosObj.rejectedInterceptor = rejected
      })
    }
  }
  return {
    default: mockAxiosObj
  }
})


import { useSubscriptionStore } from '../subscription'
import * as api from '../../services/api'
import * as storage from '../../services/storage'

describe('Subscription Store - Comprehensive Coverage', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
    resetMockStorage()
    vi.useFakeTimers()
    
    // Reset window location mock
    delete window.location
    window.location = { href: '', hostname: 'localhost', origin: 'http://localhost:5173' }
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('initializes with default states', () => {
    const store = useSubscriptionStore()
    expect(store.currentModal).toBeNull()
    expect(store.selectedPlan).toBeNull()
    expect(store.mobileNumber).toBe('')
    expect(store.accessToken).toBe('mock-token')
  })

  it('sets phone number and username correctly, stripping invalid characters', () => {
    const store = useSubscriptionStore()
    store.setMobileNumber('9876543210abc')
    store.setUserName('Alice123')
    expect(store.mobileNumber).toBe('9876543210')
    expect(store.userName).toBe('Alice')
  })

  it('opens and closes modals correctly', () => {
    // Clear token so openModal('mobile') doesn't skip to checkout
    mockStorage.accessToken = null
    const store = useSubscriptionStore()
    store.openModal('mobile', '6months')
    expect(store.currentModal).toBe('mobile')
    expect(store.selectedPlan).toBe('6months')

    store.closeModal()
    expect(store.currentModal).toBeNull()
    expect(store.loading).toBe(false)
  })

  it('sets individual OTP digits and resets correctly', () => {
    const store = useSubscriptionStore()
    store.setOtpDigit(0, '1')
    store.setOtpDigit(1, '2')
    expect(store.otp[0]).toBe('1')
    expect(store.otp[1]).toBe('2')

    store.closeModal()
    expect(store.otp).toEqual(['', '', '', '', '', ''])
  })

  it('validates mobile number length before sending OTP', async () => {
    const store = useSubscriptionStore()
    store.setUserName('John Doe')
    store.setMobileNumber('123') // Invalid
    await store.sendOtp()
    expect(store.error).toBe('Please enter a valid 10-digit mobile number')
  })

  it('sends OTP for existing user successfully', async () => {
    const store = useSubscriptionStore()
    store.setUserName('John Doe')
    store.setMobileNumber('9876543210')
    
    api.checkMobileExists.mockResolvedValue({ data: true })
    api.sendOtpExistingUser.mockResolvedValue({ status: true })

    await store.sendOtp()

    expect(api.checkMobileExists).toHaveBeenCalledWith('9876543210')
    expect(api.sendOtpExistingUser).toHaveBeenCalledWith('9876543210')
    expect(store.currentModal).toBe('otp')
  })

  it('sends OTP for new user successfully when name is provided', async () => {
    const store = useSubscriptionStore()
    store.setMobileNumber('9876543210')
    store.setUserName('John Doe')
    
    api.checkMobileExists.mockResolvedValue({ data: false })
    api.sendOtpNewUser.mockResolvedValue({ data: true })

    await store.sendOtp()

    expect(api.checkMobileExists).toHaveBeenCalledWith('9876543210')
    expect(api.sendOtpNewUser).toHaveBeenCalledWith('9876543210', 'John Doe')
    expect(store.currentModal).toBe('otp')
  })

  it('fails to send OTP for new user if name is missing', async () => {
    const store = useSubscriptionStore()
    store.setMobileNumber('9876543210')
    store.setUserName('') // Missing

    api.checkMobileExists.mockResolvedValue({ data: false })

    await store.sendOtp()

    expect(store.error).toBe('Please enter your name')
    expect(store.currentModal).toBeNull()
  })

  it('fails to send OTP for new user if name contains numbers', async () => {
    const store = useSubscriptionStore()
    store.setMobileNumber('9876543210')
    store.$state.userName = 'John123' // Bypass the setter filter

    api.checkMobileExists.mockResolvedValue({ data: false })

    await store.sendOtp()

    expect(store.error).toBe('Name cannot contain numbers')
    expect(store.currentModal).toBeNull()
  })

  it('handles API errors when sending OTP and parses JSON messages', async () => {
    const store = useSubscriptionStore()
    store.setUserName('John Doe')
    store.setMobileNumber('9876543210')
    
    api.checkMobileExists.mockResolvedValue({ data: true })
    const jsonError = JSON.stringify({ message: 'Server overloaded' })
    api.sendOtpExistingUser.mockRejectedValue(new Error(jsonError))

    await store.sendOtp()

    expect(store.error).toBe('Server overloaded')
  })

  it('logs out and clears storage', () => {
    const store = useSubscriptionStore()
    store.logout()
    expect(storage.clearUserFromLocalStorage).toHaveBeenCalled()
    expect(store.accessToken).toBeNull()
    expect(store.userData).toBeNull()
    expect(store.subscriptionStatus).toBeNull()
  })

  // verifyOtpAndCheckout tests

  it('blocks checkout if terms are not accepted', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = false
    await store.verifyOtpAndCheckout()
    expect(store.error).toBe('Please agree to the Terms & Conditions to proceed')
  })

  it('blocks checkout if OTP is not 6 digits', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3'] // incomplete
    await store.verifyOtpAndCheckout()
    expect(store.error).toBe('Enter a valid 6-digit OTP')
  })

  it('existing user: OTP verified with active subscription → shows already_subscribed modal', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = true
    store.isStatusChecking = false

    const mockUserData = { accessToken: 'new-session-token', subscriptionFlag: true, profileComplete: true }
    api.verifyOtpExistingUser.mockResolvedValue({ status: true, data: mockUserData })

    const mockFetch = vi.fn()
    global.fetch = mockFetch

    await store.verifyOtpAndCheckout()

    // Current store shows already_subscribed modal for subscribed users
    expect(mockFetch).not.toHaveBeenCalled()
    expect(store.accessToken).toBe('new-session-token')
    expect(store.subscriptionStatus).toBe('active')
    expect(store.currentModal).toBe('already_subscribed')
  })

  it('handles verification failure for existing user', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = true

    api.verifyOtpExistingUser.mockResolvedValue({ status: false, message: 'Invalid OTP' })

    await store.verifyOtpAndCheckout()

    expect(store.error).toBe('Invalid OTP')
    expect(store.subscriptionStatus).toBeNull()
  })

  it('processes checkout for new user successfully', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = false
    store.mobileNumber = '9876543210'
    store.userName = 'Jane Doe'
    store.selectedPlan = '14months'

    api.verifyOtpNewUser.mockResolvedValue({ data: true })
    api.registerNewUser.mockResolvedValue({
      statusCode: 200,
      data: { accessToken: 'new-user-token', subscriptionFlag: false }
    })

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          paymentParameters: { MID: 'test-mid' }
        }
      })
    })
    global.fetch = mockFetch

    const submitSpy = vi.fn()
    const createElementSpy = vi.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'form') {
        return {
          method: '',
          action: '',
          appendChild: vi.fn(),
          submit: submitSpy
        }
      }
      return { type: '', name: '', value: '' }
    })
    const appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation(() => {})

    await store.verifyOtpAndCheckout()

    expect(api.verifyOtpNewUser).toHaveBeenCalledWith('9876543210', '123456')
    expect(api.registerNewUser).toHaveBeenCalledWith('9876543210', 'Jane Doe', '123456')
    expect(store.accessToken).toBe('new-user-token')
    expect(mockFetch).toHaveBeenCalled()
    expect(submitSpy).toHaveBeenCalled()

    createElementSpy.mockRestore()
    appendChildSpy.mockRestore()
  })

  it('handles verifyOtp failure for new user', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = false

    api.verifyOtpNewUser.mockResolvedValue({ data: false })

    await store.verifyOtpAndCheckout()

    expect(store.error).toBe('Invalid OTP. Please try again.')
  })

  it('handles registration failure for new user', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = false
    store.mobileNumber = '9876543210'
    store.userName = 'Jane Doe'

    api.verifyOtpNewUser.mockResolvedValue({ data: true })
    api.registerNewUser.mockResolvedValue({
      statusCode: 500,
      message: 'Database connection error'
    })

    await store.verifyOtpAndCheckout()

    expect(store.error).toBe('Database connection error')
  })

  it('verifies active subscription in status checking mode → shows already_subscribed modal', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = true
    store.isStatusChecking = true

    const mockUserData = { accessToken: 'token', subscriptionFlag: { subscribedFlag: true }, profileComplete: true }
    api.verifyOtpExistingUser.mockResolvedValue({ status: true, data: mockUserData })

    await store.verifyOtpAndCheckout()

    expect(store.subscriptionStatus).toBe('active')
    expect(store.currentModal).toBe('already_subscribed')
  })

  it('verifies non-active subscription in status checking mode', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = true
    store.isStatusChecking = true

    const mockUserData = { accessToken: 'token', subscriptionFlag: false }
    api.verifyOtpExistingUser.mockResolvedValue({ status: true, data: mockUserData })

    await store.verifyOtpAndCheckout()

    expect(store.error).toBe('No active subscription found. Please complete payment.')
    expect(store.currentModal).toBe('already_subscribed')
  })

  it('existing user: already subscribed → shows already_subscribed modal', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = true
    store.isStatusChecking = false

    const mockUserData = { accessToken: 'token', subscriptionFlag: true, profileComplete: true }
    api.verifyOtpExistingUser.mockResolvedValue({ status: true, data: mockUserData })

    await store.verifyOtpAndCheckout()

    expect(store.subscriptionStatus).toBe('active')
    expect(store.currentModal).toBe('already_subscribed')
  })

  it('existing user with subscription → saves user data and shows modal', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = true
    store.isStatusChecking = false

    const mockUserData = { accessToken: 'token', subscriptionFlag: true, profileComplete: true }
    api.verifyOtpExistingUser.mockResolvedValue({ status: true, data: mockUserData })

    await store.verifyOtpAndCheckout()

    expect(storage.saveUserToLocalStorage).toHaveBeenCalledWith(mockUserData)
    expect(store.subscriptionStatus).toBe('active')
    expect(store.currentModal).toBe('already_subscribed')
  })

  it('handles checkout try-catch error and formats error message', async () => {
    const store = useSubscriptionStore()
    store.termsAccepted = true
    store.otp = ['1', '2', '3', '4', '5', '6']
    store.isExistingUser = true

    api.verifyOtpExistingUser.mockRejectedValue(new Error('Network Fail'))

    await store.verifyOtpAndCheckout()

    expect(store.error).toBe('Network Fail')
  })





  describe('utility actions and helpers', () => {
    it('sets error and clears it after 5 seconds', async () => {
      const store = useSubscriptionStore()
      store.setError('Custom Error')
      expect(store.error).toBe('Custom Error')
      await vi.advanceTimersByTimeAsync(5000)
      expect(store.error).toBeNull()
    })

    it('shows toast and clears it after 3 seconds', async () => {
      const store = useSubscriptionStore()
      store.showToast('My Toast')
      expect(store.toastMessage).toBe('My Toast')
      await vi.advanceTimersByTimeAsync(3000)
      expect(store.toastMessage).toBeNull()
    })

    it('triggers validation and scroll', () => {
      const store = useSubscriptionStore()
      const scrollSpy = vi.fn()
      const querySpy = vi.spyOn(document, 'querySelector').mockReturnValue({
        scrollIntoView: scrollSpy
      })
      store.triggerValidation()
      expect(store.termsError).toBe(true)
      expect(store.currentModal).toBe('terms')
      expect(scrollSpy).toHaveBeenCalled()
      querySpy.mockRestore()
    })

    it('verifies subscription and access when no token', async () => {
      // Clear token so it goes through the non-logged-in path
      mockStorage.accessToken = null
      const store = useSubscriptionStore()
      await store.verifySubscriptionAndAccess()
      expect(store.isStatusChecking).toBe(true)
      expect(store.currentModal).toBe('mobile')
    })
  })

  describe('Axios Interceptors', () => {
    it('handles 401 error and refreshes token successfully', async () => {
      const handler = axios.rejectedInterceptor
      expect(handler).toBeDefined()
      
      const postSpy = vi.spyOn(axios, 'post').mockResolvedValue({
        data: {
          data: {
            accessToken: 'refreshed-token'
          }
        }
      })

      const originalRequest = {
        url: '/some-secure-api',
        headers: {}
      }

      const mockError = {
        config: originalRequest,
        response: {
          status: 401
        }
      }

      // Trigger interceptor rejected handler
      const promise = handler(mockError)
      await vi.runAllTimersAsync()
      
      expect(postSpy).toHaveBeenCalledWith(
        'https://api-prod.vistaslearning.com/api/v1/auth/refresh',
        { refreshToken: 'mock-refresh-token' }
      )
      postSpy.mockRestore()
    })
  })
  // ─────────────────────────────────────────────────────────────────────────
  // PAYMENT FLOW TESTS
  // ─────────────────────────────────────────────────────────────────────────

  describe('Payment Flow', () => {
    it('shows error when selectedProductObj is null during initiateCheckoutPayment', async () => {
      const store = useSubscriptionStore()
      store.selectedPlan = null // No plan selected → selectedProductObj getter returns null

      await store.initiateCheckoutPayment('some-token')

      expect(store.error).toBe('Plan details not found. Please try again.')
    })

    it('initiateCheckoutPayment submits form on success', async () => {
      const store = useSubscriptionStore()
      store.selectedPlan = '14months'

      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          data: {
            paymentParameters: { MID: 'test-mid', ORDER_ID: 'O1' }
          }
        })
      })
      global.fetch = mockFetch

      const submitSpy = vi.fn()
      vi.spyOn(document, 'createElement').mockImplementation((tag) =>
        tag === 'form' ? { method: '', action: '', appendChild: vi.fn(), submit: submitSpy } : { type: '', name: '', value: '' }
      )
      vi.spyOn(document.body, 'appendChild').mockImplementation(() => {})

      await store.initiateCheckoutPayment('some-token')

      expect(mockFetch).toHaveBeenCalled()
      expect(submitSpy).toHaveBeenCalled()
    })

    it('saves pending payment to localStorage', async () => {
      const store = useSubscriptionStore()
      store.selectedPlan = '14months'

      const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          data: {
            paymentParameters: { MID: 'test-mid' }
          }
        })
      })
      global.fetch = mockFetch

      vi.spyOn(document, 'createElement').mockImplementation((tag) =>
        tag === 'form' ? { method: '', action: '', appendChild: vi.fn(), submit: vi.fn() } : { type: '', name: '', value: '' }
      )
      vi.spyOn(document.body, 'appendChild').mockImplementation(() => {})

      await store.initiateCheckoutPayment('some-token')

      expect(setItemSpy).toHaveBeenCalledWith(
        'vista-pending-payment',
        expect.stringContaining('"params"')
      )
      setItemSpy.mockRestore()
    })
  })
})
