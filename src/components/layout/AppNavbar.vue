<script setup>
import { useThemeStore } from '../../stores/theme'
import { useSubscriptionStore } from '../../stores/subscription'

const themeStore = useThemeStore()
const subscriptionStore = useSubscriptionStore()

const scrollToPlans = () => {
  subscriptionStore.handlePlanSelect('14months')
}
</script>

<template>
  <header class="w-full py-2 z-50 sticky top-0 bg-transparent">
    <div class="w-full px-4 md:px-[48px] flex items-center justify-between">
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
    </div>
  </header>
</template>

<style scoped>
</style>
