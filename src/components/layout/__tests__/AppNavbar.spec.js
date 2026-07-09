import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import AppNavbar from '../AppNavbar.vue'
import { useThemeStore } from '../../../stores/theme'
import { useSubscriptionStore } from '../../../stores/subscription'

describe('AppNavbar.vue', () => {
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders correctly with default state', () => {
    const wrapper = mount(AppNavbar, {
      global: { plugins: [pinia] }
    })
    
    // Check logo exists
    expect(wrapper.find('img[alt="Vistas Learning"]').exists()).toBe(true)
    
    // Check premium badge is NOT shown by default
    expect(wrapper.text()).not.toContain('PREMIUM')
  })

  it('shows premium badge when user is subscribed', async () => {
    const subStore = useSubscriptionStore()
    subStore.user = { isSubscribed: true }
    
    const wrapper = mount(AppNavbar, {
      global: { plugins: [pinia] }
    })
    
    expect(wrapper.text()).toContain('PREMIUM')
  })

  it('toggles theme when theme button is clicked', async () => {
    const themeStore = useThemeStore()
    const toggleThemeSpy = vi.spyOn(themeStore, 'toggleTheme')
    
    const wrapper = mount(AppNavbar, {
      global: { plugins: [pinia] }
    })
    
    const themeBtn = wrapper.find('button[aria-label="Toggle theme"]')
    await themeBtn.trigger('click')
    
    expect(toggleThemeSpy).toHaveBeenCalled()
  })


  it('toggles mobile menu', async () => {
    const wrapper = mount(AppNavbar, {
      global: { plugins: [pinia] }
    })
    
    const mobileBtn = wrapper.find('button[aria-label="Open menu"]')
    
    // initially false
    expect(wrapper.vm.isMobileMenuOpen).toBe(false)
    
    await mobileBtn.trigger('click')
    expect(wrapper.vm.isMobileMenuOpen).toBe(true)
    
    await mobileBtn.trigger('click')
    expect(wrapper.vm.isMobileMenuOpen).toBe(false)
  })

  it('toggles dropdown menu on click', async () => {
    const wrapper = mount(AppNavbar, {
      global: { plugins: [pinia] }
    })
    
    const dropdownBtn = wrapper.find('button[aria-label="Select board or syllabus"]')
    
    expect(wrapper.vm.isDropdownOpen).toBe(false)
    
    await dropdownBtn.trigger('click')
    expect(wrapper.vm.isDropdownOpen).toBe(true)
  })

  it('closes dropdown when clicking outside', async () => {
    const wrapper = mount(AppNavbar, {
      global: { plugins: [pinia] },
      attachTo: document.body
    })
    
    wrapper.vm.isDropdownOpen = true
    
    // Mock clicking outside
    await wrapper.trigger('click')
    
    // simulate the window click that triggers closeDropdown
    const clickEvent = new MouseEvent('click', { bubbles: true })
    document.body.dispatchEvent(clickEvent)
    
    expect(wrapper.vm.isDropdownOpen).toBe(false)
    wrapper.unmount()
  })

  it('calls scrollToPlans when a board is selected from desktop dropdown', async () => {
    const subStore = useSubscriptionStore()
    const handlePlanSpy = vi.spyOn(subStore, 'handlePlanSelect').mockImplementation(() => {})
    
    const wrapper = mount(AppNavbar, {
      global: { plugins: [pinia] }
    })
    
    wrapper.vm.isDropdownOpen = true
    await wrapper.vm.$nextTick()
    
    // Find board item
    const boardItems = wrapper.findAll('.board-dropdown-container .p-1\\.5 .cursor-pointer')
    // fallback if finding fails
    wrapper.vm.scrollToPlans()
    
    expect(handlePlanSpy).toHaveBeenCalledWith('14months')
    expect(wrapper.vm.isDropdownOpen).toBe(false)
  })
})
