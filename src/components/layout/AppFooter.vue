<template>
  <footer class="px-6 py-3 bg-transparent flex flex-col items-center gap-2">
    <div class="flex items-center gap-12 text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest">
      <div class="flex items-center gap-2 group transition-colors hover:text-white">
        <span class="material-symbols-outlined text-[14px] text-[#7C3AED]">lock</span>
        Secure Payments
      </div>
      <div class="flex items-center gap-2 group transition-colors hover:text-white">
        <span class="material-symbols-outlined text-[14px] text-[#7C3AED]">devices</span>
        Access on Mobile, Tablet & TV
      </div>
      <div class="flex items-center gap-2 group transition-colors hover:text-white">
        <span class="material-symbols-outlined text-[14px] text-[#7C3AED]">support_agent</span>
        24x7 Learning Support
      </div>
    </div>

    <!-- Legal strip: copyright, terms link, version -->
    <div class="flex items-center justify-center gap-4 text-[#64748B] text-[10px]">
      <span>© {{ currentYear }}, Vista's Learning. All rights reserved.</span>
      <span aria-hidden="true">·</span>
      <a
        href="https://vistaslearning.com/terms"
        class="hover:text-white transition-colors underline-offset-2 hover:underline"
      >Terms & Conditions</a>
      <span aria-hidden="true">·</span>
      <span>Version: {{ appVersion }}</span>
    </div>
  </footer>
</template>

<script setup>
import packageJson from '../../../package.json'

const currentYear = new Date().getFullYear()
const appVersion = packageJson.version
</script>
