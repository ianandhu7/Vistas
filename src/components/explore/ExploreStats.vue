<template>
  <div class="bg-[#003b6d] rounded-2xl md:rounded-full py-4 md:py-6 px-6 md:px-12 w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-6 shadow-xl relative z-20">
    
    <!-- Stat 1 -->
    <div class="flex items-center gap-3 md:gap-4 w-[45%] md:w-auto cursor-pointer group" @click="toggleIcon(0)">
      <div 
        class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 transition-all duration-500 group-active:scale-95"
        :class="clicked[0] ? 'bg-[#ffb300] rounded-lg rotate-[360deg]' : 'bg-white rounded-full'"
      >
        <span 
          class="material-symbols-outlined text-[20px] md:text-[24px] transition-colors duration-500"
          :class="clicked[0] ? 'text-white' : 'text-[#003b6d]'"
        >domain</span>
      </div>
      <div class="flex flex-col text-white transition-transform duration-300 group-hover:translate-x-1">
        <span class="font-black text-sm md:text-xl leading-tight">650+</span>
        <span class="text-[10px] md:text-xs font-medium text-blue-100 uppercase tracking-wider leading-tight">Schools</span>
      </div>
    </div>
    
    <!-- Divider -->
    <div class="hidden md:block w-px h-10 bg-blue-400/30"></div>

    <!-- Stat 2 -->
    <div class="flex items-center gap-3 md:gap-4 w-[45%] md:w-auto cursor-pointer group" @click="toggleIcon(1)">
      <div 
        class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 transition-all duration-500 group-active:scale-95"
        :class="clicked[1] ? 'bg-[#e91e63] rounded-lg rotate-[360deg]' : 'bg-white rounded-full'"
      >
        <span 
          class="material-symbols-outlined text-[20px] md:text-[24px] transition-colors duration-500"
          :class="clicked[1] ? 'text-white' : 'text-[#e91e63]'"
        >play_circle</span>
      </div>
      <div class="flex flex-col text-white transition-transform duration-300 group-hover:translate-x-1">
        <span class="font-black text-sm md:text-xl leading-tight">15,000+</span>
        <span class="text-[10px] md:text-xs font-medium text-blue-100 uppercase tracking-wider leading-tight">Videos</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="hidden md:block w-px h-10 bg-blue-400/30"></div>

    <!-- Stat 3 -->
    <div class="flex items-center gap-3 md:gap-4 w-[45%] md:w-auto cursor-pointer group" @click="toggleIcon(2)">
      <div 
        class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 transition-all duration-500 group-active:scale-95"
        :class="clicked[2] ? 'bg-[#4caf50] rounded-lg rotate-[360deg]' : 'bg-white rounded-full'"
      >
        <span 
          class="material-symbols-outlined text-[20px] md:text-[24px] transition-colors duration-500"
          :class="clicked[2] ? 'text-white' : 'text-[#4caf50]'"
        >school</span>
      </div>
      <div class="flex flex-col text-white transition-transform duration-300 group-hover:translate-x-1">
        <span class="font-black text-sm md:text-xl leading-tight">19+</span>
        <span class="text-[10px] md:text-xs font-medium text-blue-100 uppercase tracking-wider leading-tight">Courses</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="hidden md:block w-px h-10 bg-blue-400/30"></div>

    <!-- Stat 4 -->
    <div class="flex items-center gap-3 md:gap-4 w-[45%] md:w-auto cursor-pointer group" @click="toggleIcon(3)">
      <div 
        class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 transition-all duration-500 group-active:scale-95"
        :class="clicked[3] ? 'bg-[#673ab7] rounded-lg rotate-[360deg]' : 'bg-white rounded-full'"
      >
        <span 
          class="material-symbols-outlined text-[20px] md:text-[24px] transition-colors duration-500"
          :class="clicked[3] ? 'text-white' : 'text-[#673ab7]'"
        >group</span>
      </div>
      <div class="flex flex-col text-white transition-transform duration-300 group-hover:translate-x-1">
        <span class="font-black text-sm md:text-xl leading-tight">Thousands</span>
        <span class="text-[10px] md:text-xs font-medium text-blue-100 uppercase tracking-wider leading-tight">of Students</span>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const clicked = ref([false, false, false, false])

const toggleIcon = (index) => {
  clicked.value[index] = !clicked.value[index]
}
</script>

<style scoped>
</style>
