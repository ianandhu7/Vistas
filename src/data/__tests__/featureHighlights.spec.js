import { describe, it, expect } from 'vitest'
import { featureHighlights } from '../featureHighlights'

describe('featureHighlights data', () => {
  it('exports an array with 3 items', () => {
    expect(Array.isArray(featureHighlights)).toBe(true)
    expect(featureHighlights).toHaveLength(3)
  })

  it('each item has required fields', () => {
    featureHighlights.forEach((item) => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('description')
      expect(item).toHaveProperty('icon')
      expect(typeof item.title).toBe('string')
      expect(typeof item.description).toBe('string')
    })
  })

  it('contains expected feature titles', () => {
    const titles = featureHighlights.map((f) => f.title)
    expect(titles).toContain('Animated Lessons')
    expect(titles).toContain('Expert Guidance')
    expect(titles).toContain('Live Assessments')
  })
})
