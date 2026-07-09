<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
    <!-- Navbar -->
    <ExploreNavbar />
    
    <!-- Hero Banner (Purple) -->
    <ExploreHero />
    <ExploreVideo />
    
    <!-- Comparison Section -->
    <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 py-8">
      <ExploreComparison />
    </div>

    <!-- Features Section -->
    <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 py-8">
      <ExploreFeatures />
    </div>
    
    <!-- Stats Bar -->
    <div class="max-w-[1300px] mx-auto w-full px-4 md:px-6 mb-12">
      <ExploreStats />
    </div>
    
    <!-- Carousels (Top Achievers, Parents Speak) -->
    <ExploreCarousels />
    
    <!-- Sticky Footer (Pricing) -->
    <ExploreFooter />
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
</script>

<style scoped>
</style>
