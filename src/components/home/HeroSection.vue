<template>
  <div class="w-full flex-1 flex flex-col relative">

    <!-- MOBILE VIEW (Redesigned layout matching the screenshot UI exactly) -->
    <div class="flex lg:hidden w-full flex-1 min-h-full relative flex-col justify-start pt-3 pb-2 z-10 bg-[#f0f0fb]">
      
      <!-- Pinned Mobile Background Doodles & Backdrop Shapes -->
      <div class="absolute top-0 bottom-0 left-0 -right-4 pointer-events-none z-0 overflow-hidden">
        <!-- Full height curved blue backdrop shape on the right edge matching screenshot -->
        <svg class="absolute inset-0 w-full h-full opacity-100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 100 0 H 60 C 75 5, 88 10, 85 20 C 80 35, 45 50, 48 60 C 52 75, 58 88, 68 100 H 100 V 0 Z" fill="#004d6e"/>
        </svg>

        <!-- Purple outline Star top left -->
        <svg class="absolute top-[8%] left-[6%] w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="#7b7fc4" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.172-.468.868-.468 1.04 0l1.972 5.342 5.733.396c.502.035.702.651.314 1.006l-4.38 4.02 1.34 5.626c.117.492-.416.88-.85.65L12 18.066l-5.009 2.923c-.434.23-.967-.158-.85-.65l1.34-5.625-4.38-4.02c-.388-.355-.188-.971.314-1.006l5.733-.396 1.972-5.342z"/></svg>

        <!-- Open Book Doodle above mother's head -->
        <svg class="absolute top-[5.5%] left-[42%] w-7 h-7 opacity-45 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="#8b5cf6" stroke-width="1.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>

        <!-- 4-point Diamond Sparkle 1 (Above book) -->
        <svg class="absolute top-[4%] left-[36%] w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
        </svg>

        <!-- 4-point Diamond Sparkle 2 (Right of book) -->
        <svg class="absolute top-[4.5%] left-[48%] w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
        </svg>

        <!-- 4-point Diamond Sparkle 3 (Farther right) -->
        <svg class="absolute top-[6.5%] left-[56%] w-3.5 h-3.5 opacity-45" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" stroke-width="1.3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
        </svg>

        <!-- 4-point Diamond Sparkle 4 (Far Left edge) -->
        <svg class="absolute top-[11%] left-[3%] w-3.5 h-3.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
        </svg>

        <!-- Small Golden Outline Star (Right side) -->
        <svg class="absolute top-[13%] left-[75%] w-3.5 h-3.5 opacity-55" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" stroke-width="1.4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.172-.468.868-.468 1.04 0l1.972 5.342 5.733.396c.502.035.702.651.314 1.006l-4.38 4.02 1.34 5.626c.117.492-.416.88-.85.65L12 18.066l-5.009 2.923c-.434.23-.967-.158-.85-.65l1.34-5.625-4.38-4.02c-.388-.355-.188-.971.314-1.006l5.733-.396 1.972-5.342z"/>
        </svg>
      </div>
      
      <!-- Top Header (Logo & Board Tag) -->
      <div class="px-5 w-full flex items-center justify-between z-30 shrink-0">
        <!-- Logo -->
        <div class="w-max flex items-center">
          <img 
            src="/logo v.png" 
            alt="Vista's Learning" 
            class="h-9 w-auto object-contain" 
            style="mix-blend-mode: multiply;"
          />
        </div>
      </div>

      <!-- Hero Title Area -->
      <div class="px-5 w-full z-20 mt-5">
        <h1 class="text-black text-[16px] font-bold leading-[1.1] tracking-tight">
          Give Your Child<br/>
          <span class="relative text-[#0096c7] text-[22px] font-black inline-block mt-0.5 mb-0.5">
            The Best
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#f08a00] rounded-full"></span>
          </span><br/>
          <span class="text-[14px] font-bold">Learning Experience</span>
        </h1>
        <!-- Board Tag -->
        <div class="mt-2.5">
          <span class="bg-[#004d6e] text-white text-[8.5px] font-extrabold px-3 py-1.5 rounded-[6px] shadow-sm tracking-wide inline-block">
            Kerala State Board
          </span>
        </div>
      </div>

      <!-- Main Section: Vertical Features on Left & Teacher/Student Image on Right -->
      <div class="px-5 w-full flex items-stretch justify-between z-20 mt-6 gap-3 relative">
        <!-- Left Side: Vertical Features list (constrained to 48% width to avoid image collision, shifted up to align with image) -->
        <div class="w-[48%] z-20 relative -translate-y-2">
          <!-- Seamless non-scrollable features list -->
          <div>

            <!-- 1. Live Classes -->
            <div class="flex items-center gap-2.5 py-2">
              <div class="w-9 h-9 rounded-xl bg-[#5e35b1] flex flex-col items-center justify-center text-white shrink-0 shadow-sm">
                <span class="material-symbols-outlined text-[15px] leading-none">sensors</span>
                <span class="text-[4px] font-black leading-none mt-0.5 text-white/90">LIVE</span>
              </div>
              <div class="flex flex-col min-w-0 flex-1">
                <h4 class="font-bold text-[11px] text-gray-900 leading-tight">Live Classes</h4>
                <p class="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Learn from expert teachers<br/>in real-time</p>
              </div>
            </div>

            <div class="h-px bg-gray-200/60 my-0.5"></div>

            <!-- 2. Animated Lessons -->
            <div class="flex items-center gap-2.5 py-2">
              <div class="w-9 h-9 rounded-xl bg-[#e91e63] flex items-center justify-center text-white shrink-0 shadow-sm">
                <span class="material-symbols-outlined text-[16px]">slideshow</span>
              </div>
              <div class="flex flex-col min-w-0 flex-1">
                <h4 class="font-bold text-[11px] text-gray-900 leading-tight">Animated Lessons</h4>
                <p class="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Concepts explained with<br/>fun & easy animations</p>
              </div>
            </div>

            <div class="h-px bg-gray-200/60 my-0.5"></div>

            <!-- 3. All Six Subjects -->
            <div class="flex items-center gap-2.5 py-2">
              <div class="w-9 h-9 rounded-xl bg-[#1976d2] flex items-center justify-center text-white shrink-0 shadow-sm">
                <span class="material-symbols-outlined text-[16px]">library_books</span>
              </div>
              <div class="flex flex-col min-w-0 flex-1">
                <h4 class="font-bold text-[11px] text-gray-900 leading-tight">All Six Subjects</h4>
                <p class="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Maths, Science, Social Science,<br/>English, Kannada & Hindi</p>
              </div>
            </div>

            <div class="h-px bg-gray-200/60 my-0.5"></div>

            <!-- 4. Tests -->
            <div class="flex items-center gap-2.5 py-2">
              <div class="w-9 h-9 rounded-xl bg-[#43a047] flex items-center justify-center text-white shrink-0 shadow-sm">
                <span class="material-symbols-outlined text-[16px]">fact_check</span>
              </div>
              <div class="flex flex-col min-w-0 flex-1">
                <h4 class="font-bold text-[11px] text-gray-900 leading-tight">Tests</h4>
                <p class="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Chapter-wise & full syllabus<br/>tests to track progress</p>
              </div>
            </div>

            <div class="h-px bg-gray-200/60 my-0.5"></div>

            <!-- 5. Study Notes -->
            <div class="flex items-center gap-2.5 py-2">
              <div class="w-9 h-9 rounded-xl bg-[#ff9800] flex items-center justify-center text-white shrink-0 shadow-sm">
                <span class="material-symbols-outlined text-[18px]">description</span>
              </div>
              <div class="flex flex-col min-w-0 flex-1">
                <h4 class="font-bold text-[11px] text-gray-900 leading-tight">Study Notes</h4>
                <p class="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Easy to understand notes<br/>for quick revision</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Side: Teacher/Student Image (Shifted further right to prevent text overlap) -->
        <div class="absolute -right-3 bottom-0 top-0 w-[52%] flex items-end justify-end pointer-events-none z-10 overflow-visible">
          <img 
            :src="'/transparentpic.png.png?v=2'" 
            alt="Teacher and Student" 
            class="w-[125%] max-w-none h-auto object-contain object-right-bottom -translate-y-4 translate-x-3" 
          />
        </div>
      </div>

      <!-- Combined Stats & Signup Form in one Card (Sits at the bottom naturally in flexbox) -->
      <div class="w-full pb-1 px-4 z-20 shrink-0 -mt-4">
        <div class="bg-white rounded-[24px] shadow-2xl border border-gray-100/60 p-3 flex flex-col gap-2">
          
          <!-- Combined Component Part 1: Stats Badges (Horizontal row inside card with separate themed backgrounds) -->
          <div class="flex gap-2 items-stretch">
            <!-- 19+ Courses -->
            <div class="flex-1 flex gap-2 items-center bg-[#f0f7ff] rounded-[14px] p-1.5 px-2 border border-blue-100/50 shadow-[0_2px_8px_rgba(0,74,139,0.03)]">
              <div class="w-[26px] h-[26px] rounded-full bg-[#004a8b] text-white flex items-center justify-center shrink-0 shadow-sm">
                <span class="material-symbols-outlined text-[13px]">school</span>
              </div>
              <div class="flex flex-col min-w-0 flex-1">
                <h4 class="text-[#002e5c] text-[9.5px] font-black leading-tight">19+ Courses</h4>
                <p class="text-[6px] text-gray-500 leading-tight mt-0.5 font-medium">Designed to build concepts & skills</p>
              </div>
            </div>
            <!-- 15,000+ Video Library -->
            <div class="flex-1 flex gap-2 items-center bg-[#fff1f2] rounded-[14px] p-1.5 px-2 border border-rose-100/50 shadow-[0_2px_8px_rgba(225,29,72,0.03)]">
              <div class="w-[26px] h-[26px] rounded-lg bg-[#e11d48] text-white flex items-center justify-center shrink-0 shadow-sm p-1">
                <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2.5" />
                  <line x1="3" y1="9" x2="21" y2="9" stroke-dasharray="2 2" />
                  <line x1="3" y1="15" x2="21" y2="15" stroke-dasharray="2 2" />
                  <polygon points="10 11 10 15 14 13" fill="currentColor" />
                </svg>
              </div>
              <div class="flex flex-col min-w-0 flex-1">
                <h4 class="text-[#002e5c] text-[9.5px] font-black leading-tight">15,000+ Video</h4>
                <p class="text-[6px] text-gray-500 leading-tight mt-0.5 font-medium">Huge collection for better learning</p>
              </div>
            </div>
          </div>

          <!-- Divider Line -->
          <div class="h-[1px] bg-gray-100/80 w-full my-0"></div>

          <!-- Combined Component Part 2: Form & Steps -->
          <div class="flex flex-col items-center">
            <h3 class="text-[#002e5c] text-[11.5px] font-black text-center mb-1.5">
              Three Simple Steps to <span class="text-[#f08a00]">Get Started</span>
            </h3>
            
            <!-- Steps Graphic -->
            <div class="flex justify-between relative w-full px-2 mb-1.5">
              <!-- Step 1 -->
              <div class="flex flex-col items-center gap-0.5 relative z-10 w-1/3">
                <div class="relative w-6 h-6 rounded-full border border-gray-200/80 flex items-center justify-center bg-white z-10 shadow-sm">
                  <div class="absolute -top-[3px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#9c27b0] text-white flex items-center justify-center text-[6px] font-bold border border-white">1</div>
                  <span class="material-symbols-outlined text-slate-500 text-[11px]">smartphone</span>
                </div>
                <div class="text-center mt-1">
                  <h5 class="text-[7.5px] font-black text-[#002e5c] leading-tight">Enter Mobile Number</h5>
                  <p class="text-[6px] text-gray-500 mt-0.5 leading-tight">Enter your mobile number to sign up</p>
                </div>
              </div>
              <!-- Step 2 -->
              <div class="flex flex-col items-center gap-0.5 relative z-10 w-1/3">
                <div class="relative w-6 h-6 rounded-full border border-gray-200/80 flex items-center justify-center bg-white z-10 shadow-sm">
                  <div class="absolute -top-[3px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0060aa] text-white flex items-center justify-center text-[6px] font-bold border border-white">2</div>
                  <span class="material-symbols-outlined text-slate-500 text-[11px]">search</span>
                </div>
                <div class="text-center mt-1">
                  <h5 class="text-[7.5px] font-black text-[#002e5c] leading-tight">Explore & Learn</h5>
                  <p class="text-[6px] text-gray-500 mt-0.5 leading-tight">Check features, explore videos and all</p>
                </div>
              </div>
              <!-- Step 3 -->
              <div class="flex flex-col items-center gap-0.5 relative z-10 w-1/3">
                <div class="relative w-6 h-6 rounded-full border border-gray-200/80 flex items-center justify-center bg-white z-10 shadow-sm">
                  <div class="absolute -top-[3px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#f08a00] text-white flex items-center justify-center text-[6px] font-bold border border-white">3</div>
                  <span class="material-symbols-outlined text-slate-500 text-[11px]">security</span>
                </div>
                <div class="text-center mt-1">
                  <h5 class="text-[7.5px] font-black text-[#002e5c] leading-tight">Secure Payment</h5>
                  <p class="text-[6px] text-gray-500 mt-0.5 leading-tight">Make a secure payment & start learning</p>
                </div>
              </div>
              
              <!-- Connecting Line -->
              <div class="absolute top-[12px] left-[20%] right-[20%] h-[1px] border-t border-dashed border-gray-200 z-0"></div>
            </div>

            <!-- Input & Button -->
            <div class="w-full flex flex-col gap-2 z-10">
              <div class="flex rounded-[10px] border border-gray-300 overflow-hidden shadow-sm h-9 bg-white">
                <div class="bg-gray-50 px-3 flex items-center justify-center border-r border-gray-300 text-[11.5px] font-semibold text-gray-700">
                  +91
                </div>
                <input 
                  v-model="mobileInput"
                  @keypress="e => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }"
                  type="tel" 
                  maxlength="10"
                  placeholder="Enter Mobile Number" 
                  class="flex-1 px-3 outline-none text-[11.5px] text-gray-800 font-medium placeholder-gray-400" 
                />
              </div>
              
              <button 
                id="continue-btn-mobile"
                @click="handleContinue"
                :disabled="store.loading"
                class="w-full bg-[#004d6e] hover:bg-[#003852] text-white font-bold tracking-wider rounded-[10px] h-9 transition-all duration-200 flex items-center justify-center gap-2 text-[12px] disabled:opacity-70 shadow-md"
              >
                <span v-if="store.loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                {{ store.loading ? 'SENDING...' : 'CONTINUE' }}
              </button>
              <p v-if="successMessage" class="text-green-600 text-[9.5px] text-center font-bold m-0">{{ successMessage }}</p>
              <p v-else-if="localError || store.error" class="text-red-500 text-[9.5px] text-center font-bold m-0">{{ localError || store.error }}</p>
              
              <div class="flex items-center justify-center gap-1.5 text-[8.5px] font-semibold text-gray-400 mt-0.5">
                <span class="material-symbols-outlined text-[10.5px] text-green-600">lock</span>
                No Spam | 100% Secure
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

    <!-- DESKTOP VIEW (Standard row layout) -->
    <div class="hidden relative w-full h-full py-2 px-6 lg:px-12 lg:flex flex-row items-center justify-between z-10">



    <!-- LEFT: Main Text & Features -->
    <div class="w-full md:w-[35%] h-full flex flex-col justify-center gap-2 lg:gap-3 relative z-30">
      <div class="flex flex-col gap-1 items-start shrink-0">
        <h1 class="text-[#002e5c] text-3xl md:text-[30px] lg:text-[36px] font-bold leading-[1.1] tracking-tight">
          Give Your Child<br/>
          <span class="text-[#0096c7] text-4xl md:text-[42px] lg:text-[54px] font-black tracking-normal inline-block my-0 lg:my-1">The Best</span><br/>
          Learning Experience
        </h1>
        <div class="w-12 h-1.5 bg-[#f08a00] rounded-full mt-1 mb-2"></div>
        
        <button class="bg-[#004d6e] hover:bg-[#003852] text-white text-[12px] lg:text-[13px] font-bold px-6 py-2 lg:px-7 lg:py-2.5 rounded-[30px] transition-colors tracking-wide shadow-md">
          Karnataka State Board
        </button>
      </div>
      
      <!-- Feature Grid Container with Shadow -->
      <div class="flex flex-row items-start justify-between bg-white rounded-[24px] shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-gray-100/60 p-3 lg:p-4 w-full md:w-[115%] relative z-40 overflow-x-auto scrollbar-hide gap-1 md:gap-0 mt-4">
        <!-- Feature 1: Live Classes -->
        <div class="uiverse-card shrink-0" style="--theme-color: #8E2DE2;">
          <div class="first-content">
            <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] shadow-[0_4px_12px_rgba(74,0,224,0.35)] flex flex-col items-center justify-center text-white border border-white/20">
              <span class="material-symbols-outlined text-[18px] font-black leading-none drop-shadow-sm">sensors</span>
              <span class="text-[7px] font-black tracking-wider leading-none mt-[2px] text-white/90">LIVE</span>
            </div>
            <p class="font-black text-[9px] leading-tight text-[#002e5c] mt-1 text-center">Live<br/>Classes</p>
          </div>
          <div class="second-content bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0]">
            <p class="text-white text-[7px] leading-[1.1] font-bold text-center px-1">Learn from expert teachers in real-time</p>
          </div>
        </div>

        <!-- Feature 2: Animated Lessons -->
        <div class="uiverse-card shrink-0" style="--theme-color: #FF512F;">
          <div class="first-content">
            <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-gradient-to-br from-[#FF512F] to-[#DD2476] shadow-[0_4px_12px_rgba(221,36,118,0.35)] flex items-center justify-center text-white border border-white/20">
              <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black drop-shadow-sm">slideshow</span>
            </div>
            <p class="font-black text-[9px] leading-tight text-[#002e5c] mt-1 text-center">Animated<br/>Lessons</p>
          </div>
          <div class="second-content bg-gradient-to-br from-[#FF512F] to-[#DD2476]">
            <p class="text-white text-[7px] leading-[1.1] font-bold text-center px-1">Concepts explained with fun animations</p>
          </div>
        </div>

        <!-- Feature 3: All Six Subjects -->
        <div class="uiverse-card shrink-0" style="--theme-color: #4776E6;">
          <div class="first-content">
            <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-gradient-to-br from-[#4776E6] to-[#8E54E9] shadow-[0_4px_12px_rgba(142,84,233,0.35)] flex items-center justify-center text-white border border-white/20">
              <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black drop-shadow-sm">library_books</span>
            </div>
            <p class="font-black text-[9px] leading-tight text-[#002e5c] mt-1 text-center">All Six<br/>Subjects</p>
          </div>
          <div class="second-content bg-gradient-to-br from-[#4776E6] to-[#8E54E9]">
            <p class="text-white text-[7px] leading-[1.1] font-bold text-center px-1">Maths, Science, Social, English...</p>
          </div>
        </div>

        <!-- Feature 4: Tests -->
        <div class="uiverse-card shrink-0" style="--theme-color: #11998e;">
          <div class="first-content">
            <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-gradient-to-br from-[#11998e] to-[#38ef7d] shadow-[0_4px_12px_rgba(17,153,142,0.35)] flex items-center justify-center text-white border border-white/20">
              <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black drop-shadow-sm">fact_check</span>
            </div>
            <p class="font-black text-[9px] leading-tight text-[#002e5c] mt-1 text-center">Tests</p>
          </div>
          <div class="second-content bg-gradient-to-br from-[#11998e] to-[#38ef7d]">
            <p class="text-white text-[7px] leading-[1.1] font-bold text-center px-1">Chapter-wise & full syllabus tests</p>
          </div>
        </div>

        <!-- Feature 5: Study Notes -->
        <div class="uiverse-card shrink-0" style="--theme-color: #e91e63;">
          <div class="first-content">
            <div class="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-xl bg-[#e91e63] shadow-[0_4px_12px_rgba(233,30,99,0.35)] flex items-center justify-center text-white border border-white/20">
              <span class="material-symbols-outlined text-[20px] md:text-[24px] font-black drop-shadow-sm">description</span>
            </div>
            <p class="font-black text-[9px] leading-tight text-[#002e5c] mt-1 text-center">Study<br/>Notes</p>
          </div>
          <div class="second-content bg-[#e91e63]">
            <p class="text-white text-[7px] leading-[1.1] font-bold text-center px-1">Easy to understand smart notes</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CENTER: Image -->
    <div class="relative w-full flex justify-center items-end h-[350px] md:h-full md:max-h-[500px] lg:max-h-[570px] z-20 md:w-[48%] md:-ml-16 md:-mr-16 shrink">
      <!-- Teacher and Student Image -->
      <img :src="'/transparentpic.png.png?v=2'" alt="Teacher and Student" class="w-auto h-full max-w-[145%] object-contain object-bottom z-20 md:translate-y-2 origin-bottom" />

      <!-- Pinned Background Doodles (stars, book, lightbulb, music notes, lightning) -->
      <div class="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <!-- Purple outline Star top left -->
        <svg class="absolute top-[8%] left-[12%] w-6 h-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="#7b7fc4" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.172-.468.868-.468 1.04 0l1.972 5.342 5.733.396c.502.035.702.651.314 1.006l-4.38 4.02 1.34 5.626c.117.492-.416.88-.85.65L12 18.066l-5.009 2.923c-.434.23-.967-.158-.85-.65l1.34-5.625-4.38-4.02c-.388-.355-.188-.971.314-1.006l5.733-.396 1.972-5.342z"/></svg>
        <!-- Blueish outline Star top right -->
        <svg class="absolute top-[18%] right-[10%] w-5 h-5 opacity-65" fill="none" viewBox="0 0 24 24" stroke="#9c9cd4" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.172-.468.868-.468 1.04 0l1.972 5.342 5.733.396c.502.035.702.651.314 1.006l-4.38 4.02 1.34 5.626c.117.492-.416.88-.85.65L12 18.066l-5.009 2.923c-.434.23-.967-.158-.85-.65l1.34-5.625-4.38-4.02c-.388-.355-.188-.971.314-1.006l5.733-.396 1.972-5.342z"/></svg>
        <!-- Orange outline Star mid-left -->
        <svg class="absolute top-[32%] left-[8%] w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="#ffb74d" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.172-.468.868-.468 1.04 0l1.972 5.342 5.733.396c.502.035.702.651.314 1.006l-4.38 4.02 1.34 5.626c.117.492-.416.88-.85.65L12 18.066l-5.009 2.923c-.434.23-.967-.158-.85-.65l1.34-5.625-4.38-4.02c-.388-.355-.188-.971.314-1.006l5.733-.396 1.972-5.342z"/></svg>
        <!-- Orange outline Star bottom-left -->
        <svg class="absolute bottom-[18%] left-[6%] w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="#ffb74d" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.172-.468.868-.468 1.04 0l1.972 5.342 5.733.396c.502.035.702.651.314 1.006l-4.38 4.02 1.34 5.626c.117.492-.416.88-.85.65L12 18.066l-5.009 2.923c-.434.23-.967-.158-.85-.65l1.34-5.625-4.38-4.02c-.388-.355-.188-.971.314-1.006l5.733-.396 1.972-5.342z"/></svg>
        <!-- Lightbulb mid-left -->
        <svg class="absolute top-[52%] left-[10%] w-[34px] h-[34px] opacity-70" fill="none" viewBox="0 0 24 24" stroke="#7b7fc4" stroke-width="1.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
        <!-- Open Book mid-right -->
        <svg class="absolute top-[30%] right-[6%] w-[38px] h-[38px] opacity-70" fill="none" viewBox="0 0 24 24" stroke="#7b7fc4" stroke-width="1.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
        <!-- Musical notes bottom center-left -->
        <svg class="absolute bottom-[10%] left-[28%] w-[24px] h-[24px] opacity-75" fill="none" viewBox="0 0 24 24" stroke="#7b7fc4" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 10l12-3M9 14H6a3 3 0 00-3 3v2a3 3 0 003 3h3a3 3 0 003-3v-5M21 11h-3a3 3 0 00-3 3v2a3 3 0 003 3h3a3 3 0 003-3v-5" />
        </svg>
        <!-- Lightning details top right -->
        <svg class="absolute top-[10%] right-[22%] w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="#7b7fc4" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </div>
    </div>

    <!-- RIGHT: Stats & Form Box -->
    <div class="w-full md:w-[32%] bg-white rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] py-8 px-6 flex flex-col gap-6 relative z-30 border border-gray-100/50 my-auto shrink-0">
      <!-- Stats Badges -->
      <div class="flex gap-4">
        <!-- 19+ Courses -->
        <div class="flex-1 bg-[#f0f2f9] border border-transparent rounded-[16px] p-3 flex gap-2.5 items-center">
          <div class="w-[42px] h-[42px] rounded-full bg-[#004d6e] text-white flex items-center justify-center shrink-0 shadow-sm">
            <span class="material-symbols-outlined text-[20px]">school</span>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#002e5c] text-[13px] font-black leading-tight">19+<br/>Courses</h4>
            <p class="text-[7px] text-gray-500 leading-tight mt-0.5 font-medium">Designed to build<br/>concepts &amp; skills</p>
          </div>
        </div>
        <!-- 15,000+ Video Library -->
        <div class="flex-1 bg-[#fbf0f3] border border-transparent rounded-[16px] p-3 flex gap-2.5 items-center">
          <div class="w-[42px] h-[42px] rounded-[12px] bg-[#e11d48] text-white flex items-center justify-center shrink-0 shadow-sm p-2.5">
            <!-- Custom inline SVG for the movie reel play icon -->
            <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2.5" />
              <line x1="3" y1="9" x2="21" y2="9" stroke-dasharray="2 2" />
              <line x1="3" y1="15" x2="21" y2="15" stroke-dasharray="2 2" />
              <polygon points="10 11 10 15 14 13" fill="currentColor" />
            </svg>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#002e5c] text-[13px] font-black leading-tight">15,000+<br/>Video Library</h4>
            <p class="text-[7px] text-gray-500 leading-tight mt-0.5 font-medium">Huge collection of videos<br/>for better learning</p>
          </div>
        </div>
      </div>

      <!-- Signup Form -->

      <div class="flex flex-col items-center">
        <h3 class="text-[#004d6e] text-[13px] font-black text-center mb-2">

          Three Simple Steps to <span class="text-[#f08a00]">Get Started</span>
        </h3>
        
        <!-- Steps Graphic -->
        <div class="flex justify-between relative w-full px-2 mb-2">
          <!-- Step 1 -->
          <div class="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
            <div class="relative w-11 h-11 rounded-full border border-gray-200/80 flex items-center justify-center bg-white z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] uiverse-checkbox-tile">
              <div class="absolute -top-[5px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#9c27b0] text-white flex items-center justify-center text-[8px] font-bold border border-white shadow-sm z-20">1</div>
              <span class="material-symbols-outlined text-slate-500 text-[18px] z-10">smartphone</span>
            </div>
            <div class="text-center mt-1">
              <h5 class="text-[9px] font-black text-[#002e5c] leading-tight">Enter Mobile Number</h5>
              <p class="text-[7px] text-gray-500 mt-0.5 leading-tight">Enter your mobile<br/>number to sign up</p>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
            <div class="relative w-11 h-11 rounded-full border border-gray-200/80 flex items-center justify-center bg-white z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] uiverse-checkbox-tile">
              <div class="absolute -top-[5px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0060aa] text-white flex items-center justify-center text-[8px] font-bold border border-white shadow-sm z-20">2</div>
              <span class="material-symbols-outlined text-slate-500 text-[18px] z-10">search</span>
            </div>
            <div class="text-center mt-1">
              <h5 class="text-[9px] font-black text-[#002e5c] leading-tight">Explore & Learn</h5>
              <p class="text-[7px] text-gray-500 mt-0.5 leading-tight">Check features, explore<br/>videos and all</p>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
            <div class="relative w-11 h-11 rounded-full border border-gray-200/80 flex items-center justify-center bg-white z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] uiverse-checkbox-tile">
              <div class="absolute -top-[5px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#f08a00] text-white flex items-center justify-center text-[8px] font-bold border border-white shadow-sm z-20">3</div>
              <span class="material-symbols-outlined text-slate-500 text-[18px] z-10">shield_lock</span>
            </div>
            <div class="text-center mt-1">
              <h5 class="text-[9px] font-black text-[#002e5c] leading-tight">Secure Payment</h5>
              <p class="text-[7px] text-gray-500 mt-0.5 leading-tight">Make a secure payment<br/>and start using,<br/>start learning</p>
            </div>
          </div>
          
          <!-- Connecting Line -->
          <div class="absolute top-[22px] left-[20%] right-[20%] h-[1px] border-t-[2px] border-dashed border-gray-200 z-0"></div>
        </div>

        <!-- Input & Button -->

        <div class="w-full flex flex-col gap-3.5 z-10 mt-3.5">
          <div class="flex rounded-[12px] border border-gray-300 overflow-hidden shadow-sm h-12 bg-white">
            <div class="bg-gray-50 px-3 flex items-center justify-center border-r border-gray-300 text-[14px] font-semibold text-gray-700">
              +91
            </div>
            <input 
              v-model="mobileInput"
              @keypress="e => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }"
              type="tel" 
              maxlength="10"
              placeholder="Enter Mobile Number" 
              class="flex-1 px-3 outline-none text-[14px] text-gray-800 font-medium placeholder-gray-400" 
            />
          </div>
          
          <button 
            id="continue-btn-desktop"
            @click="handleContinue"
            :disabled="store.loading"
            class="w-full bg-[#004d6e] hover:bg-[#003852] text-white font-bold tracking-wider rounded-[12px] h-12 transition-all duration-200 flex items-center justify-center gap-2 text-[14px] disabled:opacity-70 shadow-md shiny-btn"
          >
            <span v-if="store.loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            {{ store.loading ? 'SENDING...' : 'CONTINUE' }}
          </button>
          <p v-if="successMessage" class="text-green-600 text-[11px] text-center font-bold m-0">{{ successMessage }}</p>
          <p v-else-if="localError || store.error" class="text-red-500 text-[10px] text-center font-bold m-0">{{ localError || store.error }}</p>
          
          <div class="flex items-center justify-center gap-1 text-[9px] font-semibold text-gray-500 mt-1">
            <span class="material-symbols-outlined text-[12px] text-green-600">lock</span>
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
import { useRouter } from 'vue-router'
import { useSubscriptionStore } from '../../stores/subscription'
import { checkMobileExists } from '../../services/api'
import BottomTrustBar from './BottomTrustBar.vue'

const router = useRouter()
const store = useSubscriptionStore()
const mobileInput = ref('')
const localError = ref('')  
const successMessage = ref('')
const showSubscribedMessage = ref(false)

const handleContinue = async () => {
  localError.value = ''
  successMessage.value = ''
  
  if (!mobileInput.value || mobileInput.value.length !== 10) {
    localError.value = 'Please enter a valid 10-digit mobile number'
    return
  }
  
  if (!/^[6-9]\d{9}$/.test(mobileInput.value)) {
    localError.value = 'Please enter a valid mobile number starting with 6-9'
    return
  }

  if (/^([0-9])\1{9}$/.test(mobileInput.value)) {
    localError.value = 'Please enter a real mobile number, not repeated digits'
    return
  }

  // Check if we have a valid 2-day skip token in localStorage
  const skipUntil = localStorage.getItem(`skip_otp_${mobileInput.value}`)
  if (skipUntil && Date.now() < parseInt(skipUntil)) {
    router.push('/explore')
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
/* Hover Reveal Card styles */
.uiverse-card {
  width: 76px;
  height: 98px;
  background: transparent;
  transition: all 0.4s;
  border-radius: 12px;
  font-family: sans-serif;
  position: relative;
  overflow: hidden;
}

.uiverse-card:hover {
  border-radius: 15px;
  cursor: pointer;
  transform: scale(1.15);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}

.first-content {
  height: 100%;
  width: 100%;
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  border-radius: 12px;
  background: #ffffff;
}

.uiverse-card:hover .first-content {
  height: 0px;
  opacity: 0;
}

.second-content {
  height: 0%;
  width: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  transition: all 0.4s;
  font-size: 0px;
  transform: rotate(90deg) scale(-1);
  color: white;
}

.uiverse-card:hover .second-content {
  opacity: 1;
  height: 100%;
  font-size: 8.5px;
  transform: rotate(0deg);
}

/* Shiny Button Styles */
.shiny-btn {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
}

.shiny-btn:hover {
  background: rgb(61, 106, 255);
  box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.6);
  transition: all 0.2s ease-out;
}

.shiny-btn:hover::before {
  animation: sh02 0.5s 0s linear;
}

.shiny-btn::before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

.shiny-btn:active {
  box-shadow: 0 0 0 0 transparent;
  transition: box-shadow 0.2s ease-in;
}

/* Checkbox Check Hover Features for Steps */
.uiverse-checkbox-tile {
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
}

.uiverse-checkbox-tile:before {
  content: "";
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border: 1.5px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: -2px;
  left: -2px;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
  background-size: 7px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 30;
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
