import { describe, it, expect, beforeEach, vi } from 'vitest'
import * as api from '../api'

describe('API Service', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('checkMobileExists calls fetch correctly', async () => {
    fetch.mockResolvedValue({ json: async () => ({ data: true }) })
    const res = await api.checkMobileExists('9876543210')
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/api/v1/lead/checkMobileNumberExistence?mobile=9876543210'))
    expect(res.data).toBe(true)
  })

  it('sendOtpExistingUser calls fetch correctly', async () => {
    fetch.mockResolvedValue({ json: async () => ({ status: true }) })
    const res = await api.sendOtpExistingUser('9876543210')
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/auth/login/send-otp?mobileNumber=9876543210'),
      { method: 'POST' }
    )
    expect(res.status).toBe(true)
  })

  it('sendOtpNewUser calls fetch correctly', async () => {
    fetch.mockResolvedValue({ json: async () => ({ data: true }) })
    const res = await api.sendOtpNewUser('9876543210', 'John Doe')
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/lead/sendotp?mobile=9876543210&name=John%20Doe'),
      { method: 'POST' }
    )
    expect(res.data).toBe(true)
  })

  it('verifyOtpExistingUser calls fetch correctly', async () => {
    fetch.mockResolvedValue({ json: async () => ({ status: true }) })
    const res = await api.verifyOtpExistingUser('9876543210', '123456')
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/auth/login/verify'),
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ mobileNumber: '9876543210', otp: '123456', password: null })
      })
    )
    expect(res.status).toBe(true)
  })

  it('verifyOtpNewUser calls fetch correctly when ok', async () => {
    fetch.mockResolvedValue({
      ok: true,
      text: async () => JSON.stringify({ data: true })
    })
    const res = await api.verifyOtpNewUser('9876543210', '123456')
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/lead/verifyotp?mobile=9876543210&otp=123456'),
      { method: 'POST' }
    )
    expect(res.data).toBe(true)
  })

  it('verifyOtpNewUser parses empty response correctly', async () => {
    fetch.mockResolvedValue({
      ok: true,
      text: async () => ''
    })
    const res = await api.verifyOtpNewUser('9876543210', '123456')
    expect(res).toEqual({})
  })

  it('verifyOtpNewUser throws error when not ok', async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 500,
      text: async () => 'Internal Server Error'
    })
    await expect(api.verifyOtpNewUser('9876543210', '123456')).rejects.toThrow('Internal Server Error')
  })

  it('verifyOtpNewUser throws default error when not ok and empty text', async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 404,
      text: async () => ''
    })
    await expect(api.verifyOtpNewUser('9876543210', '123456')).rejects.toThrow('Verify OTP failed with status 404')
  })

  it('registerNewUser calls fetch correctly', async () => {
    fetch.mockResolvedValue({ json: async () => ({ statusCode: 200 }) })
    const res = await api.registerNewUser('9876543210', 'John Doe', '123456')
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/v3/auth/new-auth-signup'),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('"firstName":"John Doe"')
      })
    )
    expect(res.statusCode).toBe(200)
  })
})
