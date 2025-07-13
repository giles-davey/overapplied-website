import clsx from 'clsx'
import { MenuButton } from '@headlessui/react'

interface DropdownButtonProps {
  children: React.ReactNode
  color?: 'dark' | 'zinc' | 'cyan' | 'blue' | 'red' | 'green'
  outline?: boolean
  plain?: boolean
  disabled?: boolean
}

export function DropdownButton({
  children,
  color = 'zinc',
  outline = false,
  plain = false,
  disabled = false,
}: DropdownButtonProps) {
  return (
    <MenuButton
      disabled={disabled}
      className={clsx(
        'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition',
        {
          // Solid button
          [`bg-${color}-600 text-white hover:bg-${color}-500`]: !outline && !plain,

          // Outline button
          [`border border-${color}-600 text-${color}-600 hover:bg-${color}-50`]: outline,

          // Plain button
          [`text-${color}-600 hover:text-${color}-800`]: plain,

          // Disabled state
          'opacity-50 cursor-not-allowed': disabled,
        }
      )}
    >
      {children}
    </MenuButton>
  )
}
