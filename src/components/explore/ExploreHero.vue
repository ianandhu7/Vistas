<template>
  <section class="hero-section">
    <!-- ═══════════════════════════════════════════
         LAYER 1 (z-1): Right-aligned student image
         ═══════════════════════════════════════════ -->
    <div class="hero-bg-image-wrapper">
      <img
        v-for="(slide, idx) in slides"
        :key="idx"
        :src="slide.img"
        :alt="slide.name"
        class="hero-bg-img absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="idx === currentSlide ? 'opacity-100 z-1' : 'opacity-0 z-0'"
        :style="{ '--object-pos': slide.objectPosition || 'center 10%', '--mobile-object-pos': slide.mobileObjectPosition || 'center top' }"
      />
    </div>

    <!-- Gradient overlay to blend the right-side image with the left solid background -->
    <div class="hero-gradient-overlay"></div>

    <!-- ═══════════════════════════════════════════
         LAYER 2 (z-10): All text/UI content
         Constrained to left ~55% of width
         ═══════════════════════════════════════════ -->
    <div class="hero-content-layer">

      <!-- Text Content Block — constrained to left 55% -->
      <div class="hero-text-block">

        <!-- Trusted by Badge (Desktop only, placed inside the text block) -->
        <div class="trusted-badge desktop-trusted-badge">
          <div class="trusted-icon-wrap">
            <span class="material-symbols-outlined trusted-icon">verified_user</span>
          </div>
          <div class="trusted-text">
            <span class="trusted-label">Trusted by</span>
            <span class="trusted-count">650+ Schools</span>
          </div>
        </div>



        <!-- Heading — NEVER clipped, no overflow:hidden, no fixed height -->
        <h1 class="hero-heading">
          Last Year's<br/>
          Karnataka State Board
        </h1>

        <!-- Transition for dynamic rank and marks -->
        <Transition name="fade-info" mode="out-in">
          <div :key="currentSlide" class="flex flex-col items-start">
            <!-- STATE Rank -->
            <div class="rank-row">
              <div class="laurel-wrapper">
                <span class="laurel left-laurel">❧</span>
                <div class="rank-block">
                  <span class="rank-state">STATE</span>
                  <span class="rank-text" v-html="slides[currentSlide].rankHtml"></span>
                </div>
                <span class="laurel">❧</span>
                <span class="rank-crown">👑</span>
              </div>
            </div>

            <!-- Marks pill -->
            <div class="marks-pill">
              <span class="marks-num">{{ slides[currentSlide].marks }}</span>
              <span class="marks-sep">/</span>
              <span class="marks-total">625</span>
              <span class="marks-label">Marks</span>
            </div>
          </div>
        </Transition>

        <!-- Quote -->
        <div class="quote-block">
          <span class="quote-mark">"</span>
          <p class="quote-text">Vista's Learning helped me understand every concept.</p>
          <span class="quote-mark">"</span>
        </div>

        <!-- Action Buttons (Desktop has side-by-side buttons) -->
        <div class="hero-actions-container mb-6 md:mb-8">
          <button class="watch-demo-btn" @click="openVideo">
            <span class="material-symbols-outlined btn-icon">info</span>
            KNOW MORE
          </button>
          
          <!-- Explore Courses (Desktop only) -->
          <button class="explore-courses-btn hidden md:flex" @click="scrollToContent">
            Explore Courses
          </button>
        </div>

        <!-- Stats Bar (Desktop only, positioned under buttons in hero) -->
        <div class="hero-stats-row hidden md:flex">
          <!-- Stat 1 -->
          <div class="hero-stat-item">
            <div class="hero-stat-icon-wrap bg-[#1a237e]/40">
              <span class="material-symbols-outlined hero-stat-icon">domain</span>
            </div>
            <div class="hero-stat-text">
              <span class="hero-stat-value">650+</span>
              <span class="hero-stat-label">Schools</span>
            </div>
          </div>
          <!-- Stat 2 -->
          <div class="hero-stat-item">
            <div class="hero-stat-icon-wrap bg-[#e91e63]/20">
              <span class="material-symbols-outlined hero-stat-icon text-[#e91e63]">play_circle</span>
            </div>
            <div class="hero-stat-text">
              <span class="hero-stat-value">15,000+</span>
              <span class="hero-stat-label">Videos</span>
            </div>
          </div>
          <!-- Stat 3 -->
          <div class="hero-stat-item">
            <div class="hero-stat-icon-wrap bg-[#4caf50]/20">
              <span class="material-symbols-outlined hero-stat-icon text-[#4caf50]">school</span>
            </div>
            <div class="hero-stat-text">
              <span class="hero-stat-value">19+</span>
              <span class="hero-stat-label">Courses</span>
            </div>
          </div>
          <!-- Stat 4 -->
          <div class="hero-stat-item">
            <div class="hero-stat-icon-wrap bg-[#673ab7]/20">
              <span class="material-symbols-outlined hero-stat-icon text-[#b39ddb]">group</span>
            </div>
            <div class="hero-stat-text">
              <span class="hero-stat-value">Thousands</span>
              <span class="hero-stat-label">of Students</span>
            </div>
          </div>
        </div>

        <!-- Scroll hint (Mobile only) -->
        <div class="scroll-hint md:hidden" @click="scrollToContent">
          <span class="material-symbols-outlined scroll-arrow">arrow_downward</span>
          Scroll to explore
        </div>

      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         LAYER 3 (z-10): Ananya floating card & Trophy badge
         Positioned relative to the student on the right
         ═══════════════════════════════════════════ -->
    


    <!-- Floating Info Card -->
    <Transition name="fade-info" mode="out-in">
      <div :key="currentSlide" class="ananya-card">
        <div class="ananya-name">{{ slides[currentSlide].name }}</div>
        <div class="ananya-board">Karnataka State Board 2024</div>
        <div class="ananya-divider"></div>
        <div class="ananya-star-row">
          <span class="ananya-star">⭐</span>
          <span class="ananya-inspo">{{ slides[currentSlide].cardText }}</span>
        </div>
      </div>
    </Transition>

    <!-- Carousel Pagination Dots -->
    <div class="pagination-dots">
      <span 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="dot cursor-pointer"
        :class="{ 'dot-active': index === currentSlide }"
        @click="setSlide(index)"
      ></span>
    </div>

    <!-- Video Modal -->
    <div v-if="showVideoModal" class="video-modal-backdrop" @click="closeVideo">
      <div class="video-modal-box" @click.stop>
        <button class="video-close-btn" @click="closeVideo">
          <span class="material-symbols-outlined">close</span>
        </button>
        <iframe
          :src="videoUrl"
          allow="autoplay; fullscreen"
          class="video-iframe"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showVideoModal = ref(false)
