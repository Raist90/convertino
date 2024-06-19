export { TextMedia }

import { Image } from '@/types'
import React from 'react'

type Text = {
  title: string
  paragraphs: string[]
}

type TextMediaProps = {
  image: Image
  texts: Text[]
}

function TextMedia({ image, texts }: TextMediaProps) {
  return (
    <section className='mb-20 mt-36 grid gap-x-12 gap-y-8 md:grid-cols-2'>
      <div className='aspect-[1] w-full'>
        <img
          className='h-full w-full object-cover'
          alt={image.alt}
          src={image.src}
        />
      </div>

      <div className='text-sticky text-balance py-4'>
        {texts.map((text) => (
          <React.Fragment key={text.title}>
            <div className='pl-8 md:pl-0'>
              <h2 className='title-2 border-b border-solid border-red-500 pb-1'>
                {text.title}
              </h2>
            </div>

            <div className='px-8 md:px-0 md:pr-4'>
              {text.paragraphs.map((paragraph, idx) => (
                <p className='mb-2 last:mb-0' key={idx + 2}>
                  {paragraph}
                </p>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
