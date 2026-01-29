import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-lg font-bold" aria-hidden>
            SN
          </div>
          <span className="text-xl font-bold">Site Name</span>
        </Link>
        <Button variant="outline" size="sm" asChild>
          <Link href={"/"}>Sign In</Link>
        </Button>
      </nav>
    </header>
  )
}
