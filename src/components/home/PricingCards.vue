<script setup>
import { pricingPlans } from '../../data/pricingPlans'
import PricingCard from './PricingCard.vue'
import { useSubscriptionStore } from '../../stores/subscription'
import { useThemeStore } from '../../stores/theme'

const subscriptionStore = useSubscriptionStore()
const themeStore = useThemeStore()
</script>

<template>
  <div class="pricing-cards-grid group/grid flex flex-row md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-2.5 h-auto md:h-full pb-4 md:pb-0 md:pt-4 scrollbar-hide items-stretch md:items-stretch w-full px-4 md:px-0">
    <PricingCard 
      v-for="(plan, index) in pricingPlans" 
      :key="plan.id"
      :plan="plan"
      class="pricing-card-item shrink-0 min-w-[85vw] max-w-[85vw] min-h-[400px] md:min-h-0 md:min-w-0 md:w-full md:max-w-none snap-center md:snap-align-none mx-auto transition-all duration-300 md:group-hover/grid:opacity-50 md:hover:!opacity-100"
      :style="{ animationDelay: `${index * 120}ms` }"
    />
  </div>
</template>

<style scoped>
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pricing-card-item {
  animation: fadeSlideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.pricing-card-item-mobile {
  animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nav-arrow-mobile {
  background: rgba(139, 92, 246, 0.85);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.nav-arrow-mobile:active {
  transform: scale(0.9);
}

@keyframes shake {
  0%   { transform: translateX(0); }
  15%  { transform: translateX(-8px); }
  30%  { transform: translateX(8px); }
  45%  { transform: translateX(-8px); }
  60%  { transform: translateX(8px); }
  75%  { transform: translateX(-6px); }
  90%  { transform: translateX(6px); }
  100% { transform: translateX(0); }
}

.shake-row {
  animation: shake 0.6s ease-in-out;
}
</style>
