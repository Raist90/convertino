export { Hero }

import type { Image, Link as LinkType } from '@/types'
import clsx from 'clsx'
import { useId } from 'react'
import { Link } from './Link'

type HeroProps = {
  cta: LinkType & {
    text: string
  }
  image: Image
  title: string
  className?: string
}

function Hero({ cta, image, title, ...rest }: HeroProps) {
  const titleID = useId()

  return (
    <section
      aria-labelledby={titleID}
      className={clsx(rest.className, 'relative h-[500px] lg:h-[500px]')}
    >
      <img
        className='h-full w-full object-cover'
        alt={image.alt}
        src={image.src}
      />

      <div className='absolute top-[50%] z-[1] w-full translate-y-[-50%] text-center text-white'>
        <h2 id={titleID} className='text-5xl'>
          {title}
        </h2>
        <div className='mx-auto mt-2 lg:w-1/3'>
          <p className='mt-1 text-balance text-xl'>{cta.text}</p>
          <Link className='mx-auto mt-4 inline-block' href={cta.label}>
            <span className='button-base button-primary inline-block'>
              {cta.label}
            </span>
          </Link>
        </div>
      </div>

      <div className='absolute left-0 top-0 h-full w-full bg-black/30' />
    </section>
  )
}
