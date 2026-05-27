import type { Award } from './types'

const DEFAULT_API_BASE = 'https://tenders-sa.org'

interface ApiResponse {
  data: Award[]
  generatedAt: string
}

export async function fetchWinnersFeed(
  apiBase: string = DEFAULT_API_BASE,
  signal?: AbortSignal
): Promise<Award[]> {
  const url = `${apiBase.replace(/\/+$/, '')}/api/widgets/winners-feed`

  const response = await fetch(url, {
    signal,
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(
      `Failed to fetch winners feed: ${response.status} ${response.statusText}`
    )
  }

  const json: ApiResponse = await response.json()
  return json.data
}
