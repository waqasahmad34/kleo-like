import {
  Leaf,
  CalendarHeart,
  BadgePercent,
  Medal,
} from 'lucide-react'

const STATS = [
  {
    icon: CalendarHeart,
    title: '30% more efficient',
    description:
      'Our average time-to-hire for tech roles is 30% lower than the industry average.',
  },
  {
    icon: BadgePercent,
    title: 'Cost saving',
    description:
      'We reduce recruitment costs by up to 40% compared to traditional hiring.',
  },
  {
    icon: Medal,
    title: 'Client satisfaction',
    description:
      'Over 85% of our hires stay beyond 12 months, exceeding industry retention rates.',
  },
] as const

export function Statistics() {
  return (
    <section
      id="statistics"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 rounded-2xl border border-surface-muted bg-surface m-5"
      aria-labelledby="statistics-heading"
    >
      {/* Dark background */}
      <div
        className="absolute inset-0 -z-10 bg-surface"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface-elevated px-4 py-1.5 text-sm font-medium text-text-light"
            aria-hidden
          >
            <Leaf className="size-4" aria-hidden />
            Statistics
          </span>
          <h2
            id="statistics-heading"
            className="mb-4 text-4xl font-bold tracking-tight text-text-light sm:text-5xl"
          >
            More excessive feature
          </h2>
          <p className="mb-12 text-lg text-muted">
            more than others.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <article
                key={stat.title}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="mb-4 flex size-14 items-center justify-center rounded-xl bg-surface-elevated text-text-light"
                  aria-hidden
                >
                  <Icon className="size-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-light">
                  {stat.title}
                </h3>
                <p className="text-muted">
                  {stat.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
