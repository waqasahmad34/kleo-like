'use client'

import { Pricing } from '@/components/pricing'
import { Statistics } from '@/components/statistics'

// Dummy data for main content
const mainContentData = {
  title: 'Welcome',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-theme-dark flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-light hover:text-default transition-colors duration-300">{mainContentData.title}</h1>
          <p className="text-muted-foreground text-light transition-colors duration-300 max-w-xl mx-auto">{mainContentData.description}</p>
        </section>
      </div>

      <Statistics />
      <Pricing />
    </main>
  )
}
