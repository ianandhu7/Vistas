import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FeaturesRow from '../FeaturesRow.vue'

describe('FeaturesRow.vue', () => {
  it('renders the grid of feature cards', () => {
    const wrapper = mount(FeaturesRow)
    expect(wrapper.find('.grid').exists()).toBe(true)
  })

  it('renders all 9 feature items', () => {
    const wrapper = mount(FeaturesRow)
    const items = wrapper.findAll('.rounded-\\[14px\\]')
    expect(items.length).toBe(9)
  })

  it('shows expected feature titles', () => {
    const wrapper = mount(FeaturesRow)
    const text = wrapper.text()
    expect(text).toContain('Academics')
    expect(text).toContain('Animated Videos')
    expect(text).toContain('Recorded Classes')
    expect(text).toContain('Study Materials')
    expect(text).toContain('Spoken English')
    expect(text).toContain('Coding')
    expect(text).toContain('Communication')
    expect(text).toContain('Creative Learning')
  })
})
