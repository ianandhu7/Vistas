<template>
  <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 flex flex-col gap-2 md:gap-4 pt-6 pb-20 md:pb-28">
    
    <!-- Top Achievers -->
    <div class="flex flex-col">
      <div class="flex items-center justify-center gap-4 mb-4">
        <div class="h-px bg-purple-200 w-16 md:w-32 hidden md:block"></div>
        <div class="flex items-center gap-2">
          <span class="text-xl">🏆</span>
          <h3 class="text-xl md:text-2xl font-bold text-[#1e0a4f] text-center">Our Top Achievers</h3>
        </div>
        <div class="h-px bg-purple-200 w-16 md:w-32 hidden md:block"></div>
      </div>
      
      <!-- Achievers Carousel -->
      <div class="relative w-full flex items-center group">
        <!-- Left Button -->
        <button @click="scrollLeft(achieversRef)" class="absolute left-0 w-7 h-7 md:w-10 md:h-10 shrink-0 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform -translate-x-1/2 hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-[14px] md:text-[20px]">chevron_left</span>
        </button>
        
        <div ref="achieversRef" class="w-full flex overflow-x-auto scrollbar-hide gap-2 md:gap-6 py-2 px-6" style="scroll-snap-type: x mandatory;">
          <div 
            v-for="(student, idx) in tripledAchievers" 
            :key="'achiever-' + idx"
            class="shrink-0 w-[78%] md:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-md border border-gray-100 p-3 md:p-4 flex items-center gap-3 md:gap-4" 
            style="scroll-snap-align: start;"
          >
            <div class="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0">
              <img :src="student.img" alt="Student" class="w-full h-full object-contain object-center" />
            </div>
            <div class="flex flex-col">
              <span class="text-[#311b92] font-bold text-[13px]">{{ student.title }}</span>
              <span v-if="student.subtitle" class="text-gray-900 font-black text-[12px] leading-tight">{{ student.subtitle }}</span>
              <span class="text-gray-500 text-[9px] mt-1">{{ student.board }}</span>
            </div>
          </div>
        </div>
        
        <!-- Right Button -->
        <button @click="scrollRight(achieversRef)" class="absolute right-0 w-7 h-7 md:w-10 md:h-10 shrink-0 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform translate-x-1/2 hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-[14px] md:text-[20px]">chevron_right</span>
        </button>
      </div>
    </div>
    
    <!-- Parents Speak Section -->
    <div class="flex flex-col">
      <!-- Testimonials Carousel -->
      <div class="relative w-full flex items-center group">
        <!-- Left Button -->
        <button @click="scrollLeft(parentsRef)" class="absolute left-0 w-7 h-7 md:w-10 md:h-10 shrink-0 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform -translate-x-1/2 hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-[14px] md:text-[20px]">chevron_left</span>
        </button>
        
        <div ref="parentsRef" class="w-full flex overflow-x-auto scrollbar-hide gap-2 md:gap-6 py-2 px-4" style="scroll-snap-type: x mandatory;">
          <div 
            v-for="(parent, idx) in tripledParents" 
            :key="'parent-' + idx"
            class="testimonial-card shrink-0 w-[78%] md:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-md border border-gray-100 p-3 md:p-5 flex items-start gap-3 md:gap-4" 
            style="scroll-snap-align: start;"
          >
            <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img :src="parent.img" alt="Parent" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <div class="flex text-[#ffb300] text-[10px] mb-1 stars-container">
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
              </div>
              <p class="text-gray-600 text-[10px] leading-tight mb-2 testimonial-text">{{ parent.text }}</p>
              <span class="text-[#311b92] font-bold text-[10px] testimonial-author">{{ parent.name }}</span>
            </div>
          </div>
        </div>
        
        <!-- Right Button -->
        <button @click="scrollRight(parentsRef)" class="absolute right-0 w-7 h-7 md:w-10 md:h-10 shrink-0 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform translate-x-1/2 hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-[14px] md:text-[20px]">chevron_right</span>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const achieversRef = ref(null)
const parentsRef = ref(null)

