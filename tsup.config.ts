import { defineConfig } from 'tsup'
export default defineConfig({
  entry: { 'widget-winners-feed': 'src/index.ts' },
  format: ['esm', 'iife'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2022',
  outDir: 'dist',
  splitting: false,
  globalName: 'TendersaWinnersFeed',
})
