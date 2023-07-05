const getUserLocale = () => navigator.languages && navigator.languages.length
  ? navigator.languages[0]
  : navigator.language;

export const useLocale = () => {
  if (typeof navigator !== 'undefined') {
    return getUserLocale()
  }

  return 'en-US'
}