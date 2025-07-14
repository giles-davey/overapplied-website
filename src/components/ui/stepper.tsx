// src/components/ui/stepper.tsx
import React from 'react'
import classNames from 'classnames'

interface StepperProps {
  currentStep: number
  totalSteps: number
}

export default function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }, (_, index) => {
        const step = index + 1
        const isActive = step === currentStep
        const isCompleted = step < currentStep

        return (
          <div
            key={step}
            className={classNames(
              'w-8 h-8 rounded-full flex items-center justify-center border text-sm font-semibold',
              {
                'bg-electric-violet-600 text-white border-electric-violet-600': isActive,
                'bg-gray-300 text-white border-gray-300': isCompleted,
                'bg-white text-gray-500 border-gray-300': !isActive && !isCompleted,
              }
            )}
          >
            {step}
          </div>
        )
      })}
    </div>
  )
}