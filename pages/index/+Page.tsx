import { Carousel } from '@/components/Carousel'
import { Services } from '@/components/Services'
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
    </>
  )
}
