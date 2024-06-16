import './style.css'

import { Header } from '@/components/Header'
import React from 'react'
import './tailwind.css'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='sticky top-0 z-[1] bg-white/70 backdrop-blur-md'>
        <Header />
      </div>
      {children}
    </>
  )
}
