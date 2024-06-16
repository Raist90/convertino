import './style.css'

import { Drawer } from '@/components/Drawer'
import { Navigation } from '@/components/Navigation'
import { globalProps } from '@/lib'
import clsx from 'clsx'
import { SquareMenu, X } from 'lucide-react'
import React, { useState } from 'react'
import './tailwind.css'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(): void {
    setIsOpen(!isOpen)
  }
  /** @todo Put this inside a Header component */
  return (
    <>
      <header
        className={clsx(
          !isOpen && 'border-b border-black',
          'flex items-center justify-between p-4 lg:hidden',
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
        className='hidden items-center justify-around p-4 lg:flex'
        role='banner'
      >
        <h1 className='font-bold'>Logo</h1>
        <Navigation {...globalProps.navigationProps} />
      </header>
      {children}
    </>
  )
}
