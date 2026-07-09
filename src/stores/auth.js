import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isVerified: false,
    isVerifyModalOpen: false,
    user: {
      fullName: '',
      mobileNumber: ''
    }
  }),
  actions: {
    openVerifyModal() {
      if (!this.isVerified) {
        this.isVerifyModalOpen = true
      }
    },
    closeVerifyModal() {
      this.isVerifyModalOpen = false
    },
    verifyUser(userData) {
      if (userData.fullName && userData.mobileNumber) {
        this.user = { ...userData }
        this.isVerified = true
        this.isVerifyModalOpen = false
        localStorage.setItem('vista_auth_verified', 'true')
        localStorage.setItem('vista_auth_user', JSON.stringify(userData))
      }
    },
    logout() {
      this.isVerified = false
      this.user = { fullName: '', mobileNumber: '' }
      localStorage.removeItem('vista_auth_verified')
      localStorage.removeItem('vista_auth_user')
    },
    initAuth() {
      if (localStorage.getItem('vista_auth_verified') === 'true') {
        this.isVerified = true
        try {
          this.user = JSON.parse(localStorage.getItem('vista_auth_user')) || { fullName: '', mobileNumber: '' }
        } catch(e) {}
      }
    }
  }
})
