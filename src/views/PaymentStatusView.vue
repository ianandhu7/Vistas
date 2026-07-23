<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useThemeStore } from '../stores/theme'
import { getUserFromLocalStorage, clearUserFromLocalStorage } from '../services/storage'

const route = useRoute()
const router = useRouter()
const themeStore = useThemeStore()

const JAVA_API = 'https://api-prod.vistaslearning.com'

// State
const status = ref('loading') // 'loading' | 'success' | 'failed'
const countdown = ref(8)
const errorMessage = ref('')

let intervalId = null

async function verifySubscription() {
  try {
    const auth = getUserFromLocalStorage()

    if (!auth.accessToken || !auth.userData?.userSurId) {
      status.value = 'failed'
      errorMessage.value = 'Login session not found. Please try again from the pricing page.'
      return
    }

    const res = await fetch(
      `${JAVA_API}/api/v1/subscription/user-subscription-postlogin?userSurId=${auth.userData.userSurId}`,
      {
        headers: {
          'Authorization': `Bearer ${auth.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (!res.ok) {
      throw new Error(`Server responded with ${res.status}`)
    }

    const data = await res.json()
    const subFlag = data.data

    const isSubscribed =
      subFlag === true ||
      (subFlag && subFlag.subscribedFlag === true)

    if (isSubscribed) {
      // Update localStorage with subscription status
      auth.isSubscribed = true
      auth.subscriptionFlag = subFlag
      auth.userData.subscriptionFlag = subFlag
      localStorage.setItem('vista-auth', JSON.stringify(auth))

      status.value = 'success'
      startCountdown()
    } else {
      status.value = 'failed'
      errorMessage.value = 'Payment was not completed or is still being processed. Please try again or contact support.'
    }
  } catch (err) {
    console.error('Subscription verification error:', err)
    status.value = 'failed'
    errorMessage.value = 'Unable to verify your payment status. Please contact support or try again later.'
  }
}

function startCountdown() {
  intervalId = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(intervalId)

      const authData = localStorage.getItem('vista-auth')
      if (authData) {
        const baseUrl = import.meta.env.VITE_STUDENT_LOGIN_URL || 'https://www.student.vistaslearning.com/login'
        const separator = baseUrl.endsWith('/') ? '?' : '/?'
        
        // Clear local storage for marketing app before redirecting
        clearUserFromLocalStorage()
        
        window.location.href = `${baseUrl}${separator}auth=${encodeURIComponent(authData)}`
      } else {
        router.push({ name: 'home' })
      }
    }
  }, 1000)
}

function goBackToPricing() {
  router.push({ name: 'pricing' })
}

onMounted(() => {
  verifySubscription()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const isDark = computed(() => themeStore.theme === 'dark')
</script>

<template>
  <div 
    class="absolute inset-0 w-full h-full font-sans transition-colors duration-300 overflow-y-auto flex flex-col items-center justify-start p-4"
    :class="isDark ? 'bg-[#060309]' : 'bg-[#F8F9FA]'"
  >
    <!-- Background Dot Pattern -->
    <div class="absolute inset-0 z-0 pointer-events-none"
         :style="{
           backgroundImage: isDark 
             ? 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)'
             : 'radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)',
           backgroundSize: '24px 24px'
         }">
    </div>

    <!-- Background Glow -->
    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div 
        class="w-[500px] h-[500px] rounded-full blur-[100px] opacity-35 transition-colors duration-300"
        :class="[
          status === 'success' 
            ? (isDark ? 'bg-[#064E3B]/30' : 'bg-[#059669]/10') 
            : status === 'failed'
              ? (isDark ? 'bg-[#7F1D1D]/30' : 'bg-[#EF4444]/10')
              : (isDark ? 'bg-[#3A146F]/30 animate-pulse' : 'bg-[#A855F7]/10 animate-pulse')
        ]"
      ></div>
    </div>

    <!-- Status Card -->
    <div 
      class="relative z-10 w-full max-w-[420px] rounded-[24px] p-6 my-auto md:my-12 shrink-0 transition-all duration-300 shadow-2xl border"
      :class="isDark ? 'bg-[#0C0617] border-[#29174A]' : 'bg-white border-gray-100'"
      :style="{
        boxShadow: isDark ? '0 20px 60px rgba(13, 6, 23, 0.95), 0 0 40px rgba(139,92,246,0.08)' : '0 15px 40px rgba(0,0,0,0.05)'
      }"
    >
      <!-- Top Dots Grid Left -->
      <div class="absolute top-6 left-6 grid grid-cols-4 gap-1 opacity-20">
        <div v-for="i in 16" :key="'dl-'+i" class="w-0.75 h-0.75 bg-[#8B5CF6] rounded-full"></div>
      </div>

      <!-- Top Dots Grid Right -->
      <div class="absolute top-6 right-6 grid grid-cols-4 gap-1 opacity-20">
        <div v-for="i in 16" :key="'dr-'+i" class="w-0.75 h-0.75 bg-[#8B5CF6] rounded-full"></div>
      </div>

      <!-- Top Logo Circle with Glow -->
      <div class="absolute -top-[48px] left-1/2 -translate-x-1/2">
        <div 
          class="relative w-[96px] h-[96px] rounded-full flex items-center justify-center transition-colors duration-300 border-2"
          :class="[
            status === 'success'
              ? (isDark ? 'bg-[#0C0617] border-[#059669] shadow-[0_0_25px_rgba(5,150,105,0.4)]' : 'bg-white border-green-200 shadow-[0_0_20px_rgba(5,150,105,0.15)]')
              : status === 'failed'
                ? (isDark ? 'bg-[#0C0617] border-[#DC2626] shadow-[0_0_25px_rgba(220,38,38,0.4)]' : 'bg-white border-red-200 shadow-[0_0_20px_rgba(220,38,38,0.15)]')
                : (isDark ? 'bg-[#0C0617] border-[#4C2893] shadow-[0_0_25px_rgba(139,92,246,0.4)]' : 'bg-white border-gray-100 shadow-[0_0_20px_rgba(139,92,246,0.1)]')
          ]"
        >
          <!-- Inner circle layer -->
          <div 
            class="absolute inset-[5px] rounded-full border flex items-center justify-center overflow-hidden transition-colors duration-300"
            :class="isDark ? 'bg-[#140A26] border-[#8B5CF6]/30' : 'bg-white border-gray-50'"
          >
            <img src="/light-logo.webp" alt="Vistas Learning" width="48" height="48" loading="lazy" class="w-12 h-12 object-contain" />
          </div>
          
          <!-- Status Badge -->
          <div 
            v-if="status !== 'loading'"
            class="absolute bottom-0 right-0 w-[26px] h-[26px] rounded-full flex items-center justify-center border-[2.5px] transition-colors duration-300 shadow-md"
            :class="[
              status === 'success' ? 'bg-[#059669]' : 'bg-[#DC2626]',
              isDark ? 'border-[#0C0617]' : 'border-white'
            ]"
          >
            <span class="material-symbols-outlined text-[13px] text-white font-bold">
              {{ status === 'success' ? 'check' : 'close' }}
            </span>
          </div>

          <!-- Loading spinner badge -->
          <div 
            v-if="status === 'loading'"
            class="absolute bottom-0 right-0 w-[26px] h-[26px] bg-[#8B5CF6] rounded-full flex items-center justify-center border-[2.5px] transition-colors duration-300 shadow-md animate-spin"
            :class="isDark ? 'border-[#0C0617]' : 'border-white'"
          >
            <span class="material-symbols-outlined text-[13px] text-white font-bold">sync</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="mt-11 text-center">

        <!-- LOADING STATE -->
        <template v-if="status === 'loading'">
          <h1 class="text-[23px] font-black tracking-tight mb-2 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">
            Verifying <span class="text-[#A78BFA]">your payment</span>
          </h1>
          <p class="text-[13px] leading-relaxed mb-6 transition-colors duration-300 px-4" :class="isDark ? 'text-[#9A8BB5]' : 'text-gray-500'">
            Please wait while we confirm your subscription status...
          </p>
          <!-- Animated dots -->
          <div class="flex items-center justify-center gap-2 mb-6">
            <div class="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-bounce" style="animation-delay: 0ms"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-bounce" style="animation-delay: 150ms"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-bounce" style="animation-delay: 300ms"></div>
          </div>
        </template>

        <!-- SUCCESS STATE -->
        <template v-if="status === 'success'">
          <h1 class="text-[23px] font-black tracking-tight mb-2 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">
            Thank you <span class="text-[#34D399]">for choosing us</span>
          </h1>
          <p class="text-[13px] leading-relaxed mb-4 transition-colors duration-300 px-4" :class="isDark ? 'text-[#9A8BB5]' : 'text-gray-500'">
            Your subscription is now active. We're glad to have you on board.
          </p>
          <p class="text-[11px] font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-[#34D399]' : 'text-green-600'">
            Redirecting to your dashboard in {{ countdown }}s...
          </p>

          <!-- Divider -->
          <div class="relative flex items-center justify-center mb-6">
            <div class="w-full h-px transition-colors duration-300" :class="isDark ? 'bg-gradient-to-r from-transparent via-[#065F46] to-transparent' : 'bg-gradient-to-r from-transparent via-green-200 to-transparent'"></div>
            <div class="absolute">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#059669" />
              </svg>
            </div>
          </div>

          <!-- Status Card -->
          <div class="space-y-3 text-left">
            <div 
              class="flex items-center justify-between py-3.5 px-4 rounded-[14px] border transition-colors duration-300 shadow-[0_0_15px_rgba(5,150,105,0.12)]"
              :class="isDark ? 'border-[#059669]/40 bg-gradient-to-r from-[#0D2818]/90 to-[#064E3B]/70' : 'border-green-300 bg-gradient-to-r from-[#F0FDF4] to-[#DCFCE7] shadow-green-100/50'"
            >
              <div class="flex items-center gap-3 shrink min-w-0">
                <div 
                  class="w-9 h-9 rounded-[10px] flex items-center justify-center transition-colors duration-300 shrink-0 border"
                  :class="isDark ? 'bg-[#059669]/20 border-[#059669]/30' : 'bg-[#ECFDF5] border-green-200'"
                >
                  <span class="material-symbols-outlined text-[19px] text-[#34D399]">verified</span>
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[13px] font-bold truncate" :class="isDark ? 'text-white' : 'text-gray-800'">Subscription Active</span>
                  <span class="text-[10.5px] leading-tight mt-0.5 truncate" :class="isDark ? 'text-[#9A8BB5]' : 'text-gray-500'">Your plan is now active and ready to use.</span>
                </div>
              </div>
              <div 
                class="px-2.5 py-0.5 rounded-full text-[11.5px] font-bold flex items-center gap-1 border transition-colors duration-300"
                :class="isDark ? 'bg-[#064E3B]/20 border-[#059669]/30 text-[#34D399]' : 'bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]'"
              >
                <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1">check_circle</span>
                Active
              </div>
            </div>
          </div>
        </template>

        <!-- FAILED STATE -->
        <template v-if="status === 'failed'">
          <h1 class="text-[23px] font-black tracking-tight mb-2 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">
            Payment <span class="text-[#F87171]">not completed</span>
          </h1>
          <p class="text-[13px] leading-relaxed mb-6 transition-colors duration-300 px-4" :class="isDark ? 'text-[#9A8BB5]' : 'text-gray-500'">
            {{ errorMessage }}
          </p>

          <!-- Divider -->
          <div class="relative flex items-center justify-center mb-6">
            <div class="w-full h-px transition-colors duration-300" :class="isDark ? 'bg-gradient-to-r from-transparent via-[#7F1D1D] to-transparent' : 'bg-gradient-to-r from-transparent via-red-200 to-transparent'"></div>
            <div class="absolute">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#EF4444" />
              </svg>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <button 
              @click="goBackToPricing"
              class="w-full py-3 px-4 rounded-[14px] text-[13px] font-bold transition-all duration-300 flex items-center justify-center gap-2 border"
              :class="isDark 
                ? 'border-[#29174A] text-[#A78BFA] hover:bg-[#1D0E35]/50' 
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'"
            >
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Plans
            </button>

            <a 
              href="tel:9945899989"
              class="w-full py-3 px-4 rounded-[14px] text-[13px] font-bold transition-all duration-300 flex items-center justify-center gap-2 border"
              :class="isDark 
                ? 'border-[#29174A] text-[#9A8BB5] hover:bg-[#1D0E35]/50' 
                : 'border-gray-200 text-gray-500 hover:bg-gray-50'"
            >
              <span class="material-symbols-outlined text-[18px]">call</span>
              Contact Support: 99458-99989
            </a>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<style scoped>
.w-0\.75 {
  width: 3px;
}
.h-0\.75 {
  height: 3px;
}
</style>