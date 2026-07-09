<template>
  <div class="w-full bg-[#f8f9fa] py-12 md:py-20 relative z-20 mt-[-20px] rounded-t-[40px] shadow-[0_-10px_30px_rgba(0,0,0,0.1)] border-t border-gray-100">
    <div class="max-w-[1300px] mx-auto px-4 md:px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-10">
        
        <!-- Left Side: Features -->
        <div class="w-full md:w-[40%]">
          <h3 class="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            See an<br/>Actual <span class="text-[#311b92]">Vista</span> Class
          </h3>
          
          <ul class="space-y-6">
            <li class="flex items-center gap-4 text-xl font-bold text-gray-700">
              <span class="material-symbols-outlined text-white bg-[#311b92] rounded-full p-1 shadow-md text-2xl">check</span>
              Real Teacher
            </li>
            <li class="flex items-center gap-4 text-xl font-bold text-gray-700">
              <span class="material-symbols-outlined text-white bg-[#311b92] rounded-full p-1 shadow-md text-2xl">check</span>
              Real Lesson
            </li>
            <li class="flex items-center gap-4 text-xl font-bold text-gray-700">
              <span class="material-symbols-outlined text-white bg-[#311b92] rounded-full p-1 shadow-md text-2xl">check</span>
              Real App Experience
            </li>
          </ul>
        </div>
        
        <!-- Right Side: Phone Mockup -->
        <div class="w-full md:w-[60%] flex flex-col items-center">
          <div class="relative w-full max-w-[700px] aspect-[2/1] bg-black rounded-[40px] border-[12px] border-gray-900 shadow-2xl overflow-hidden group cursor-pointer">
            <!-- Camera notch -->
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[25px] h-[100px] bg-gray-900 rounded-r-[20px] z-20"></div>
            
            <div class="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <img src="https://via.placeholder.com/700x350/333333/ffffff?text=Video+Player" alt="Video thumbnail" class="w-full h-full object-cover opacity-80" />
            </div>
            
            <!-- Video Overlay UI -->
            <div class="absolute top-4 left-10 text-white text-sm font-medium z-10 drop-shadow-md">
              Pythagoras Theorem
            </div>
            
            <div class="absolute inset-0 flex items-center justify-center z-10 transition-transform group-hover:scale-110">
              <div class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
                <span class="material-symbols-outlined text-white text-4xl md:text-5xl ml-1">play_arrow</span>
              </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full z-10 overflow-hidden">
              <div class="w-[45%] h-full bg-white rounded-full"></div>
            </div>
          </div>
          
          <button class="mt-[-25px] relative z-30 bg-[#ffc107] hover:bg-[#ffb300] text-black font-black py-4 px-12 rounded-full shadow-[0_10px_25px_rgba(255,193,7,0.4)] transition-all flex items-center gap-2 text-xl md:text-2xl uppercase tracking-wider">
            <span class="material-symbols-outlined text-3xl">play_circle</span>
            Watch Demo
          </button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
