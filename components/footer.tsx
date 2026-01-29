'use client'

import Link from 'next/link'
import {
  ArrowRight,
  
  ExternalLinkIcon,
  
  Facebook,
  Github,
  Linkedin,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { sitename } from '@/lib/site'

const PAGES_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Career', href: '/#career' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Features', href: '/#features' },
] as const

const RESOURCES_LINKS = [
  { label: 'Blog', href: '/blog' },
  { label: 'Features', href: '/#features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Integrations Single', href: '/integrations/single' },
] as const

const SOCIAL_LINKS = [
  { label: 'Linkedin', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Github', href: 'https://github.com', icon: 'github' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  
] as const

const SOCIAL_ICONS = {
  facebook: Facebook,
  github: Github,
  linkedin: Linkedin,
} as const

function LinkColumn({
  title,
  links,
  ariaLabel,
}: {
  title: string
  links: readonly { label: string; href: string }[]
  ariaLabel: string
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-text-light">{title}</h3>
      <nav aria-label={ariaLabel}>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-text-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export function Footer() {
  function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Hook up to your newsletter API or service
  }

  return (
    <footer
      className={cn(
        'relative m-2 sm:m-4 md:m-6 rounded-2xl px-6 py-12 sm:px-8 lg:px-12',
        'bg-surface-muted backdrop-blur-sm',
        'border border-default shadow-lg shadow-black/20',
      )}
      role="contentinfo"
    >
      {/* Subtle glow effect - matches navbar */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-accent/10 via-transparent to-accent/10 opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        {/* Main content: newsletter | pages & resources | socials */}
        <div
          className={cn(
            'grid gap-10',
            'md:grid-cols-3 md:gap-8',
            'lg:grid-cols-[1fr_auto_auto] lg:gap-16',
          )}
        >
          {/* Newsletter: full width on tablet, left column on desktop */}
          <div className="max-w-md md:col-span-3 md:max-w-none lg:col-span-1 lg:max-w-md">
            <h3 className="mb-4 text-4xl font-semibold text-text-light">
              Join Our Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div
                className={cn(
                  'flex gap-0 overflow-hidden rounded-2xl',
                  'border border-surface-muted bg-surface',
                  'focus-within:border-accent focus-within:shadow-[0_0_18px_var(--theme-accent-glow)]',
                  'transition-all duration-200',
                )}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm text-text-light placeholder:text-muted focus:outline-none"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-surface-elevated px-5 py-3.5 text-text-light transition-colors hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-inset"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} aria-hidden />
                </button>
              </div>
              <p className="text-xs text-muted">
                * Will send you weekly updates for your better business management.
              </p>
            </form>
          </div>

          {/* Pages & Resources: separate columns on tablet, grouped on desktop */}
          <div className="flex flex-col gap-12 md:contents lg:flex lg:flex-row lg:gap-16">
            <LinkColumn title="Pages" links={PAGES_LINKS} ariaLabel="Pages" />
            <LinkColumn title="Resources" links={RESOURCES_LINKS} ariaLabel="Resources" />
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-light">Socials</h3>
            <ul className="space-y-3 text-text-light">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.icon]
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex items-center max-w-[150px] gap-2 rounded-lg lg:px-2 py-2 text-sm text-text-light',
                        'transition-all duration-200',
                        'hover:text-accent hover:shadow-[0_0_16px_var(--theme-accent-glow)]',
                      )}
                    >
                      <Icon className="size-5 shrink-0" aria-hidden />
                    <span className="flex-1">{link.label}</span>
                    <ExternalLinkIcon size={14} className="shrink-0 opacity-70" aria-hidden />
                  </Link>
                </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 border-t border-surface-muted pt-8">
          <p className="text-center text-sm text-muted">
            Copyright © 2026 {sitename}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
