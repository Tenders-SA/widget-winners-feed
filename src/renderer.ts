import type { Award } from './types'
import { getStyles } from './styles'

export function formatCompactNumber(number: number): string {
  if (number < 1000) return String(number)
  if (number < 1_000_000) return (number / 1000).toFixed(1) + 'K'
  if (number < 1_000_000_000) return (number / 1_000_000).toFixed(1) + 'M'
  if (number < 1_000_000_000_000) return (number / 1_000_000_000).toFixed(1) + 'B'
  return (number / 1_000_000_000_000).toFixed(1) + 'T'
}

function escapeHTML(str: string): string {
  const el = document.createElement('div')
  el.textContent = str
  return el.innerHTML
}

function externalLinkIcon(): string {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
}

export function renderWidget(
  container: HTMLElement,
  awards: Award[],
  theme: 'light' | 'dark'
): void {
  const styleId = 'twf-styles'

  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style')
    styleEl.id = styleId
    styleEl.textContent = getStyles()
    document.head.appendChild(styleEl)
  }

  container.innerHTML = ''

  const wrapper = document.createElement('div')
  wrapper.className = 'twf-container'

  const widget = document.createElement('div')
  widget.className = `twf-widget${theme === 'dark' ? ' twf-dark' : ''}`

  const header = document.createElement('div')
  header.className = 'twf-header'
  header.innerHTML = `
    <div class="twf-header-left">
      <span class="twf-dot"></span>
      <h1 class="twf-title">Awarded Tenders Feed</h1>
    </div>
    <a href="https://www.tenders-sa.org/sa-tenders/tenders?status=Awarded&amp;utm_source=embed&amp;utm_campaign=winners-feed"
       target="_blank" rel="noopener noreferrer" class="twf-powered">
      Powered by TenderSA ${externalLinkIcon()}
    </a>
  `
  widget.appendChild(header)

  const list = document.createElement('div')
  list.className = 'twf-list'

  if (awards.length === 0) {
    list.innerHTML = '<div class="twf-empty">No recent awards found.</div>'
  } else {
    for (const award of awards) {
      const item = document.createElement('div')
      item.className = 'twf-item'
      item.innerHTML = `
        <div class="twf-supplier">${escapeHTML(award.supplierName || 'Unknown Supplier')}</div>
        <div class="twf-row">
          <span class="twf-org">${escapeHTML(award.orgName)}</span>
          <span class="twf-amount">R ${formatCompactNumber(award.amount || 0)}</span>
        </div>
        <div class="twf-meta">
          <span class="twf-province">${escapeHTML(award.province)}</span>
        </div>
      `
      list.appendChild(item)
    }
  }
  widget.appendChild(list)

  const footer = document.createElement('div')
  footer.className = 'twf-footer'
  footer.innerHTML = `
    <a href="https://www.tenders-sa.org/register?utm_source=embed_cta&amp;utm_campaign=winners-feed"
       target="_blank" rel="noopener noreferrer" class="twf-cta">
      View All Awarded Tenders on TenderSA →
    </a>
  `
  widget.appendChild(footer)

  wrapper.appendChild(widget)
  container.appendChild(wrapper)
}
