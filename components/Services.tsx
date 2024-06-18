export { Services }

import React from 'react'

type Services = {
  services: {
    title: string
    text: string[]
  }[]
}

function Services({ services }: Services) {
  return (
    <section className='my-20 p-4 lg:mx-auto lg:w-10/12'>
      <div className='text-center'>
        <h2 className='mb-4 text-3xl font-bold'>I nostri servizi</h2>
        <p>
          Quis quam parturient leo vulputate penatibus pede imperdiet ligula,
          laoreet. sit nec, magnis nec, vitae,
        </p>
      </div>

      <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
        {services.map((service) => (
          <div
            className='rounded-sm border border-gray-400 p-4 shadow-lg'
            key={service.title}
          >
            <h3 className='mb-2 font-bold uppercase'>{service.title}</h3>
            {service.text.map((paragraph, idx) => (
              <p className='mb-4 text-balance last:mb-0' key={idx}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
