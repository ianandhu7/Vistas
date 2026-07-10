<template>
  <div class="w-full bg-[#f8f9fa] py-12 md:py-20 relative z-20 mt-[-20px] rounded-t-[40px] shadow-[0_-10px_30px_rgba(0,0,0,0.1)] border-t border-gray-100">
    <div class="max-w-[1300px] mx-auto px-4 md:px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-10">
        
        <!-- Left Side: Features -->
        <div class="w-full" :class="isVideoVisible ? 'md:w-[40%]' : 'md:w-full flex flex-col items-center md:items-start text-center md:text-left'">
          <h3 class="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            See an<br/>Actual <span class="text-[#311b92]">Vista</span> Class
          </h3>
          
          <ul class="space-y-6">
            <li class="flex items-center gap-4 text-xl font-bold text-gray-700 justify-center md:justify-start">
              <span class="material-symbols-outlined text-white bg-[#311b92] rounded-full p-1 shadow-md text-2xl">check</span>
              Real Teacher
            </li>
            <li class="flex items-center gap-4 text-xl font-bold text-gray-700 justify-center md:justify-start">
              <span class="material-symbols-outlined text-white bg-[#311b92] rounded-full p-1 shadow-md text-2xl">check</span>
              Real Lesson
            </li>
            <li class="flex items-center gap-4 text-xl font-bold text-gray-700 justify-center md:justify-start">
              <span class="material-symbols-outlined text-white bg-[#311b92] rounded-full p-1 shadow-md text-2xl">check</span>
              Real App Experience
            </li>
          </ul>

          <button 
            v-if="!isVideoVisible" 
            @click="isVideoVisible = true" 
            class="mt-10 bg-[#ffc107] hover:bg-[#ffb300] text-black font-black py-4 px-10 rounded-full shadow-[0_4px_20px_rgba(255,193,7,0.5)] transition-all flex items-center gap-2 text-lg uppercase tracking-wider mx-auto md:mx-0"
          >
            <span class="material-symbols-outlined text-2xl">play_circle</span>
            Watch Demo
          </button>
        </div>
        
        <!-- Right Side: Inline Video Player -->
        <transition name="fade">
          <div v-if="isVideoVisible" class="w-full md:w-[60%] flex flex-col items-center mt-8 md:mt-0">
            <div class="relative w-full aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-900">
              <button 
                @click="isVideoVisible = false" 
                class="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                <span class="material-symbols-outlined">close</span>
              </button>
              <video 
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                controls 
                autoplay 
                class="w-full h-full object-contain"
              ></video>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVideoVisible = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
