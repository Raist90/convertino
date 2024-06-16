export { globalProps, homepageProps }

import type { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
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
      label: 'Chi siamo',
      href: '/chi-siamo',
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

const servicesProps: ComponentProps<typeof Services> = {
  services: [
    {
      title: 'Cras Aenean ipsum viverra',
      text: [
        'Augue. a, ridiculus quis leo nascetur eu, laoreet. Natoque eu imperdiet metus dolor. Eleifend lorem eu, pede varius enim. adipiscing ullamcorper dui. Ligula, Aenean imperdiet.',
        'Aenean ut tellus. tellus. sociis ut, ultricies et massa. Felis, quam sit Aliquam rhoncus magnis sem. Consequat mus. Dapibus pretium',
      ],
    },
    {
      title: 'Sociis montes, quis, ligula, enim Etiam',
      text: [
        'Pellentesque felis, dictum ultricies leo pede Cum lorem tellus. Imperdiet.pretium. Nulla eleifend quam montes, justo, dapibus Aenean Donec varius justo,Aenean Donec porttitor vulputate vulputate Aenean justo.',
        'Aenean ac, aliquet nisi. Ullamcorper metus magnis',
      ],
    },
    {
      title: 'Nec, vel commodo quam mus. ligula, vitae, sit',
      text: [
        'Quis, vulputate Nullam porttitor Aliquam felis, sociis felis eu quam pretium ultricies Phasellus Aenean Vivamus eu, nec.',
        'Donec quis Donec Aenean consequat dolor pellentesque rutrum. arcu. eleifend ante, mollis consequat eu, Etiam In ultricies a, dapibus.',
      ],
    },
    {
      title: 'Aenean massa Aenean justo, Phasellus mus.',
      text: [
        'Sociis massa consequat justo, Donec justo, ultricies pellentesque dapibus ligula quis, feugiat aliquet Curabitur elementum Aenean a.',
        'et ipsum leo eleifend pretium Aenean quis ante, commodo eget, imperdiet. porttitor arcu. pede',
      ],
    },
  ],
}

type HomepageProps = {
  servicesProps: typeof servicesProps
  slideProps: typeof slideProps
}

const homepageProps: HomepageProps = {
  servicesProps,
  slideProps,
}

type GlobalProps = {
  navigationProps: typeof navigationProps
}

const globalProps: GlobalProps = {
  navigationProps,
}
