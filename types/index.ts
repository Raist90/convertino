export type { Image, Link } from './partials'
export { Navigation }

import type { Link } from './partials'

type Navigation = {
  header: Link[]
  footer: Link[]
}
