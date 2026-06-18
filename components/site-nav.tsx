'use client'

import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const links = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function SiteNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Desktop: vertical liquid-glass rail */}
      <nav
        aria-label="Primary"
        className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
      >
        <div className="glass flex flex-col items-stretch gap-1 rounded-full p-2">
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={link.id === 'top' ? '#top' : `#${link.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="group relative flex items-center"
              >
                <span
                  className={cn(
                    'flex size-9 items-center justify-center rounded-full text-[11px] font-medium uppercase tracking-wide transition-colors',
                    isActive
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'size-1.5 rounded-full transition-all duration-300',
                      isActive
                        ? 'bg-accent scale-100'
                        : 'bg-muted-foreground/50 scale-75 group-hover:bg-foreground',
                    )}
                  />
                </span>
                {/* Hover label */}
                <span className="glass pointer-events-none absolute left-12 whitespace-nowrap rounded-full px-3 py-1 text-xs text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {link.label}
                </span>
              </a>
            )
          })}
          <span className="mx-auto my-1 h-px w-5 bg-border" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile / tablet: bottom liquid-glass pill */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-3 lg:hidden"
      >
        <div className="glass flex max-w-[calc(100vw-1.5rem)] items-center gap-0.5 rounded-full p-1 min-[420px]:gap-1 min-[420px]:p-1.5 sm:gap-1.5 sm:p-2 md:gap-2 md:p-2.5">
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={link.id === 'top' ? '#top' : `#${link.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'rounded-full px-2 py-1.5 text-[11px] font-medium transition-colors min-[420px]:px-3 min-[420px]:text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5 md:text-base',
                  isActive
                    ? 'bg-accent/15 text-accent'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </a>
            )
          })}
          <span className="mx-0.5 h-4 w-px bg-border min-[420px]:mx-1 sm:h-5 md:mx-1.5 md:h-6" />
          <ThemeToggle compact />
        </div>
      </nav>
    </>
  )
}
