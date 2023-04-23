import { formatMediaReleaseYear } from '../media'

describe('formatMediaReleaseYear', () => {
  test('extracts year from releaseDate', () => {
    const date = '2020-01-01'
    const year = formatMediaReleaseYear(date)
    expect(year).toBe('2020')
  })

  test('returns default label if no releaseDate', () => {
    const year = formatMediaReleaseYear(undefined)
    expect(year).toEqual('N/A')
  })
})
