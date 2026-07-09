<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useThemeStore } from '../../stores/theme'

const themeStore = useThemeStore()

const currentVideoIndex = ref(0)
const videoElement = ref(null)
const playerContainer = ref(null)
const isPseudoFullscreen = ref(false)
const isNativeFullscreen = ref(false)
const isFullscreen = computed(() => isNativeFullscreen.value || isPseudoFullscreen.value)
const progress = ref(0)
const isPlaying = ref(true)
const isLoading = ref(false)
const deferredSrc = ref('')
const isVideoPlaying = ref(false)
const userInteracted = ref(false)
const isMuted = ref(true)
const showOverlayControls = ref(true)
const manuallyPaused = ref(false)
let overlayTimer = null

const wakeControls = () => {
  showOverlayControls.value = true
  if (overlayTimer) clearTimeout(overlayTimer)
  overlayTimer = setTimeout(() => {
    if (isPlaying.value) {
      showOverlayControls.value = false
    }
  }, 5000)
}

watch(isPlaying, (playing) => {
  if (!playing) {
    showOverlayControls.value = true
    if (overlayTimer) clearTimeout(overlayTimer)
  } else {
    wakeControls()
  }
})

const handleFullscreenChange = () => {
  isNativeFullscreen.value = !!(document.fullscreenElement || document.webkitFullscreenElement)
}

const toggleMute = () => {
  if (videoElement.value) {
    videoElement.value.muted = !videoElement.value.muted
    isMuted.value = videoElement.value.muted
  }
}

const toggleFullscreen = () => {
  const elem = playerContainer.value || videoElement.value;
  if (elem) {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !isPseudoFullscreen.value) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen()
      } else {
        /* Fallback pseudo-fullscreen for iOS iPhones */
        isPseudoFullscreen.value = true
        document.body.style.overflow = 'hidden'
      }
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (isPseudoFullscreen.value) {
        isPseudoFullscreen.value = false
        document.body.style.overflow = ''
      }
    }
  }
}

const globalUnmute = (e) => {
  window.removeEventListener('click', globalUnmute, true)
  window.removeEventListener('touchstart', globalUnmute, true)
  window.removeEventListener('touchend', globalUnmute, true)
  
  if (e && e.target && e.target.closest && e.target.closest('[aria-label="Toggle mute"]')) {
    return
  }
  
  if (videoElement.value && videoElement.value.offsetParent !== null && isMuted.value) {
    videoElement.value.muted = false
    isMuted.value = false
  }
}

const videos = [
  { 
    headline: "Interactive Concepts.", 
    subheadline: "Learn with\nEngaging &\nAnimated Videos.",
    src: "/intro-1.webm"
  },
  { 
    headline: "Media Recognition.", 
    subheadline: "As Seen On\nNews 1st Live\nBroadcast.",
    src: "/intro-2.webm"
  },
  { 
    headline: "Exam Preparation.", 
    subheadline: "Ace Your Exams\nWith Targeted\nPreparations.",
    src: "/intro-3.webm"
  }
]

const updateProgress = () => {
  if (videoElement.value) {
    const val = (videoElement.value.currentTime / videoElement.value.duration) * 100
    progress.value = val || 0
  }
}

// Intercept any browser-initiated play events and block them if manually paused
const onVideoPlay = () => {
  if (manuallyPaused.value && videoElement.value) {
    videoElement.value.pause()
  }
}

const togglePlay = async () => {
  if (videoElement.value) {
    if (videoElement.value.paused) {
      try {
        manuallyPaused.value = false
        await videoElement.value.play()
        isPlaying.value = true
      } catch (e) {
        if (e.name !== 'AbortError') console.error('Play error:', e)
      }
    } else {
      manuallyPaused.value = true
      videoElement.value.pause()
      isPlaying.value = false
    }
  }
}

