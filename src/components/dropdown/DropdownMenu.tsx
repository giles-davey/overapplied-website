import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef } from 'react'

export const DropdownMenu = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(function DropdownMenu({ className, ...props }, ref) {
  return (
    <Menu.Items
      ref={ref}
      className={clsx(
        'z-50 mt-2 w-48 origin-top-right rounded-xl border border-zinc-100 bg-white p-1 text-sm text-zinc-700 shadow-lg focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300',
        className
      )}
      {...props}
    />
  )
})
