<script setup>
import { computed } from 'vue'
import { useSubscriptionStore } from '../../stores/subscription'
import { useThemeStore } from '../../stores/theme'

const props = defineProps({
  plan: {
    type: Object,
    required: true
  }
})

const subscriptionStore = useSubscriptionStore()
const themeStore = useThemeStore()

const planChecklist = [
  'All Subjects (K-10)',
  '15,000+ Videos',
  'Live & Recorded Classes',
  'Study Materials & PDFs',
  'Tests & Assessments',
  'Spoken English',
  'Coding',
  'Communication Skills',
  'Creative Learning',
  'Future Skills & More',
  'Progress Tracking'
]

const isFeatureIncluded = (feat) => {
  if (props.plan.id === '14months') return true
  
  const includedFeatures = [
    'All Subjects (K-10)',
    '15,000+ Videos',
    'Study Materials & PDFs',
    'Progress Tracking'
  ]
  return includedFeatures.includes(feat)
}
</script>

<template>
  <div 
    :id="'plan-' + plan.id"
    @click="subscriptionStore.handlePlanSelect(plan.id)"
    class="pricing-plan-card relative rounded-[16px] p-4 md:p-3 flex flex-col gap-4 md:gap-1.5 cursor-pointer transition-all duration-300 shadow-xl border w-full h-full justify-between md:justify-start select-none"
    :class="plan.id === '14months' 
      ? 'mobile-plan-best border-[1.5px] border-[#EAB308]' 
      : plan.id === '6months'
        ? 'mobile-plan-standard-purple border border-[#6D28D9]'
        : 'mobile-plan-standard-blue border border-[#3D2B89]'"
    :style="plan.id === '14months'
      ? { background: 'linear-gradient(145deg, #1a0a3d 0%, #2a1154 40%, #1a0a3d 100%)' }
      : plan.id === '6months'
        ? { background: 'linear-gradient(145deg, #0d1a3d 0%, #0e1e52 40%, #0d1a3d 100%)' }
        : { background: 'linear-gradient(145deg, #0d0828 0%, #160e3a 40%, #0d0828 100%)' }"
  >
    <!-- Top glow overlay -->
    <div 
      class="absolute top-0 left-0 right-0 h-24 rounded-t-[16px] pointer-events-none"
      :style="plan.id === '14months' 
        ? { background: 'linear-gradient(to bottom, rgba(245,166,35,0.20) 0%, transparent 100%)' }
        : plan.id === '6months'
          ? { background: 'linear-gradient(to bottom, rgba(59,130,246,0.20) 0%, transparent 100%)' }
          : { background: 'linear-gradient(to bottom, rgba(124,58,237,0.18) 0%, transparent 100%)' }"
    ></div>

    <!-- Most Popular Ribbon (Centered Top) -->
    <div v-if="plan.id === '14months'" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EAB308] text-black font-black text-[9px] uppercase tracking-widest px-6 py-1 shadow-md text-center" style="clip-path: polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%);">
      MOST POPULAR
    </div>

    <!-- Horizontal Split layout matching mockup -->
    <div class="flex flex-row gap-3 md:gap-1.5 justify-between relative z-10">
      <!-- Left side: Price details -->
      <div class="flex flex-col justify-center w-[40%] md:w-[36%] shrink-0 gap-1.5 md:gap-0.5 pl-1 md:pl-0.5">
        <span v-if="plan.id === '14months'" class="text-[8px] md:text-[8px] font-black text-[var(--accent-gold)] uppercase tracking-wider">Best Value Plan</span>
        <span v-else class="text-[8px] md:text-[8px] font-black text-[#A78BFA] uppercase tracking-wider">Standard Plan</span>
        
        <h3 class="text-[14px] md:text-[11px] font-black leading-none text-white">{{ plan.durationName }} Plan</h3>
        <div class="flex items-center gap-1.5 md:gap-0.5 mt-1 md:mt-0.5">
          <span class="text-[26px] md:text-[20px] font-black leading-none" :class="plan.id === '14months' ? 'text-[var(--accent-gold)]' : 'text-[#A78BFA]'">{{ plan.price }}</span>
        </div>
        <div class="flex items-center gap-1.5 md:gap-0.5">
          <span v-if="plan.originalPrice" class="text-[9px] md:text-[8px] font-bold text-gray-500 line-through">{{ plan.originalPrice }}</span>
          <div class="inline-flex bg-[#4C1D95] text-white text-[6px] md:text-[5.5px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
            LIMITED TIME OFFER
          </div>
        </div>
      </div>

      <!-- Right side: Benefits checklist (2 columns) -->
      <div class="flex-grow grid grid-cols-2 gap-x-1 md:gap-x-1 gap-y-1.5 md:gap-y-0.5 py-1 md:py-0.5">
        <div v-for="feat in planChecklist" :key="feat" class="flex items-start gap-1 md:gap-1">
          <div 
            class="w-3 h-3 md:w-3 md:h-3 rounded-[3px] flex items-center justify-center shrink-0 mt-0.5"
            :class="isFeatureIncluded(feat) 
              ? 'bg-[#4C1D95]/40 border border-[#8B5CF6]/50' 
              : 'bg-red-500/10 border border-red-500/30'"
          >
            <span 
              class="material-symbols-outlined text-[8px] md:text-[8px] font-bold"
              :class="isFeatureIncluded(feat) ? 'text-[#A78BFA]' : 'text-red-400'"
            >
              {{ isFeatureIncluded(feat) ? 'check' : 'close' }}
            </span>
          </div>
          <span 
            class="text-[7px] md:text-[7.5px] font-medium leading-tight"
            :class="isFeatureIncluded(feat) ? 'text-gray-300' : 'text-gray-500 line-through opacity-60'"
          >
            {{ feat }}
          </span>
        </div>
      </div>
    </div>

    <!-- Active Subscription Banner (If existing user is subscribed) -->
    <template v-if="subscriptionStore.subscriptionCheckDone && subscriptionStore.existingSubscription">
      <div class="relative z-10 w-full rounded-xl bg-green-500/15 border border-green-500/40 px-3 py-1.5 flex items-center gap-2">
        <span class="material-symbols-outlined text-green-400 text-[14px] shrink-0">verified</span>
        <span class="text-[9px] font-bold text-green-400 leading-tight">Active subscription detected</span>
      </div>
      <a
        href="https://www.student.vistaslearning.com/guest/"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full py-2 md:py-1.5 text-[9px] font-black tracking-widest transition-all duration-300 relative z-10 border border-transparent shadow-lg rounded-full overflow-hidden flex items-center justify-center gap-1.5 bg-green-500 text-white hover:brightness-110 active:scale-95"
      >
        <span class="material-symbols-outlined text-[12px]">open_in_new</span>
        GO TO PORTAL
      </a>
    </template>

    <!-- Subscribe Button -->
    <button
      v-else
      @click.stop="subscriptionStore.handlePlanSelect(plan.id)"
      :class="[
        'w-full py-2.5 md:py-2 px-3 text-[9px] md:text-[8px] lg:text-[9.5px] font-black tracking-widest transition-all duration-300 relative z-10 border border-white/80 shadow-lg rounded-full uppercase flex items-center justify-center gap-2.5 active:scale-95 md:mt-auto',
        plan.id !== '14months'
          ? 'bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] text-white hover:brightness-110 shadow-purple-500/20'
          : 'bg-gradient-to-r from-[#FCD34D] via-[#F59E0B] to-[#D97706] text-black hover:brightness-110 shadow-amber-500/20'
      ]"
    >
      <!-- Left icon for standard plans -->
      <span v-if="plan.id !== '14months'" class="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
        <svg class="w-2 md:w-2.5 h-2 md:h-2.5 text-[#6D28D9]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </span>

      <span>SUBSCRIBE NOW</span>

      <!-- Right icon for best value plan -->
      <span v-if="plan.id === '14months'" class="w-4 h-4 md:w-5 md:h-5 bg-black rounded-full flex items-center justify-center shrink-0 shadow-sm">
        <svg class="w-2 md:w-2.5 h-2 md:h-2.5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </span>
    </button>

    <!-- Trust Badges inside Plan Card (hidden on desktop to reduce height) -->
    <div class="md:hidden border-t border-[#2D1B69] pt-3 flex justify-between items-center text-center gap-2 mt-auto relative z-10">
      <div class="flex items-center justify-center gap-1.5 flex-1">
        <span class="material-symbols-outlined text-[14px] text-[var(--accent-gold)]">shield</span>
        <span class="text-[6.5px] font-medium text-gray-400 text-left leading-tight">100% Safe<br>Payments</span>
      </div>
      <div class="w-px h-6 bg-[#2D1B69]"></div>
      <div class="flex items-center justify-center gap-1.5 flex-1">
        <span class="material-symbols-outlined text-[14px] text-[var(--accent-gold)]">support_agent</span>
        <span class="text-[6.5px] font-medium text-gray-400 text-left leading-tight">24x7 Learning<br>Support</span>
      </div>
      <div class="w-px h-6 bg-[#2D1B69]"></div>
      <div class="flex items-center justify-center gap-1.5 flex-1">
        <span class="material-symbols-outlined text-[14px] text-[var(--accent-gold)]">devices</span>
        <span class="text-[6.5px] font-medium text-gray-400 text-left leading-tight">Access on<br>Mobile, Tablet & TV</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes goldPulseMobile {
  0%, 100% {
    box-shadow: 0 0 15px rgba(234, 179, 8, 0.35), 0 0 35px rgba(234, 179, 8, 0.15), inset 0 0 15px rgba(234, 179, 8, 0.06);
    border-color: rgba(234, 179, 8, 0.75);
  }
  50% {
    box-shadow: 0 0 30px rgba(234, 179, 8, 0.7), 0 0 60px rgba(234, 179, 8, 0.35), inset 0 0 25px rgba(234, 179, 8, 0.2);
    border-color: rgba(251, 191, 36, 1);
  }
}

