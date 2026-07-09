import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import App from '../App.vue'
import { useThemeStore } from '../stores/theme'

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useRoute: vi.fn(() => ({
      path: '/'
    }))
  }
})

// Stub child components so we don't pull in router / heavy children
const stubs = {
  AppNavbar: { template: '<header data-test="navbar" />' },
  AppFooter: { template: '<footer data-test="footer" />' },
  RouterView: { template: '<div data-test="router-view" />' }
}

describe('App.vue', () => {
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('calls themeStore.initTheme on mount', () => {
    const themeStore = useThemeStore()
    const initSpy = vi.spyOn(themeStore, 'initTheme').mockImplementation(() => {})

    mount(App, {
      global: {
        plugins: [pinia],
        stubs
      }
    })

    expect(initSpy).toHaveBeenCalled()
  })

  it('renders AppNavbar and AppFooter stubs', () => {
    const themeStore = useThemeStore()
    vi.spyOn(themeStore, 'initTheme').mockImplementation(() => {})

    const wrapper = mount(App, {
      global: {
        plugins: [pinia],
        stubs
      }
    })

    expect(wrapper.find('[data-test="navbar"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="footer"]').exists()).toBe(true)
  })

  it('has app-container class on the root element', () => {
    const themeStore = useThemeStore()
    vi.spyOn(themeStore, 'initTheme').mockImplementation(() => {})

    const wrapper = mount(App, {
      global: {
        plugins: [pinia],
        stubs
      }
    })

    expect(wrapper.find('.app-container').exists()).toBe(true)
  })
})
