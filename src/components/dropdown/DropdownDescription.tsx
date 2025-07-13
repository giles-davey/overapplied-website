export function DropdownDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-zinc-500 dark:text-zinc-400">
      {children}
    </p>
  )
}
