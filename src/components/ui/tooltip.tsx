'use client'

import * as React from 'react'
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'

const Tooltip = ({
  children,
  content,
  side = 'top',
  align = 'center',
  className,
}: {
  children: React.ReactNode
  content: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  className?: string
}) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn(
            'z-50 overflow-hidden rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95',
            className
          )}
        >
          {content}
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}

export { Tooltip }
export { TooltipProvider, TooltipTrigger, TooltipContent }