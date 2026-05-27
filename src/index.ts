import type { Award } from './types'
import { fetchWinnersFeed } from './api'
import { renderWidget } from './renderer'

export interface WidgetConfig {
  apiBase?: string
  theme?: 'light' | 'dark'
}

export class WinnersFeedWidget {
  private element: HTMLElement
  private config: WidgetConfig
  private abortController: AbortController | null = null

  constructor(element: HTMLElement, config: WidgetConfig = {}) {
    this.element = element
    this.config = {
      apiBase: config.apiBase || 'https://tenders-sa.org',
      theme: config.theme || this.inferTheme(),
    }
  }

  private inferTheme(): 'light' | 'dark' {
    const themeAttr = this.element.getAttribute('data-theme')
    if (themeAttr === 'dark' || themeAttr === 'light') return themeAttr
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return 'light'
  }

  async render(): Promise<void> {
    this.abortController?.abort()
    this.abortController = new AbortController()
    const signal = this.abortController.signal

    this.element.innerHTML =
      '<div class="twf-loading">Loading awarded tenders...</div>'

    try {
      const data = await fetchWinnersFeed(this.config.apiBase, signal)

      if (!signal.aborted) {
        renderWidget(this.element, data, this.config.theme ?? 'light')
      }
    } catch (error) {
      if ((error as Error).name === 'AbortError') return
      this.element.innerHTML =
        '<div class="twf-error">Failed to load winners feed. Please try again later.</div>'
    }
  }

  destroy(): void {
    this.abortController?.abort()
    this.element.innerHTML = ''
  }
}

function autoInit(): void {
  const elements = document.querySelectorAll<HTMLElement>(
    '[data-tendersa-winners-feed]'
  )

  for (const el of elements) {
    const theme = el.getAttribute('data-theme') as 'light' | 'dark' | null
    const widget = new WinnersFeedWidget(el, {
      theme: theme ?? undefined,
    })
    widget.render()
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit)
  } else {
    autoInit()
  }
}

export { fetchWinnersFeed } from './api'
export { renderWidget, formatCompactNumber } from './renderer'
export type { Award }
