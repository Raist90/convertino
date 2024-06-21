export { globalProps, homepageProps }

import { default as slide1, default as textMedia1 } from '@/assets/4.png'
import { Contacts } from '@/components/Contacts'
import { Gallery } from '@/components/Gallery'
import type { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'
import { Rental } from '@/components/Rental'
import { Services } from '@/components/Services'
import { TextMedia } from '@/components/TextMedia'
import { PICSUM_API } from '@/constants'
import type { Navigation } from '@/types'
import type { ComponentProps } from 'react'

const navigationProps: Navigation = {
  header: [
    {
      label: 'Servizi',
      href: '/#servizi',
    },
    {
      label: 'Chi siamo',
      href: '/#chi-siamo',
    },
    {
      label: 'Noleggio',
      href: '/#noleggio',
    },
    {
      label: 'Contattaci',
      href: '/#contattaci',
    },
  ],
  footer: [
    {
      label: 'Servizi',
      href: '/#servizi',
    },
    {
      label: 'Chi siamo',
      href: '/#chi-siamo',
    },
    {
      label: 'Noleggio',
      href: '/#noleggio',
    },
    {
      label: 'Contattaci',
      href: '/#contattaci',
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

const textMediaProps: ComponentProps<typeof TextMedia> = {
  image: {
    alt: '',
    src: textMedia1,
  },
  texts: [
    {
      title: 'La nostra storia',
      paragraphs: [
        'Da oltre 40 anni, Convertino SRL offre servizi di alta qualità nel settore delle piattaforme aeree e delle ristrutturazioni.',
        'La nostra esperienza e professionalità ci rendono un punto di riferimento nel mercato. Siamo orgogliosi di fornire soluzioni su misura per ogni tipo di progetto, garantendo sicurezza, efficienza e risultati eccellenti.',
      ],
    },
  ],
}

const missionProps: ComponentProps<typeof Mission> = {
  title: 'La nostra Mission',
  texts: [
    "La nostra mission è quella di facilitare il lavoro dei nostri clienti offrendo attrezzature all'avanguardia e servizi di ristrutturazione eseguiti da personale qualificato.",
    'Puntiamo a diventare il vostro partner di fiducia, assicurando sempre la massima soddisfazione.',
  ],
}

const rentalProps: ComponentProps<typeof Rental> = {
  title: 'Come Funziona il Noleggio?',
  text: 'Noleggiare una piattaforma aerea da Convertino SRL è semplice e veloce:',
  steps: [
    {
      title: 'Scegli la piattaforma',
      text: 'Consulta il nostro catalogo e scegli l’attrezzatura più adatta alle tue esigenze.',
    },
    {
      title: 'Richiedi un preventivo',
      text: 'Contattaci per un preventivo gratuito e senza impegno.',
    },
    {
      title: 'Conferma il noleggio',
      text: 'Una volta confermato, organizzeremo la consegna della piattaforma nel luogo e nel momento da te indicati.',
    },
  ],
  benefits: {
    title: 'Vantaggi del noleggio',
    list: [
      'Attrezzature all’avanguardia',
      'Consegna e ritiro a domicilio',
      'Assistenza tecnica dedicata',
      'Flessibilità nei tempi di noleggio',
    ],
  },
}

const galleryProps: ComponentProps<typeof Gallery> = {
  images: [
    {
      alt: '',
      src: slide1,
    },
    {
      alt: '',
      src: slide1,
    },
    {
      alt: '',
      src: slide1,
    },
    {
      alt: '',
      src: slide1,
    },
  ],
  title: 'I nostri lavori',
  text: 'Dai un’occhiata ad alcuni dei nostri progetti più recenti e scopri come abbiamo aiutato i nostri clienti a realizzare i loro obiettivi. La qualità del nostro lavoro parla per noi.',
}

const contactsProps: ComponentProps<typeof Contacts> = {
  infos: [
    {
      type: 'phone',
      text: '+39 355 624 2449',
    },
    {
      type: 'email',
      text: 'info@convertinoedilizia.it',
    },
    {
      type: 'address',
      text: 'Viale Francia 72019 San Vito dei Normanni, Puglia',
    },
  ],
  socials: [
    {
      type: 'fb',
      href: 'https://www.facebook.com/profile.php?id=100067893503970',
    },
    {
      type: 'ig',
      href: 'https://www.instagram.com/convertinosrl/',
    },
  ],
  title: 'Contattaci',
  text: 'Hai bisogno di un preventivo o vuoi maggiori informazioni sui nostri servizi? Non esitare a contattarci. Siamo a tua disposizione per rispondere a tutte le tue domande.',
}

type HomepageProps = {
  contactsProps: typeof contactsProps
  galleryProps: typeof galleryProps
  missionProps: typeof missionProps
  rentalProps: typeof rentalProps
  servicesProps: typeof servicesProps
  slideProps: typeof slideProps
  textMediaProps: typeof textMediaProps
}

const homepageProps: HomepageProps = {
  contactsProps,
  galleryProps,
  missionProps,
  rentalProps,
  servicesProps,
  slideProps,
  textMediaProps,
}

type GlobalProps = {
  navigationProps: typeof navigationProps
}

const globalProps: GlobalProps = {
  navigationProps,
}
