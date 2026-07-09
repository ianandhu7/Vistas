import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import SubscriptionModals from '../SubscriptionModals.vue'
import { useSubscriptionStore } from '../../../stores/subscription'

describe('SubscriptionModals.vue', () => {
  let pinia
  let store

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    store = useSubscriptionStore()
    
    // Mock window.location
    delete window.location
    window.location = { href: '' }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('does not render if currentModal is null', () => {
    store.currentModal = null
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    expect(wrapper.find('.fixed.inset-0').exists()).toBe(false)
  })

  it('renders comparison modal and handles clicks', async () => {
    store.currentModal = 'comparison'
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    
    expect(wrapper.text()).toContain('Wait! Check This Out')
    
    const buttons = wrapper.findAll('button')
    const switchBtn = buttons.find(b => b.text().includes('Switch to 14 Month Plan'))
    
    await switchBtn.trigger('click')
    expect(store.selectedPlan).toBe('14months')
    expect(store.currentModal).toBe('mobile')
  })

  it('renders mobile modal and handles input', async () => {
    store.currentModal = 'mobile'
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    
    expect(wrapper.text()).toContain('Verify Mobile')
    
    const inputs = wrapper.findAll('input')
    const nameInput = inputs[0]
    const mobileInput = inputs[1]
    
    await nameInput.setValue('John Doe')
    expect(store.userName).toBe('John Doe')
    
    await mobileInput.setValue('9876543210')
    expect(store.mobileNumber).toBe('9876543210')
  })

  it('calls sendOtp when button is clicked in mobile modal', async () => {
    store.currentModal = 'mobile'
    const sendOtpSpy = vi.spyOn(store, 'sendOtp').mockImplementation(() => {})
    
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    const buttons = wrapper.findAll('button')
    const sendBtn = buttons.find(b => b.text().includes('Send OTP'))
    
    await sendBtn.trigger('click')
    expect(sendOtpSpy).toHaveBeenCalled()
  })

  it('renders otp modal and verifies otp', async () => {
    store.currentModal = 'otp'
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    
    expect(wrapper.text()).toContain('Enter OTP')
    
    // Accept terms
    const termsBlock = wrapper.find('.cursor-pointer.border')
    await termsBlock.trigger('click')
    expect(store.termsAccepted).toBe(true)
    
    const verifySpy = vi.spyOn(store, 'verifyOtpAndCheckout').mockImplementation(() => {})
    
    const buttons = wrapper.findAll('button')
    const verifyBtn = buttons.find(b => b.text().includes('VERIFY & PAY'))
    
    await verifyBtn.trigger('click')
    expect(verifySpy).toHaveBeenCalled()
  })

  it('renders already subscribed modal and handles redirect', async () => {
    store.currentModal = 'already_subscribed'
    store.error = null // means success/subscribed check passed
    
    // Set localStorage data so the redirect path is triggered
    localStorage.setItem('vista-auth', JSON.stringify({ accessToken: 'token123' }))
    
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('Already Subscribed!')
    
    const logoutSpy = vi.spyOn(store, 'logout').mockImplementation(() => {})
    
    const buttons = wrapper.findAll('button')
    const dashboardBtn = buttons.find(b => b.text().includes('Go to Dashboard'))
    
    await dashboardBtn.trigger('click')
    expect(logoutSpy).toHaveBeenCalled()
    expect(window.location.href).toContain('student.vistaslearning.com')
    
    localStorage.clear()
  })
  
  it('renders already subscribed modal with error', async () => {
    store.currentModal = 'already_subscribed'
    store.error = 'Some error message'
    
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('Some error message')
    
    const buttons = wrapper.findAll('button')
    const closeBtn = buttons.find(b => b.text().includes('Close'))
    
    await closeBtn.trigger('click')
    expect(store.currentModal).toBeNull()
  })

  it('closes modal when close button is clicked', async () => {
    store.currentModal = 'mobile'
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    
    const closeBtn = wrapper.find('button[aria-label="Close modal"]')
    await closeBtn.trigger('click')
    
    expect(store.currentModal).toBeNull()
  })

  it('resets the resend OTP timer to 30 seconds when OTP is resent', async () => {
    vi.useFakeTimers()
    const sendOtpSpy = vi.spyOn(store, 'sendOtp').mockImplementation(() => Promise.resolve())
    
    const wrapper = mount(SubscriptionModals, { global: { plugins: [pinia] } })
    
    // Set currentModal to 'otp' after mounting to trigger the watch handler and start the timer
    store.currentModal = 'otp'
    await wrapper.vm.$nextTick()
    
    // Check initial state: timer is at 30s
    expect(wrapper.text()).toContain('Resend OTP in 30s')
    
    // Fast forward 30 seconds
    await vi.advanceTimersByTimeAsync(30000)
    await wrapper.vm.$nextTick()
    
    // Now timer is 0, resend button should be visible
    const resendBtn = wrapper.findAll('button').find(b => b.text().includes('Resend OTP Now'))
    expect(resendBtn).toBeDefined()
    
    // Click resend
    await resendBtn.trigger('click')
    expect(sendOtpSpy).toHaveBeenCalled()
    
    // Flush promises/ticks so handleResendOtp completes
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    
    // Timer should have reset to 30s
    expect(wrapper.text()).toContain('Resend OTP in 30s')
    
    vi.useRealTimers()
  })
})
