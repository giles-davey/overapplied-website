'use client'

import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { clsx } from 'clsx'

export function Dropdown({ children }: { children: ReactNode }) {
  return <Menu as="div" className="relative text-left">{children}</Menu>
}

export function DropdownButton({
  children,
  color = 'zinc',
  outline = false,
  plain = false,
  disabled = false,
}: {
  children: ReactNode
  color?: string
  outline?: boolean
  plain?: boolean
  disabled?: boolean
}) {
  return (
    <Menu.Button
      disabled={disabled}
      className={clsx(
        'inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-semibold transition',
        plain
          ? 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800'
          : outline
          ? `border border-${color}-300 text-${color}-700 hover:bg-${color}-50 dark:border-${color}-700 dark:text-${color}-200 dark:hover:bg-${color}-800`
          : `bg-${color}-600 text-white hover:bg-${color}-700 dark:bg-${color}-500 dark:hover:bg-${color}-600`
      )}
    >
      {children}
    </Menu.Button>
  )
}

export function DropdownMenu({
  children,
  anchor = 'bottom',
  className = '',
}: {
  children: ReactNode
  anchor?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}) {
  return (
    <Menu.Items
      className={clsx(
        'absolute z-10 mt-2 w-56 origin-top-right divide-y divide-zinc-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-900 dark:divide-zinc-800',
        anchor === 'top' && 'bottom-full',
        anchor === 'bottom' && 'top-full',
        anchor === 'left' && 'right-full',
        anchor === 'right' && 'left-full',
        className
      )}
    >
      <div className="py-1">{children}</div>
    </Menu.Items>
  )
}

export function DropdownItem({
  children,
  href,
  onClick,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
}) {
  const classes =
    'block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer w-full text-left'

  if (href) {
    return (
      <Menu.Item as={Fragment}>
        {({ active }) => (
          <a href={href} className={classes}>
            {children}
          </a>
        )}
      </Menu.Item>
    )
  }

  return (
    <Menu.Item as={Fragment}>
      {({ active }) => (
        <button onClick={onClick} className={classes}>
          {children}
        </button>
      )}
    </Menu.Item>
  )
}
