import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import FeaturesColumn from '../FeaturesColumn.vue'

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
})
window.IntersectionObserver = mockIntersectionObserver

describe('FeaturesColumn.vue', () => {
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders correctly with feature section', () => {
    const wrapper = mount(FeaturesColumn, { global: { plugins: [pinia] } })
    // Based on actual output: "Everything Your Child Gets"
    expect(wrapper.text()).toContain('Everything Your Child Gets')
  })

  it('renders academic features', () => {
    const wrapper = mount(FeaturesColumn, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('ACADEMICS')
  })

  it('renders future skills features', () => {
    const wrapper = mount(FeaturesColumn, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('CODING')
    expect(wrapper.text()).toContain('SPOKEN ENGLISH')
  })

  it('renders animated video feature', () => {
    const wrapper = mount(FeaturesColumn, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('ANIMATED VIDEOS')
  })
})
