export { Hero }

import type { Image, Link as LinkType } from '@/types'
import { useId } from 'react'
import { Link } from './Link'

type HeroProps = {
  cta: LinkType & {
    text: string
  }
  image: Image
  title: string
}

function Hero({ cta, image, title }: HeroProps) {
  const titleID = useId()

  return (
    <section aria-labelledby={titleID} className='relative h-[500px]'>
      <img
        className='h-full w-full object-cover'
        alt={image.alt}
        src={image.src}
      />

      <div className='absolute top-[50%] w-full translate-y-[-50%] text-center text-white'>
        <h2 id={titleID} className='text-5xl uppercase'>
          {title}
        </h2>
        <div className='mt-2 grid gap-3'>
          <p className='text-xl'>{cta.text}</p>
          <Link href={cta.label}>
            <span className='button-base button-primary inline-block'>
              {cta.label}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