const videoUrl = 'https://www.youtube.com/embed/RTCfIdXxdX0?autoplay=1'

const openVideo = () => {
  showVideoModal.value = true
}

const closeVideo = () => {
  showVideoModal.value = false
}

const scrollToContent = () => {
  const next = document.getElementById('explore-content')
  if (next) {
    const y = next.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top: y, behavior: 'smooth' })
  } else {
    window.scrollBy({ top: window.innerHeight - 70, behavior: 'smooth' })
  }
}

// Carousel of 4 students added by the user
const currentSlide = ref(0)
const slides = [
  {
    img: '/hero.image.png',
    name: 'Ananya H.',
    rankHtml: '2<sup class="rank-sup">nd</sup> RANK',
    badgeRank: '2nd RANK',
    marks: '624',
    cardText: 'Inspiration for Thousands of Students',
    objectPosition: 'right top',
    mobileObjectPosition: 'center top'
  },
  {
    img: '/student2.png',
    name: 'Rahul K.',
    rankHtml: '5<sup class="rank-sup">th</sup> RANK',
    badgeRank: '5th RANK',
    marks: '618',
    cardText: 'Determined and Focused Mindset',
    objectPosition: 'center top',
    mobileObjectPosition: 'center top'
  },
  {
    img: '/student3.png',
    name: 'Neha M.',
    rankHtml: '8<sup class="rank-sup">th</sup> RANK',
    badgeRank: '8th RANK',
    marks: '616',
    cardText: 'Stellar academic performance',
    objectPosition: 'center top',
    mobileObjectPosition: 'center top'
  },
  {
    img: '/student5.png',
    name: 'Pooja R.',
    rankHtml: '9<sup class="rank-sup">th</sup> RANK',
    badgeRank: '9th RANK',
    marks: '615',
    cardText: 'Dedicated student leader',
    objectPosition: 'center top',
    mobileObjectPosition: 'center top'
  }
]

let autoSlideInterval = null

onMounted(() => {
  autoSlideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 3000)
})

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})

const setSlide = (index) => {
  currentSlide.value = index
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }, 3000)
  }
}
</script>

<style scoped>
/* ─── OUTER SECTION ──────────────────────────────────── */
.hero-section {
  position: relative;
  width: 100%;
  height: 460px; /* Reduced mobile height to reduce whitespace */
  background-color: #0a0221;
  overflow: visible;
}

/* ─── LAYER 1: Full-width background image (mobile) ─── */
.hero-bg-image-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%; /* Full width — gradient overlay makes left side dark */
  z-index: 1;
  overflow: hidden;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--mobile-object-pos, center top);
}

