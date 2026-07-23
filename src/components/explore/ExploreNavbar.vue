<template>
  <div class="navbar-root">
    <div class="navbar-container">
      
      <!-- Left side: Logo & Company Name in Black (Redirects to Home) -->
      <router-link to="/" class="logo-area flex items-center gap-1.5 md:gap-2 cursor-pointer no-underline select-none">
        <!-- Icon (clipped to only show the V part) -->
        <div class="h-8 w-6 md:h-10 md:w-8 relative overflow-hidden flex-shrink-0">
          <img 
            src="/light-logo.webp" 
            alt="V" 
            class="h-full w-auto object-left object-cover max-w-none" 
          />
        </div>
        <!-- Text in Black -->
        <div class="flex flex-col justify-center">
          <h1 class="logo-title text-[#120536] text-[15px] md:text-[19px] leading-[0.85] tracking-tight">
            Vista's<br/>Learning
          </h1>
          <p class="text-[#555555] text-[6.5px] md:text-[8.5px] font-semibold mt-0.5 tracking-wide">
            Quality Education For All
          </p>
        </div>
      </router-link>
      
      <!-- Center: Nav links (Desktop only, hidden on mobile) -->
      <nav class="nav-links">
        <a href="#" class="nav-item">Home</a>
        <a href="#" class="nav-item">Courses</a>
        <a href="#" class="nav-item">Live Classes</a>
        <a href="#" class="nav-item">Test Series</a>
        <a href="#" class="nav-item">Results</a>
        <a href="#" class="nav-item">Pricing</a>
        <a href="#" class="nav-item flex items-center gap-0.5">
          More
          <span class="material-symbols-outlined text-[14px]">keyboard_arrow_down</span>
        </a>
      </nav>
      
      <!-- Right side: Actions on Desktop / Board tag on Mobile -->
      <div class="nav-right-area">
        
        <!-- Mobile Only: Board Tag -->
        <span class="bg-[#002e5c] text-white text-[8.5px] font-extrabold px-3 py-1.5 rounded-[6px] shadow-sm tracking-wide md:hidden">
          Kerala State Board
        </span>

      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.navbar-root {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 50;
}

.logo-title {
  font-family: 'Rokkitt', serif;
  font-weight: 900;
}

.navbar-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo styling */
.logo-box {
  display: flex;
  align-items: center;
}
.logo-icon {
  height: 30px;
  width: auto;
  object-fit: contain;
}

/* Nav links */
.nav-links {
  display: none;
}

/* Right side area */
.nav-right-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Trusted badge (Mobile only style) */
.trusted-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  border-radius: 50px;
  padding: 6px 12px 6px 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}
.trusted-icon-wrap {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #ede9fe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.trusted-icon {
  font-size: 14px;
  color: #6b21a8;
}
.trusted-text {
  display: flex;
  flex-direction: column;
}
.trusted-label {
  font-size: 8px;
  color: #888;
  font-weight: 500;
  line-height: 1;
}
.trusted-count {
  font-size: 11px;
  font-weight: 900;
  color: #120536;
  line-height: 1.15;
}

.desktop-actions {
  display: none;
}

.search-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  margin-right: 8px;
}
.search-btn:hover {
  opacity: 1;
}

.mobile-menu-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.15s;
}
.mobile-menu-btn:hover {
  background-color: rgba(18, 5, 54, 0.05);
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

.login-btn {
  background: transparent;
  border: 1px solid rgba(18, 5, 54, 0.25);
  color: #120536;
  font-weight: bold;
  font-size: 13px;
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
  margin-right: 12px;
}
.login-btn:hover {
  border-color: #120536;
  background: rgba(18, 5, 54, 0.05);
}

.signup-btn {
  background: #ffc107;
  border: none;
  color: #120536;
  font-weight: 800;
  font-size: 13px;
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
}
.signup-btn:hover {
  background: #ffb300;
  transform: translateY(-1px);
}

/* Desktop styles */
@media (min-width: 768px) {
  .navbar-container {
    padding: 16px 32px;
  }
  .logo-icon {
    height: 36px;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .nav-item {
    color: rgba(18, 5, 54, 0.85);
    font-weight: 600;
    font-size: 13px;
    text-decoration: none;
    transition: color 0.15s;
  }
  .nav-item:hover {
    color: #673ab7;
  }
  .mobile-only-trusted {
    display: none !important;
  }
  .desktop-actions {
    display: flex;
    align-items: center;
  }
}
</style>
