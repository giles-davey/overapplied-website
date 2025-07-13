

import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu } from '@/components/dropdown'
import * as Headless from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

type Props = {
  currentUser: {
    avatarUrl: string
    name: string
    role: string
    email: string
  }
  signOut: () => void
}

export default function DropdownCustom({ currentUser, signOut }: Props) {
  return (
    <Dropdown>
      <Headless.MenuButton
        className="flex w-48 items-center gap-3 rounded-xl border border-transparent p-1 data-active:border-zinc-200 data-hover:border-zinc-200 dark:data-active:border-zinc-700 dark:data-hover:border-zinc-700"
        aria-label="Account options"
      >
        <img className="size-10 rounded-lg" src={currentUser.avatarUrl} alt="" />
        <span className="block text-left">
          <span className="block text-sm/5 font-medium">{currentUser.name}</span>
          <span className="block text-xs/5 text-zinc-500">{currentUser.role}</span>
        </span>
        <ChevronUpDownIcon className="mr-1 ml-auto size-4 shrink-0 stroke-zinc-400" />
      </Headless.MenuButton>
      <DropdownMenu className="min-w-[--button-width]">
        <div className="px-4 py-2">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Signed in as</div>
          <div className="text-sm/7 font-semibold text-zinc-800 dark:text-white">{currentUser.email}</div>
        </div>
        <DropdownDivider />
        <DropdownItem href="/profile">My profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={signOut}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}