/* ─── Gradient overlay (left dark → right transparent) ── */
.hero-gradient-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to right,
    rgba(10, 2, 33, 1.0) 0%,
    rgba(10, 2, 33, 0.97) 28%,
    rgba(10, 2, 33, 0.70) 42%,
    rgba(10, 2, 33, 0.10) 55%,
    transparent 65%
  );
  pointer-events: none;
}

/* ─── LAYER 2: Content layer ─────────────────────────── */
.hero-content-layer {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 30px 16px 40px 16px; /* Reduced mobile padding */
  box-sizing: border-box;
}

/* Trusted badge */
.trusted-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border-radius: 50px;
  padding: 8px 14px 8px 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  width: max-content;
}
.trusted-icon-wrap {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ede9fe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.trusted-icon {
  font-size: 16px;
  color: #6b21a8;
}
.trusted-text {
  display: flex;
  flex-direction: column;
}
.trusted-label {
  font-size: 9px;
  color: #888;
  font-weight: 500;
  line-height: 1;
}
.trusted-count {
  font-size: 13px;
  font-weight: 900;
  color: #120536;
  line-height: 1.2;
}

.desktop-trusted-badge {
  display: none !important; /* Strictly hidden on mobile views */
}

/* ─── TEXT BLOCK (left ~55%) ──────────────────────────── */
.hero-text-block {
  max-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}

/* Board label */
.board-label {
  font-size: 10px;
  font-weight: 700;
  color: #e2e8f0;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

/* Hero heading — NEVER clipped */
.hero-heading {
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.25;
  margin: 0 0 10px 0;
  overflow: visible;
}

/* Rank row with Laurels */
.rank-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.laurel-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}
.laurel {
  font-size: 22px;
  color: #ffc107;
  opacity: 0.85;
}
.left-laurel {
  transform: scaleX(-1);
}
.rank-block {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.rank-state {
  font-size: 14px;
  font-weight: 900;
  color: #ffc107;
  letter-spacing: 0.05em;
}
.rank-text {
  font-size: 24px;
  font-weight: 900;
  color: #ffc107;
}
.rank-sup {
  font-size: 12px;
  font-weight: 900;
  vertical-align: super;
}
.rank-crown {
  font-size: 20px;
  margin-left: 4px;
}

/* Marks pill */
.marks-pill {
  display: inline-flex;
  align-items: baseline;
  background: white;
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.12);
  border: 1.5px solid rgba(130, 80, 255, 0.25);
  gap: 3px;
}
.marks-num {
  font-size: 16px;
  font-weight: 900;
  color: #4a148c;
}
.marks-sep {
  font-size: 13px;
  font-weight: 700;
  color: #aaa;
}
.marks-total {
  font-size: 16px;
  font-weight: 900;
  color: #120536;
}
.marks-label {
  font-size: 10px;
  font-weight: 600;
  color: #888;
  margin-left: 4px;
}

/* Quote */
.quote-block {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 16px;
}
.quote-mark {
  font-size: 20px;
  color: #9b59b6;
  font-family: Georgia, serif;
  line-height: 1;
  flex-shrink: 0;
}
.quote-text {
  font-size: 11px;
  font-style: italic;
  color: #cbd5e1;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
}

/* Action Buttons Wrapper */
.hero-actions-container {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* Watch Demo button */
.watch-demo-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffc107;
  color: #120536;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.08em;
  padding: 10px 22px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(255, 193, 7, 0.45);
  transition: transform 0.15s ease, background 0.15s ease;
}
.watch-demo-btn:hover {
  background: #ffb300;
  transform: scale(1.04);
}
.watch-demo-btn:active {
  transform: scale(0.97);
}
.btn-icon {
  font-size: 18px;
}

/* Explore Courses Desktop Button */
.explore-courses-btn {
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: transparent;
  color: white;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.08em;
  padding: 10px 22px;
  border-radius: 999px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.15s;
}
.explore-courses-btn:hover {
  border-color: white;
  background: rgba(255,255,255,0.05);
}

/* Scroll hint */
.scroll-hint {
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255,255,255,0.5);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  animation: bounce 2s infinite;
}
.scroll-arrow {
  font-size: 14px;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

/* ─── LAYER 3: Trophy Badge overlaid on student ───────── */
.trophy-badge {
  position: absolute;
  bottom: 180px;
  right: 22%; /* Sits on trophy base on mobile */
  z-index: 15;
  background: #ffc107;
  border: 1.5px solid #ffca28;
  color: #120536;
  border-radius: 6px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  transform: rotate(-2deg);
  line-height: 1.1;
}
.trophy-badge-state {
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.05em;
}
.trophy-badge-rank {
  font-size: 10px;
  font-weight: 900;
}

/* ─── LAYER 3: Ananya card (absolute bottom-right) ───── */
.ananya-card {
  position: absolute;
  bottom: 45px;
  right: 12px;
  z-index: 15;
  background: linear-gradient(135deg, rgba(49,27,146,0.95) 0%, rgba(18,5,54,0.95) 100%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 14px;
  padding: 12px 14px;
  width: 180px;
  box-sizing: border-box;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
.ananya-name {
  font-size: 13px;
  font-weight: 900;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 2px;
}
.ananya-board {
  font-size: 9px;
  font-weight: 500;
  color: #c4b5fd;
  line-height: 1.3;
}
.ananya-divider {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.15);
  margin: 8px 0;
}
.ananya-star-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
}
.ananya-star {
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 1px;
}
.ananya-inspo {
  font-size: 9px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  line-height: 1.4;
}

/* Pagination Dots */
.pagination-dots {
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  display: flex;
  gap: 6px;
}
.dot {
  width: 7px;
  height: 7px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
}
.dot-active {
  background: #ffc107;
  width: 20px;
  border-radius: 4px;
}

/* Stats Inside Hero (Desktop only) */
.hero-stats-row {
  width: 100%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hero-stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero-stat-icon-wrap {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-stat-icon {
  font-size: 16px;
  color: #ffd54f;
}
.hero-stat-text {
  display: flex;
  flex-direction: column;
}
.hero-stat-value {
  font-size: 13px;
  font-weight: 900;
  color: white;
  line-height: 1.1;
}
.hero-stat-label {
  font-size: 9px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1;
}

/* ─── VIDEO MODAL ─────────────────────────────────────── */
.video-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(4px);
}
.video-modal-box {
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  background: black;
  border-radius: 16px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.7);
  border: 1px solid rgba(255,255,255,0.1);
}
.video-close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  background: rgba(0,0,0,0.6);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: color 0.15s;
}
.video-close-btn:hover { color: #ffc107; }
.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: black;
}

