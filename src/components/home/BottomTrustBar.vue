<template>
  <div class="w-full px-4 md:px-[48px] py-2 relative z-10 shrink-0 pb-3">
    
    <!-- DESKTOP STATIC ROW -->
    <div class="hidden md:flex w-full bg-white rounded-[24px] shadow-sm border border-gray-200 p-5 flex-nowrap justify-between items-center gap-6">
      <!-- Item 1 -->
      <div class="flex items-center gap-3.5 shrink-0">
        <div class="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 uiverse-checkbox-tile relative">
          <span class="material-symbols-outlined text-gray-500 text-[24px]">person</span>
        </div>
        <div class="flex flex-col">
          <h4 class="text-[#004a8b] text-[11px] font-black uppercase">Expert Teachers</h4>
          <p class="text-gray-500 text-[10px] font-medium leading-tight mt-1">Learn from highly<br/>qualified teachers</p>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="w-px h-12 bg-gray-200 shrink-0"></div>

      <!-- Item 2 -->
      <div class="flex items-center gap-3.5 shrink-0">
        <div class="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 uiverse-checkbox-tile relative">
          <span class="material-symbols-outlined text-gray-500 text-[24px]">verified_user</span>
        </div>
        <div class="flex flex-col">
          <h4 class="text-[#004a8b] text-[11px] font-black uppercase">Safe &amp; Secure</h4>
          <p class="text-gray-500 text-[10px] font-medium leading-tight mt-1">100% secure platform<br/>for your children</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-px h-12 bg-gray-200 shrink-0"></div>

      <!-- Item 3 -->
      <div class="flex items-center gap-3.5 shrink-0">
        <div class="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 uiverse-checkbox-tile relative">
          <span class="material-symbols-outlined text-gray-500 text-[24px]">monitoring</span>
        </div>
        <div class="flex flex-col">
          <h4 class="text-[#004a8b] text-[11px] font-black uppercase">Track Progress</h4>
          <p class="text-gray-500 text-[10px] font-medium leading-tight mt-1">Detailed reports &amp;<br/>performance tracking</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-px h-12 bg-gray-200 shrink-0"></div>

      <!-- Item 4 -->
      <div class="flex items-center gap-3.5 shrink-0">
        <div class="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 uiverse-checkbox-tile relative">
          <span class="material-symbols-outlined text-gray-500 text-[24px]">devices</span>
        </div>
        <div class="flex flex-col">
          <h4 class="text-[#004a8b] text-[11px] font-black uppercase">Anywhere Learning</h4>
          <p class="text-gray-500 text-[10px] font-medium leading-tight mt-1">Learn anytime, anywhere<br/>on any device</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-px h-12 bg-gray-200 shrink-0"></div>

      <!-- Item 5 -->
      <div class="flex items-center gap-3.5 shrink-0">
        <div class="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 uiverse-checkbox-tile relative">
          <span class="material-symbols-outlined text-gray-500 text-[24px]">local_offer</span>
        </div>
        <div class="flex flex-col">
          <h4 class="text-[#004a8b] text-[11px] font-black uppercase">Affordable Pricing</h4>
          <p class="text-gray-500 text-[10px] font-medium leading-tight mt-1">Quality education<br/>at affordable prices</p>
        </div>
      </div>
    </div>

    <!-- MOBILE INFINITE MARQUEE LOOP -->
    <div class="md:hidden w-full bg-white rounded-[20px] shadow-sm border border-gray-200 p-4 overflow-hidden">
      <div class="marquee-track flex flex-row flex-nowrap items-center w-max gap-8">
        
        <!-- SET 1 -->
        <div class="flex flex-row flex-nowrap items-center gap-8 shrink-0">
          <!-- Item 1 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">person</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Expert Teachers</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Learn from highly qualified teachers</p>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">verified_user</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Safe &amp; Secure</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">100% secure platform for children</p>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">monitoring</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Track Progress</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Detailed reports &amp; tracking</p>
            </div>
          </div>
          <!-- Item 4 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">devices</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Anywhere Learning</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Learn anytime, anywhere on any device</p>
            </div>
          </div>
          <!-- Item 5 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">local_offer</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Affordable Pricing</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Quality education at affordable prices</p>
            </div>
          </div>
        </div>

        <!-- SET 2 (Duplicate for infinite seamless loop) -->
        <div class="flex flex-row flex-nowrap items-center gap-8 shrink-0" aria-hidden="true">
          <!-- Item 1 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">person</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Expert Teachers</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Learn from highly qualified teachers</p>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">verified_user</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Safe &amp; Secure</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">100% secure platform for children</p>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">monitoring</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Track Progress</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Detailed reports &amp; tracking</p>
            </div>
          </div>
          <!-- Item 4 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">devices</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Anywhere Learning</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Learn anytime, anywhere on any device</p>
            </div>
          </div>
          <!-- Item 5 -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0 relative">
              <span class="material-symbols-outlined text-gray-500 text-[20px]">local_offer</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#004a8b] text-[10px] font-black uppercase">Affordable Pricing</h4>
              <p class="text-gray-500 text-[8.5px] font-medium leading-tight mt-0.5">Quality education at affordable prices</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
/* Mobile seamless marquee infinite sliding loop animation */
.marquee-track {
  animation: marqueeMobile 25s linear infinite;
}

@keyframes marqueeMobile {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Translates by exactly half the width of Set 1 + Set 2 (moving the duplicate into place) */
    transform: translateX(calc(-50% - 16px));
  }
}

/* Checkbox Check Hover Features for Desktop version */
.uiverse-checkbox-tile {
  transition: 0.15s ease;
  cursor: pointer;
}

.uiverse-checkbox-tile:before {
  content: "";
  position: absolute;
  display: block;
  width: 14px;
  height: 14px;
  border: 1.5px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: -2px;
  left: -2px;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
  background-size: 8px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.uiverse-checkbox-tile:hover {
  border-color: #004a8b;
}

.uiverse-checkbox-tile:hover:before {
  transform: scale(1);
  opacity: 1;
  background-color: #004a8b;
  border-color: #004a8b;
}

.uiverse-checkbox-tile:hover .material-symbols-outlined {
  color: #004a8b;
  transition: color 0.15s ease;
}
</style>
