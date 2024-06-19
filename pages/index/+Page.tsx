import { Carousel } from '@/components/Carousel'
import { Mission } from '@/components/Mission'
import { Services } from '@/components/Services'
import { TextMedia } from '@/components/TextMedia'
import { homepageProps } from '@/lib'
import React from 'react'

/**
 * @todo The main idea here is to spread props from HomepageProps to all
 *   components
 */
export default function Page() {
  return (
    <>
      <Carousel />
      <Services {...homepageProps.servicesProps} />
      <TextMedia {...homepageProps.textMediaProps} />
      <Mission {...homepageProps.missionProps} />
    </>
  )
}
