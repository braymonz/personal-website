'use client'

import { ArrowDown } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh scroll-mt-24 items-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6">
        <p
          className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground opacity-0"
          style={{ animation: 'fadeUp 0.6s 0.05s forwards' }}
        >
          {profile.role}
        </p>

        <h1
          className="text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.04em] opacity-0 sm:text-8xl"
          style={{ animation: 'fadeUp 0.7s 0.15s forwards' }}
        >
          {profile.name.split(' ').slice(0, 2).join(' ')}
          <br />
          <span className="text-muted-foreground">
            {profile.name.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        <p
          className="mt-8 max-w-lg text-pretty text-xl font-medium leading-snug tracking-tight text-muted-foreground opacity-0"
          style={{ animation: 'fadeUp 0.7s 0.3s forwards' }}
        >
          Software engineer crafting polished, reliable software across cloud,
          full-stack, and DevOps.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-4 opacity-0"
          style={{ animation: 'fadeUp 0.7s 0.45s forwards' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
          >
            View experience <ArrowDown className="size-4" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="fadeUp"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  )
}
