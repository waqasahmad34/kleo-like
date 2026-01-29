'use client'

import { Button } from '@/components/ui/button'

// Dummy data for header
const headerData = {
  siteName: 'Site Name',
  logoLabel: 'SN',
}

// Dummy data for main content
const mainContentData = {
  title: 'Welcome',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

// Dummy data for footer
const footerData = {
  siteName: 'Site Name',
  tagline: 'Your tagline here.',
  productLinks: [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  companyLinks: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  legalLinks: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Status', href: '#' },
  ],
  socialLinks: [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  copyright: '© 2026 Site Name. All rights reserved.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between" aria-label="Main navigation">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-lg font-bold" aria-label="Logo">
              {headerData.logoLabel}
            </div>
            <a href="/" className="text-xl font-bold text-foreground">
              {headerData.siteName}
            </a>
          </div>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </nav>
      </header>

      {/* Main content - dummy */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">{mainContentData.title}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">{mainContentData.description}</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-lg font-bold">
                  {footerData.siteName.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xl font-bold text-foreground">{footerData.siteName}</span>
              </div>
              <p className="text-sm text-muted-foreground">{footerData.tagline}</p>
            </div>
            <nav aria-label="Product links">
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {footerData.productLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company links">
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {footerData.companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Legal links">
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {footerData.legalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <p>{footerData.copyright}</p>
            <div className="flex gap-6">
              {footerData.socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
