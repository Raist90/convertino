export { Gallery }

import { Image } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import React, { ComponentProps, useCallback, useId } from 'react'
import { CarouselArrowButtons } from './CarouselArrowButtons'
import { Media } from './Media'
import { Title } from './Title'

type GalleryProps = {
  images: Image[]
  title: string
  text: string
}

function Gallery({ images, title, text }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    WheelGesturesPlugin(),
  ])

  const titleID = useId()

  const titleProps: ComponentProps<typeof Title> = {
    id: titleID,
    title,
    text,
    textDirection: 'left',
  }

  const scrollPrev = useCallback((): void => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback((): void => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section
      aria-labelledby={titleID}
      className='mb-20 mt-32 px-4 lg:mx-auto lg:w-10/12'
    >
      <div className='mx-auto text-balance lg:w-9/12'>
        <Title {...titleProps} />
      </div>

      <div className='mt-12 overflow-hidden' ref={emblaRef}>
        <div className='flex w-full gap-[calc(1rem*-1)]'>
          {images.map((image, idx) => (
            <Media
              key={idx + 2}
              className='h-[350px] flex-[0_0_70%] pl-2 md:h-[500px] md:flex-[0_0_34%]'
              image={image}
            />
          ))}
        </div>

        <CarouselArrowButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />
      </div>
    </section>
  )
}
