<template>
  <div class="h-screen flex flex-col overflow-hidden bg-gray-50 relative">

    <!-- Navbar (takes real space at top) -->
    <AppNavbar />

    <!-- Yaha se blue wala background ka code hai (Right side blue background) -->
    <div class="hidden md:block absolute top-[20px] bottom-0 right-0 w-[20%] bg-[#004a8b] z-0" style="border-top-left-radius: 40%; border-bottom-left-radius: 100% 100%;"></div>

    <!-- Main hero content (fills remaining height) -->
    <div class="flex-1 min-h-0 flex flex-col relative z-10">
      <HeroSection />
    </div>

    <BottomTrustBar />

    <!-- Bottom action bar (sticks to bottom) -->
    <StickyActionFooter @viewCourses="showArrowGuide" />

    <!-- Animated Arrow Overlay -->
    <Teleport to="body">
      <div v-if="arrowVisible" class="arrow-overlay" @click="arrowVisible = false">
        <!-- Glow filter definitions -->
        <svg style="position:absolute;width:0;height:0;">
          <defs>
            <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood flood-color="#f08a00" flood-opacity="0.6" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glowColor" />
              <feMerge>
                <feMergeNode in="glowColor" />
                <feMergeNode in="glowColor" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <!-- SVG Arrow Path with glow -->
        <svg class="arrow-svg" :style="arrowSvgStyle">
          <defs>
            <marker id="arrowhead" markerWidth="14" markerHeight="10" refX="12" refY="5" orient="auto">
              <polygon points="0 1, 12 5, 0 9" fill="#f08a00" filter="url(#glow-filter)" />
            </marker>
            <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ffb347" />
              <stop offset="50%" stop-color="#f08a00" />
              <stop offset="100%" stop-color="#ff6f00" />
            </linearGradient>
          </defs>
          <!-- Glow behind the arrow -->
          <path 
            :d="arrowPath" 
            fill="none" 
            stroke="#f08a00" 
            stroke-width="8" 
            stroke-linecap="round"
            opacity="0.15"
            class="arrow-path-anim"
          />
          <!-- Main arrow -->
          <path 
            :d="arrowPath" 
            fill="none" 
            stroke="url(#arrow-gradient)" 
            stroke-width="3" 
            stroke-linecap="round"
            stroke-dasharray="10 6"
            marker-end="url(#arrowhead)"
            filter="url(#glow-filter)"
            class="arrow-path-anim"
          />
        </svg>

        <!-- Sparkle particles along the arrow -->
        <div v-for="(sparkle, i) in sparkles" :key="i" class="sparkle" :style="sparkle.style">✦</div>

        <!-- Message Tooltip near the CONTINUE button -->
        <div class="arrow-message" :style="messageStyle">
          <span class="msg-icon">✨</span>
          To access, fill details
          <span class="msg-icon">✨</span>
        </div>

        <!-- Pulsing ring around CONTINUE button -->
        <div class="pulse-ring" :style="pulseStyle"></div>
        <div class="pulse-ring pulse-ring-delayed" :style="pulseStyle"></div>
      </div>
    </Teleport>

    <!-- Modals -->
    <SubscriptionModals />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import AppNavbar from '../components/layout/AppNavbar.vue'
import HeroSection from '../components/home/HeroSection.vue'
import BottomTrustBar from '../components/home/BottomTrustBar.vue'
import StickyActionFooter from '../components/layout/StickyActionFooter.vue'
import SubscriptionModals from '../components/home/SubscriptionModals.vue'

const arrowVisible = ref(false)
let arrowTimer = null

const arrowSvgStyle = reactive({ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: '9998' })
const arrowPath = ref('')
const messageStyle = reactive({})
const pulseStyle = reactive({})
const sparkles = ref([])

