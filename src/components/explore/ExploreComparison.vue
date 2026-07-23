<template>
  <div class="relative w-full h-full flex flex-col justify-start pt-2">
    <!-- Premium White Container Card wrapper -->
    <div class="bg-white rounded-3xl p-3 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#eef2f7] w-full flex-1 flex flex-col">
      <!-- Comparison Container -->
      <div class="flex flex-row items-stretch gap-2 md:gap-4 relative flex-1">
        
        <!-- Left: Without Vista -->
        <div class="bg-[#fce4e4] rounded-2xl p-2 md:p-5 w-1/2 flex flex-col justify-between relative shadow-sm border border-red-100 min-h-[160px] md:min-h-[220px] overflow-hidden">
          <div>
            <h4 class="text-red-500 font-black text-[10px] md:text-lg uppercase tracking-wider mb-2 md:mb-4 flex flex-wrap items-center gap-1">
              Without Vista <span class="text-sm md:text-xl">😞</span>
            </h4>
            
            <div class="flex flex-col gap-1.5 md:gap-3 z-10 w-[48%] md:w-[50%] mb-1 md:mb-2">
              <div class="flex items-start gap-1 md:gap-2">
                <span class="material-symbols-outlined text-red-500 text-[10px] md:text-[18px] mt-0.5">cancel</span>
                <p class="text-[8px] md:text-[13px] text-gray-700 font-medium leading-tight">Studies harder<br/>but understands less</p>
              </div>
              <div class="flex items-start gap-1 md:gap-2">
                <span class="material-symbols-outlined text-red-500 text-[10px] md:text-[18px] mt-0.5">cancel</span>
                <p class="text-[8px] md:text-[13px] text-gray-700 font-medium leading-tight">Forgets quickly,<br/>scores less</p>
              </div>
              <div class="flex items-start gap-1 md:gap-2">
                <span class="material-symbols-outlined text-red-500 text-[10px] md:text-[18px] mt-0.5">cancel</span>
                <p class="text-[8px] md:text-[13px] text-gray-700 font-medium leading-tight">Exam stress<br/>every time</p>
              </div>
            </div>
          </div>
          
          <!-- Sad Boy Image -->
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=300&auto=format&fit=crop" alt="Stressed student" class="absolute bottom-0 right-0 w-[50%] md:w-[48%] max-w-[200px] object-cover h-[90px] md:h-[220px] rounded-tl-3xl shadow-sm" />
        </div>

        <!-- Center VS Badge -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 bg-[#004a8b] rounded-full border-2 md:border-4 border-white flex items-center justify-center text-white font-black text-[10px] md:text-xl z-20 shadow-md">
          VS
        </div>

        <!-- Right: With Vista -->
        <div class="bg-[#e8f5e9] rounded-2xl p-2 md:p-5 w-1/2 flex flex-col justify-between relative shadow-sm border border-green-100 min-h-[160px] md:min-h-[220px] overflow-hidden">
          <div>
            <h4 class="text-green-600 font-black text-[10px] md:text-lg uppercase tracking-wider mb-2 md:mb-4 flex flex-wrap items-center gap-1">
              With Vista's Learning <span class="text-sm md:text-xl">🤩</span>
            </h4>
            
            <div class="flex flex-col gap-1.5 md:gap-3 z-10 w-[48%] md:w-[50%] mb-1 md:mb-2">
              <div class="flex items-start gap-1 md:gap-2">
                <span class="material-symbols-outlined text-green-600 text-[10px] md:text-[18px] mt-0.5">check_circle</span>
                <p class="text-[8px] md:text-[13px] text-gray-700 font-medium leading-tight">Understands<br/>concepts clearly</p>
              </div>
              <div class="flex items-start gap-1 md:gap-2">
                <span class="material-symbols-outlined text-green-600 text-[10px] md:text-[18px] mt-0.5">check_circle</span>
                <p class="text-[8px] md:text-[13px] text-gray-700 font-medium leading-tight">Remembers better,<br/>scores higher</p>
              </div>
              <div class="flex items-start gap-1 md:gap-2">
                <span class="material-symbols-outlined text-green-600 text-[10px] md:text-[18px] mt-0.5">check_circle</span>
                <p class="text-[8px] md:text-[13px] text-gray-700 font-medium leading-tight">Walks into exams<br/>with confidence</p>
              </div>
            </div>
          </div>
          
          <!-- Happy Boy Image -->
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=300&auto=format&fit=crop" alt="Happy student" class="absolute bottom-0 right-0 w-[50%] md:w-[48%] max-w-[200px] object-cover h-[90px] md:h-[220px] rounded-tl-3xl shadow-sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
