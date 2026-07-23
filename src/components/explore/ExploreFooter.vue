<template>
  <Teleport to="body">
    <div class="explore-footer-container bg-gradient-to-r from-[#00386c] to-[#00264d] text-white z-[9999] shadow-[0_12px_40px_rgba(0,38,77,0.5)] border border-white/10 rounded-3xl md:rounded-[28px] px-3 md:px-6 py-2.5 md:py-2.5 relative overflow-hidden">
      <!-- Background Dot Grids Inside Footer (Option 3 style) -->
      <div class="absolute -bottom-4 -left-4 w-16 h-16 pointer-events-none opacity-25 hidden md:block" style="background-image: radial-gradient(#00bcff 1.2px, transparent 1.2px); background-size: 6px 6px;"></div>
      <div class="absolute -top-4 -right-4 w-16 h-16 pointer-events-none opacity-25 hidden md:block" style="background-image: radial-gradient(#00bcff 1.2px, transparent 1.2px); background-size: 6px 6px;"></div>

      <div class="flex flex-row items-center justify-between gap-2 md:gap-6 relative z-10">
        
        <!-- Left: Features -->
        <div class="flex items-center gap-2 md:gap-3 min-w-0">
          <!-- Glowing Aura Book Container -->
          <div class="relative shrink-0">
            <div class="absolute inset-0 bg-[#00bcff]/20 rounded-full blur-md"></div>
            <div class="relative w-9 h-9 md:w-11 md:h-11 rounded-full bg-white flex items-center justify-center shadow-lg border border-white/10">
              <span class="material-symbols-outlined text-[18px] md:text-[20px] text-[#673ab7] font-bold">menu_book</span>
            </div>
          </div>
          <div class="flex flex-col min-w-0">
            <!-- Hidden on mobile to prevent overlapping, visible on tablet/desktop -->
            <h4 class="font-bold text-[9px] md:text-[14px] leading-tight mb-1 text-white tracking-wide truncate hidden sm:block">What Your Child the Learning Advantage</h4>
            
            <!-- Desktop/Tablet Checkmarks with Separator (matches screenshot) -->
            <div class="hidden sm:flex flex-wrap items-center gap-x-2 md:gap-x-2.5 gap-y-1">
              <div class="flex items-center gap-1 text-[10px] md:text-[11px] text-blue-100 font-medium">
                <span class="material-symbols-outlined text-[11px] md:text-[13px] font-bold text-[#8e64e8] fill-current">check_circle</span>
                Complete Karnataka Board
              </div>
              <span class="text-white/20 text-[10px] md:text-[11px] font-light">|</span>
              <div class="flex items-center gap-1 text-[10px] md:text-[11px] text-blue-100 font-medium">
                <span class="material-symbols-outlined text-[11px] md:text-[13px] font-bold text-[#8e64e8] fill-current">check_circle</span>
                Live Classes
              </div>
              <span class="text-white/20 text-[10px] md:text-[11px] font-light">|</span>
              <div class="flex items-center gap-1 text-[10px] md:text-[11px] text-blue-100 font-medium">
                <span class="material-symbols-outlined text-[11px] md:text-[13px] font-bold text-[#8e64e8] fill-current">check_circle</span>
                15,000+ Videos
              </div>
            </div>
            
            <!-- Compact Mobile Checkmarks (Stacked vertically to prevent horizontal overflow/overlap) -->
            <div class="flex sm:hidden flex-col items-start gap-1">
              <div class="flex items-center gap-1 text-[7.5px] text-blue-100 font-medium">
                <span class="material-symbols-outlined text-[8.5px] font-bold text-[#8e64e8] fill-current">check_circle</span>
                Karnataka Board
              </div>
              <div class="flex items-center gap-1 text-[7.5px] text-blue-100 font-medium">
                <span class="material-symbols-outlined text-[8.5px] font-bold text-[#8e64e8] fill-current">check_circle</span>
                15,000+ Videos
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right: Price & CTA -->
        <div class="flex flex-row items-center gap-2 md:gap-4 shrink-0">
          <!-- Price Badge Box (Glow cyan-bordered design) -->
          <div class="relative bg-transparent border border-[#00bcff]/30 rounded-[14px] md:rounded-xl px-1.5 py-1 md:px-4 md:py-1.5 flex flex-col items-center justify-center leading-tight shrink-0 shadow-[inset_0_0_12px_rgba(0,188,255,0.08)] min-w-[65px] md:min-w-[105px]">
            <!-- Subtle top border glow line -->
            <div class="absolute -top-[1px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00bcff] to-transparent"></div>

            <!-- ONLY Pill -->
            <div class="bg-[#004e8b] text-white text-[5px] md:text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-0.5 scale-90">
              Only
            </div>
            
            <!-- Price with Glow -->
            <div class="text-[#ffc107] font-black text-[12px] md:text-[18px] leading-none tracking-wide" style="text-shadow: 0 0 8px rgba(255, 193, 7, 0.65);">
              ₹1999/-
            </div>
            
            <!-- Star Flanked Text (── ★ Per Year ★ ──) -->
            <div class="flex items-center gap-1 w-full justify-center text-[5px] md:text-[8px] text-[#00bcff]/60 mt-0.5 font-bold uppercase tracking-wider">
              <span class="w-2 md:w-4 h-[1px] bg-gradient-to-l from-[#00bcff]/40 to-transparent"></span>
              <span class="text-[5px] md:text-[7px] text-[#00bcff]">★</span>
              <span class="text-white">Per Year</span>
              <span class="text-[5px] md:text-[7px] text-[#00bcff]">★</span>
              <span class="w-2 md:w-4 h-[1px] bg-gradient-to-r from-[#00bcff]/40 to-transparent"></span>
            </div>
          </div>
          
          <!-- CTA Start Learning Button (matches yellow button exactly) -->
          <button 
            @click="checkout"
            class="bg-[#ffc107] hover:bg-[#ffb300] hover:scale-105 active:scale-95 text-[#002e52] font-black py-2 px-2.5 md:py-2.5 md:px-5 rounded-full shadow-[0_4px_15px_rgba(255,193,7,0.35)] transition-all flex items-center gap-1 md:gap-1.5 text-[9px] md:text-[11px] uppercase tracking-widest shrink-0"
          >
            <span>Start Learning</span>
            <span class="material-symbols-outlined text-[10px] md:text-[14px] font-bold">arrow_forward</span>
          </button>
        </div>
        
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useSubscriptionStore } from '../../stores/subscription'