function showArrowGuide() {
  const continueBtn = document.getElementById('continue-btn')
  if (!continueBtn) return

  const btnRect = continueBtn.getBoundingClientRect()

  // Arrow comes from RIGHT side, curving elegantly to the CONTINUE button
  // Shift endX to the right (near the last letter 'E' in CONTINUE)
  const endX = btnRect.left + btnRect.width * 0.65
  const endY = btnRect.top + btnRect.height / 2
  const startX = window.innerWidth - 40
  const startY = window.innerHeight - 60

  // Smooth S-curve from bottom-right to the button
  const cp1X = startX
  const cp1Y = endY + 80
  const cp2X = endX + 180
  const cp2Y = endY - 20

  // Point exactly on the button, not below it
  arrowPath.value = `M ${startX} ${startY} C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} ${endY + 2}`

  // Generate sparkle particles along the curve
  const sparks = []
  for (let t = 0; t < 1; t += 0.12) {
    const x = bezierPoint(startX, cp1X, cp2X, endX, t)
    const y = bezierPoint(startY, cp1Y, cp2Y, endY + 2, t)
    const delay = t * 1.2
    const size = 8 + Math.random() * 10
    sparks.push({
      style: {
        position: 'fixed',
        left: `${x + (Math.random() - 0.5) * 30}px`,
        top: `${y + (Math.random() - 0.5) * 30}px`,
        fontSize: `${size}px`,
        animationDelay: `${delay}s`,
        zIndex: '9999'
      }
    })
  }
  sparkles.value = sparks

  // Position message above the button
  Object.assign(messageStyle, {
    position: 'fixed',
    top: `${btnRect.top - 44}px`,
    left: `${btnRect.left + btnRect.width / 2}px`,
    transform: 'translateX(-50%)',
    zIndex: '9999'
  })

  // Position pulse ring around the button
  Object.assign(pulseStyle, {
    position: 'fixed',
    top: `${btnRect.top - 4}px`,
    left: `${btnRect.left - 4}px`,
    width: `${btnRect.width + 8}px`,
    height: `${btnRect.height + 8}px`,
    zIndex: '9998'
  })

  arrowVisible.value = true

  if (arrowTimer) clearTimeout(arrowTimer)
  arrowTimer = setTimeout(() => {
    arrowVisible.value = false
  }, 10000)
}

// Cubic bezier point calculation
function bezierPoint(p0, p1, p2, p3, t) {
  const mt = 1 - t
  return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>

<style>
/* Arrow overlay */
.arrow-overlay {
  position: fixed;
  inset: 0;
  z-index: 9997;
  pointer-events: none;
}

/* Animated arrow path drawing */
.arrow-path-anim {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: drawArrow 1.4s ease-out forwards;
}

@keyframes drawArrow {
  to {
    stroke-dashoffset: 0;
  }
}

/* Sparkle particles */
.sparkle {
  color: #f08a00;
  pointer-events: none;
  opacity: 0;
  animation: sparkleAnim 2s ease-out forwards;
  text-shadow: 0 0 8px rgba(240, 138, 0, 0.8), 0 0 20px rgba(255, 179, 71, 0.5);
}

@keyframes sparkleAnim {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: scale(1.3) rotate(90deg);
  }
  60% {
    opacity: 0.8;
    transform: scale(1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) rotate(360deg) translateY(-10px);
  }
}

/* Message tooltip */
.arrow-message {
  background: linear-gradient(135deg, #f08a00, #ff6f00);
  color: white;
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 24px rgba(240, 138, 0, 0.5), 0 0 40px rgba(255, 179, 71, 0.2);
  animation: fadeInBounce 0.6s ease-out 1s both;
  pointer-events: none;
  letter-spacing: 0.3px;
}

.msg-icon {
  font-size: 14px;
  animation: twinkle 1.5s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

@keyframes fadeInBounce {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(12px) scale(0.7);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(-6px) scale(1.08);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

/* Pulsing ring around CONTINUE button */
.pulse-ring {
  border: 2.5px solid #f08a00;
  border-radius: 10px;
  animation: pulseRing 2s ease-in-out infinite;
  pointer-events: none;
  box-shadow: inset 0 0 12px rgba(240, 138, 0, 0.15);
}

.pulse-ring-delayed {
  animation-delay: 1s;
}

@keyframes pulseRing {
  0% {
    box-shadow: 0 0 0 0 rgba(240, 138, 0, 0.5), inset 0 0 12px rgba(240, 138, 0, 0.15);
    opacity: 1;
  }
  70% {
    box-shadow: 0 0 0 14px rgba(240, 138, 0, 0), inset 0 0 12px rgba(240, 138, 0, 0);
    opacity: 0.5;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(240, 138, 0, 0), inset 0 0 12px rgba(240, 138, 0, 0.15);
    opacity: 1;
  }
}
</style>
