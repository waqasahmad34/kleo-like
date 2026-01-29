'use client'




// Dummy data for main content
const mainContentData = {
  title: 'Welcome',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b0f] flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">{mainContentData.title}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">{mainContentData.description}</p>
        </section>
      </div>

    
    </main>
  )
}
