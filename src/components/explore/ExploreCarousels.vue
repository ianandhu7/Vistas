<template>
  <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 flex flex-col gap-12 pb-24">
    
    <!-- Top Achievers -->
    <div class="flex flex-col">
      <div class="flex items-center justify-center gap-4 mb-8">
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
        <button class="absolute left-0 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform -translate-x-1/2">
          <span class="material-symbols-outlined text-[18px]">chevron_left</span>
        </button>
        
        <div class="w-full flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 py-2 px-6">
          
          <!-- Student 1 -->
          <div class="flex-1 min-w-[250px] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4">
            <div class="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
              <img src="https://via.placeholder.com/100x100?text=Girl" alt="Ananya" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <span class="text-[#311b92] font-bold text-[13px]">State 2nd Rank</span>
              <span class="text-gray-900 font-black text-[12px] leading-tight">624 / 625 Marks</span>
              <span class="text-gray-500 text-[9px] mt-1">Karnataka State Board 2024</span>
            </div>
          </div>
          
          <!-- Student 2 -->
          <div class="flex-1 min-w-[250px] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4">
            <div class="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
              <img src="https://via.placeholder.com/100x100?text=Boy" alt="Student" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <span class="text-[#311b92] font-bold text-[13px]">District Topper</span>
              <span class="text-gray-900 font-black text-[12px] leading-tight">618 / 625 Marks</span>
              <span class="text-gray-500 text-[9px] mt-1">Karnataka State Board 2024</span>
            </div>
          </div>
          
          <!-- Student 3 -->
          <div class="flex-1 min-w-[250px] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4">
            <div class="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
              <img src="https://via.placeholder.com/100x100?text=Girl" alt="Student" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <span class="text-[#311b92] font-bold text-[13px]">98.6% Overall</span>
              <span class="text-gray-900 font-black text-[12px] leading-tight">Karnataka State Board 2024</span>
            </div>
          </div>
          
        </div>
        
        <!-- Right Button -->
        <button class="absolute right-0 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform translate-x-1/2">
          <span class="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
      </div>
    </div>
    
    <!-- Parents Speak -->
    <div class="flex flex-col mt-4">
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="h-px bg-purple-200 w-16 md:w-32 hidden md:block"></div>
        <div class="flex items-center gap-2">
          <span class="text-xl text-red-500">❤️</span>
          <h3 class="text-xl md:text-2xl font-bold text-[#1e0a4f] text-center">Parents Speak</h3>
        </div>
        <div class="h-px bg-purple-200 w-16 md:w-32 hidden md:block"></div>
      </div>
      
      <!-- Testimonials Carousel -->
      <div class="relative w-full flex items-center group">
        <!-- Left Button -->
        <button class="absolute left-0 w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform -translate-x-1/2">
          <span class="material-symbols-outlined text-[14px]">chevron_left</span>
        </button>
        
        <div class="w-full flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 py-2 px-4">
          
          <!-- Parent 1 -->
          <div class="flex-1 min-w-[280px] bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img src="https://via.placeholder.com/50x50?text=Mom" alt="Parent" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <div class="flex text-[#ffb300] text-[10px] mb-1">
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
              </div>
              <p class="text-gray-600 text-[10px] leading-tight mb-2">My son improved from 45% to 90% in just 3 months. Concepts are so well explained!</p>
              <span class="text-[#311b92] font-bold text-[10px]">- Priya, Parent</span>
            </div>
          </div>
          
          <!-- Parent 2 -->
          <div class="flex-1 min-w-[280px] bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img src="https://via.placeholder.com/50x50?text=Mom" alt="Parent" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <div class="flex text-[#ffb300] text-[10px] mb-1">
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
              </div>
              <p class="text-gray-600 text-[10px] leading-tight mb-2">Finally my daughter enjoys studying now! The classes and notes are amazing.</p>
              <span class="text-[#311b92] font-bold text-[10px]">- Kavitha, Parent</span>
            </div>
          </div>
          
          <!-- Parent 3 -->
          <div class="flex-1 min-w-[280px] bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img src="https://via.placeholder.com/50x50?text=Dad" alt="Parent" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <div class="flex text-[#ffb300] text-[10px] mb-1">
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
                <span class="material-symbols-outlined text-[12px] font-bold">star</span>
              </div>
              <p class="text-gray-600 text-[10px] leading-tight mb-2">Tests and instant results help us track our child's progress easily.</p>
              <span class="text-[#311b92] font-bold text-[10px]">- Rajesh, Parent</span>
            </div>
          </div>
          
        </div>
        
        <!-- Right Button -->
        <button class="absolute right-0 w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center z-10 shadow-md transform translate-x-1/2">
          <span class="material-symbols-outlined text-[14px]">chevron_right</span>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
