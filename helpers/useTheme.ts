export { useTheme }

import { isBrowser } from './isBrowser'

function useTheme(): 'light' | 'dark' | undefined {
  if (!isBrowser) return

  const preferedTheme = localStorage.getItem('prefered-theme')

  if (!preferedTheme) {
    switch (true) {
      case window.matchMedia('(prefers-color-scheme: dark)').matches:
        localStorage.setItem('prefered-theme', 'dark')
        return 'dark'
      default:
        localStorage.setItem('prefered-theme', 'light')
        return 'light'
    }
  }

  return localStorage.getItem('prefered-theme') as 'light' | 'dark'
}
