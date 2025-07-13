

import WelcomePage from './[step]/WelcomePage'
import CandidateQuestionsPage from './[step]/CandidateQuestionsPage'

interface PageProps {
  params: { step: string }
  searchParams?: Record<string, string | string[] | undefined>
}

export default function Page({ params }: PageProps) {
  const step = params?.step || 'welcome'

  switch (step) {
    case 'welcome':
      return <WelcomePage />
    case 'questions':
      return <CandidateQuestionsPage />
    default:
      return <div>Not found</div>
  }
}