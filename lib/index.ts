export { homepageProps }

import type { Hero } from '@/components/Hero'
import { PICSUM_API } from '@/constants'
import type { ComponentProps } from 'react'

type HomepageProps = {
  slideProps: ComponentProps<typeof Hero>[]
}

const homepageProps: HomepageProps = {
  slideProps: [
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
  ],
}
