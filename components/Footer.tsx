export { Footer }

import type { Navigation } from '@/types'
import React from 'react'

function Footer({ footer }: Navigation) {
  const { text } = footer

  return (
    <footer className='border-t border-black px-4 py-8 text-center dark:border-red-700'>
      {text}
    </footer>
  )
}
