export { Rental }

import rentalBG from '@/assets/4.png'
import { useId } from 'react'
import { Title } from './Title'

type Benefit = {
  title: string
  list: string[]
}

type Step = {
  title: string
  text: string
}

type RentalProps = {
  title: string
  text: string
  steps: Step[]
  benefits: Benefit
}

function Rental({ title, text, steps, benefits }: RentalProps) {
  const { list: benefitsList } = benefits
  const titleID = useId()
  const titleProps = { id: titleID, title, text }

  return (
    <section aria-labelledby={titleID}>
      <div className='my-20 px-4 lg:mx-auto lg:w-10/12'>
        <Title {...titleProps} />

        <div className='mt-16 grid gap-8 md:grid-cols-3'>
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className='rounded-sm border border-gray-400 bg-red-50 p-4 shadow-md shadow-red-300 duration-300 ease-in-out hover:-translate-y-4'
            >
              <p className='mb-3 inline-block rounded-full border bg-white px-3 py-1 text-xl font-bold shadow-inner shadow-red-500'>
                {idx + 1}
              </p>
              <h3 className='mb-2 font-bold uppercase'>{step.title}</h3>
              <p className='mb-2 last:mb-0'>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-32 grid items-center gap-8 gap-x-20 lg:grid-cols-12 lg:pl-12'>
        <div className='px-4 lg:col-span-4 lg:justify-self-end lg:px-0'>
          <h3 className='title-2'>{benefits.title}:</h3>

          <ul className='list-[square] pl-8'>
            {benefitsList.map((benefit, idx) => (
              <li key={idx + 2}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className='w-full lg:col-span-8'>
          <img alt='' className='h-full w-full object-cover' src={rentalBG} />
        </div>
      </div>
    </section>
  )
}