@keyframes purplePulseMobile {
  0%, 100% {
    box-shadow: 0 0 12px rgba(139, 92, 246, 0.25), 0 0 25px rgba(139, 92, 246, 0.1), inset 0 0 12px rgba(139, 92, 246, 0.04);
    border-color: rgba(109, 40, 217, 0.6);
  }
  50% {
    box-shadow: 0 0 24px rgba(139, 92, 246, 0.55), 0 0 45px rgba(139, 92, 246, 0.25), inset 0 0 20px rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.95);
  }
}

@keyframes bluePulseMobile {
  0%, 100% {
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.2), 0 0 20px rgba(99, 102, 241, 0.08), inset 0 0 10px rgba(99, 102, 241, 0.03);
    border-color: rgba(61, 43, 137, 0.6);
  }
  50% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5), 0 0 38px rgba(99, 102, 241, 0.2), inset 0 0 18px rgba(99, 102, 241, 0.12);
    border-color: rgba(99, 102, 241, 0.9);
  }
}

.mobile-plan-best {
  animation: goldPulseMobile 3s ease-in-out infinite;
}

.mobile-plan-standard-purple {
  animation: purplePulseMobile 3.5s ease-in-out infinite;
}

.mobile-plan-standard-blue {
  animation: bluePulseMobile 4s ease-in-out infinite;
}

