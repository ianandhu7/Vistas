<template>
  <div class="w-full bg-[#f4f8fb] border-t border-[#004a8b]/10 relative z-30 shrink-0 py-4">
    <div class="w-full px-4 md:px-[48px] flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Left: Icon & Text -->
      <div class="flex items-center gap-4">
        
        <!-- Animated Gift Box with Medals -->
        <div class="relative w-12 h-12 flex items-center justify-center shrink-0">
          <!-- Box Icon -->
          <span class="material-symbols-outlined text-[36px] text-[#004a8b] gift-box relative z-10 drop-shadow-md">redeem</span>
          
          <!-- Medals popping out -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span class="absolute text-[20px] drop-shadow-sm medal-1">🥇</span>
            <span class="absolute text-[16px] drop-shadow-sm medal-2">🥈</span>
          </div>
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
/* Box Shake Animation */
@keyframes shake {
  0%, 100% { transform: rotate(0deg) scale(1); }
  10%, 30%, 50%, 70%, 90% { transform: rotate(-8deg) scale(1.1); }
  20%, 40%, 60%, 80% { transform: rotate(8deg) scale(1.1); }
}

/* Gold Medal Float */
@keyframes floatUp1 {
  0% { transform: translate(0, 10px) scale(0); opacity: 0; }
  15% { transform: translate(-18px, -15px) scale(1); opacity: 1; }
  60% { transform: translate(-22px, -30px) scale(1.2) rotate(-15deg); opacity: 1; }
  100% { transform: translate(-25px, -45px) scale(1) rotate(-20deg); opacity: 0; }
}

/* Silver Medal Float */
@keyframes floatUp2 {
  0% { transform: translate(0, 10px) scale(0); opacity: 0; }
  15% { transform: translate(20px, -10px) scale(1); opacity: 1; }
  60% { transform: translate(28px, -25px) scale(1.1) rotate(15deg); opacity: 1; }
  100% { transform: translate(35px, -40px) scale(1) rotate(25deg); opacity: 0; }
}

.gift-box {
  animation: shake 3s infinite ease-in-out;
  transform-origin: bottom center;
}

.medal-1 {
  animation: floatUp1 3s infinite ease-out;
  animation-delay: 0.2s;
  opacity: 0;
}

.medal-2 {
  animation: floatUp2 3s infinite ease-out;
  animation-delay: 0.6s;
  opacity: 0;
}
</style>
