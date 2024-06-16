export { Modal }

import clsx from 'clsx'
import { X } from 'lucide-react'
import { forwardRef, useId } from 'react'

type DialogProps = {
  children: React.ReactNode
  closeDialog: () => void
  isOpen: boolean
  /** This is required even if `renderTitle` is false because of accessibility */
  title: string
  renderTitle?: boolean
  className?: string
}

const Modal = forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  { children, closeDialog, isOpen, title, renderTitle = false, ...rest },
  ref,
) {
  const titleID = useId()

  return (
    <dialog
      aria-labelledby={titleID}
      className={clsx(rest.className, 'rounded-md border')}
      aria-hidden={!isOpen}
      ref={ref}
    >
      <div className='w-full p-4'>
        <div
          className={clsx(
            !renderTitle ? 'justify-end' : 'justify-between',
            'flex gap-2',
          )}
        >
          <h1
            id={titleID}
            className={clsx(!renderTitle && 'sr-only', 'text-xl')}
          >
            {title}
          </h1>
          <button aria-label='Close' autoFocus onClick={closeDialog}>
            <X aria-hidden='true' />
          </button>
        </div>

        {children}
      </div>
    </dialog>
  )
})
