<script setup>
import { onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import VerifyModal from './components/auth/VerifyModal.vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from './stores/theme'
import { useAuthStore } from './stores/auth'
import { isLoggedIn } from './services/storage'
import { useSubscriptionStore } from './stores/subscription'

const themeStore = useThemeStore()
const authStore = useAuthStore()
const subscriptionStore = useSubscriptionStore()
const route = useRoute()

watch(() => route.path, (newPath) => {
  if ((newPath === '/' || newPath === '/pricing') && !authStore.isVerified) {
    setTimeout(() => {
      authStore.openVerifyModal()
    }, 1500)
  }
}, { immediate: true })

onMounted(() => {
  themeStore.initTheme()
  authStore.initAuth()
  
  // Auto-correct broken state from previous dummy testing
  if (authStore.isVerified && !isLoggedIn()) {
    authStore.logout()
    subscriptionStore.logout()
  }
})
</script>

<template>
  <div class="app-container font-sans antialiased">
    <main class="flex-1 min-h-0 flex flex-col">
      <RouterView />
    </main>
    <VerifyModal />
  </div>
</template>

<style>
.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: var(--bg-main);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

/* Custom Premium Scrollbar */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.2);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.4);
}

[data-theme='dark'] .app-container {
  background-color: var(--bg-main);
  background-image: none;
  color: #FFFFFF;
}

[data-theme='light'] .app-container {
  background-image: radial-gradient(circle at 50% -20%, #F3EEFF 0%, #FFFFFF 80%);
  background-color: #F8FAFC;
  color: #111827;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Smooth transitions for theme switches — explicit properties on key structural elements (avoids non-composited animation warnings and performance lag from universal * selector) */
.app-container,
header,
main,
.flux-card,
.pricing-plan-card,
input,
button {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

@media (max-width: 768px) {
  .app-container {
    min-height: 100vh !important;
    min-height: 100dvh !important; /* Dynamic viewport height for mobile browsers */
    overflow-x: hidden !important;
    width: 100% !important;
  }
  main {
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
  }
}
</style>
