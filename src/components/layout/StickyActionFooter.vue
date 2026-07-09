<template>
  <div class="w-full bg-[#f4f8fb] border-t border-[#004a8b]/10 relative z-30 shrink-0 py-4">
    <div class="w-full px-4 md:px-[48px] flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Left: Icon & Text -->
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 flex items-center justify-center text-[#5c6999] shrink-0">
          <span class="material-symbols-outlined text-[32px] text-[#8692c8]">redeem</span>
        </div>
        <div class="flex flex-col">
          <h4 class="text-[#004a8b] text-[14px] font-bold">Start Your Child's Learning Journey Today!</h4>
          <p class="text-[#004a8b] text-[11px] font-medium opacity-80 mt-0.5">Join thousands of parents who trust Vista's Learning for their child's education.</p>
        </div>
      </div>
      
      <!-- Right: Button -->
      <button 
        @click="$emit('viewCourses')"
        class="bg-[#004a8b] hover:bg-[#003666] text-white text-[12px] font-bold px-8 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
      >
        View Courses
      </button>

    </div>
  </div>
</template>

<script setup>
defineEmits(['viewCourses'])
</script>

<style scoped>
</style>
