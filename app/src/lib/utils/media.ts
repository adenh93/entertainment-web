export function formatMediaReleaseYear(releaseDate?: string): string {
  if (!releaseDate) return 'N/A'
  const date = new Date(releaseDate)
  return date.getFullYear().toString()
}