// Reload video when index changes
watch(currentVideoIndex, async () => {
  if (videoElement.value) {
    isVideoPlaying.value = false
    deferredSrc.value = videos[currentVideoIndex.value].src
    await nextTick()
    videoElement.value.load()
    try {
      if (!manuallyPaused.value) {
        await videoElement.value.play()
        isPlaying.value = true
      }
    } catch (e) {
      if (e.name !== 'AbortError') console.error('Play error:', e)
    }
  } else {
    userInteracted.value = true
    deferredSrc.value = videos[currentVideoIndex.value].src
  }
})

const handleVideoEnded = () => {
  if (!manuallyPaused.value) {
    currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length
  }
}

const switchVideo = (index) => {
  if (index === currentVideoIndex.value) return
  currentVideoIndex.value = index
}

const seekBackward = () => {
  if (videoElement.value) {
    videoElement.value.currentTime = Math.max(0, videoElement.value.currentTime - 10)
  }
}

const seekForward = () => {
  if (videoElement.value) {
    videoElement.value.currentTime = Math.min(videoElement.value.duration, videoElement.value.currentTime + 10)
  }
}

const stats = [
  { line1: "15,000+", line2: "Videos", icon: "play_circle" },
  { line1: "Expert", line2: "Teachers", icon: "school" },
  { line1: "Concept Based", line2: "Learning", icon: "lightbulb" },
  { line1: "Affordable", line2: "For Everyone", icon: "payments" },
  { line1: "Learn Anytime,", line2: "Anywhere", icon: "devices" }
]

// Removed autoSlideTimer as it causes unexpected play/pause behaviors

const handleCanPlay = async () => {
  if (videoElement.value && !manuallyPaused.value) {
    try {
      await videoElement.value.play()
      isPlaying.value = true
    } catch (e) {
      if (e.name !== 'AbortError') console.error('Autoplay error:', e)
    }
  }
  // Remove self after first successful trigger
  videoElement.value?.removeEventListener('canplay', handleCanPlay)
}

onMounted(async () => {
  userInteracted.value = true
  deferredSrc.value = videos[currentVideoIndex.value].src
  isLoading.value = false
  await nextTick()
  if (videoElement.value) {
    videoElement.value.addEventListener('canplay', handleCanPlay, { once: true })
  }
  wakeControls()
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
  
  window.addEventListener('click', globalUnmute, true)
  window.addEventListener('touchstart', globalUnmute, { capture: true, passive: true })
  window.addEventListener('touchend', globalUnmute, { capture: true, passive: true })
})

onUnmounted(() => {
  window.removeEventListener('click', globalUnmute, true)
  window.removeEventListener('touchstart', globalUnmute, true)
  window.removeEventListener('touchend', globalUnmute, true)
  document.body.style.overflow = ''
  if (overlayTimer) clearTimeout(overlayTimer)
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
  document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
})
</script>

