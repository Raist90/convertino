export { Media }

import { Image } from '@/types'

type MediaProps = {
  className: string
  image: Image
}

function Media({ image, ...rest }: MediaProps) {
  const { alt, src } = image
  const { className } = rest

  return (
    <div className={className}>
      <img className='h-full w-full object-cover' alt={alt} src={src} />
    </div>
  )
}