const achievers = [
  { img: '/hero_girl_trophy.png', title: 'State 2nd Rank', subtitle: '624 / 625 Marks', board: 'Karnataka State Board 2024' },
  { img: '/hero.image.png', title: 'District Topper', subtitle: '618 / 625 Marks', board: 'Karnataka State Board 2024' },
  { img: '/hero_girl_trophy_transparent.png', title: '98.6% Overall', board: 'Karnataka State Board 2024' },
  { img: '/hero_girl_trophy.png', title: 'School Topper', subtitle: '615 / 625 Marks', board: 'Karnataka State Board 2024' },
  { img: '/hero.image.png', title: '100/100 Math', board: 'CBSE Board 2024' },
  { img: '/hero_girl_trophy_transparent.png', title: '99.2% Overall', board: 'ICSE Board 2024' }
]

const parents = [
  { img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=100&auto=format&fit=crop', text: 'My son improved from 45% to 90% in just 3 months. Concepts are so well explained!', name: '- Priya, Parent' },
  { img: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=100&auto=format&fit=crop', text: 'Finally my daughter enjoys studying now! The classes and notes are amazing.', name: '- Kavitha, Parent' },
  { img: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=100&auto=format&fit=crop', text: "Tests and instant results help us track our child's progress easily.", name: '- Rajesh, Parent' },
  { img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=100&auto=format&fit=crop', text: 'The teachers are incredibly supportive and always clarify doubts.', name: '- Sunita, Parent' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop', text: 'Affordable and effective! The best investment we made this year.', name: '- Anjali, Parent' }
]

// Triple the arrays to support seamless loop
const tripledAchievers = computed(() => [...achievers, ...achievers, ...achievers])
const tripledParents = computed(() => [...parents, ...parents, ...parents])

const scrollLeft = (containerRef) => {
  if (containerRef) {
    const scrollAmount = containerRef.clientWidth / 3
    containerRef.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
}

const scrollRight = (containerRef) => {
  if (containerRef) {
    const scrollAmount = containerRef.clientWidth / 3
    containerRef.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}

let achieversInterval = null
let parentsInterval = null
let cleanupAchieversScroll = null
let cleanupParentsScroll = null

// Helper to wire up infinite wrapping scroll listeners
const setupInfiniteScroll = (el) => {
  if (!el) return null
  
  const handleScroll = () => {
    const singleSetWidth = el.scrollWidth / 3
    // If scrolled past the middle set into the third set, jump back to middle set
    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth
    } 
    // If scrolled back before the middle set, jump ahead to middle set
    else if (el.scrollLeft <= 0) {
      el.scrollLeft += singleSetWidth
    }
  }

  el.addEventListener('scroll', handleScroll, { passive: true })
  return () => el.removeEventListener('scroll', handleScroll)
}

onMounted(() => {
  // 1. Setup global infinite scroll loop listeners
  setTimeout(() => {
    if (achieversRef.value) {
      achieversRef.value.scrollLeft = achieversRef.value.scrollWidth / 3
      cleanupAchieversScroll = setupInfiniteScroll(achieversRef.value)
    }
    if (parentsRef.value) {
      parentsRef.value.scrollLeft = parentsRef.value.scrollWidth / 3
      cleanupParentsScroll = setupInfiniteScroll(parentsRef.value)
    }
  }, 100)

  // 2. Set up auto-scrolling on mobile devices
  if (window.innerWidth < 768) {
    achieversInterval = setInterval(() => {
      const el = achieversRef.value
      if (el && el.children[0]) {
        const step = el.children[0].clientWidth + 8
        el.scrollBy({ left: step, behavior: 'smooth' })
      }
    }, 3000)

    parentsInterval = setInterval(() => {
      const el = parentsRef.value
      if (el && el.children[0]) {
        const step = el.children[0].clientWidth + 8
        el.scrollBy({ left: step, behavior: 'smooth' })
      }
    }, 3500)
  }
})

onUnmounted(() => {
  if (achieversInterval) clearInterval(achieversInterval)
  if (parentsInterval) clearInterval(parentsInterval)
  if (cleanupAchieversScroll) cleanupAchieversScroll()
  if (cleanupParentsScroll) cleanupParentsScroll()
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
/* Shrink achiever images on mobile */
@media (max-width: 767px) {
  .achiever-img {
    width: 40px;
    height: 40px;
  }
}

.testimonial-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.testimonial-card:hover {
  background-color: #004a8b;
  border-color: #004a8b;
  transform: translateY(-2px);
}

.testimonial-card:hover .testimonial-text {
  color: rgba(255, 255, 255, 0.9);
}

.testimonial-card:hover .testimonial-author {
  color: #ffffff;
}

.testimonial-card:hover .stars-container span {
  color: #ffb300;
}
</style>
