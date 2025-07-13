// src/components/pagination.tsx

import * as React from "react"
import { cn } from "@/lib/utils"

const Pagination = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      className="flex w-full items-center justify-center space-x-1 p-4"
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </nav>
  )
}

const PaginationList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="inline-flex items-center space-x-1">{children}</ul>
}

const PaginationPage = ({
  href,
  children,
  current = false,
}: {
  href: string
  children: React.ReactNode
  current?: boolean
}) => {
  return (
    <li>
      <a
        href={href}
        aria-current={current ? "page" : undefined}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded border text-sm font-medium transition-colors",
          current
            ? "bg-primary text-white"
            : "border-muted bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {children}
      </a>
    </li>
  )
}

const PaginationPrevious = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      className="inline-flex h-9 items-center justify-center rounded px-3 text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground"
    >
      Previous
    </a>
  )
}

const PaginationNext = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      className="inline-flex h-9 items-center justify-center rounded px-3 text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground"
    >
      Next
    </a>
  )
}

const PaginationGap = () => {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center text-sm">
      ...
    </span>
  )
}

export {
  Pagination,
  PaginationList,
  PaginationPage,
  PaginationPrevious,
  PaginationNext,
  PaginationGap,
}