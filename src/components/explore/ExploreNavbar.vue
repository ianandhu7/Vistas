<template>
  <div class="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div class="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <!-- Icon (clipped to only show the V part) -->
        <div class="h-10 w-8 md:h-12 md:w-10 relative overflow-hidden flex-shrink-0">
          <img 
            src="/light-logo.webp" 
            alt="V" 
            class="h-full w-auto object-left object-cover max-w-none" 
          />
        </div>
        <!-- Text exactly as in design -->
        <div class="flex flex-col justify-center">
          <h1 class="text-[#004a8b] font-black text-[18px] md:text-[22px] leading-[1.1] tracking-tight">
            Vista's<br/>Learning
          </h1>
          <p class="text-[#004a8b] text-[7px] md:text-[8px] font-bold mt-0.5 tracking-wide">
            Quality Education For All
          </p>
        </div>
      </div>
      
      <!-- Trusted By Badge -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full border border-purple-200 flex items-center justify-center">
          <span class="material-symbols-outlined text-purple-700 text-[18px]">verified_user</span>
        </div>
        <div class="flex flex-col text-right md:text-left">
          <span class="text-[10px] text-gray-500 font-medium leading-none">Trusted by</span>
          <span class="text-[14px] text-gray-800 font-bold leading-none mt-0.5">650+ Schools</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
