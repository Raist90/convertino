export { Navigation }

import { Navigation as NavigationType } from '@/types'
import React from 'react'
import { Link } from './Link'

function Navigation({ header: links }: NavigationType) {
  return (
    <nav>
      <ul className='grid gap-2 font-bold md:flex md:justify-center md:gap-5'>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
