import { assert } from '@/helpers/assert'
import { Moon, Sun } from 'lucide-react'

export { ThemeSwitcher }

type ThemeSwitcherProps = {
  theme: 'light' | 'dark' | undefined
  toggleTheme: () => void
}

function ThemeSwitcher({ theme, toggleTheme }: ThemeSwitcherProps) {
  assert(theme)
  return (
    <button
      aria-label={`${theme} mode`}
      type='button'
      onClick={toggleTheme}
      className='block'
    >
      {theme === 'light' ? (
        <Moon aria-hidden='true' />
      ) : (
        <Sun aria-hidden='true' />
      )}
    </button>
  )
}
