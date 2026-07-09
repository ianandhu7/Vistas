import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import TrustSection from '../TrustSection.vue'

describe('TrustSection.vue', () => {
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders correctly', () => {
    const wrapper = mount(TrustSection, { global: { plugins: [pinia] } })
    // Use actual text from the template per error output: "WHY THOUSANDS TRUST US?"
    expect(wrapper.text()).toContain('WHY THOUSANDS TRUST US?')
  })

  it('renders feature highlights', () => {
    const wrapper = mount(TrustSection, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('Designed for 9th & 10th Students')
    expect(wrapper.text()).toContain('Karnataka State Board + CBSE Support')
  })

  it('renders CTA button', () => {
    const wrapper = mount(TrustSection, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('START YOUR JOURNEY')
  })
})
