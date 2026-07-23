<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans">
    
    <!-- Navbar -->
    <ExploreNavbar />
    
    <!-- Hero Banner (Purple) -->
    <ExploreHero />

    <!-- Video / "See an Actual Vista Class" Section -->
    <ExploreVideo />
    
    <!-- Comparison & Features Combined Section with Premium Light Gray Background & Dot Pattern -->
    <div class="w-full bg-[#f8fafc] border-y border-gray-200/50 py-2 md:py-10 my-1 md:my-4 relative overflow-hidden">
      <!-- Decorative Dot Pattern (Top Right & Bottom Left) -->
      <div class="absolute top-2 right-2 w-32 h-32 pointer-events-none opacity-[0.25] hidden md:block" style="background-image: radial-gradient(#673ab7 1.5px, transparent 1.5px); background-size: 11px 11px;"></div>
      <div class="absolute bottom-2 left-2 w-32 h-32 pointer-events-none opacity-[0.25] hidden md:block" style="background-image: radial-gradient(#673ab7 1.5px, transparent 1.5px); background-size: 11px 11px;"></div>

      <div id="explore-content" class="max-w-[1300px] mx-auto w-full px-4 md:px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-2 md:gap-6 lg:gap-4 xl:gap-8">
          <div class="w-full lg:w-[48%] flex flex-col justify-center">
            <ExploreComparison />
            <ExploreLessons />
          </div>
          
          <!-- Middle Divider (Option 6) -->
          <div class="w-full lg:w-px h-px lg:h-auto bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-gray-200 to-transparent my-2 lg:my-0"></div>
          
          <div class="w-full lg:w-[48%]">
            <ExploreFeatures />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Stats Bar -->
    <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 mb-1 md:mb-4">
      <ExploreStats />
    </div>
    
    <!-- Carousels (Top Achievers, Parents Speak) -->
    <ExploreCarousels />
    
    <!-- Sticky Footer (Pricing) -->
    <ExploreFooter />
    
    <SubscriptionModals />
  </div>
</template>

<script setup>
import ExploreNavbar from '../components/explore/ExploreNavbar.vue'
import ExploreHero from '../components/explore/ExploreHero.vue'
import ExploreVideo from '../components/explore/ExploreVideo.vue'
import ExploreComparison from '../components/explore/ExploreComparison.vue'
import ExploreLessons from '../components/explore/ExploreLessons.vue'
import ExploreFeatures from '../components/explore/ExploreFeatures.vue'
import ExploreStats from '../components/explore/ExploreStats.vue'
import ExploreCarousels from '../components/explore/ExploreCarousels.vue'
import ExploreFooter from '../components/explore/ExploreFooter.vue'
import SubscriptionModals from '../components/home/SubscriptionModals.vue'
</script>

<style scoped>
</style>
