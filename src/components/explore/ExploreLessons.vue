<template>
  <div class="mt-4 md:mt-6 w-full">
    <!-- Section Heading -->
    <h3 class="text-xl md:text-2xl font-black text-[#120536] mb-3 md:mb-4 px-1">
      Top <span class="text-[#673ab7]">Lessons</span> to Watch
    </h3>

    <!-- Horizontal Scrollable Lessons List -->
    <div class="relative w-full flex items-center group">
      <!-- Left Button -->
      <button @click="scrollLeft" class="absolute left-1 w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center z-20 shadow-md hover:scale-110 transition-transform">
        <span class="material-symbols-outlined text-[16px] md:text-[20px]">chevron_left</span>
      </button>

      <div ref="lessonsRef" class="w-full flex overflow-x-auto scrollbar-hide gap-3 md:gap-4 pb-2 px-1" style="scroll-snap-type: x mandatory;">
        <div
          v-for="(lesson, idx) in tripledLessons"
          :key="'lesson-' + idx"
          @click="openVideo(lesson)"
          class="relative shrink-0 w-[80%] sm:w-[45%] md:w-[31%] aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-md cursor-pointer group hover:shadow-lg transition-all"
          style="scroll-snap-align: start;"
        >
          <!-- Autoplaying Video Preview -->
          <video
            :src="lesson.videoUrl"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          ></video>

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35"></div>

          <!-- New Lesson Badge -->
          <span class="absolute top-3 left-3 bg-[#ffc107] text-black text-[8px] md:text-[9px] font-black px-2 py-0.5 rounded shadow-sm tracking-wide z-10">
            NEW LESSON
          </span>

          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="w-12 h-12 rounded-full bg-black/50 border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
              <span class="material-symbols-outlined text-[24px] translate-x-[1px]">play_arrow</span>
            </div>
          </div>

          <!-- Title -->
          <h4 class="absolute bottom-3 left-3 text-white font-bold text-xs md:text-sm tracking-wide drop-shadow-md z-10">
            {{ lesson.title }}
          </h4>
        </div>
      </div>

      <!-- Right Button -->
      <button @click="scrollRight" class="absolute right-1 w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center z-20 shadow-md hover:scale-110 transition-transform">
        <span class="material-symbols-outlined text-[16px] md:text-[20px]">chevron_right</span>
      </button>
    </div>

    <!-- Video Modal Player -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="showModal"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          @click="closeVideo"
        >
          <div
            class="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-4"
            @click.stop
          >
            <button
              @click="closeVideo"
              class="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/90 rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
            >
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
            <video
              v-if="activeVideo && (activeVideo.endsWith('.mp4') || activeVideo.endsWith('.webm'))"
              :src="activeVideo"
              controls
              autoplay
              class="w-full h-full object-contain"
            ></video>
            <iframe
              v-else
              :src="activeVideo"
              allow="autoplay; fullscreen"
              class="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const showModal = ref(false)
const activeVideo = ref('')
const lessonsRef = ref(null)

const lessons = [
  {
    title: 'Ab Hoga Hisaab',
    videoUrl: '/intro-1.webm'
  },
  {
    title: 'Chemistry Essentials',
    videoUrl: '/intro-2.webm'
  },
  {
    title: 'Physics in Action',
    videoUrl: '/intro-3.webm'
  },
  {
    title: 'Biology Basics',
    videoUrl: '/intro-1.webm'
  },
  {
    title: 'English & Grammar',
    videoUrl: '/intro-2.webm'
  }
]

// Triple the list to create a seamless infinite loop
const tripledLessons = computed(() => [...lessons, ...lessons, ...lessons])

let autoScrollInterval = null
let cleanupInfiniteScroll = null

const setupInfiniteScroll = (el) => {
  if (!el) return null
  
  const handleScroll = () => {
    const singleSetWidth = el.scrollWidth / 3
    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += singleSetWidth
    }
  }

  el.addEventListener('scroll', handleScroll, { passive: true })
  return () => el.removeEventListener('scroll', handleScroll)
}

const scrollLeft = () => {
  const el = lessonsRef.value
  if (el && el.children[0]) {
    const step = el.children[0].clientWidth + 12
    el.scrollBy({ left: -step, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  const el = lessonsRef.value
  if (el && el.children[0]) {
    const step = el.children[0].clientWidth + 12
    el.scrollBy({ left: step, behavior: 'smooth' })
  }
}

const openVideo = (lesson) => {
  activeVideo.value = lesson.videoUrl
  showModal.value = true
  if (autoScrollInterval) clearInterval(autoScrollInterval)
}

const closeVideo = () => {
  showModal.value = false
  activeVideo.value = ''
  startAutoPlayLoop()
}

const startAutoPlayLoop = () => {
  autoScrollInterval = setInterval(() => {
    const el = lessonsRef.value
    if (el && el.children[0]) {
      const step = el.children[0].clientWidth + 12 // width + gap
      el.scrollBy({ left: step, behavior: 'smooth' })
    }
  }, 4000)
}

onMounted(() => {
  setTimeout(() => {
    const el = lessonsRef.value
    if (el) {
      el.scrollLeft = el.scrollWidth / 3
      cleanupInfiniteScroll = setupInfiniteScroll(el)
    }
  }, 100)

  startAutoPlayLoop()
})

onUnmounted(() => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
  if (cleanupInfiniteScroll) cleanupInfiniteScroll()
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Modal fade transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
