import { Hero } from '@/components/Hero'
import { Modal } from '@/components/Modal'
import { PICSUM_API } from '@/constants'
import { useDialog } from '@/helpers/useDialog'
import React from 'react'

export default function Page() {
  const { closeDialog, dialogRef, handleClick, isOpen } = useDialog()

  const heroProps = {
    cta: {
      href: '/',
      label: 'Click me',
      text: 'Lorem ipsum and bla bla',
    },
    image: {
      alt: 'Banner',
      src: `${PICSUM_API}/2000`,
    },
    title: 'A title',
  }

  return (
    <>
      <button onClick={handleClick} className='border p-4'>
        Home
      </button>
      <Modal
        closeDialog={closeDialog}
        isOpen={isOpen}
        ref={dialogRef}
        title={'Dialog title'}
        renderTitle={true}
      >
        <button>Hello</button>
      </Modal>
      <Hero {...heroProps} />
    </>
  )
}
