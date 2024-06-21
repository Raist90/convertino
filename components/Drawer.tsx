export { Drawer }

type DrawerProps = {
  children: React.ReactNode
  isOpen: boolean
}

function Drawer({ children, isOpen }: DrawerProps) {
  return (
    <>
      {isOpen && (
        <div className='w-full border-b border-black p-4 pt-0 dark:border-red-700'>
          <div>{children}</div>
        </div>
      )}
    </>
  )
}
