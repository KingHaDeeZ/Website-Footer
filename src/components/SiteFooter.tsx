import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { TechStackLogo } from './TechStackLogo';
import {
  ThemeSwitcher,
  type ResolvedTheme,
  type ThemePreference,
} from './ThemeSwitcher';

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLinkItem[];
}

const SITE_ORIGIN = 'https://techstacksydney.com';

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Websites',
    links: [
      { label: 'Modern Languages', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'Fast Languages', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'Lightweight AI', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'All Website Builds', href: `${SITE_ORIGIN}/#what-we-build` },
    ],
  },
  {
    heading: 'Automations',
    links: [
      { label: 'Customer Management', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'API Connections', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'Webhooks', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'No-Code Workflows', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'Custom Scripts', href: `${SITE_ORIGIN}/#what-we-build` },
    ],
  },
  {
    heading: 'Applications',
    links: [
      { label: 'Web Apps', href: `${SITE_ORIGIN}/apps/web-apps` },
      { label: 'Mobile Apps', href: `${SITE_ORIGIN}/apps/mobile-apps` },
      { label: 'Mobile Showcase', href: `${SITE_ORIGIN}/#mobile-apps` },
    ],
  },
  {
    heading: 'Studio & Process',
    links: [
      { label: 'Overview', href: `${SITE_ORIGIN}/` },
      { label: 'How We Build', href: `${SITE_ORIGIN}/#process-journey` },
      { label: 'What We Build', href: `${SITE_ORIGIN}/#what-we-build` },
      { label: 'Support After Launch', href: `${SITE_ORIGIN}/#support-after-launch` },
    ],
  },
];

interface SiteFooterProps {
  themePreference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  onThemeChange: (next: ThemePreference) => void;
}

export function SiteFooter({
  themePreference,
  resolvedTheme,
  onThemeChange,
}: SiteFooterProps) {
  return (
    <footer
      aria-label="TechStack Sydney footer"
      className="relative w-full overflow-hidden border-t border-[#e4e8ef] bg-white text-[#0d1524] transition-colors duration-200 dark:border-[#1e293b] dark:bg-[#111827] dark:text-[#f1f5f9]"
    >
      {/* Subtle signature ambient grid & corner gradients matching techstacksydney.com */}
      <div
        aria-hidden="true"
        className="tss-dot-backdrop pointer-events-none absolute inset-0 opacity-45 dark:opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'var(--tss-glow-left)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-28 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'var(--tss-glow-right)' }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pt-12 pb-8 sm:px-8 lg:px-10 lg:pt-16 lg:pb-10">
        {/* Top Editorial Band: Studio Identity + Direct Conversation Action */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#e4e8ef] pb-10 dark:border-[#1e293b] lg:flex-row lg:items-end lg:pb-12">
          <div className="max-w-xl">
            <a
              href={`${SITE_ORIGIN}/`}
              className="tss-heading group inline-flex items-center gap-2.5 py-1 text-[1.125rem] font-bold tracking-[-0.03em] text-[#0d1524] transition-colors duration-150 hover:text-[#4338ca] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-[#f1f5f9] dark:hover:text-[#a5b4fc] dark:focus-visible:outline-indigo-400 whitespace-nowrap"
            >
              <TechStackLogo
                size={26}
                className="shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <span>TechStack Sydney</span>
            </a>

            <p className="tss-body mt-1.5 text-[13px] font-medium tracking-[0.01em] text-[#4338ca] dark:text-[#a5b4fc]">
              Dream, Code, Deploy.
            </p>

            <p className="mt-3 text-[15px] leading-[1.65] text-[#4b5565] dark:text-[#cbd5e1]">
              Plain-English software partner for modern websites, workflow automations,
              web applications, and mobile apps.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#475569] dark:text-[#94a3b8]">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <MapPin className="h-3.5 w-3.5 text-[#4f46e5] dark:text-[#a5b4fc]" aria-hidden="true" />
                Sydney, Australia (AEST)
              </span>
              <span aria-hidden="true" className="text-[#cbd5e1] dark:text-[#334155]">
                ·
              </span>
              <a
                href="mailto:workwithus@techstacksydney.com"
                className="inline-flex items-center gap-1.5 font-medium text-[#0d1524] transition-colors duration-150 hover:text-[#4338ca] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-[#f1f5f9] dark:hover:text-[#a5b4fc] dark:focus-visible:outline-indigo-400"
              >
                <Mail className="h-3.5 w-3.5 text-[#4f46e5] dark:text-[#a5b4fc]" aria-hidden="true" />
                <span>workwithus@techstacksydney.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <a
              href="mailto:workwithus@techstacksydney.com?subject=Project%20Enquiry%20%E2%80%94%20TechStack%20Sydney"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] px-5 py-2.5 text-sm font-semibold text-white transition-[transform,filter,box-shadow] duration-150 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400 whitespace-nowrap shrink-0"
              style={{
                background: 'linear-gradient(135deg, var(--tss-accent-violet), var(--tss-accent-indigo))',
                boxShadow: 'var(--tss-cta-shadow)',
              }}
            >
              <span>Start the conversation</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
            <p className="text-xs text-[#475569] dark:text-[#94a3b8]">
              Fixed-price scoping · Direct Sydney engineering
            </p>
          </div>
        </div>

        {/* Navigation Link Columns */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-12"
        >
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="min-w-0">
              <h2 className="tss-heading text-[14px] font-semibold tracking-[-0.01em] text-[#4338ca] dark:text-[#a5b4fc]">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-1">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group -mx-2.5 flex min-h-[40px] items-center justify-between gap-3 rounded-lg px-2.5 py-2 transition-colors duration-150 hover:bg-[#4f46e5]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:bg-[#6366f1]/10 dark:focus-visible:outline-indigo-400"
                    >
                      <span className="text-[14px] font-medium text-[#0d1524] transition-colors duration-150 group-hover:text-[#4338ca] dark:text-[#f1f5f9] dark:group-hover:text-[#a5b4fc] whitespace-nowrap truncate">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-[#4338ca] opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 dark:text-[#a5b4fc]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom Utility Bar: Copyright + 3-Way Theme Selector (Light / System / Dark) */}
        <div className="flex flex-col items-start justify-between gap-5 border-t border-[#e4e8ef] pt-7 dark:border-[#1e293b] md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-[#475569] dark:text-[#94a3b8]">
            <span>&copy; 2026 TechStack Sydney</span>
            <span aria-hidden="true" className="text-[#cbd5e1] dark:text-[#334155]">
              ·
            </span>
            <span>Custom websites, automations &amp; applications</span>
            <span aria-hidden="true" className="text-[#cbd5e1] dark:text-[#334155]">
              ·
            </span>
            <a
              href={`${SITE_ORIGIN}/`}
              className="transition-colors duration-150 hover:text-[#0d1524] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-[#f1f5f9] dark:focus-visible:outline-indigo-400"
            >
              techstacksydney.com
            </a>
          </div>

          <ThemeSwitcher
            preference={themePreference}
            resolvedTheme={resolvedTheme}
            onChange={onThemeChange}
          />
        </div>
      </div>
    </footer>
  );
}
