import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  saveUserToLocalStorage,
  clearUserFromLocalStorage,
  getUserFromLocalStorage,
  isTokenExpired,
  isLoggedIn,
  isSubscribed
} from '../storage'

describe('Storage Service', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('saves user to localStorage correctly', () => {
    const mockData = {
      accessToken: 'token123',
      refreshToken: 'refresh123',
      userSurId: '1',
      firstName: 'John',
      subscriptionFlag: { subscribedFlag: true }
    }

    saveUserToLocalStorage(mockData)
    const saved = JSON.parse(localStorage.getItem('vista-auth'))

    expect(saved.accessToken).toBe('token123')
    expect(saved.firstName).toBe('John')
    expect(saved.isSubscribed).toBe(true)
    expect(saved.registeredAs).toBe('Student') // fallback
    expect(saved.userSurId).toBe(1)
  })


  it('clears user from localStorage', () => {
    localStorage.setItem('vista-auth', 'something')
    localStorage.setItem('accessToken', 'legacy')

    clearUserFromLocalStorage()

    expect(localStorage.getItem('vista-auth')).toBeNull()
    expect(localStorage.getItem('accessToken')).toBeNull()
  })

  it('gets user from localStorage', () => {
    localStorage.setItem('vista-auth', JSON.stringify({ accessToken: 'loaded' }))
    const user = getUserFromLocalStorage()
    expect(user.accessToken).toBe('loaded')
  })

  it('handles invalid JSON in getUserFromLocalStorage', () => {
    localStorage.setItem('vista-auth', 'invalid-json')
    const user = getUserFromLocalStorage()
    expect(user.accessToken).toBeNull() // returns default empty object
    expect(user.firstName).toBe('')
  })

  it('handles null vista-auth in getUserFromLocalStorage', () => {
    const user = getUserFromLocalStorage()
    expect(user.accessToken).toBeNull()
  })

  it('isTokenExpired returns true if token is empty', () => {
    expect(isTokenExpired('')).toBe(true)
    expect(isTokenExpired(null)).toBe(true)
  })

  it('isTokenExpired returns true if token is malformed', () => {
    expect(isTokenExpired('not.enough.parts')).toBe(true)
  })

  it('isTokenExpired returns false if token has no expiry', () => {
    const payload = btoa(JSON.stringify({ someData: 'yes' }))
    const token = `header.${payload}.signature`
    expect(isTokenExpired(token)).toBe(false)
  })

  it('isTokenExpired returns correct value based on expiry', () => {
    const pastExp = Math.floor(Date.now() / 1000) - 1000
    const pastPayload = btoa(JSON.stringify({ exp: pastExp }))
    expect(isTokenExpired(`header.${pastPayload}.signature`)).toBe(true)

    const futureExp = Math.floor(Date.now() / 1000) + 1000
    const futurePayload = btoa(JSON.stringify({ exp: futureExp }))
    expect(isTokenExpired(`header.${futurePayload}.signature`)).toBe(false)
  })

  it('isTokenExpired handles btoa errors gracefully', () => {
    expect(isTokenExpired('a.b.c')).toBe(true)
  })

  it('isLoggedIn returns true if token exists and is not expired', () => {
    const futureExp = Math.floor(Date.now() / 1000) + 1000
    const payload = btoa(JSON.stringify({ exp: futureExp }))
    saveUserToLocalStorage({ accessToken: `header.${payload}.sig`, subscriptionFlag: false })

    expect(isLoggedIn()).toBe(true)
  })

  it('isLoggedIn returns false if token expired', () => {
    const pastExp = Math.floor(Date.now() / 1000) - 1000
    const payload = btoa(JSON.stringify({ exp: pastExp }))
    saveUserToLocalStorage({ accessToken: `header.${payload}.sig`, subscriptionFlag: false })

    expect(isLoggedIn()).toBe(false)
  })

  it('isSubscribed returns true if isSubscribed is true in local storage', () => {
    saveUserToLocalStorage({ accessToken: 'a', subscriptionFlag: true })
    expect(isSubscribed()).toBe(true)
  })

  it('isSubscribed returns false if isSubscribed is false in local storage', () => {
    saveUserToLocalStorage({ accessToken: 'a', subscriptionFlag: false })
    expect(isSubscribed()).toBe(false)
  })
})
