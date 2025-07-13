import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#7512d9] via-[#9a2fe8] to-[#c879ff] text-white">
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-electric-violet-700/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-electric-violet-800/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-semibold tracking-tight text-balance text-electric-violet-900 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            OverApplied
          </h1>
          <p className="mt-8 max-w-xl text-xl/7 font-medium text-electric-violet-700/75 sm:text-2xl/8">
            It’s not who you know, it’s what you know.
          </p>
          <div className="mt-12 flex justify-center">
            <Button className="bg-electric-violet-600 hover:bg-electric-violet-700" href="/signup">
              Sign up now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StepsSection() {
  return (
    <Container className="py-20 flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold text-electric-violet-800">We’re a work in progress</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Overapplied is in beta. We’re building a new kind of job search and recruiting process — prioritizing skills and projects, not just titles and who you know. Join our early talent community and share feedback as we prepare for launch.
      </p>
      <p className="mt-2 text-sm text-gray-500">No employers yet — we’re building the foundation first.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3 justify-center">
        <div>
          <h3 className="text-xl font-bold text-electric-violet-700">1. Create your profile</h3>
          <p className="text-gray-600 mt-2">Tell us about your experience and goals.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-electric-violet-700">2. Verify your job</h3>
          <p className="text-gray-600 mt-2">Confirm where you work so we can match you more accurately.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-electric-violet-700">3. Get notified</h3>
          <p className="text-gray-600 mt-2">We’ll alert you when matches open up.</p>
        </div>
      </div>
    </Container>
  )
}

function FAQSection() {
  const faqs = [
    { q: 'What is Overapplied?', a: 'Overapplied is a smarter way to job search and hire — matching candidates and companies based on skills, projects, and context.' },
    { q: 'What does verification mean?', a: 'We verify employment via LinkedIn or work email so we can better tailor your matches.' },
    { q: 'Does formatting affect scoring?', a: 'Nope. Our system reads raw content. Focus on substance, not style.' },
    { q: 'What happens to my data?', a: 'You control it. Delete anytime. No data is sold or shared without your permission.' },
    { q: 'How do I delete or export my profile?', a: 'You can do both in one click via your account settings.' },
    { q: 'Will employers see this?', a: 'Not yet. You’re early! Only you can see your profile until you opt in.' },
    { q: 'Example profile previews (optional)', a: 'We’ll show you how your profile will look once employer access is live.' }
  ]

  return (
    <Container className="py-20">
      <h2 className="text-3xl font-semibold text-electric-violet-800 text-center mb-10">FAQs</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {faqs.map((item, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-electric-violet-700">{item.q}</h3>
            <p className="text-gray-600 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function MailingListFooter() {
  return (
    <Container className="py-16 border-t border-gray-200">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-electric-violet-800 mb-2">Stay in the loop</h3>
        <p className="text-gray-600 mb-6">Sign up to hear when job matching goes live.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-80"
          />
          <Button className="bg-electric-violet-600 hover:bg-electric-violet-700" href="#">
            Notify Me
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <StepsSection />
        <FAQSection />
        <MailingListFooter />
      </main>
      <div className="relative z-10 bg-gradient-to-t from-white via-white/80 to-white/0">
        <Footer />
      </div>
    </div>
  )
}
