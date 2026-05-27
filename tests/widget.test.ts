import { describe, it, expect } from 'vitest'

describe('WinnersFeedWidget', () => {
  it('exports are defined', async () => {
    const mod = await import('../src/index')
    expect(mod.WinnersFeedWidget).toBeDefined()
    expect(mod.fetchWinnersFeed).toBeInstanceOf(Function)
    expect(mod.renderWidget).toBeInstanceOf(Function)
    expect(mod.formatCompactNumber).toBeInstanceOf(Function)
  })

  it('module structure is correct', async () => {
    const mod = await import('../src/index')
    const widget = mod.WinnersFeedWidget
    expect(widget.prototype.render).toBeInstanceOf(Function)
    expect(widget.prototype.destroy).toBeInstanceOf(Function)
  })
})

describe('formatCompactNumber', () => {
  it('formats values under 1000', async () => {
    const { formatCompactNumber } = await import('../src/renderer')
    expect(formatCompactNumber(0)).toBe('0')
    expect(formatCompactNumber(500)).toBe('500')
    expect(formatCompactNumber(999)).toBe('999')
  })

  it('formats thousands', async () => {
    const { formatCompactNumber } = await import('../src/renderer')
    expect(formatCompactNumber(1500)).toBe('1.5K')
    expect(formatCompactNumber(10000)).toBe('10.0K')
    expect(formatCompactNumber(999999)).toBe('1000.0K')
  })

  it('formats millions', async () => {
    const { formatCompactNumber } = await import('../src/renderer')
    expect(formatCompactNumber(1_500_000)).toBe('1.5M')
    expect(formatCompactNumber(50_000_000)).toBe('50.0M')
  })

  it('formats billions', async () => {
    const { formatCompactNumber } = await import('../src/renderer')
    expect(formatCompactNumber(1_500_000_000)).toBe('1.5B')
    expect(formatCompactNumber(500_000_000_000)).toBe('500.0B')
  })

  it('formats trillions', async () => {
    const { formatCompactNumber } = await import('../src/renderer')
    expect(formatCompactNumber(1_500_000_000_000)).toBe('1.5T')
    expect(formatCompactNumber(50_000_000_000_000)).toBe('50.0T')
  })
})

describe('API module', () => {
  it('exports fetchWinnersFeed', async () => {
    const { fetchWinnersFeed } = await import('../src/api')
    expect(fetchWinnersFeed).toBeInstanceOf(Function)
  })
})
