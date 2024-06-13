import { Modal } from '@/components/Modal'
import { useDialog } from '@/helpers/useDialog'
import React from 'react'

export default function Page() {
  const { closeDialog, dialogRef, handleClick, isOpen } = useDialog()

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
    </>
  )
}
