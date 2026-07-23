<template>
  <div class="w-full bg-white py-4 md:py-10 relative z-20 mt-[-28px] rounded-t-[32px] shadow-[0_-8px_32px_rgba(0,0,0,0.12)]">
    <div class="max-w-[1300px] mx-auto px-5 md:px-10">

      <!-- Side-by-side layout on both mobile and desktop -->
      <div class="flex flex-row items-center justify-between gap-2 md:gap-8">

        <!-- LEFT: Text content (takes up ~45% on mobile) -->
        <div class="flex flex-col justify-center w-[45%] md:flex-1 min-w-0">
          <h2 class="text-[16px] md:text-4xl font-black text-[#120536] mb-3 md:mb-6 leading-tight">
            See an<br/>
            Actual <span class="text-[#673ab7]">Vista</span> Class
          </h2>
          
          <ul class="space-y-2 md:space-y-4 mb-0 md:mb-8">
            <li class="flex items-center gap-1.5 md:gap-3">
              <span class="material-symbols-outlined text-[#311b92] bg-[#ede9fe] rounded-full text-[12px] md:text-xl p-0.5 md:p-1">check_circle</span>
              <span class="font-bold text-[#120536] text-[10px] md:text-lg">Real Teachers</span>
            </li>
            <li class="flex items-center gap-1.5 md:gap-3">
              <span class="material-symbols-outlined text-[#311b92] bg-[#ede9fe] rounded-full text-[12px] md:text-xl p-0.5 md:p-1">check_circle</span>
              <span class="font-bold text-[#120536] text-[10px] md:text-lg">Real Lessons</span>
            </li>
            <li class="flex items-center gap-1.5 md:gap-3">
              <span class="material-symbols-outlined text-[#311b92] bg-[#ede9fe] rounded-full text-[12px] md:text-xl p-0.5 md:p-1">check_circle</span>
              <span class="font-bold text-[#120536] text-[10px] md:text-lg">Real App Experience</span>
            </li>
          </ul>
        </div>

        <!-- RIGHT: Phone frame & Mobile Button (~55% on mobile) -->
        <div class="flex flex-col items-center gap-4 w-[55%] md:flex-1">
          <!-- Phone Frame -->
          <div class="phone-frame">
            <div class="phone-container">
              <!-- Decorative Layers -->
              <div class="phone-back-layer layer-3"></div>
              <div class="phone-back-layer layer-2"></div>
              <div class="phone-back-layer layer-1"></div>
              
              <!-- Main Phone Body -->
              <div class="phone-body">
                <div class="phone-screen">
                  <!-- Inline Video Player Area -->
                  <div class="video-thumb relative w-full h-full overflow-hidden bg-black">
                    <video
                      :src="videos[currentVideoIndex].embedUrl"
                      autoplay
                      loop
                      muted
                      playsinline
                      class="w-full h-full object-cover"
                      :key="currentVideoIndex"
                    ></video>
                  </div>
                </div>
                <!-- Notch -->
                <div class="phone-notch"></div>
              </div>
            </div>
          </div>

          <!-- Watch Demo button below the phone -->
          <button
            @click="openVideo"
            class="watch-demo-btn flex items-center gap-2 bg-[#ffc107] hover:bg-[#ffb300] text-black font-black py-2.5 px-6 rounded-full shadow-[0_4px_18px_rgba(255,193,7,0.45)] transition-all text-[13px] md:text-[15px] uppercase tracking-wider"
          >
            <span class="material-symbols-outlined text-[18px]">play_circle</span>
            Watch Demo
          </button>
        </div>

      </div>
    </div>


    <!-- Full-screen Video Modal -->
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
              v-if="showModal && (videos[currentVideoIndex].embedUrl.endsWith('.mp4') || videos[currentVideoIndex].embedUrl.endsWith('.webm'))"
              :src="videos[currentVideoIndex].embedUrl"
              controls
              autoplay
              class="w-full h-full object-contain"
            ></video>
            <iframe
              v-else-if="showModal"
              :src="videos[currentVideoIndex].embedUrl"
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
import { ref, onMounted, onUnmounted } from 'vue'

const showModal = ref(false)
const currentVideoIndex = ref(0)
let autoScrollInterval = null

const videos = [
  {
    title: 'Interactive Concepts',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop',
    subject: 'Interactive & Animated Lessons',
    rating: '4.9',
    embedUrl: '/intro-1.webm'
  },
  {
    title: 'Media Recognition',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop',
    subject: 'News 1st Live Broadcast',
    rating: '4.8',
    embedUrl: '/intro-2.webm'
  },
  {
    title: 'Exam Preparation',
    thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=300&auto=format&fit=crop',
    subject: 'Targeted Exam Prep',
    rating: '4.9',
    embedUrl: '/intro-3.webm'
  },
  {
    title: 'Smart Notes',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=300&auto=format&fit=crop',
    subject: 'Quick Revision Guide',
    rating: '4.7',
    embedUrl: '/intro-1.webm'
  },
  {
    title: '19+ Skill Courses',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop',
    subject: 'Coding, English & more',
    rating: '4.8',
    embedUrl: '/intro-2.webm'
  }
]

const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length
  }, 4000)
}

const openVideo = () => {
  showModal.value = true
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
}

const closeVideo = () => {
  showModal.value = false
  startAutoScroll()
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
})
</script>

<style scoped>
/* Phone frame */
.phone-frame {
  width: 100%;      /* Fit inside the 55% parent container on mobile */
  max-width: 400px; /* Cap on large mobile / small tablets */
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .phone-frame {
    width: 650px;     /* Much bigger on desktop for landscape */
    max-width: 650px;
  }
}

.phone-container {
  position: relative;
  width: 100%;
}

.phone-back-layer {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.layer-1 {
  background: linear-gradient(135deg, #f57c00, #ffb300);
  transform: translate(4px, -4px) scale(0.995);
  z-index: 1;
}

.layer-2 {
  background: linear-gradient(135deg, #2e7d32, #4caf50);
  transform: translate(8px, -8px) scale(0.99);
  z-index: 0;
}

.layer-3 {
  background: linear-gradient(135deg, #00838f, #00acc1);
  transform: translate(12px, -12px) scale(0.985);
  z-index: -1;
}

.phone-body {
  position: relative;
  z-index: 2; /* Main phone rests on top */
  width: 100%;
  background: #111;
  border-radius: 24px;
  padding: 6px;
  box-shadow:
    0 0 0 2px #333,
    0 20px 60px rgba(0,0,0,0.5),
    0 8px 24px rgba(49, 27, 146, 0.25);
  position: relative;
  aspect-ratio: 19/9; /* Horizontal phone aspect ratio */
  display: flex;
  flex-direction: row; /* Layout inner content horizontally if needed, or keep column if screen takes full */
}

.phone-screen {
  flex: 1;
  background: #1a1a2e;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

.video-thumb {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.video-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.phone-info-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1a1a2e;
  padding: 8px 12px;
  flex-shrink: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
}

.phone-notch {
  width: 14px;
  height: 60px;
  background: #111;
  border-radius: 0 12px 12px 0;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
}

/* Watch Demo button pulse */
.watch-demo-btn {
  animation: gentle-pulse 2.5s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%, 100% { box-shadow: 0 4px 18px rgba(255, 193, 7, 0.45); }
  50% { box-shadow: 0 6px 28px rgba(255, 193, 7, 0.7); }
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
