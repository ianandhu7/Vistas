<template>
  <div class="relative w-full h-full flex flex-col justify-start pt-2">
    <!-- Premium White Container Card wrapper -->
    <div class="bg-white rounded-3xl p-3 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#eef2f7] w-full flex-1 flex flex-col">
      <!-- Title -->
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="h-px bg-purple-200 flex-1 hidden md:block"></div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-purple-400"></span>
          <h3 class="text-xl md:text-2xl font-bold text-[#1e0a4f] text-center">Everything Your Child Gets</h3>
          <span class="w-2 h-2 rounded-full bg-purple-400"></span>
        </div>
        <div class="h-px bg-purple-200 flex-1 hidden md:block"></div>
      </div>
      
      <!-- Grid / Horizontal Scroll -->
      <div ref="scrollContainer" class="w-full flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:pb-4 hide-scrollbar md:grid md:grid-cols-3 lg:grid-cols-3 max-md:gap-2 md:gap-4 max-w-4xl mx-auto py-2">
        
        <!-- Set 1 (Always Visible) -->
        <div 
          v-for="(item, index) in featuresList" 
          :key="'set1-' + index"
          class="flip-card shrink-0 max-md:snap-center"
          @click="handleCardClick(index)"
        >
          <div class="flip-card-inner" :class="{ 'flipped': flipped[index] }">
            <!-- Front Side -->
            <div class="flip-card-front" :style="{ '--theme-color': item.bg }">
              <div 
                class="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white mb-2 md:mb-1.5 shadow-md"
                :style="{ backgroundColor: item.bg }"
              >
                <span class="material-symbols-outlined text-[18px] md:text-[20px]">{{ item.icon }}</span>
              </div>
              <h5 class="text-[#002e5c] font-black text-[10.5px] md:text-[13px] leading-tight">{{ item.title }}</h5>
            </div>
            <!-- Back Side -->
            <div class="flip-card-back" :style="{ '--theme-color': item.bg }">
              <h5 class="text-white font-black text-[10.5px] md:text-[13px] leading-tight mb-1.5">{{ item.title }}</h5>
              <p class="text-white/90 text-[8.5px] md:text-[10px] leading-tight font-medium">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Set 2 (Mobile Loop Only) -->
        <div 
          v-for="(item, index) in featuresList" 
          :key="'set2-' + index"
          class="flip-card shrink-0 max-md:snap-center md:hidden"
          @click="handleCardClick(index)"
        >
          <div class="flip-card-inner" :class="{ 'flipped': flipped[index] }">
            <!-- Front Side -->
            <div class="flip-card-front" :style="{ '--theme-color': item.bg }">
              <div 
                class="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white mb-2 md:mb-1.5 shadow-md"
                :style="{ backgroundColor: item.bg }"
              >
                <span class="material-symbols-outlined text-[18px] md:text-[20px]">{{ item.icon }}</span>
              </div>
              <h5 class="text-[#002e5c] font-black text-[10.5px] md:text-[13px] leading-tight">{{ item.title }}</h5>
            </div>
            <!-- Back Side -->
            <div class="flip-card-back" :style="{ '--theme-color': item.bg }">
              <h5 class="text-white font-black text-[10.5px] md:text-[13px] leading-tight mb-1.5">{{ item.title }}</h5>
              <p class="text-white/90 text-[8.5px] md:text-[10px] leading-tight font-medium">{{ item.desc }}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const rotated = ref(Array(6).fill(false))
const flipped = ref(Array(6).fill(false))
const scrollContainer = ref(null)
let scrollInterval = null

const toggleRotation = (index) => {
  rotated.value[index] = !rotated.value[index]
}

const activeTimeouts = {}

const handleCardClick = (index) => {
  if (window.innerWidth < 768) {
    // Clear any existing active auto-unflip timeout for this card
    if (activeTimeouts[index]) {
      clearTimeout(activeTimeouts[index])
      delete activeTimeouts[index]
    }

    if (flipped.value[index]) {
      flipped.value[index] = false
    } else {
      flipped.value[index] = true
      // Automatically unflip card back after 3 seconds
      activeTimeouts[index] = setTimeout(() => {
        flipped.value[index] = false
        delete activeTimeouts[index]
      }, 3000)
    }
  }
}

const featuresList = [
  { icon: 'sensors', bg: '#4a148c', title: 'Live Classes', desc: 'Learn from expert teachers' },
  { icon: 'slideshow', bg: '#e91e63', title: 'Animated Lessons', desc: 'Visual learning made simple' },
  { icon: 'fact_check', bg: '#4caf50', title: 'Tests', desc: 'Chapter-wise tests & instant results' },
  { icon: 'description', bg: '#1976d2', title: 'Smart Notes', desc: 'Quick revision anytime, anywhere' },
  { icon: 'auto_stories', bg: '#ff9800', title: 'Karnataka Board', desc: 'Complete syllabus aligned with board exams' },
  { icon: 'rocket_launch', bg: '#673ab7', title: '19+ Skill Courses', desc: 'Spoken English, Coding, AI & more' }
]

onMounted(() => {
  // Setup auto-scroll on mobile view
  if (window.innerWidth < 768) {
    const el = scrollContainer.value
    // Start at the second set's offset
    setTimeout(() => {
      if (el) {
        const card = el.children[0]
        if (card) {
          const cardWidth = card.clientWidth
          const gap = 12 // gap-3 is 12px
          const step = cardWidth + gap
          el.scrollLeft = 6 * step
        }
      }
    }, 200)

    scrollInterval = setInterval(() => {
      if (el) {
        const card = el.children[0]
        if (card) {
          const cardWidth = card.clientWidth
          const gap = 12
          const step = cardWidth + gap
          
          if (el.scrollLeft <= step + 5) {
            // Jump forward by 6 items to the identical spot in Set 2
            const target = el.scrollLeft + 6 * step
            el.scrollTo({ left: target })
            // Scroll left smoothly on next frame
            setTimeout(() => {
              el.scrollBy({ left: -step, behavior: 'smooth' })
            }, 50)
          } else {
            el.scrollBy({ left: -step, behavior: 'smooth' })
          }
        }
      }
    }, 3000)
  }
})

onUnmounted(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval)
  }
})
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Flip card container */
.flip-card {
  background-color: transparent;
  width: 68px;
  height: 108px;
  perspective: 1000px;
  font-family: sans-serif;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.flip-card:hover {
  transform: translateY(-4px);
}

@media (min-width: 768px) {
  .flip-card {
    width: 100%;
    height: 125px;
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner,
.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 12px 28px rgba(0, 2, 20, 0.08), 0 4px 10px rgba(0, 2, 20, 0.04);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 0.5rem;
  transition: box-shadow 0.3s ease;
}

.flip-card:hover .flip-card-front {
  box-shadow: 0 20px 38px rgba(0, 2, 20, 0.12), 0 8px 18px rgba(0, 2, 20, 0.06);
}

@media (min-width: 768px) {
  .flip-card-front, .flip-card-back {
    border-radius: 16px;
    padding: 0.75rem;
  }
}

.flip-card-front {
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  color: var(--theme-color);
}

.flip-card-back {
  background: linear-gradient(135deg, var(--theme-color) 30%, #1e1e38 120%);
  color: white;
  transform: rotateY(180deg);
}
</style>
