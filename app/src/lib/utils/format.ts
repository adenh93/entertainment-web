export function pluralize(amount: number, word: string, plural: string = 's') {
  return amount === 1 ? word : `${word}${plural}`
}