/* ─── DESKTOP MEDIA QUERIES ──────────────────────────── */
@media (min-width: 768px) {
  .hero-section {
    height: 600px; /* Lock height on desktop to prevent layout shifts */
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .hero-bg-image-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 60%; /* Restrict width so object-fit:cover doesn't zoom in massively */
    right: 0;
    left: auto;
    background: none;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 30%);
    mask-image: linear-gradient(to right, transparent 0%, black 30%);
  }
  .hero-bg-img {
    object-fit: cover;
    object-position: var(--object-pos, right top);
  }
  .hero-gradient-overlay {
    display: block;
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(
      to right,
      rgba(10, 2, 33, 1.0) 0%,
      rgba(10, 2, 33, 0.97) 28%,
      rgba(10, 2, 33, 0.70) 42%,
      rgba(10, 2, 33, 0.10) 55%,
      transparent 65%
    );
    pointer-events: none;
  }
  .hero-content-layer {
    padding: 60px 48px 60px 48px;
    order: initial;
  }
  .desktop-trusted-badge {
    display: flex !important; /* Shows ONLY on desktop */
  }
  .hero-text-block {
    max-width: 50%;
  }
  .hero-heading {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  .rank-state {
    font-size: 26px;
  }
  .rank-text {
    font-size: 46px;
  }
  .rank-sup {
    font-size: 22px;
  }
  .rank-crown {
    font-size: 36px;
  }
  .laurel {
    font-size: 42px;
  }
  .marks-pill {
    padding: 8px 20px;
    margin-bottom: 18px;
  }
  .marks-num, .marks-total {
    font-size: 20px;
  }
  .marks-label {
    font-size: 12px;
  }
  .quote-block {
    margin-bottom: 24px;
  }
  .quote-text {
    font-size: 14px;
  }
  .watch-demo-btn, .explore-courses-btn {
    font-size: 14px;
    padding: 12px 28px;
  }
  .trophy-badge {
    bottom: 250px;
    right: 36%;
    padding: 8px 12px;
  }
  .trophy-badge-state {
    font-size: 10px;
  }
  .trophy-badge-rank {
    font-size: 14px;
  }
  .ananya-card {
    bottom: 120px;
    right: 48px;
    width: 220px;
    padding: 14px 18px;
  }
  .ananya-name {
    font-size: 16px;
  }
  .ananya-board {
    font-size: 11px;
  }
  .ananya-inspo {
    font-size: 11px;
  }
  .pagination-dots {
    bottom: 35px;
  }
}

/* Vue Transitions */
.fade-info-enter-active,
.fade-info-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-info-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

.fade-info-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
