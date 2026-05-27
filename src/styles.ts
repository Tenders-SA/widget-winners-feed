export function getStyles(): string {
  return `
@keyframes twf-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.twf-container {
  all: initial;
  display: block;
  width: 100%;
  height: 100%;
}

.twf-widget,
.twf-widget *,
.twf-widget *::before,
.twf-widget *::after {
  box-sizing: border-box;
}

.twf-widget {
  --twf-bg: #ffffff;
  --twf-text: #0f172a;
  --twf-border: #e2e8f0;
  --twf-header-bg: #f8fafc;
  --twf-header-text: #334155;
  --twf-item-hover: rgba(248,250,252,0.5);
  --twf-item-border: rgba(226,232,240,0.5);
  --twf-muted: #64748b;
  --twf-supplier: #0f172a;
  --twf-amount: #10b981;
  --twf-province-bg: #f1f5f9;
  --twf-province-text: #64748b;
  --twf-empty: #94a3b8;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  border: 1px solid var(--twf-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--twf-bg);
  color: var(--twf-text);
  max-width: 28rem;
}

.twf-widget.twf-dark {
  --twf-bg: #0f172a;
  --twf-text: #e2e8f0;
  --twf-border: #1e293b;
  --twf-header-bg: #1e293b;
  --twf-header-text: #e2e8f0;
  --twf-item-hover: rgba(30,41,59,0.5);
  --twf-item-border: rgba(51,65,85,0.5);
  --twf-muted: #64748b;
  --twf-supplier: #f1f5f9;
  --twf-amount: #34d399;
  --twf-province-bg: #1e293b;
  --twf-province-text: #cbd5e1;
  --twf-empty: #64748b;
}

.twf-header {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--twf-border);
  background: var(--twf-header-bg);
  flex-shrink: 0;
}

.twf-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.twf-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: twf-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

.twf-title {
  margin: 0;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--twf-header-text);
  white-space: nowrap;
}

.twf-powered {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  color: #6366f1;
  text-decoration: none;
  transition: color 0.15s;
  white-space: nowrap;
  flex-shrink: 0;
}

.twf-powered:hover {
  color: #818cf8;
}

.twf-powered svg {
  width: 12px;
  height: 12px;
}

.twf-list {
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.twf-empty {
  padding: 32px 16px;
  text-align: center;
  font-size: 14px;
  color: var(--twf-empty);
}

.twf-item {
  padding: 12px 16px;
  border-bottom: 1px solid var(--twf-item-border);
  transition: background 0.15s;
}

.twf-item:last-of-type {
  border-bottom: none;
}

.twf-item:hover {
  background: var(--twf-item-hover);
}

.twf-supplier {
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--twf-supplier);
}

.twf-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  gap: 8px;
}

.twf-org {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--twf-muted);
}

.twf-amount {
  font-size: 12px;
  font-weight: 700;
  color: var(--twf-amount);
  white-space: nowrap;
  flex-shrink: 0;
}

.twf-meta {
  margin-top: 6px;
  display: flex;
  gap: 8px;
}

.twf-province {
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--twf-province-bg);
  color: var(--twf-province-text);
  line-height: 1.4;
}

.twf-footer {
  padding: 12px 16px;
  background: #020617;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.twf-widget:hover .twf-footer {
  opacity: 1;
}

.twf-cta {
  font-size: 12px;
  font-weight: 700;
  color: #a5b4fc;
  text-decoration: none;
  transition: color 0.15s;
}

.twf-cta:hover {
  color: #c7d2fe;
}

.twf-loading {
  text-align: center;
  padding: 16px;
  color: var(--twf-empty);
  font-size: 14px;
}

.twf-error {
  text-align: center;
  padding: 16px;
  color: #ef4444;
  font-size: 14px;
}
`
}
