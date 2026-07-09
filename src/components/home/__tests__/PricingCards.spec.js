import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import PricingCards from '../PricingCards.vue'

describe('PricingCards.vue', () => {
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders correctly', () => {
    const wrapper = mount(PricingCards, { global: { plugins: [pinia] } })
    // We expect PricingCards to contain multiple cards
    expect(wrapper.findAll('.pricing-card-item').length).toBeGreaterThan(0)
  })

  it.skip('navigates through mobile carousel', async () => {
    const wrapper = mount(PricingCards, { global: { plugins: [pinia] } })
    
    // Test the nextSlide and prevSlide logic
    // Initially activeIndex is 2 (14 months)
    expect(wrapper.vm.activeIndex).toBe(2)
    
    // Find next button
    const buttons = wrapper.findAll('.nav-arrow-mobile')
    const prevBtn = buttons[0]
    const nextBtn = buttons[1]
    
    await nextBtn.trigger('click')
    // length is 3 (index 0, 1, 2). Next from 2 should go to 0.
    expect(wrapper.vm.activeIndex).toBe(0)
    
    await prevBtn.trigger('click')
    // Prev from 0 should go to 2
    expect(wrapper.vm.activeIndex).toBe(2)
    
    await prevBtn.trigger('click')
    // Prev from 2 should go to 1
    expect(wrapper.vm.activeIndex).toBe(1)
  })
})
