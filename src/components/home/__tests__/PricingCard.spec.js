import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import PricingCard from '../PricingCard.vue'
import { useSubscriptionStore } from '../../../stores/subscription'

describe('PricingCard.vue', () => {
  let pinia
  let store
  
  const mockPlan = {
    id: '6months',
    durationName: '6 Months',
    price: '₹2,999',
    features: [
      { text: 'Feature 1', included: true },
      { text: 'Feature 2', included: false }
    ]
  }

  const mockBestValuePlan = {
    id: '14months',
    durationName: '14 Months',
    price: '₹1,999',
    features: [
      { text: 'Feature 1', included: true }
    ]
  }

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    store = useSubscriptionStore()
  })

  it('renders standard plan correctly', () => {
    const wrapper = mount(PricingCard, {
      props: { plan: mockPlan },
      global: { plugins: [pinia] }
    })

    expect(wrapper.text()).toContain('6 Months Plan')
    expect(wrapper.text()).toContain('₹2,999')
    expect(wrapper.text().toUpperCase()).not.toContain('BEST VALUE')
  })

  it('renders best value plan correctly', () => {
    const wrapper = mount(PricingCard, {
      props: { plan: mockBestValuePlan },
      global: { plugins: [pinia] }
    })

    expect(wrapper.text()).toContain('14 Months Plan')
    expect(wrapper.text()).toContain('₹1,999')
    expect(wrapper.text().toUpperCase()).toContain('BEST VALUE')
  })

  it('calls handlePlanSelect on button click', async () => {
    const handlePlanSelectSpy = vi.spyOn(store, 'handlePlanSelect').mockImplementation(() => {})
    
    const wrapper = mount(PricingCard, {
      props: { plan: mockPlan },
      global: { plugins: [pinia] }
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(handlePlanSelectSpy).toHaveBeenCalledWith('6months')
  })
})
