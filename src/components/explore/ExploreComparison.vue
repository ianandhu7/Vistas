<template>
  <div class="relative w-full h-full flex flex-col justify-center">
    <!-- Comparison Container -->
    <div class="flex flex-col md:flex-row gap-4 relative">
      
      <!-- Left: Without Vista -->
      <div class="bg-[#fce4e4] rounded-2xl p-4 md:p-5 w-full flex flex-col justify-between relative shadow-sm border border-red-100 min-h-[160px] md:min-h-[180px]">
        <h4 class="text-red-500 font-black text-sm md:text-lg uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
          Without Vista <span class="text-base md:text-xl">😞</span>
        </h4>
        
        <div class="flex flex-col gap-2 md:gap-3 z-10 w-[65%] mb-1 md:mb-2">
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-red-500 text-[14px] md:text-[18px] mt-0.5">cancel</span>
            <p class="text-[11px] md:text-[13px] text-gray-700 font-medium leading-tight">Studies harder<br/>but understands less</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-red-500 text-[14px] md:text-[18px] mt-0.5">cancel</span>
            <p class="text-[11px] md:text-[13px] text-gray-700 font-medium leading-tight">Forgets quickly,<br/>scores less</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-red-500 text-[14px] md:text-[18px] mt-0.5">cancel</span>
            <p class="text-[11px] md:text-[13px] text-gray-700 font-medium leading-tight">Exam stress<br/>every time</p>
          </div>
        </div>
        
        <!-- Sad Boy Image -->
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=300&auto=format&fit=crop" alt="Stressed student" class="absolute bottom-0 right-4 w-[40%] md:w-[30%] max-w-[130px] object-cover h-[100px] md:h-[130px] rounded-t-2xl shadow-sm" />
      </div>

      <!-- Center VS Badge -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#004a8b] rounded-full border-4 border-white flex items-center justify-center text-white font-black text-sm md:text-xl z-20 shadow-md">
        VS
      </div>

      <!-- Right: With Vista -->
      <div class="bg-[#e8f5e9] rounded-2xl p-4 md:p-5 w-full flex flex-col justify-between relative shadow-sm border border-green-100 min-h-[160px] md:min-h-[180px]">
        <h4 class="text-green-600 font-black text-sm md:text-lg uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
          With Vista's Learning <span class="text-base md:text-xl">🤩</span>
        </h4>
        
        <div class="flex flex-col gap-2 md:gap-3 z-10 w-[65%] mb-1 md:mb-2">
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-green-600 text-[14px] md:text-[18px] mt-0.5">check_circle</span>
            <p class="text-[11px] md:text-[13px] text-gray-700 font-medium leading-tight">Understands<br/>concepts clearly</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-green-600 text-[14px] md:text-[18px] mt-0.5">check_circle</span>
            <p class="text-[11px] md:text-[13px] text-gray-700 font-medium leading-tight">Remembers better,<br/>scores higher</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-green-600 text-[14px] md:text-[18px] mt-0.5">check_circle</span>
            <p class="text-[11px] md:text-[13px] text-gray-700 font-medium leading-tight">Walks into exams<br/>with confidence</p>
          </div>
        </div>
        
        <!-- Happy Boy Image -->
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=300&auto=format&fit=crop" alt="Happy student" class="absolute bottom-0 right-4 w-[40%] md:w-[30%] max-w-[130px] object-cover h-[100px] md:h-[130px] rounded-t-2xl shadow-sm" />
      </div>
      
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
