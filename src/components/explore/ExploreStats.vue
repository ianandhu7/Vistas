<template>
  <div ref="statsContainer" class="stats-wrapper">
    
    <!-- Set 1 (Always Visible) -->
    <template v-for="(item, index) in statsList" :key="'set1-' + index">
      <div class="stat-item cursor-pointer group" @click="toggleIcon(index)">
        <div 
          class="stat-icon-wrap shrink-0 transition-all duration-500 group-active:scale-95"
          :class="clicked[index] ? 'clicked-' + item.class : ''"
        >
          <span 
            class="material-symbols-outlined stat-icon transition-colors duration-500"
            :class="clicked[index] ? 'text-white' : item.iconColor"
          >{{ item.icon }}</span>
        </div>
        <div class="stat-text transition-transform duration-300 group-hover:translate-x-1">
          <span class="stat-value">{{ item.value() }}</span>
          <span class="stat-label">{{ item.label }}</span>
        </div>
      </div>
      <!-- Divider (hide last one on desktop) -->
      <div v-if="index < 3 || isMobile" class="stat-divider"></div>
    </template>

    <!-- Set 2 (Mobile Only for Loop) -->
    <template v-for="(item, index) in statsList" :key="'set2-' + index">
      <div class="stat-item cursor-pointer group mobile-only-stat" @click="toggleIcon(index)">
        <div 
          class="stat-icon-wrap shrink-0 transition-all duration-500 group-active:scale-95"
          :class="clicked[index] ? 'clicked-' + item.class : ''"
        >
          <span 
            class="material-symbols-outlined stat-icon transition-colors duration-500"
            :class="clicked[index] ? 'text-white' : item.iconColor"
          >{{ item.icon }}</span>
        </div>
        <div class="stat-text transition-transform duration-300 group-hover:translate-x-1">
          <span class="stat-value">{{ item.value() }}</span>
          <span class="stat-label">{{ item.label }}</span>
        </div>
      </div>
      <div class="stat-divider mobile-only-stat"></div>
    </template>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const clicked = ref([false, false, false, false])
const statsContainer = ref(null)
const hasAnimated = ref(false)

const displaySchools = ref(0)
const displayVideos = ref(0)
const displayCourses = ref(0)

const isMobile = ref(false)

const statsList = computed(() => [
  { icon: 'domain', iconColor: 'text-[#003b6d]', value: () => `${displaySchools.value}+`, label: 'Schools', class: 'schools' },
  { icon: 'play_circle', iconColor: 'text-[#e91e63]', value: () => `${displayVideos.value.toLocaleString()}+`, label: 'Videos', class: 'videos' },
  { icon: 'school', iconColor: 'text-[#4caf50]', value: () => `${displayCourses.value}+`, label: 'Courses', class: 'courses' },
  { icon: 'group', iconColor: 'text-[#673ab7]', value: () => 'Thousands', label: 'of Students', class: 'students' }
])

const animateValue = (refVar, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOut = progress * (2 - progress); 
    refVar.value = Math.floor(easeOut * (end - start) + start);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      refVar.value = end;
    }
  };
  window.requestAnimationFrame(step);
}

let observer = null
let autoScrollInterval = null

onMounted(() => {
  isMobile.value = window.innerWidth < 768

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      animateValue(displaySchools, 0, 650, 2000)
      animateValue(displayVideos, 0, 15000, 2000)
      animateValue(displayCourses, 0, 19, 2000)
    }
  }, { threshold: 0.1 })

  if (statsContainer.value) {
    observer.observe(statsContainer.value)
  }

  // Auto-scroll logic for mobile stats (scrolling left-to-right infinitely)
  if (isMobile.value) {
    setTimeout(() => {
      const el = statsContainer.value
      if (el) {
        const item = el.querySelector('.stat-item')
        if (item) {
          const itemWidth = item.clientWidth
          const step = itemWidth + 5 // item width + divider + gap offset
          // Start at the second set's offset
          el.scrollLeft = 4 * step
        }
      }
    }, 200)

    autoScrollInterval = setInterval(() => {
      const el = statsContainer.value
      if (el) {
        const item = el.querySelector('.stat-item')
        if (item) {
          const itemWidth = item.clientWidth
          const step = itemWidth + 5
          
          if (el.scrollLeft <= step + 5) {
            // Jump forward by 4 items to the identical spot in Set 2
            const target = el.scrollLeft + 4 * step
            el.scrollTo({ left: target })
            // Scroll left smoothly
            setTimeout(() => {
              el.scrollBy({ left: -step, behavior: 'smooth' })
            }, 50)
          } else {
            el.scrollBy({ left: -step, behavior: 'smooth' })
          }
        }
      }
    }, 2500)
  }
})

onUnmounted(() => {
  if (observer && statsContainer.value) {
    observer.unobserve(statsContainer.value)
  }
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
})

const toggleIcon = (index) => {
  clicked.value[index] = !clicked.value[index]
}
</script>

<style scoped>
/* ─── WRAPPER ─────────────────────────────────────────── */
.stats-wrapper {
  background: #003b6d;
  border-radius: 999px;
  padding: 10px 14px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  box-shadow: 0 4px 24px rgba(0, 59, 109, 0.35);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  position: relative;
  z-index: 20;
  scroll-snap-type: x mandatory;
}
.stats-wrapper::-webkit-scrollbar {
  display: none;
}

/* ─── STAT ITEM ───────────────────────────────────────── */
.stat-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  flex: 0 0 calc((100% - 24px) / 3); /* Fits exactly 3 items at a time */
  min-width: 0;
  scroll-snap-align: start;
}

/* ─── ICON WRAP ───────────────────────────────────────── */
.stat-icon-wrap {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-icon {
  font-size: 16px;
}

/* Clicked states */
.clicked-schools  { background: #ffb300; border-radius: 8px; transform: rotate(360deg); }
.clicked-videos   { background: #e91e63; border-radius: 8px; transform: rotate(360deg); }
.clicked-courses  { background: #4caf50; border-radius: 8px; transform: rotate(360deg); }
.clicked-students { background: #673ab7; border-radius: 8px; transform: rotate(360deg); }

/* ─── TEXT ────────────────────────────────────────────── */
.stat-text {
  display: flex;
  flex-direction: column;
  color: white;
  min-width: 0;
}
.stat-value {
  font-size: 10px;
  font-weight: 900;
  line-height: 1.1;
  white-space: nowrap;
}
.stat-label {
  font-size: 8px;
  font-weight: 500;
  color: #bfdbfe;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.1;
  white-space: nowrap;
}

/* ─── DIVIDER ─────────────────────────────────────────── */
.stat-divider {
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

/* ─── DESKTOP ─────────────────────────────────────────── */
@media (min-width: 768px) {
  .mobile-only-stat {
    display: none !important;
  }
  .stats-wrapper {
    padding: 16px 48px;
    gap: 16px;
    scroll-snap-type: none;
  }
  .stat-item {
    flex: none;
    gap: 14px;
  }
  .stat-icon-wrap {
    width: 48px;
    height: 48px;
  }
  .stat-icon {
    font-size: 24px;
  }
  .stat-value {
    font-size: 20px;
  }
  .stat-label {
    font-size: 12px;
  }
  .stat-divider {
    height: 40px;
  }
}
</style>