const subscriptionStore = useSubscriptionStore()

const checkout = () => {
  // Initiate checkout for 14 months plan
  subscriptionStore.handlePlanSelect('14months')
}
</script>

<style scoped>
.animated-gift-container {
  /* No overflow hidden, so icons can fly out */
}

/* Base gift box */
.gift-box {
  position: relative;
  z-index: 10;
  animation: box-jiggle 3s infinite ease-in-out;
}

@keyframes box-jiggle {
  0%, 15% { transform: rotate(0deg) scale(1); }
  20% { transform: rotate(-12deg) scale(1.15); }
  25% { transform: rotate(12deg) scale(1.15); }
  30% { transform: rotate(-12deg) scale(1.15); }
  35%, 100% { transform: rotate(0deg) scale(1); }
}

.floating-icon {
  position: absolute;
  bottom: 12px;
  left: 50%;
  z-index: 5;
  opacity: 0;
  transform-origin: center bottom;
  text-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.icon-book {
  color: #ffeb3b; /* Yellow */
  animation: fly-book 3s infinite ease-out;
}

.icon-laptop {
  color: #00e5ff; /* Cyan */
  animation: fly-laptop 3s infinite ease-out;
}

.icon-pen {
  color: #ff8a80; /* Pinkish red */
  animation: fly-pen 3s infinite ease-out;
}

@keyframes fly-book {
  0%, 25% { transform: translate(-50%, 0) scale(0); opacity: 0; }
  35% { transform: translate(-120%, -30px) scale(1) rotate(-20deg); opacity: 1; }
  75% { transform: translate(-130%, -40px) scale(1) rotate(-25deg); opacity: 1; }
  85%, 100% { transform: translate(-130%, -40px) scale(0); opacity: 0; }
}

@keyframes fly-laptop {
  0%, 28% { transform: translate(-50%, 0) scale(0); opacity: 0; }
  38% { transform: translate(-50%, -45px) scale(1) rotate(0deg); opacity: 1; }
  75% { transform: translate(-50%, -55px) scale(1) rotate(5deg); opacity: 1; }
  85%, 100% { transform: translate(-50%, -55px) scale(0); opacity: 0; }
}

@keyframes fly-pen {
  0%, 31% { transform: translate(-50%, 0) scale(0); opacity: 0; }
  41% { transform: translate(20%, -30px) scale(1) rotate(20deg); opacity: 1; }
  75% { transform: translate(30%, -40px) scale(1) rotate(25deg); opacity: 1; }
  85%, 100% { transform: translate(30%, -40px) scale(0); opacity: 0; }
}

.explore-footer-container {
  position: fixed;
  bottom: 12px;
  bottom: calc(12px + env(safe-area-inset-bottom));
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 1.5rem);
  max-width: 1250px;
}

@media (min-width: 768px) {
  .explore-footer-container {
    width: calc(100% - 3rem);
    bottom: 12px;
    bottom: calc(12px + env(safe-area-inset-bottom));
  }
}
</style>
