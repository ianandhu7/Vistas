<template>
  <div class="w-full relative overflow-hidden py-12 md:py-16 bg-[#1e0a4f] min-h-[calc(100vh-70px)] flex flex-col justify-start">
    
    <!-- FULL SCREEN SCROLLABLE BACKGROUND IMAGE -->
    <transition name="fade" mode="out-in">
      <div :key="currentIndex" class="absolute inset-0 z-0">
        <img :src="slides[currentIndex].studentImage" alt="Background" class="w-full h-full object-cover" />
        <!-- Very Light Overlay so text is readable but image is clear -->
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
    </transition>

    <!-- Starburst Background Effect -->
    <div class="absolute inset-0 z-0 flex justify-center items-center opacity-20 pointer-events-none">
      <div class="w-[800px] h-[800px] rounded-full" style="background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%); mix-blend-mode: overlay;"></div>
    </div>
    
    <!-- Stars scattered in background -->
    <div class="absolute top-10 left-[20%] text-yellow-300 opacity-50 z-0 material-symbols-outlined text-sm">star</div>
    <div class="absolute top-40 left-[40%] text-yellow-300 opacity-30 z-0 material-symbols-outlined text-xs">star</div>
    <div class="absolute bottom-20 left-[15%] text-yellow-300 opacity-60 z-0 material-symbols-outlined text-lg">star</div>
    <div class="absolute top-20 right-[40%] text-purple-300 opacity-40 z-0 material-symbols-outlined text-md">star</div>

    <div class="w-full px-6 md:px-12 lg:px-24 relative z-10">
      
      <div class="flex flex-col md:flex-row items-start justify-start gap-10 min-h-[300px] md:min-h-[350px]">
        
        <!-- STATIC Left Side: Content Container -->
        <div class="w-full md:w-[65%] flex flex-col z-20">
          
          <!-- Top Section: Text only -->
          <transition name="fade" mode="out-in">
            <div :key="currentIndex" class="flex flex-col items-start">
              <span class="bg-white text-black font-bold px-3 py-1 rounded-sm text-[10px] md:text-xs uppercase tracking-wider mb-2 shadow-md">{{ slides[currentIndex].board }}</span>
              <h2 class="text-2xl md:text-4xl font-bold mb-1 leading-tight text-white drop-shadow-lg">{{ slides[currentIndex].titleLine1 }}<br/>{{ slides[currentIndex].titleLine2 }}</h2>
              
              <div class="flex items-center gap-3 mb-4">
                <div class="text-yellow-400 text-4xl md:text-6xl font-black leading-tight drop-shadow-[0_2px_10px_rgba(250,204,21,0.5)] flex items-center flex-wrap gap-x-3">
                  <span class="opacity-90">{{ slides[currentIndex].rankPrefix }}</span>
                  <span>{{ slides[currentIndex].rank }}<sup class="text-2xl md:text-3xl">{{ slides[currentIndex].rankSuffix }}</sup> RANK</span>
                  <span class="material-symbols-outlined text-4xl md:text-5xl">social_leaderboard</span>
                </div>
              </div>
              
              <div class="bg-white text-[#1e0a4f] font-black text-xl md:text-3xl py-2 px-6 rounded-full inline-block w-max mb-3 shadow-lg border-2 border-purple-300">
                <span class="text-purple-800">{{ slides[currentIndex].marks }}</span> / {{ slides[currentIndex].totalMarks }} <span class="text-lg md:text-xl text-gray-500 font-bold">Marks</span>
              </div>
              
              <div class="relative pl-6 mb-2 mt-1">
                <span class="absolute left-0 top-[-10px] text-3xl md:text-5xl text-purple-400 font-serif">"</span>
                <p class="text-base md:text-lg italic text-white font-medium max-w-lg drop-shadow-md">{{ slides[currentIndex].quote }}</p>
                <span class="absolute right-0 bottom-[-20px] text-3xl md:text-5xl text-purple-400 font-serif hidden md:block">"</span>
              </div>
            </div>
          </transition>
          
          <!-- Bottom Section: CTA & Features -->
          <div class="flex flex-col items-start gap-4 mt-4">
            <!-- Watch Demo Button -->
            <button v-if="slides[currentIndex].hasVideo" @click="openVideo" class="bg-[#ffc107] hover:bg-[#ffb300] text-black font-black py-3 px-8 rounded-full shadow-[0_4px_20px_rgba(255,193,7,0.5)] transition-all flex items-center gap-2 text-base md:text-lg uppercase tracking-wider">
              <span class="material-symbols-outlined text-xl md:text-2xl">play_circle</span>
              Watch Demo
            </button>
            
            <!-- Features List (No Box) -->
            <div class="mt-1">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2 drop-shadow-lg">
                <span class="material-symbols-outlined text-[#ffca28]">visibility</span>
                See an Actual Vista Class
              </h3>
              <ul class="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-1">
                <li class="flex items-center gap-2 text-sm md:text-base font-bold text-white drop-shadow-md">
                  <span class="material-symbols-outlined text-black bg-[#ffca28] rounded-full p-1 text-xs shadow-md">check</span>
                  Real Teacher
                </li>
                <li class="flex items-center gap-2 text-sm md:text-base font-bold text-white drop-shadow-md">
                  <span class="material-symbols-outlined text-black bg-[#ffca28] rounded-full p-1 text-xs shadow-md">check</span>
                  Real Lesson
                </li>
                <li class="flex items-center gap-2 text-sm md:text-base font-bold text-white drop-shadow-md">
                  <span class="material-symbols-outlined text-black bg-[#ffca28] rounded-full p-1 text-xs shadow-md">check</span>
                  Real App Experience
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <!-- Removed Right Side Content -->
        
      </div>

    </div>

    <!-- Slide Indicators -->
    <div class="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="setSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-[#ffc107] scale-125' : 'bg-purple-300/50 hover:bg-purple-300'"
      ></button>
    </div>

    <!-- Video Modal -->
    <div v-if="showVideoModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" @click="closeVideo">
      <div class="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden border border-white/20 shadow-2xl mx-4" @click.stop>
        <button @click="closeVideo" class="absolute top-4 right-4 text-white hover:text-[#ffc107] z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
          <span class="material-symbols-outlined">close</span>
        </button>
        <video 
          v-if="showVideoModal && slides[currentIndex].hasVideo" 
          :src="slides[currentIndex].videoUrl" 
          controls 
          autoplay 
          class="w-full h-full object-contain"
        ></video>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  {
    board: 'Karnataka State Board',
    titleLine1: "Last Year's",
    titleLine2: 'Karnataka State Board',
    rankPrefix: 'STATE',
    rank: '2',
    rankSuffix: 'nd',
    marks: '624',
    totalMarks: '625',
    quote: "Vista's Learning helped me understand every concept perfectly.",
    studentName: 'Ananya H.',
    studentYear: 'Karnataka State Board 2024',
    studentImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop', // Group studying
    hasVideo: true,
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' // Dummy sample video
  },
  {
    board: 'CBSE Board',
    titleLine1: "Outstanding",
    titleLine2: 'CBSE Results',
    rankPrefix: 'ALL INDIA',
    rank: '1',
    rankSuffix: 'st',
    marks: '498',
    totalMarks: '500',
    quote: "The interactive classes and mock tests were a game changer for my preparation.",
    studentName: 'Rahul M.',
    studentYear: 'CBSE Board 2024',
    studentImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop', 
    hasVideo: false, // NO VIDEO for this slide
  },
  {
    board: 'ICSE Board',
    titleLine1: "Top Achiever",
    titleLine2: 'ICSE Examinations',
    rankPrefix: 'NATIONAL',
    rank: '3',
    rankSuffix: 'rd',
    marks: '98',
    totalMarks: '100',
    quote: "I could revise at my own pace before exams, the study material is top notch.",
    studentName: 'Sneha P.',
    studentYear: 'ICSE Board 2024',
    studentImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1920&auto=format&fit=crop',
    hasVideo: true,
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' // Another dummy sample video
  }
]);

const currentIndex = ref(0);
const showVideoModal = ref(false);
let intervalId = null;

const startCarousel = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 5000); // Change slide every 5 seconds
};

const stopCarousel = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

const setSlide = (index) => {
  currentIndex.value = index;
  // Reset timer when manually clicked
  stopCarousel();
  startCarousel();
};

const openVideo = () => {
  if (slides.value[currentIndex.value].hasVideo) {
    showVideoModal.value = true;
    stopCarousel(); // Pause sliding while watching video
  }
};

const closeVideo = () => {
  showVideoModal.value = false;
  startCarousel(); // Resume sliding
};

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
