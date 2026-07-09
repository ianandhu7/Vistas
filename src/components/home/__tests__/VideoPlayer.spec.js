import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import VideoPlayer from '../VideoPlayer.vue'

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
})
window.IntersectionObserver = mockIntersectionObserver

describe('VideoPlayer.vue', () => {
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders video player container', () => {
    const wrapper = mount(VideoPlayer, { global: { plugins: [pinia] } })
    expect(wrapper.find('.video-player-container').exists()).toBe(true)
  })

  it('changes slide on dot pagination click', async () => {
    const wrapper = mount(VideoPlayer, { global: { plugins: [pinia] } })
    expect(wrapper.vm.currentVideoIndex).toBe(0)

    const dots = wrapper.findAll('button[aria-label^="Switch to video"]')
    expect(dots.length).toBeGreaterThan(1)
    await dots[1].trigger('click')
    expect(wrapper.vm.currentVideoIndex).toBe(1)
  })

  it('has isPlaying true initially', () => {
    const wrapper = mount(VideoPlayer, { global: { plugins: [pinia] } })
    expect(wrapper.vm.isPlaying).toBe(true)
  })

  it('renders stats bar with expected content', () => {
    const wrapper = mount(VideoPlayer, { global: { plugins: [pinia] } })
    expect(wrapper.text()).toContain('15,000+')
    expect(wrapper.text()).toContain('Videos')
    expect(wrapper.text()).toContain('Expert')
    expect(wrapper.text()).toContain('Teachers')
  })
})
