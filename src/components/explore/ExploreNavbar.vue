<template>
  <div class="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div class="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="flex flex-col items-center mr-2">
          <div class="w-8 h-8 md:w-10 md:h-10 relative flex justify-center items-center">
            <svg viewBox="0 0 100 100" class="w-full h-full">
              <path d="M10,20 L90,20 L50,90 Z" fill="#003b6d"/>
              <path d="M25,25 L75,25 L50,75 Z" fill="#8bc34a"/>
              <path d="M40,30 L60,30 L50,55 Z" fill="#ffffff"/>
            </svg>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-[#004a8b] text-[18px] md:text-[22px] font-black leading-none tracking-tight">Vista's</span>
          <span class="text-[#004a8b] text-[18px] md:text-[22px] font-black leading-none tracking-tight">Learning</span>
          <span class="text-[8px] md:text-[10px] text-gray-500 font-semibold tracking-widest mt-0.5">Quality Education For All</span>
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
