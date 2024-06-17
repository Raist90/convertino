export { Header }

import { assert } from '@/helpers/assert'
import { useTheme } from '@/helpers/useTheme'
import { globalProps } from '@/lib'
import clsx from 'clsx'
import { Moon, SquareMenu, Sun, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Drawer } from './Drawer'
import { Navigation } from './Navigation'
import { ThemeSwitcher } from './ThemeSwitcher'

function Header() {
  const storedTheme = useTheme()

  let [isOpen, setIsOpen] = useState(false)
  let [theme, setTheme] = useState(storedTheme)
  let [mounted, setMounted] = useState(false)

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = (): void => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('prefered-theme', updatedTheme)
    setTheme(updatedTheme)
  }

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    const errMsg = "Couldn't retrieve Theme inside <Header> component"
    assert(theme, errMsg)
    root.classList.add(theme)
  }, [theme])

  if (!mounted) return

  return (
    <>
      <header
        className={clsx(
          !isOpen && 'border-b border-black',
          'flex items-center justify-between p-4 md:hidden',
        )}
        role='banner'
      >
        <button aria-label={!isOpen ? 'Open' : 'Close'} onClick={handleClick}>
          {!isOpen ? (
            <SquareMenu aria-hidden='true' />
          ) : (
            <X aria-hidden='true' />
          )}
        </button>
        <h1 className='font-bold'>Logo</h1>

        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </header>
      <Drawer isOpen={isOpen}>
        <Navigation {...globalProps.navigationProps} />
      </Drawer>

      <header
        className='hidden items-center justify-around p-4 md:flex'
        role='banner'
      >
        <h1 className='font-bold'>Logo</h1>

        <Navigation {...globalProps.navigationProps} />

        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </header>
    </>
  )
}
