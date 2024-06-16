export { Navigation }

import { Navigation as NavigationType } from '@/types'
import { Link } from './Link'

function Navigation({ header: links }: NavigationType) {
  return (
    <nav>
      <ul className='grid justify-center gap-2 font-bold lg:flex lg:gap-5'>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
