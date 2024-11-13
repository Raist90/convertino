export { Carousel }

import { homepageProps } from '@/lib'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import React from 'react'
import { Hero } from './Hero'

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false, delay: 6000 }),
    WheelGesturesPlugin(),
  ])

  return (
    <div ref={emblaRef} className='overflow-hidden'>
      <div className='flex w-full'>
        {homepageProps.slideProps.map((slide, idx) => (
          <Hero key={idx} className='min-w-0 flex-[0_0_100%]' {...slide} />
        ))}
      </div>
    </div>
  )
}
