import { pluralize } from '../format'

describe('pluralize', () => {
  test('applies default pluralization', () => {
    const word = 'Result'
    const expected = 'Results'

    const inputs: [number, string][] = [
      [0, word],
      [2, word],
    ]

    inputs.forEach((input) => {
      const pluralized = pluralize(...input)
      expect(pluralized).toEqual(expected)
    })
  })

  test('applies custom pluralization', () => {
    const word = 'Formula'
    const plural = 'e'
    const expected = 'Formulae'

    const inputs: [number, string, string][] = [
      [0, word, plural],
      [2, word, plural],
    ]

    inputs.forEach((input) => {
      const pluralized = pluralize(...input)
      expect(pluralized).toEqual(expected)
    })
  })

  test('returns singular if amount is one', () => {
    const word = 'Result'
    const plural = 's'

    const inputs: [number, string, string?][] = [
      [1, word],
      [1, word, plural],
    ]

    inputs.forEach((input) => {
      const pluralized = pluralize(...input)
      expect(pluralized).toEqual(word)
    })
  })
})
