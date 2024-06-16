import clsx from 'clsx'

export { Drawer }

type DrawerProps = {
  children: React.ReactNode
  isOpen: boolean
}

function Drawer({ children, isOpen }: DrawerProps) {
  return (
    <div
      className={clsx(
        isOpen ? 'block' : 'hidden',
        'absolute z-10 w-full border-b border-black bg-white p-4 pt-0',
      )}
    >
      <div>{children}</div>
    </div>
  )
}
