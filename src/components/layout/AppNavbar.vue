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
      <!-- Logo Container -->
      <!-- Logo Container -->
      <div class="flex items-center">
        <img 
          src="/logo v.png" 
          alt="Vista's Learning" 
          class="h-16 w-auto object-contain"
          style="mix-blend-mode: multiply;"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