<template>
  <!-- Skeleton Loader for Mobile / Premium Feel -->
  <div v-if="isLoading" class="flex flex-col h-full animate-pulse space-y-4">
    <div class="video-player-container-skeleton relative flex-grow bg-[#1a0a3d]/60 border border-[var(--border-light)] rounded-[14px] min-h-[220px] md:min-h-0 flex items-center justify-center">
      <span class="material-symbols-outlined text-purple-600/40 text-[48px] animate-spin">progress_activity</span>
    </div>
  </div>
  <div v-else class="flex flex-col h-full">
    <!-- Video Player Section -->
    <div 
      ref="playerContainer" 
      @mousemove="wakeControls"
      @touchstart="wakeControls"
      @click="wakeControls"
      style="touch-action: manipulation"
      :class="[
        'video-player-container group flex-grow bg-black shadow-2xl min-h-0 transition-all duration-300',
        isFullscreen
          ? 'fixed inset-0 z-[10000] rounded-none w-full h-full overflow-hidden flex items-center justify-center'
          : 'relative rounded-[14px] border border-[var(--border-light)] overflow-hidden'
      ]"
    >

      <!-- Video Element -->
      <video 
        ref="videoElement"
        :class="['opacity-100', isFullscreen ? 'max-w-full max-h-full' : 'w-full h-full object-cover object-top']"
        :style="isFullscreen ? { maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' } : { aspectRatio: '16/9' }"
        :muted="isMuted"
        playsinline
        autoplay
        preload="auto"
        :poster="'/hero-video-thumbnail.webp'"
        :src="videos[currentVideoIndex].src"
        @playing="isVideoPlaying = true"
        @ended="handleVideoEnded"
        @timeupdate="updateProgress"
        @play="onVideoPlay"
      >
        Your browser does not support the video tag.
      </video>
      
      <!-- Gradient Overlay (Flux Deep) -->
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--bg-main)]/80 via-[var(--bg-main)]/20 to-transparent pointer-events-none"></div>
      

      <!-- Center Controls Overlay -->
      <div :class="['absolute inset-0 transition-opacity duration-300 z-30 pointer-events-none', showOverlayControls ? 'opacity-100' : 'opacity-0']">
        <!-- Center Click Area for Play/Pause -->
        <div 
          @click="togglePlay"
          class="absolute inset-0 flex items-center justify-center pointer-events-auto"
        >
          <div class="w-16 h-16 bg-[var(--accent-purple)]/90 text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-white text-[32px]" style="font-variation-settings: 'FILL' 1">
              {{ isPlaying ? 'pause' : 'play_arrow' }}
            </span>
          </div>
        </div>

        <!-- Seek Buttons (Only when fullscreen) -->
        <template v-if="isFullscreen">
          <!-- Left Seek Button -->
          <div class="absolute left-[20%] md:left-[30%] top-1/2 -translate-y-1/2 pointer-events-auto">
            <div 
              @click.stop="seekBackward"
              class="w-10 h-10 md:w-14 md:h-14 bg-black/60 hover:bg-[var(--accent-purple)]/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <span class="material-symbols-outlined text-white text-[24px] md:text-[32px]">replay_10</span>
            </div>
          </div>

          <!-- Right Seek Button -->
          <div class="absolute right-[20%] md:right-[30%] top-1/2 -translate-y-1/2 pointer-events-auto">
            <div 
              @click.stop="seekForward"
              class="w-10 h-10 md:w-14 md:h-14 bg-black/60 hover:bg-[var(--accent-purple)]/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <span class="material-symbols-outlined text-white text-[24px] md:text-[32px]">forward_10</span>
            </div>
          </div>
        </template>
      </div>

      <!-- Video Progress Bar -->
      <div class="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-40">
        <div class="flex justify-end items-center mb-1.5 text-white pointer-events-auto">
          <div class="flex gap-3">
            <!-- Sound Button -->
            <button @click="toggleMute" class="focus:outline-none flex items-center justify-center hover:scale-110 active:scale-95 transition-transform w-6 h-6" aria-label="Toggle mute">
              <span class="material-symbols-outlined text-[18px] drop-shadow-md">
                {{ isMuted ? 'volume_off' : 'volume_up' }}
              </span>
            </button>
            <!-- Zoom (Fullscreen) Button -->
            <button @click="toggleFullscreen" class="focus:outline-none flex items-center justify-center hover:scale-110 active:scale-95 transition-transform w-6 h-6" aria-label="Toggle fullscreen">
              <span class="material-symbols-outlined text-[18px] drop-shadow-md">fullscreen</span>
            </button>
          </div>
        </div>
        <div class="h-[3px] bg-white/20 rounded-full overflow-hidden">
          <div 
            class="h-full bg-[var(--accent-purple)] relative rounded-full shadow-lg transition-all duration-100 ease-linear"
            :style="{ width: `${progress}%` }"
          >
            <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-[var(--accent-purple)]"></div>
          </div>
        </div>
      </div>
    </div>




    <!-- Dot Indicators -->
    <div class="flex items-center justify-center gap-1.5 shrink-0 py-0.5">
      <button
        v-for="(video, index) in videos"
        :key="index"
        @click="switchVideo(index)"
        class="rounded-full transition-all duration-300 cursor-pointer hover:scale-125 focus:outline-none"
        :class="index === currentVideoIndex
          ? 'w-2 h-2 bg-[var(--accent-purple)]'
          : themeStore.theme === 'dark' ? 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60' : 'w-1.5 h-1.5 bg-black/30 hover:bg-black/60'"
        :aria-label="`Switch to video ${index + 1}`"
      ></button>
    </div>

    <!-- Stats Bar -->
    <div class="stats-bar hidden md:flex items-center justify-between bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-[12px] px-4 py-1.5 shrink-0 shadow-lg">
      <div v-for="stat in stats" :key="stat.line1" class="flex items-center gap-1.5 group">
        <div class="w-5 h-5 rounded-full bg-[var(--bg-main)] border border-[var(--border-light)] flex items-center justify-center group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-[13px] text-[var(--accent-purple)]" style="font-variation-settings: 'FILL' 1">{{ stat.icon }}</span>
        </div>
        <div class="flex flex-col leading-none">
          <span class="text-[9px] font-black text-[var(--text-primary)]">{{ stat.line1 }}</span>
          <span class="text-[8px] font-bold text-[var(--text-secondary)]">{{ stat.line2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Desktop: fill parent flex height */
.video-player-container {
  flex-grow: 1;
  min-height: 0;
}

@media (max-width: 768px) {
  /* On mobile, parent wrapper is explicitly 280px tall — just fill it */
  .video-player-container {
    flex-grow: 1;
    min-height: 0;
  }

  .absolute.inset-0.p-6.flex.flex-col.justify-center.pointer-events-none {
    padding: 1rem !important;
  }
  
  .video-text-overlay {
    max-width: 85% !important;
    gap: 0.5rem !important;
  }
  
  .video-text-overlay h2:first-of-type {
    font-size: 18px !important;
    line-height: 1.2 !important;
  }
  
  .video-text-overlay h2:last-of-type {
    font-size: 16px !important;
    line-height: 1.2 !important;
  }
  
  .stats-bar {
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    scroll-snap-type: x mandatory !important;
    -webkit-overflow-scrolling: touch !important;
    gap: 12px !important;
    padding: 8px 12px !important;
    justify-content: flex-start !important;
    scrollbar-width: none;
  }

  .stats-bar::-webkit-scrollbar {
    display: none;
  }

  .stats-bar > div {
    flex: 0 0 auto !important;
    scroll-snap-align: center !important;
    width: 120px !important;
    justify-content: center !important;
    background: rgba(123, 47, 190, 0.12) !important;
    border: 1px solid rgba(123, 47, 190, 0.25) !important;
    border-radius: 10px !important;
    padding: 6px 8px !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .stats-bar > div:active {
    transform: scale(0.95);
  }

  .stats-bar .w-7 {
    width: 22px !important;
    height: 22px !important;
  }

  .stats-bar .material-symbols-outlined {
    font-size: 13px !important;
  }

  .stats-bar span.text-\[10px\] {
    font-size: 9px !important;
    line-height: 1.1 !important;
  }

  .stats-bar span.text-\[9px\] {
    font-size: 8px !important;
    line-height: 1.1 !important;
  }
}

@media (max-width: 480px) {
  .stats-bar {
    gap: 10px !important;
    padding: 6px 10px !important;
  }

  .stats-bar > div {
    width: 110px !important;
  }

  .stats-bar .w-7 {
    width: 18px !important;
    height: 18px !important;
  }

  .stats-bar .material-symbols-outlined {
    font-size: 11px !important;
  }

  .stats-bar span.text-\[10px\] {
    font-size: 8px !important;
  }

  .stats-bar span.text-\[9px\] {
    font-size: 7px !important;
  }
}
</style>
