<template>
  <div class="w-full">
    <!-- Title -->
    <div class="flex items-center justify-center gap-4 mb-8">
      <div class="h-px bg-purple-200 flex-1 hidden md:block"></div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-purple-400"></span>
        <h3 class="text-xl md:text-2xl font-bold text-[#1e0a4f] text-center">Everything Your Child Gets</h3>
        <span class="w-2 h-2 rounded-full bg-purple-400"></span>
      </div>
      <div class="h-px bg-purple-200 flex-1 hidden md:block"></div>
    </div>
    
    <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
      
      <!-- Feature 1 -->
      <div @click="toggleRotation(0)" class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer hover:-translate-y-1 active:scale-95 group">
        <div class="w-12 h-12 rounded-lg bg-[#4a148c] flex items-center justify-center text-white mb-3 transition-transform duration-500 group-hover:scale-110" :class="{ 'rotate-180': rotated[0] }">
          <span class="material-symbols-outlined text-[24px]">sensors</span>
        </div>
        <h5 class="text-[#002e5c] font-bold text-[13px] md:text-[15px] leading-tight mb-1">Live Classes</h5>
        <p class="text-gray-500 text-[10px] md:text-[12px] leading-tight">Learn from expert teachers</p>
      </div>

      <!-- Feature 2 -->
      <div @click="toggleRotation(1)" class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer hover:-translate-y-1 active:scale-95 group">
        <div class="w-12 h-12 rounded-lg bg-[#e91e63] flex items-center justify-center text-white mb-3 transition-transform duration-500 group-hover:scale-110" :class="{ 'rotate-180': rotated[1] }">
          <span class="material-symbols-outlined text-[24px]">slideshow</span>
        </div>
        <h5 class="text-[#002e5c] font-bold text-[13px] md:text-[15px] leading-tight mb-1">Animated Lessons</h5>
        <p class="text-gray-500 text-[10px] md:text-[12px] leading-tight">Visual learning made simple</p>
      </div>

      <!-- Feature 3 -->
      <div @click="toggleRotation(2)" class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer hover:-translate-y-1 active:scale-95 group">
        <div class="w-12 h-12 rounded-lg bg-[#4caf50] flex items-center justify-center text-white mb-3 transition-transform duration-500 group-hover:scale-110" :class="{ 'rotate-180': rotated[2] }">
          <span class="material-symbols-outlined text-[24px]">fact_check</span>
        </div>
        <h5 class="text-[#002e5c] font-bold text-[13px] md:text-[15px] leading-tight mb-1">Tests</h5>
        <p class="text-gray-500 text-[10px] md:text-[12px] leading-tight">Chapter-wise tests & instant results</p>
      </div>

      <!-- Feature 4 -->
      <div @click="toggleRotation(3)" class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer hover:-translate-y-1 active:scale-95 group">
        <div class="w-12 h-12 rounded-lg bg-[#1976d2] flex items-center justify-center text-white mb-3 transition-transform duration-500 group-hover:scale-110" :class="{ 'rotate-180': rotated[3] }">
          <span class="material-symbols-outlined text-[24px]">description</span>
        </div>
        <h5 class="text-[#002e5c] font-bold text-[13px] md:text-[15px] leading-tight mb-1">Smart Notes</h5>
        <p class="text-gray-500 text-[10px] md:text-[12px] leading-tight">Quick revision anytime, anywhere</p>
      </div>

      <!-- Feature 5 -->
      <div @click="toggleRotation(4)" class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer hover:-translate-y-1 active:scale-95 group">
        <div class="w-12 h-12 rounded-lg bg-[#ff9800] flex items-center justify-center text-white mb-3 transition-transform duration-500 group-hover:scale-110" :class="{ 'rotate-180': rotated[4] }">
          <span class="material-symbols-outlined text-[24px]">auto_stories</span>
        </div>
        <h5 class="text-[#002e5c] font-bold text-[13px] md:text-[15px] leading-tight mb-1">Karnataka Board</h5>
        <p class="text-gray-500 text-[10px] md:text-[12px] leading-tight">Complete syllabus aligned with board exams</p>
      </div>

      <!-- Feature 6 -->
      <div @click="toggleRotation(5)" class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer hover:-translate-y-1 active:scale-95 group">
        <div class="w-12 h-12 rounded-lg bg-[#673ab7] flex items-center justify-center text-white mb-3 transition-transform duration-500 group-hover:scale-110" :class="{ 'rotate-180': rotated[5] }">
          <span class="material-symbols-outlined text-[24px]">rocket_launch</span>
        </div>
        <h5 class="text-[#002e5c] font-bold text-[13px] md:text-[15px] leading-tight mb-1">19+ Skill Courses</h5>
        <p class="text-gray-500 text-[10px] md:text-[12px] leading-tight">Spoken English, Coding, AI & more</p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rotated = ref(Array(6).fill(false))

const toggleRotation = (index) => {
  rotated.value[index] = !rotated.value[index]
}
</script>

<style scoped>
</style>
