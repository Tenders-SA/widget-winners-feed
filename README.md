# @tendersa/widget-winners-feed

Tenders-SA Winners Feed Widget — Embeddable live feed of recently awarded tenders in South Africa.

## Usage

### Script tag (IIFE)

```html
<script src="https://unpkg.com/@tendersa/widget-winners-feed@latest/dist/widget-winners-feed.global.js"></script>
<div data-tendersa-winners-feed style="width: 400px; height: 500px;"></div>
```

### NPM (ESM)

```bash
npm install @tendersa/widget-winners-feed
```

```typescript
import { WinnersFeedWidget } from '@tendersa/widget-winners-feed'

const container = document.getElementById('my-widget')
const widget = new WinnersFeedWidget(container, { theme: 'dark' })
widget.render()
```

### Data Attributes

| Attribute | Description |
|-----------|-------------|
| `data-tendersa-winners-feed` | Activates auto-init |
| `data-theme` | `light` or `dark` (default: system preference) |

### API

```typescript
interface WidgetConfig {
  apiBase?: string   // Default: https://tenders-sa.org
  theme?: 'light' | 'dark'
}

class WinnersFeedWidget {
  constructor(element: HTMLElement, config?: WidgetConfig)
  render(): Promise<void>
  destroy(): void
}
```

## Development

```bash
npm install
npm run dev        # watch mode
npm run build      # production build
npm run typecheck  # TypeScript check
npm test           # run tests
```

## License

MIT
