import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import AppFooter from '../AppFooter.vue'
import packageJson from '../../../../package.json'

describe('AppFooter.vue', () => {
  it('renders terms and conditions link', () => {
    const wrapper = mount(AppFooter)
    const termsLink = wrapper.find('a[href="https://vistaslearning.com/terms"]')
    expect(termsLink.exists()).toBe(true)
    expect(termsLink.text()).toBe('Terms & Conditions')
  })

  it('renders correct app version from package.json', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.text()).toContain(`Version: ${packageJson.version}`)
  })

  it('renders current year in copyright', () => {
    const wrapper = mount(AppFooter)
    const currentYear = new Date().getFullYear()
    expect(wrapper.text()).toContain(`© ${currentYear}, Vista's Learning. All rights reserved.`)
  })
})
