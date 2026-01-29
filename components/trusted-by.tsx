const BRANDS = [
  {
    id: 1,
    name: 'Logoipsum',
    color: '#6670FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="6" r="1.5" />
        <circle cx="12" cy="18" r="1.5" />
        <circle cx="6" cy="12" r="1.5" />
        <circle cx="18" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Logoipsum',
    color: '#f97316',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 shrink-0">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#ea580c" />
        <path d="M2 17l10 5 10-5" fill="#f97316" />
        <path d="M2 12l10 5 10-5" fill="#fb923c" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Logoipsum',
    color: '#fffefe',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Logoipsum',
    color: '#73b1ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.9 3.83L12 12l-6.9-3.99L12 4.18z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Logoipsum',
    color: '#ef4444',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
        <path d="M12 2L2 22h6l4-8 4 8h6L12 2z" />
      </svg>
    ),
  },
] as const

type TrustedByProps = {
  count?: string
}

export function TrustedBy({ count = '3200+' }: TrustedByProps) {
  return (
    <section
      id="trusted-by"
      className="overflow-hidden m-2 sm:m-4 md:m-6 px-4 py-12 sm:px-6 lg:px-8 rounded-2xl border border-default bg-surface"
      aria-label="Trusted by brands"
    >
      <div className="">
        <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto sm:p-6 sm:flex-row sm:justify-between sm:gap-12 lg:p-8">
          {/* Left: Trust text */}
          <p className="shrink-0 whitespace-nowrap text-center w-full sm:w-auto sm:text-lg text-xs font-medium text-text-light sm:text-left">
            Trusted by {count} brands worldwide
          </p>

          {/* Right: Logo carousel */}
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="flex animate-[marquee_25s_linear_infinite] gap-4">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <div
                  key={`${brand.id}-${i}`}
                  className="flex shrink-0 items-center gap-2 rounded-xl border border-surface-muted bg-surface-elevated px-4 py-3 shadow-sm"
                >
                  <span style={{ color: brand.color }}>{brand.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
