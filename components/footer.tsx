import Image from "next/image";
import Link from "next/link";

const PRODUCT_LINKS = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

const COMPANY_LINKS = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Status", href: "#" },
] as const;

const SOCIAL_LINKS = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Contact", href: "#" },
] as const;

function LinkList({
  links,
  ariaLabel,
}: {
  links: readonly { label: string; href: string }[];
  ariaLabel: string;
}) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className="space-y-3 text-muted-foreground text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t text-light border-border/50 bg-muted/30"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 text-foreground w-fit"
            >
              <Image
                src="/devgent.svg"
                alt="Devgent Logo"
                width={147}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground">Your tagline here.</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <LinkList links={PRODUCT_LINKS} ariaLabel="Product links" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <LinkList links={COMPANY_LINKS} ariaLabel="Company links" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <LinkList links={LEGAL_LINKS} ariaLabel="Legal links" />
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>© 2026 Site Name. All rights reserved.</p>
          <nav aria-label="Social links" className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
