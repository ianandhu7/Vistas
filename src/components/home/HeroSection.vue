<template>
  <div class="relative w-full flex-1 min-h-0 pt-8 pb-8 px-4 md:px-[48px] flex flex-col md:flex-row items-start justify-between gap-3 md:gap-6 z-10">

    <!-- LEFT: Main Text & Features -->
    <div class="w-full md:w-[42%] flex flex-col gap-5 relative z-10 mt-0">
      <div class="flex flex-col gap-5 items-start">
        <h1 class="text-[#002e5c] text-3xl md:text-[35px] font-bold leading-tight md:leading-[1] tracking-tight">
         Give Your Child<br/>
          <span class="text-[#0096c7] text-4xl md:text-[70px] font-black tracking-normal inline-block my-3">The Best</span><br/>
          Learning Experience
        </h1>
        <div class="mt-2 inline-flex">
          <span class="bg-[#004a8b] text-white text-[13px] font-bold px-12 py-1.5 rounded-full shadow-md tracking-wide">
            Karnataka State Board
          </span>
        </div>
      </div>
      
      <!-- Feature Grid Card -->
      <div class="flex flex-col md:flex-row mt-2 bg-white rounded-[20px] shadow-xl border border-gray-100 p-2 overflow-visible w-full md:w-[115%] relative z-10 divide-y md:divide-y-0 md:divide-x divide-[#8B4513]/30">
        <!-- Feature 1 -->
        <div class="flex flex-col items-center text-center flex-1 shrink-0 py-1 px-1 gap-1.5">
          <div class="w-[36px] h-[36px] rounded-[10px] bg-[#4a148c] flex flex-col items-center justify-center text-white shadow-md shrink-0">
            <span class="material-symbols-outlined text-[16px] font-black leading-none">sensors</span>
            <span class="text-[6px] font-bold tracking-wider leading-none mt-0.5">LIVE</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold text-[10px] leading-tight text-[#4a148c] uppercase tracking-tight">Live Classes</p>
            <p class="text-[8px] leading-[1.1] text-[#002e5c]/70 mt-0.5 max-w-[90px]">Learn from expert teachers in real-time</p>
          </div>
        </div>
        <!-- Feature 2 -->
        <div class="flex flex-col items-center text-center flex-1 shrink-0 py-1 px-1 gap-1.5">
          <div class="w-[36px] h-[36px] rounded-[10px] bg-[#f08a00] flex items-center justify-center text-white shadow-md shrink-0">
            <span class="material-symbols-outlined text-[20px] font-black">slideshow</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold text-[10px] leading-tight text-[#f08a00] uppercase tracking-tight">Animated Lessons</p>
            <p class="text-[8px] leading-[1.1] text-[#002e5c]/70 mt-0.5 max-w-[90px]">Concepts explained with fun animations</p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="flex flex-col items-center text-center flex-1 shrink-0 py-1 px-1 gap-1.5">
          <div class="w-[36px] h-[36px] rounded-[10px] bg-[#1565c0] flex items-center justify-center text-white shadow-md shrink-0">
            <span class="material-symbols-outlined text-[20px] font-black">library_books</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold text-[10px] leading-tight text-[#1565c0] uppercase tracking-tight">All Six Subjects</p>
            <p class="text-[8px] leading-[1.1] text-[#002e5c]/70 mt-0.5 max-w-[90px]">Maths, Science, Social, languages etc.</p>
          </div>
        </div>
        <!-- Feature 4 -->
        <div class="flex flex-col items-center text-center flex-1 shrink-0 py-1 px-1 gap-1.5">
          <div class="w-[36px] h-[36px] rounded-[10px] bg-[#2e7d32] flex items-center justify-center text-white shadow-md shrink-0">
            <span class="material-symbols-outlined text-[20px] font-black">fact_check</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold text-[10px] leading-tight text-[#2e7d32] uppercase tracking-tight">Tests</p>
            <p class="text-[8px] leading-[1.1] text-[#002e5c]/70 mt-0.5 max-w-[90px]">Chapter-wise & full syllabus tests</p>
          </div>
        </div>
        <!-- Feature 5 -->
        <div class="flex flex-col items-center text-center flex-1 shrink-0 py-1 px-1 gap-1.5">
          <div class="w-[36px] h-[36px] rounded-[10px] bg-[#c2185b] flex items-center justify-center text-white shadow-md shrink-0">
            <span class="material-symbols-outlined text-[20px] font-black">description</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold text-[10px] leading-tight text-[#c2185b] uppercase tracking-tight">Study Notes</p>
            <p class="text-[8px] leading-[1.1] text-[#002e5c]/70 mt-0.5 max-w-[90px]">Easy to understand revision notes</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CENTER: Image with background icons -->
    <div class="relative w-full flex justify-center items-end h-[200px] z-20 md:w-[40%] md:h-full md:-translate-x-6 md:-mb-8">
      
      <!-- Subtle Outline Icons Background -->
      <div class="absolute inset-0 z-0 hidden md:block pointer-events-none">
        <!-- Top Center (Around Mother's Head) -->
        <span class="material-symbols-outlined absolute top-[-15%] left-[38%] text-[#ffb74d] opacity-50 text-[30px] rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">star</span>
        <span class="material-symbols-outlined absolute top-[-25%] left-1/2 -translate-x-1/2 text-[#a390e4] opacity-50 text-[40px] -rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">emoji_objects</span>
        <span class="material-symbols-outlined absolute top-[-15%] right-[38%] text-[#ffb74d] opacity-60 text-[25px] rotate-45" style="font-variation-settings: 'FILL' 0, 'wght' 300;">star</span>

        <!-- Left Side Halo -->
        <span class="material-symbols-outlined absolute bottom-[10%] left-[10%] text-[#ffb74d] opacity-60 text-[35px] rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">star</span>
        <span class="material-symbols-outlined absolute bottom-[35%] left-[15%] text-[#a390e4] opacity-50 text-[40px] rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">science</span>
        <span class="material-symbols-outlined absolute top-[40%] left-[12%] text-[#a390e4] opacity-50 text-[55px]" style="font-variation-settings: 'FILL' 0, 'wght' 300;">lightbulb</span>
        <span class="material-symbols-outlined absolute top-[15%] left-[15%] text-[#ffb74d] opacity-50 text-[30px] rotate-45" style="font-variation-settings: 'FILL' 0, 'wght' 300;">school</span>
        <span class="material-symbols-outlined absolute top-[5%] left-[20%] text-[#a390e4] opacity-50 text-[35px] -rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">star</span>

        <!-- Right Side Halo -->
        <span class="material-symbols-outlined absolute bottom-[15%] right-[-5%] text-[#ffb74d] opacity-60 text-[35px] -rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">star</span>
        <span class="material-symbols-outlined absolute bottom-[40%] right-[-2%] text-[#a390e4] opacity-50 text-[30px] rotate-45" style="font-variation-settings: 'FILL' 0, 'wght' 300;">music_note</span>
        <span class="material-symbols-outlined absolute top-[40%] right-[0%] text-[#a390e4] opacity-50 text-[55px] rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">menu_book</span>
        <span class="material-symbols-outlined absolute top-[15%] right-[-5%] text-[#a390e4] opacity-50 text-[45px] -rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">edit</span>
        <span class="material-symbols-outlined absolute top-[5%] right-[5%] text-[#ffb74d] opacity-50 text-[25px] rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 300;">moving</span>
      </div>

      <img :src="'/transparentpic.png.png'" alt="Mother and Child" class="w-auto h-[125%] md:h-[145%] md:w-[185%] max-w-none object-contain object-bottom z-20 md:translate-x-12 md:translate-y-8 origin-bottom" />
    </div>

    <!-- RIGHT: Stats & Form (Unified Box) -->
     
    <div class="w-full md:w-[28%] bg-white rounded-[40px] shadow-2xl p-4 flex flex-col gap-3 relative z-20 border border-gray-100 md:scale-[0.92] origin-top md:-translate-y-16">
      <!-- Stats -->
      <div class="flex gap-3">
        <div class="flex-1 bg-white border border-gray-100 rounded-[20px] p-2 flex gap-2 items-center shadow-sm">
          <div class="w-[36px] h-[36px] rounded-full bg-[#004a8b] text-white flex items-center justify-center shrink-0 shadow-md">
            <span class="material-symbols-outlined text-[20px]">school</span>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#002e5c] text-[12px] font-black leading-tight">19+<br/>Courses</h4>
            <p class="text-[7px] text-gray-500 leading-tight mt-0.5">Designed to build<br/>concepts & skills</p>
          </div>
        </div>
        <div class="flex-1 bg-white border border-gray-100 rounded-[16px] p-2 flex gap-2 items-center shadow-sm">
          <div class="w-[36px] h-[36px] rounded-full bg-[#e11d48] text-white flex items-center justify-center shrink-0 shadow-md">
            <span class="material-symbols-outlined text-[20px]">video_library</span>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#002e5c] text-[12px] font-black leading-tight">15,000+<br/>Video Library</h4>
            <p class="text-[7px] text-gray-500 leading-tight mt-0.5">Huge collection of videos<br/>for better learning</p>
          </div>
        </div>
      </div>

      <!-- Signup Form -->
      <div class="flex flex-col items-center relative">
        <h3 class="text-[#004a8b] text-[13px] font-black text-center mb-3 z-10">
          Three Simple Steps to <span class="text-[#f08a00]">Get Started</span>
        </h3>
        
        <!-- Steps Graphic -->
        <div class="flex justify-between relative w-full px-2 md:px-6">
          <!-- Step 1 -->
          <div class="flex flex-col items-center gap-3 relative z-10 w-1/3">
            <div class="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full border-[1.5px] border-gray-300 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[10px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#9c27b0] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">1</div>
              <span class="material-symbols-outlined text-gray-700 text-[20px] md:text-[24px]">phone_iphone</span>
            </div>
            <div class="text-center">
              <h5 class="text-[9px] md:text-[10px] font-black text-[#002e5c] leading-tight">Enter Mobile Number</h5>
              <p class="text-[8px] text-gray-500 mt-1 leading-tight">Enter your mobile<br/>number to sign up</p>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center gap-3 relative z-10 w-1/3">
            <div class="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full border-[1.5px] border-gray-300 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[10px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0060aa] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">2</div>
              <span class="material-symbols-outlined text-gray-700 text-[20px] md:text-[24px]">search</span>
            </div>
            <div class="text-center">
              <h5 class="text-[9px] md:text-[10px] font-black text-[#002e5c] leading-tight">Explore & Learn</h5>
              <p class="text-[8px] text-gray-500 mt-1 leading-tight">Check features, explore<br/>videos and all</p>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center gap-3 relative z-10 w-1/3">
            <div class="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full border-[1.5px] border-gray-300 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[10px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#f08a00] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">3</div>
              <span class="material-symbols-outlined text-gray-700 text-[20px] md:text-[24px]">shield_lock</span>
            </div>
            <div class="text-center">
              <h5 class="text-[9px] md:text-[10px] font-black text-[#002e5c] leading-tight">Secure Payment</h5>
              <p class="text-[8px] text-gray-500 mt-1 leading-tight">Make a secure payment<br/>and start using</p>
            </div>
          </div>
          
          <!-- Connecting Line -->
          <div class="absolute top-[24px] md:top-[28px] left-[16%] right-[16%] h-[1px] border-t-[1.5px] border-dashed border-gray-300 z-0"></div>
        </div>

        <!-- Input & Button -->
        <div class="w-full flex flex-col gap-2 z-10 mt-2">
          <div class="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm h-11">
            <div class="bg-gray-50 px-3 flex items-center justify-center border-r border-gray-300 text-sm font-semibold text-gray-700">
              +91
            </div>
            <input 
              v-model="mobileInput"
              @keypress="e => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }"
              type="tel" 
              maxlength="10"
              placeholder="Enter Mobile Number" 
              class="flex-1 px-3 outline-none text-sm text-gray-800" 
            />
          </div>
          
          <button 
            id="continue-btn"
            @click="handleContinue"
            :disabled="store.loading"
            class="w-full bg-[#004a8b] hover:bg-[#003666] text-white font-bold tracking-wider rounded-lg h-11 transition-colors duration-200 flex items-center justify-center gap-2 text-[14px] disabled:opacity-70"
          >
            <span v-if="store.loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            {{ store.loading ? 'SENDING...' : 'CONTINUE' }}
          </button>
          <p v-if="localError || store.error" class="text-red-500 text-[10px] text-center font-bold">{{ localError || store.error }}</p>
          
          <div class="flex items-center justify-center gap-1 text-[9px] font-semibold text-gray-500 mt-1">
            <span class="material-symbols-outlined text-[12px] text-green-600">lock</span>
            No Spam | 100% Secure
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSubscriptionStore } from '../../stores/subscription'

const store = useSubscriptionStore()
const mobileInput = ref('')
const localError = ref('')  

const handleContinue = async () => {
  localError.value = ''
  
  if (!mobileInput.value || mobileInput.value.length !== 10) {
    localError.value = 'Please enter a valid 10-digit mobile number'
    return
  }

  // Pre-fill the store's mobile number and a default name so we can skip the info step
  store.isHeroFlow = true
  store.setMobileNumber(mobileInput.value)
  if (!store.userName) {
    store.setUserName('Student')
  }
  
  // Directly send the OTP and open the OTP verification modal
  await store.sendOtp()
}
</script>

<style scoped>
</style>
