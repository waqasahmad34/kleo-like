'use client'

import { useState, useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type BillingPeriod = 'monthly' | 'yearly'

const COUNT_INTERVAL = 12

function useCountUp(target: number) {
  const [displayValue, setDisplayValue] = useState(target)
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  )
  const targetRef = useRef(target)
  const displayValueRef = useRef(displayValue)

  useEffect(() => {
    displayValueRef.current = displayValue
  }, [displayValue])

  useEffect(() => {
    targetRef.current = target
    const current = displayValueRef.current
    if (target === current) return

    const diff = target - current
    const absDiff = Math.abs(diff)
    // Step by 1 for small ranges (see each number: 49→50→51→52), larger steps for big jumps
    const step = absDiff <= 100 ? 1 : Math.max(1, Math.ceil(absDiff / 25))
    const direction = diff > 0 ? 1 : -1
    const stepValue = step * direction

    intervalRef.current = setInterval(() => {
      setDisplayValue((prev) => {
        const currentTarget = targetRef.current
        const next = prev + stepValue
        const reached =
          (direction > 0 && next >= currentTarget) ||
          (direction < 0 && next <= currentTarget)
        if (reached && intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = undefined
        }
        return reached ? currentTarget : next
      })
    }, COUNT_INTERVAL)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = undefined
      }
    }
  }, [target])

  return displayValue
}

function PricingCard({
  plan,
  billingPeriod,
}: {
  plan: (typeof PLANS)[number]
  billingPeriod: BillingPeriod
}) {
  const targetPrice =
    billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  const displayPrice = useCountUp(targetPrice)

  return (
    <article
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 transition-all ',
        plan.highlighted
          ? 'border-accent bg-surface-elevated/80 shadow-lg shadow-accent/10'
          : 'border-surface-muted bg-surface-elevated/50',
      )}
    >
      <h3 className="mb-2 text-xl font-semibold text-text-light">
        {plan.name}
      </h3>
      <div className="mb-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-text-light">
          ${displayPrice}
        </span>
        <span className="text-muted">
          /{billingPeriod === 'monthly' ? 'month' : 'year'}
        </span>
      </div>
      <p className="mb-6 text-sm text-muted">{plan.description}</p>

      <div className="mb-6 flex-1">
        <p className="mb-3 text-sm font-medium text-text-light">
          Features Included:
        </p>
        <ul className="space-y-2.5" role="list">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted"
            >
              <Check
                className="mt-0.5 size-5 shrink-0 text-accent"
                aria-hidden
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={cn(
          'w-full rounded-xl py-3.5 text-sm font-medium text-text-light transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-surface',
          plan.highlighted
            ? 'bg-accent hover:bg-accent-hover'
            : 'border border-surface-muted bg-surface-muted/50 hover:border-muted hover:bg-surface-muted',
        )}
      >
        Get Started
      </button>
    </article>
  )
}

const PLANS = [
  {
    id: 'essential',
    name: '+ Essential',
    monthlyPrice: 260,
    yearlyPrice: 2600,
    description:
      'Designed for growing businesses with more advanced needs.',
    features: [
      'Centralized employee database',
      'Clock-in/clock-out functionality',
      'Applicant tracking system (ATS)',
      'Learning management system (LMS)',
      'Performance management tools',
      'Leave & attendance management',
      'Payroll processing',
      'Document management',
      'Team collaboration tools',
      'Basic reporting & dashboards',
    ],
    highlighted: false,
  },
  {
    id: 'premium',
    name: '+ Premium',
    monthlyPrice: 420,
    yearlyPrice: 2500,
    description:
      'Advanced features for established businesses seeking growth',
    features: [
      'All Essential features',
      'Advanced reporting and analytics',
      'Custom workflows & automation',
      'Priority support',
      'API access & integrations',
      'Custom branding',
      'Advanced security controls',
      'Dedicated account manager',
      'Multi-location support',
      'Compliance management',
    ],
    highlighted: true,
  },
] as const

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')

  return (
    <section
      id="pricing"
      className="relative overflow-hidden m-2 sm:m-4 md:m-6 px-4 py-16 sm:px-6 lg:px-8 rounded-2xl border border-default bg-surface"
      aria-labelledby="pricing-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-[#0f0f1a] via-[#12122a] to-[#0a0a14]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-text-light"
            aria-hidden
          >
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="mb-4 text-4xl font-bold tracking-tight text-text-light sm:text-5xl"
          >
            All the power. one transparent price.
          </h2>
          <p className="mb-8 text-lg text-muted">
            Choose the plan that fits your goals — whether you&apos;re getting
            started or scaling fast. All plans come with full feature access.
          </p>

          {/* Billing toggle */}
          <div className="mb-12 flex justify-center">
            <div
              role="group"
              aria-label="Billing period"
              className="relative grid w-48 grid-cols-2 rounded-full border border-surface-muted bg-surface-elevated p-1"
            >
              {/* Sliding indicator */}
              <span
                className={cn(
                  'absolute top-1 h-[calc(100%-8px)] rounded-full bg-text-light shadow-sm transition-all duration-200',
                  billingPeriod === 'monthly' ? 'left-1 w-[calc(50%-8px)]' : 'left-[calc(50%+4px)] w-[calc(50%-8px)]',
                )}
                aria-hidden
              />
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={cn(
                  'relative z-10 rounded-full py-2.5 text-sm font-medium transition-colors',
                  billingPeriod === 'monthly'
                    ? 'text-text-dark'
                    : 'text-muted hover:text-text-light',
                )}
                aria-pressed={billingPeriod === 'monthly'}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={cn(
                  'relative z-10 rounded-full py-2.5 text-sm font-medium transition-colors',
                  billingPeriod === 'yearly'
                    ? 'text-text-dark'
                    : 'text-muted hover:text-text-light',
                )}
                aria-pressed={billingPeriod === 'yearly'}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