/* Premium Desktop Hover Effects */
@media (min-width: 768px) {
  .pricing-plan-card {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Hover Lift & Glow based on plan types */
  .pricing-plan-card:hover {
    transform: translateY(-6px) scale(1.015);
  }

  /* Most Popular Glow */
  .pricing-plan-card.mobile-plan-best:hover {
    border-color: #FBBF24 !important;
    box-shadow: 0 20px 35px rgba(234, 179, 8, 0.22), 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(234, 179, 8, 0.1);
  }

  /* Standard/Other Plans Glow */
  .pricing-plan-card.mobile-plan-standard-purple:hover {
    border-color: #A78BFA !important;
    box-shadow: 0 20px 35px rgba(139, 92, 246, 0.22), 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(139, 92, 246, 0.08);
  }

  .pricing-plan-card.mobile-plan-standard-blue:hover {
    border-color: #818CF8 !important;
    box-shadow: 0 20px 35px rgba(99, 102, 241, 0.22), 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(99, 102, 241, 0.08);
  }

  /* Button Shimmer / Scale on hover of the card */
  .pricing-plan-card:hover button {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
  }

  .pricing-plan-card.mobile-plan-best:hover button {
    box-shadow: 0 8px 20px rgba(234, 179, 8, 0.4);
  }
}
</style>
