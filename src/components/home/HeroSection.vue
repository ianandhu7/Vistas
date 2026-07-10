<template>
  <div class="w-full h-full flex flex-col relative">

    <!-- MOBILE VIEW (Natural scrolling layout) -->
    <div class="flex md:hidden w-full relative flex-col pt-[85px] pb-10 px-4 z-10 overflow-visible">
      
      <!-- Blue Curved Shape Background -->
      <div class="absolute top-0 right-0 w-[55%] h-[60%] bg-[#004a8b] z-0" style="border-bottom-left-radius: 90%;"></div>

      <!-- TEXT AND FEATURES (Left Side) -->
      <div class="w-full flex flex-col relative z-30">
        <h1 class="text-[#002e5c] text-[28px] font-bold leading-tight tracking-tight">
          Give Your Child<br/>
          <span class="text-[#0096c7] text-[42px] font-black inline-block mt-1">The Best</span><br/>
          Learning Experience
        </h1>
        <div class="w-10 h-1.5 bg-[#f08a00] rounded-full mt-2 mb-3"></div>
        <button class="bg-[#004a8b] text-white text-[12px] font-bold px-4 py-2 rounded-lg w-max shadow-sm tracking-wide mb-6">Karnataka State Board</button>
        
        <!-- Mobile Vertical Features List -->
        <div class="flex flex-col gap-3 w-[65%]">
          <!-- 1 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#4a148c] flex flex-col items-center justify-center text-white shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[18px] leading-none">sensors</span>
              <span class="text-[7px] font-bold leading-none mt-0.5 tracking-widest">LIVE</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#4a148c] text-[12px] font-bold uppercase leading-tight tracking-tight">Live Classes</span>
              <span class="text-gray-500 text-[10px] leading-[1.2]">Learn from expert teachers in real-time</span>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#f08a00] flex items-center justify-center text-white shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[20px]">slideshow</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#f08a00] text-[12px] font-bold uppercase leading-tight tracking-tight">Animated Lessons</span>
              <span class="text-gray-500 text-[10px] leading-[1.2]">Concepts explained with fun & easy animations</span>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#1565c0] flex items-center justify-center text-white shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[20px]">library_books</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#1565c0] text-[12px] font-bold uppercase leading-tight tracking-tight">All Six Subjects</span>
              <span class="text-gray-500 text-[10px] leading-[1.2]">Maths, Science, Social Science, English, Kannada & Hindi</span>
            </div>
          </div>
          <!-- 4 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#2e7d32] flex items-center justify-center text-white shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[20px]">fact_check</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#2e7d32] text-[12px] font-bold uppercase leading-tight tracking-tight">Tests</span>
              <span class="text-gray-500 text-[10px] leading-[1.2]">Chapter-wise & full syllabus tests</span>
            </div>
          </div>
          <!-- 5 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#c2185b] flex items-center justify-center text-white shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[20px]">description</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#c2185b] text-[12px] font-bold uppercase leading-tight tracking-tight">Study Notes</span>
              <span class="text-gray-500 text-[10px] leading-[1.2]">Easy to understand notes for quick revision</span>
            </div>
          </div>
        </div>
      </div>

      <!-- IMAGE (Right Side Overlap) -->
      <div class="absolute right-[-20px] top-[140px] w-[65%] h-[400px] z-20 flex justify-end items-end pointer-events-none">
        <img :src="'/transparentpic.png.png'" alt="Mother and Child" class="h-full w-auto object-contain object-bottom origin-bottom drop-shadow-lg" />
      </div>

      <!-- FORM (Bottom Overlap) -->
      <div class="relative w-full bg-white rounded-[24px] shadow-2xl p-4 z-40 border border-gray-100 flex flex-col gap-4 mt-8">
        <!-- Stats Row -->
        <div class="flex gap-3 w-full">
          <div class="flex-1 bg-white border border-gray-100 rounded-xl p-2 flex gap-3 items-center shadow-sm">
            <div class="w-10 h-10 rounded-full bg-[#004a8b] text-white flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">school</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#002e5c] text-[14px] font-black leading-none">19+<br/>Courses</h4>
              <p class="text-[8px] text-gray-500 leading-[1.2] mt-0.5">Designed to build<br/>concepts & skills</p>
            </div>
          </div>
          <div class="flex-1 bg-white border border-gray-100 rounded-xl p-2 flex gap-3 items-center shadow-sm">
            <div class="w-10 h-10 rounded-full bg-[#e11d48] text-white flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">video_library</span>
            </div>
            <div class="flex flex-col">
              <h4 class="text-[#002e5c] text-[14px] font-black leading-none">15,000+<br/>Video Library</h4>
              <p class="text-[8px] text-gray-500 leading-[1.2] mt-0.5">Huge collection of videos<br/>for better learning</p>
            </div>
          </div>
        </div>

        <h3 class="text-[#004a8b] text-[14px] font-black text-center mt-2">
          Three Simple Steps to <span class="text-[#f08a00]">Get Started</span>
        </h3>
        
        <!-- Steps Graphic -->
        <div class="flex justify-between relative w-full px-2 mb-2">
          <!-- Step 1 -->
          <div class="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
            <div class="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#9c27b0] text-white flex items-center justify-center text-[8px] font-bold border border-white">1</div>
              <span class="material-symbols-outlined text-gray-600 text-[18px]">phone_iphone</span>
            </div>
            <div class="text-center">
              <h5 class="text-[7px] font-black text-[#002e5c] leading-tight mt-1">Enter Mobile Number</h5>
              <p class="text-[6px] text-gray-500 mt-0.5 leading-tight">Enter your mobile<br/>number to sign up</p>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
            <div class="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0060aa] text-white flex items-center justify-center text-[8px] font-bold border border-white">2</div>
              <span class="material-symbols-outlined text-gray-600 text-[18px]">search</span>
            </div>
            <div class="text-center">
              <h5 class="text-[7px] font-black text-[#002e5c] leading-tight mt-1">Explore & Learn</h5>
              <p class="text-[6px] text-gray-500 mt-0.5 leading-tight">Check features, explore<br/>videos and all</p>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
            <div class="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f08a00] text-white flex items-center justify-center text-[8px] font-bold border border-white">3</div>
              <span class="material-symbols-outlined text-gray-600 text-[18px]">shield_lock</span>
            </div>
            <div class="text-center">
              <h5 class="text-[7px] font-black text-[#002e5c] leading-tight mt-1">Secure Payment</h5>
              <p class="text-[6px] text-gray-500 mt-0.5 leading-tight">Make a secure payment<br/>and start using</p>
            </div>
          </div>
          <div class="absolute top-[18px] left-[20%] right-[20%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>
        </div>

        <!-- Input & Button -->
        <div class="w-full flex flex-col gap-2 z-10">
          <div class="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm h-12 bg-white">
            <div class="bg-gray-50 px-4 flex items-center justify-center border-r border-gray-300 text-[14px] font-semibold text-gray-700">+91</div>
            <input 
              v-model="mobileInput"
              @keypress="e => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }"
              type="tel" 
              maxlength="10"
              placeholder="Enter Mobile Number" 
              class="flex-1 px-4 outline-none text-[14px] text-gray-800 font-medium placeholder-gray-400" 
            />
          </div>
          
          <button 
            id="continue-btn-mobile"
            @click="handleContinue"
            :disabled="store.loading"
            class="w-full bg-[#004a8b] hover:bg-[#003666] text-white font-bold tracking-wider rounded-lg h-12 transition-all duration-200 flex items-center justify-center gap-2 text-[14px] disabled:opacity-70 shadow-sm"
          >
            <span v-if="store.loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            {{ store.loading ? 'SENDING...' : 'CONTINUE' }}
          </button>
          
          <div class="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-gray-500">
            <span class="material-symbols-outlined text-[12px] text-green-600">lock</span>
            No Spam | 100% Secure
          </div>
        </div>
      </div>
    </div>

    <!-- DESKTOP VIEW (Standard row layout) -->
    <div class="hidden relative w-full h-full pt-[80px] pb-4 px-4 md:px-[48px] md:flex flex-col md:flex-row items-center justify-between gap-4 z-10">

    <!-- LEFT: Main Text & Features -->
    <div class="w-full md:w-[35%] h-full flex flex-col justify-center gap-4 lg:gap-8 relative z-30">
      <div class="flex flex-col gap-2 items-start shrink-0">
        <h1 class="text-[#002e5c] text-3xl md:text-[42px] font-bold leading-[1.1] tracking-tight">
          Give Your Child<br/>
          <span class="text-[#0096c7] text-4xl md:text-[65px] font-black tracking-normal inline-block my-1">The Best</span><br/>
          Learning Experience
        </h1>
        <div class="w-12 h-1.5 bg-[#f08a00] rounded-full mt-2 mb-4"></div>
        
        <button class="bg-[#004a8b] hover:bg-[#003666] text-white text-[14px] font-bold px-8 py-3 rounded-[30px] transition-colors tracking-wide shadow-md">
          Karnataka State Board
        </button>
      </div>
      
      <!-- Feature Grid Card (Horizontal Pill) -->
      <div class="flex flex-row items-start justify-between bg-white rounded-[20px] md:rounded-[30px] shadow-xl border border-gray-100 p-3 md:p-4 w-full md:w-[115%] relative z-40 overflow-x-auto scrollbar-hide gap-2 md:gap-0">
        <!-- Feature 1 -->
        <div class="flex flex-col items-center text-center flex-1 shrink-0 gap-1 px-1 md:border-r border-gray-100 min-w-[70px]">
          <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-[#283593] flex flex-col items-center justify-center text-white shadow-md">
            <span class="material-symbols-outlined text-[18px] font-black leading-none">sensors</span>
            <span class="text-[7px] font-bold tracking-wider leading-none mt-0.5">LIVE</span>

          </div>
          <p class="font-bold text-[9px] leading-tight text-[#283593] uppercase mt-1">Live<br/>Classes</p>
          <p class="text-[7px] leading-[1.1] text-gray-500 max-w-[80px] hidden md:block">Learn from expert teachers in real-time</p>
        </div>
        <!-- Feature 2 -->

        <div class="flex flex-col items-center text-center flex-1 shrink-0 gap-1 px-1 md:border-r border-gray-100 min-w-[70px]">
          <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-[#f57c00] flex items-center justify-center text-white shadow-md">
            <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black">slideshow</span>

          </div>
          <p class="font-bold text-[9px] leading-tight text-[#f57c00] uppercase mt-1">Animated<br/>Lessons</p>
          <p class="text-[7px] leading-[1.1] text-gray-500 max-w-[80px] hidden md:block">Concepts explained with fun animations</p>
        </div>
        <!-- Feature 3 -->

        <div class="flex flex-col items-center text-center flex-1 shrink-0 gap-1 px-1 md:border-r border-gray-100 min-w-[70px]">
          <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-[#1976d2] flex items-center justify-center text-white shadow-md">
            <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black">library_books</span>

          </div>
          <p class="font-bold text-[9px] leading-tight text-[#1976d2] uppercase mt-1">All Six<br/>Subjects</p>
          <p class="text-[7px] leading-[1.1] text-gray-500 max-w-[80px] hidden md:block">Maths, Science, Social, English...</p>
        </div>
        <!-- Feature 4 -->

        <div class="flex flex-col items-center text-center flex-1 shrink-0 gap-1 px-1 md:border-r border-gray-100 min-w-[70px]">
          <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-[#388e3c] flex items-center justify-center text-white shadow-md">
            <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black">fact_check</span>

          </div>
          <p class="font-bold text-[9px] leading-tight text-[#388e3c] uppercase mt-1">Tests</p>
          <p class="text-[7px] leading-[1.1] text-gray-500 max-w-[80px] hidden md:block">Chapter-wise & full syllabus tests</p>
        </div>
        <!-- Feature 5 -->

        <div class="flex flex-col items-center text-center flex-1 shrink-0 gap-1 px-1 min-w-[70px]">
          <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-[#c2185b] flex items-center justify-center text-white shadow-md">
            <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black">description</span>

          </div>
          <p class="font-bold text-[9px] leading-tight text-[#c2185b] uppercase mt-1">Study<br/>Notes</p>
          <p class="text-[7px] leading-[1.1] text-gray-500 max-w-[80px] hidden md:block">Easy to understand notes</p>
        </div>
      </div>
    </div>

    <!-- CENTER: Image -->
    <div class="relative w-full flex justify-center items-end h-[280px] md:h-full md:max-h-[500px] z-20 md:w-[35%] md:-ml-8 md:-mr-8 shrink">
      <!-- Mother and Child Image -->
      <img :src="'/transparentpic.png.png'" alt="Mother and Child" class="w-auto h-full max-w-[135%] object-contain object-bottom z-20 md:-translate-y-2 origin-bottom" />
    </div>

    <!-- RIGHT: Stats & Form Box -->
    <div class="w-full md:w-[30%] bg-white rounded-[32px] shadow-2xl p-4 lg:p-6 flex flex-col gap-3 lg:gap-5 relative z-30 border border-gray-100 my-auto shrink-0">
      <!-- Stats Badges -->
      <div class="flex gap-4">
        <div class="flex-1 bg-white border border-gray-100 rounded-[20px] p-2 flex gap-3 items-center shadow-sm">
          <div class="w-[42px] h-[42px] rounded-full bg-[#004a8b] text-white flex items-center justify-center shrink-0 shadow-md">
            <span class="material-symbols-outlined text-[22px]">school</span>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#002e5c] text-[13px] font-black leading-tight">19+<br/>Courses</h4>
            <p class="text-[8px] text-gray-500 leading-tight mt-0.5">Designed to build concepts</p>
          </div>
        </div>
        <div class="flex-1 bg-white border border-gray-100 rounded-[20px] p-2 flex gap-3 items-center shadow-sm">
          <div class="w-[42px] h-[42px] rounded-full bg-[#e11d48] text-white flex items-center justify-center shrink-0 shadow-md">
            <span class="material-symbols-outlined text-[22px]">video_library</span>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#002e5c] text-[13px] font-black leading-tight">15,000+<br/>Video Library</h4>
            <p class="text-[8px] text-gray-500 leading-tight mt-0.5">Huge collection of videos</p>

          </div>
        </div>
      </div>

      <!-- Signup Form -->

      <div class="flex flex-col items-center">
        <h3 class="text-[#004a8b] text-[14px] font-black text-center mb-4">

          Three Simple Steps to <span class="text-[#f08a00]">Get Started</span>
        </h3>
        
        <!-- Steps Graphic -->
        <div class="flex justify-between relative w-full px-4 mb-4">
          <!-- Step 1 -->
          <div class="flex flex-col items-center gap-2 relative z-10 w-1/3">
            <div class="relative w-[50px] h-[50px] rounded-full border-2 border-gray-200 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#9c27b0] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">1</div>
              <span class="material-symbols-outlined text-gray-600 text-[24px]">phone_iphone</span>
            </div>
            <div class="text-center mt-1">
              <h5 class="text-[10px] font-black text-[#002e5c] leading-tight">Enter Mobile Number</h5>
              <p class="text-[8px] text-gray-500 mt-0.5 leading-tight">Enter your mobile<br/>number to sign up</p>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center gap-2 relative z-10 w-1/3">
            <div class="relative w-[50px] h-[50px] rounded-full border-2 border-gray-200 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0060aa] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">2</div>
              <span class="material-symbols-outlined text-gray-600 text-[24px]">search</span>
            </div>
            <div class="text-center mt-1">
              <h5 class="text-[10px] font-black text-[#002e5c] leading-tight">Explore & Learn</h5>
              <p class="text-[8px] text-gray-500 mt-0.5 leading-tight">Check features, explore<br/>videos and all</p>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center gap-2 relative z-10 w-1/3">
            <div class="relative w-[50px] h-[50px] rounded-full border-2 border-gray-200 flex items-center justify-center bg-white z-10">
              <div class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#f08a00] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">3</div>
              <span class="material-symbols-outlined text-gray-600 text-[24px]">shield_lock</span>
            </div>
            <div class="text-center mt-1">
              <h5 class="text-[10px] font-black text-[#002e5c] leading-tight">Secure Payment</h5>
              <p class="text-[8px] text-gray-500 mt-0.5 leading-tight">Make a secure payment<br/>and start using</p>
            </div>
          </div>
          
          <!-- Connecting Line -->
          <div class="absolute top-[25px] left-[20%] right-[20%] h-[1px] border-t-[2px] border-dashed border-gray-200 z-0"></div>
        </div>

        <!-- Input & Button -->

        <div class="w-full flex flex-col gap-3 z-10 mt-2">
          <div class="flex rounded-[12px] border border-gray-300 overflow-hidden shadow-sm h-12 bg-white">
            <div class="bg-gray-50 px-4 flex items-center justify-center border-r border-gray-300 text-[15px] font-semibold text-gray-700">

              +91
            </div>
            <input 
              v-model="mobileInput"
              @keypress="e => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }"
              type="tel" 
              maxlength="10"
              placeholder="Enter Mobile Number" 
              class="flex-1 px-4 outline-none text-[15px] text-gray-800 font-medium placeholder-gray-400" 
            />
          </div>
          
          <button 
            id="continue-btn-desktop"
            @click="handleContinue"
            :disabled="store.loading"
            class="w-full bg-[#004a8b] hover:bg-[#003666] text-white font-bold tracking-wider rounded-[12px] h-12 transition-all duration-200 flex items-center justify-center gap-2 text-[15px] disabled:opacity-70 shadow-md"
          >
            <span v-if="store.loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            {{ store.loading ? 'SENDING...' : 'CONTINUE' }}
          </button>
          <p v-if="localError || store.error" class="text-red-500 text-[11px] text-center font-bold">{{ localError || store.error }}</p>
          
          <div class="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-gray-500 mt-1">
            <span class="material-symbols-outlined text-[14px] text-green-600">lock</span>
            No Spam | 100% Secure
          </div>
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

  store.isHeroFlow = true
  store.setMobileNumber(mobileInput.value)
  if (!store.userName) {
    store.setUserName('Student')
  }
  
  await store.sendOtp()
}
</script>

<style scoped>
</style>
