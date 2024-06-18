export { globalProps, homepageProps }

import slide1 from '@/assets/4.png'
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
      label: 'Contattaci',
      text: 'Specialisti nel noleggio di piattaforme aeree e nella realizzazione di lavori e ristrutturazioni',
    },
    image: {
      alt: 'Banner',
      src: slide1,
    },
    title: 'Benvenuti su Convertino SRL',
  },
  {
    cta: {
      href: '/',
      label: 'Contattaci',
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
      label: 'Contattaci',
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
      list: [
        'Piattaforme autocarrate',
        'Piattaforme semoventi',
        'Piattaforme verticali',
        'Ragni e piattaforme cingolate',
      ],
      title: 'Noleggio piattaforme aeree',
      text: [
        'Offriamo una vasta gamma di piattaforme aeree per qualsiasi tipo di lavoro in quota. Le nostre attrezzature sono moderne, sicure e regolarmente manutenute. Tra le nostre proposte:',
      ],
    },
    {
      list: [
        'Ristrutturazioni interne ed esterne',
        'Rifacimento facciate',
        'Manutenzione edifici',
        'Realizzazione di nuove costruzioni',
      ],
      title: 'Lavori e ristrutturazioni',
      text: [
        'Il nostro team di esperti è specializzato in una vasta gamma di servizi di ristrutturazione e manutenzione. Dal piccolo intervento alla ristrutturazione completa, ci occupiamo di:',
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
