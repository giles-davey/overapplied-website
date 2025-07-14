import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Container className="py-20 max-w-5xl mx-auto text-gray-800 flex flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Step Counter */}
          <div className="flex justify-center mt-10 w-full">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#9647FF] text-white font-semibold">1</div>
              <div className="w-8 h-1 rounded-full bg-[#9647FF]"></div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-600 font-semibold">2</div>
              <div className="w-8 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-600 font-semibold">3</div>
            </div>
          </div>

          <Heading className="text-electric-violet-800 mb-8">New Member FAQ</Heading>
          <Subheading className="text-gray-600 mb-12">
            Welcome! Here’s what you should know before filling out your OverApplied profile.
          </Subheading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {[
              {
                question: 'What should I write in the profile text box?',
                answer:
                  "Start by pasting your resume — it's a great base. But don’t stop there. This isn’t a traditional resume. Think of it more like a personal changelog. Share projects, problems solved, and tools used.",
              },
              {
                question: 'What about my data?',
                answer:
                  'Your data stays private unless you opt in. We’re GDPR-compliant. You can delete your profile anytime, and we never share your info without consent.',
              },
              {
                question: 'Does it need to be structured?',
                answer:
                  'Not really. Bullet points are great. Chronological is fine. What matters is clarity. This is a living doc — update it often.',
              },
              {
                question: 'Sample Format',
                answer:
                  'Senior Backend Engineer @ XTech\n2021 – Present\n\n• Built internal ML dashboard using Supabase\n• Outcome: Tool adopted by 8 teams, setup time cut 60%\n\nUse bullet points, paste resume, and include real examples.',
              },
              {
                question: 'How much should I include?',
                answer:
                  'There’s no such thing as too much — only too little. Give us enough context to match you well.',
              },
              {
                question: 'How do LLMs ingest my profile data?',
                answer:
                  'We send your full text to the model only at the moment of matching. It doesn’t remember or store anything.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-full border border-gray-200 rounded-lg shadow-sm transition hover:shadow-md"
              >
                <div className="px-6 py-5">
                  <h2 className="font-semibold text-gray-900">{item.question}</h2>
                  <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full max-w-4xl mt-10 flex justify-end">
            <Link href="/candidate-onboarding/questions">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900">
                Next
              </button>
            </Link>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  )
}
