export { globalProps, homepageProps }

import type { Hero } from '@/components/Hero'
import { PICSUM_API } from '@/constants'
import type { Navigation } from '@/types'
import type { ComponentProps } from 'react'

const navigationProps: Navigation = {
  header: [
    {
      label: 'Chi siamo',
      href: '/chi-siamo',
    },
    {
      label: 'Servizi',
      href: '/servizi',
    },
    {
      label: 'Contattaci',
      href: '/contattaci',
    },
    {
      label: 'Dove siamo',
      href: '/dove-siamo',
    },
  ],
  footer: [
    {
      label: 'About',
      href: '/about',
    },
  ],
}

const slideProps: ComponentProps<typeof Hero>[] = [
  {
    cta: {
      href: '/',
      label: 'Click me',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo',
    },
    image: {
      alt: 'Banner',
      src: `${PICSUM_API}/2000?random=1`,
    },
    title: 'A title',
  },
  {
    cta: {
      href: '/',
      label: 'Click me',
      text: 'Ligula, ut, Cras In mus. mollis dui.',
    },
    image: {
      alt: 'Banner',
      src: `${PICSUM_API}/2000?random=2`,
    },
    title: 'A title',
  },
  {
    cta: {
      href: '/',
      label: 'Click me',
      text: 'Dapibus. vel, nec, Cum justo. Aenean consequat',
    },
    image: {
      alt: 'Banner',
      src: `${PICSUM_API}/2000?random=3`,
    },
    title: 'A title',
  },
]

type HomepageProps = {
  slideProps: typeof slideProps
}

const homepageProps: HomepageProps = {
  slideProps,
}

type GlobalProps = {
  navigationProps: typeof navigationProps
}

const globalProps: GlobalProps = {
  navigationProps,
}
