export { Services }

import { isArray } from '@/helpers/predicates'
import React from 'react'

type Services = {
  services: {
    list?: string[]
    title: string
    text: string[]
  }[]
}

/** @todo Refactor into ServiceCard component */
function Services({ services }: Services) {
  return (
    <section className='my-20 p-4 lg:mx-auto lg:w-10/12'>
      <div className='text-center'>
        <h2 className='title-2'>I nostri servizi</h2>
        <p>
          Scopri i nostri servizi e la nostra ampia gamma di soluzioni per
          privati e aziende.
        </p>
      </div>

      <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {services.map((service) => (
          <div
            key={service.title}
            className='rounded-sm border border-gray-400 bg-red-50 p-4 shadow-md shadow-red-300 duration-300 ease-in-out hover:-translate-y-4'
          >
            <h3 className='mb-2 font-bold uppercase'>{service.title}</h3>
            {service.text.map((paragraph, idx) => (
              <React.Fragment key={idx + 2}>
                <p className='mb-2 text-balance last:mb-0'>{paragraph}</p>
                {isArray(service.list) && (
                  <ul className='list-[square] pl-8'>
                    {service.list.map((item, idx) => (
                      <li key={idx + 2}>{item}</li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
