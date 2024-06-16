export { Header }

import { globalProps } from '@/lib'
import clsx from 'clsx'
import { SquareMenu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Drawer } from './Drawer'
import { Navigation } from './Navigation'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(): void {
    setIsOpen(!isOpen)
  }

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
      </header>
    </>
  )
}
