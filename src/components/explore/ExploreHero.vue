<template>
  <div class="w-full bg-[#1e0a4f] relative overflow-hidden py-12 md:py-24">
    <!-- Starburst Background Effect -->
    <div class="absolute inset-0 z-0 flex justify-center items-center opacity-20 pointer-events-none">
      <div class="w-[800px] h-[800px] rounded-full" style="background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%); mix-blend-mode: overlay;"></div>
    </div>
    
    <!-- Stars scattered in background -->
    <div class="absolute top-10 left-[20%] text-yellow-300 opacity-50 z-0 material-symbols-outlined text-sm">star</div>
    <div class="absolute top-40 left-[40%] text-yellow-300 opacity-30 z-0 material-symbols-outlined text-xs">star</div>
    <div class="absolute bottom-20 left-[15%] text-yellow-300 opacity-60 z-0 material-symbols-outlined text-lg">star</div>
    <div class="absolute top-20 right-[40%] text-purple-300 opacity-40 z-0 material-symbols-outlined text-md">star</div>

    <div class="max-w-[1300px] mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
      
      <!-- Left Side: Rank Text -->
      <div class="w-full md:w-[55%] flex flex-col text-white z-20">
        <span class="bg-white text-black font-bold px-3 py-1 rounded-sm w-max text-xs uppercase tracking-wider mb-4">Karnataka State Board</span>
        <h2 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">Last Year's<br/>Karnataka State Board</h2>
        
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <div class="text-[#ffca28] text-6xl md:text-[80px] font-black leading-none drop-shadow-[0_0_15px_rgba(255,202,40,0.4)] flex flex-col">
            STATE
            <div class="flex items-center gap-2">
              <span>2<sup class="text-3xl md:text-5xl">nd</sup> RANK</span>
              <span class="material-symbols-outlined text-5xl md:text-6xl text-[#ffca28]">social_leaderboard</span>
            </div>
          </div>
        </div>
        
        <div class="bg-white text-[#1e0a4f] font-black text-2xl md:text-4xl py-3 px-8 rounded-full inline-block w-max mb-8 shadow-lg border-2 border-purple-300">
          <span class="text-purple-800">624</span> / 625 <span class="text-xl md:text-2xl text-gray-500 font-bold">Marks</span>
        </div>
        
        <div class="relative pl-8 mb-8 mt-4">
          <span class="absolute left-0 top-[-15px] text-4xl md:text-6xl text-purple-400 font-serif">"</span>
          <p class="text-lg md:text-xl italic text-purple-100 font-medium max-w-lg">Vista's Learning helped me understand every concept.</p>
          <span class="absolute right-0 bottom-[-30px] text-4xl md:text-6xl text-purple-400 font-serif hidden md:block">"</span>
        </div>
        
        <div class="flex items-center gap-6 mt-4">
          <button class="bg-[#ffc107] hover:bg-[#ffb300] text-black font-black py-4 px-10 rounded-full shadow-[0_4px_20px_rgba(255,193,7,0.5)] transition-all flex items-center gap-2 text-lg uppercase tracking-wider">
            <span class="material-symbols-outlined text-2xl">play_circle</span>
            Watch Demo
          </button>
        </div>
      </div>
      
      <!-- Right Side: Image of student -->
      <div class="w-full md:w-[45%] relative z-10 flex justify-center mt-12 md:mt-0">
        <div class="relative w-full max-w-[400px]">
          <img src="https://via.placeholder.com/500x700/1e0a4f/ffffff?text=Student+Trophy" alt="Student with trophy" class="w-full h-auto object-contain drop-shadow-2xl opacity-90" />
          
          <!-- Name Badge -->
          <div class="absolute right-[-20px] bottom-[20%] bg-[#311b92]/90 backdrop-blur-sm border border-purple-400/30 p-4 rounded-xl shadow-2xl">
            <p class="text-white font-bold text-lg">Ananya H.</p>
            <p class="text-purple-200 text-xs mb-2">Karnataka State Board 2024</p>
            <div class="flex items-center gap-2 mt-2 text-[#ffca28] text-xs font-bold bg-[#1e0a4f]/50 p-2 rounded-lg">
              <span class="material-symbols-outlined text-[16px]">star</span>
              Inspiration for<br/>Thousands of Students
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
</style>
