<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans">
    <!-- Navbar -->
    <ExploreNavbar />
    
    <!-- Hero Banner (Purple) -->
    <ExploreHero />
    
    <!-- Comparison & Features Combined Section -->
    <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 py-8 md:py-12">
      <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-6 xl:gap-10">
        <div class="w-full lg:w-1/2">
          <ExploreComparison />
        </div>
        
        <!-- Separator -->
        <div class="w-full lg:w-px h-px lg:h-auto bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-purple-200 to-transparent my-4 lg:my-0"></div>
        
        <div class="w-full lg:w-1/2">
          <ExploreFeatures />
        </div>
      </div>
    </div>
    
    <!-- Stats Bar -->
    <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 mb-4">
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
import ExploreFeatures from '../components/explore/ExploreFeatures.vue'
import ExploreStats from '../components/explore/ExploreStats.vue'
import ExploreCarousels from '../components/explore/ExploreCarousels.vue'
import ExploreFooter from '../components/explore/ExploreFooter.vue'
import SubscriptionModals from '../components/home/SubscriptionModals.vue'
</script>

<style scoped>
</style>
