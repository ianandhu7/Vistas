<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  console.log('[SSO] Payment callback loaded (failure/cancellation). Redirecting to homepage.')
  router.push('/')
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0d0d12]">
    <div class="flex flex-col items-center gap-4 text-center">
      <div class="w-10 h-10 border-4 border-[#9333ea] border-t-transparent rounded-full animate-spin"></div>
      <p class="text-white/70 text-sm font-medium tracking-wide">Payment status updated, redirecting to home…</p>
    </div>
  </div>
</template>
