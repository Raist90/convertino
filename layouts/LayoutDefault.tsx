import './style.css'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { globalProps } from '@/lib'
import React from 'react'
import './tailwind.css'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer {...globalProps.navigationProps} />
    </>
  )
}
