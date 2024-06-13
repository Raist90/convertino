export { useDialog }

import { MutableRefObject, useEffect, useRef, useState } from 'react'

type Dialog = {
  closeDialog: () => void
  dialogRef: MutableRefObject<HTMLDialogElement | null>
  handleClick: () => void
  isOpen: boolean
}

function useDialog(): Dialog {
  let [isOpen, setIsOpen] = useState(false)

  const dialogRef = useRef<HTMLDialogElement | null>(null)

  function handleClick(): void {
    setIsOpen(true)
    dialogRef.current?.showModal()
  }
  function closeDialog(): void {
    setIsOpen(false)
    dialogRef.current?.close()
  }

  useEffect(() => {
    const dialogElement = dialogRef.current

    const handleDialogClose = () => {
      setIsOpen(false)
    }

    if (dialogElement) {
      dialogElement.addEventListener('close', handleDialogClose)
    }

    return () => {
      if (dialogElement) {
        dialogElement.removeEventListener('close', handleDialogClose)
      }
    }
  }, [])

  return {
    closeDialog,
    dialogRef,
    handleClick,
    isOpen,
  }
}
