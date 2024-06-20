import { ArrowLeft, ArrowRight } from 'lucide-react'

export { CarouselArrowButtons }

type CarouselArrowButtonsProps = {
  scrollPrev: () => void
  scrollNext: () => void
}

function CarouselArrowButtons({
  scrollPrev,
  scrollNext,
}: CarouselArrowButtonsProps) {
  return (
    <div className='mt-4 flex gap-2'>
      <button className='border border-black p-3' onClick={scrollPrev}>
        <ArrowLeft aria-hidden='true' />
      </button>

      <button className='border border-black p-3' onClick={scrollNext}>
        <ArrowRight aria-hidden='true' />
      </button>
    </div>
  )
}
