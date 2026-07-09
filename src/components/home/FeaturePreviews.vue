<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../../stores/theme'

const themeStore = useThemeStore()
const showSocialProof = ref(true)
const showChat = ref(true)

const closeSocialProof = () => showSocialProof.value = false
const closeChat = () => showChat.value = false
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-[9999]">
    
    <!-- FEATURE 1: Social Proof Notification (Bottom Left) -->
    <Transition name="slide-up">
      <div v-if="showSocialProof" 
           class="absolute bottom-6 left-6 max-w-[320px] rounded-xl p-3 shadow-2xl flex items-center gap-4 pointer-events-auto border backdrop-blur-md"
           :class="themeStore.theme === 'dark' ? 'bg-[#1E1B4B]/90 border-[#8B5CF6]/30' : 'bg-white/90 border-gray-200'"
      >
        <button @click="closeSocialProof" class="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center shadow-md hover:bg-red-600 transition-colors">
          <span class="material-symbols-outlined text-[12px] font-bold">close</span>
        </button>
        <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#FBBF24] flex items-center justify-center shrink-0 shadow-inner">
          <span class="material-symbols-outlined text-white text-[20px]">school</span>
        </div>
        <div class="flex flex-col">
          <span class="text-[11px] font-bold" :class="themeStore.theme === 'dark' ? 'text-white' : 'text-gray-900'">
            Rahul from Bangalore
          </span>
          <span class="text-[9px] font-medium" :class="themeStore.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
            just subscribed to the <span class="text-[#FBBF24] font-bold">14 Months Plan!</span>
          </span>
          <span class="text-[8px] text-gray-500 mt-0.5">2 minutes ago</span>
        </div>
      </div>
    </Transition>

    <!-- FEATURE 2 & 4: Support Chat / Plan Recommender (Bottom Right) -->
    <Transition name="bounce">
      <div v-if="showChat" class="absolute bottom-6 right-6 flex flex-col items-end gap-3 pointer-events-auto">
        
        <!-- Interactive Plan Recommender Button -->
        <button class="bg-[#FBBF24] text-black px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-[0_4px_15px_rgba(251,191,36,0.4)] hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">psychology_alt</span>
          Help me choose a plan
        </button>

        <!-- Floating Chat Avatar -->
        <div class="relative group cursor-pointer hover:scale-105 active:scale-95 transition-transform">
          <button @click="closeChat" class="absolute -top-1 -right-1 w-4 h-4 bg-gray-500 rounded-full text-white flex items-center justify-center shadow-md hover:bg-gray-600 transition-colors z-10 opacity-0 group-hover:opacity-100">
            <span class="material-symbols-outlined text-[10px] font-bold">close</span>
          </button>
          
          <div class="absolute -top-10 -left-8 bg-[#8B5CF6] text-white text-[10px] font-bold px-3 py-1.5 rounded-t-xl rounded-bl-xl rounded-br-sm shadow-lg whitespace-nowrap animate-bounce">
            Hi! Have a question? 👋
          </div>

          <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#4C1D95] border-2 border-white shadow-2xl flex items-center justify-center overflow-hidden">
            <span class="material-symbols-outlined text-white text-[32px]">support_agent</span>
          </div>
          <div class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
