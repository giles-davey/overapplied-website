

'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function WelcomePage() {
  const router = useRouter()

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-violet-700 rounded-full" />
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome to Overapplied</h1>
        <p className="text-muted-foreground">
          This short onboarding flow helps our system understand your background.
          You’ll answer a few structured questions and then paste in your work history.
        </p>
      </div>
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>✅ No resume jargon needed.</p>
        <p>✅ Use plain English to describe what you’ve built or worked on.</p>
        <p>✅ Our LLM will match your info to roles without bias.</p>
      </div>
      <div className="mt-8 text-center">
        <Button onClick={() => router.push('/candidate-onboarding/questions')}>
          Get Started
        </Button>
      </div>
    </div>
  )
}