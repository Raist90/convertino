export { Mission }

import missionBG from '@/assets/4.png'
import { useId } from 'react'

type MissionProps = {
  title: string
  texts: string[]
}

function Mission({ title, texts }: MissionProps) {
  const titleID = useId()

  return (
    <section
      className='relative my-36 text-balance py-20 backdrop-blur'
      aria-labelledby={titleID}
    >
      <div className='mx-auto w-10/12'>
        <h2 id={titleID} className='title-2'>
          {title}
        </h2>
        {texts.map((text, idx) => (
          <p
            className='mb-2 last:mb-0 last:text-lg last:font-bold'
            key={idx + 2}
          >
            {text}
          </p>
        ))}
      </div>

      <div className='absolute left-0 top-0 -z-[1] h-full w-full opacity-10'>
        <img alt='' className='h-full w-full object-cover' src={missionBG} />
      </div>
    </section>
  )
}
