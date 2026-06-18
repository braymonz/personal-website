import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

const socials = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: profile.githubLabel, href: profile.github },
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
  { label: 'Website', value: profile.websiteLabel, href: profile.website },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-40 pt-32"
    >
      <Reveal>
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Contact
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
          Let&apos;s build something worth shipping.
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          {profile.email}
          <ArrowUpRight className="size-4" />
        </a>
      </Reveal>

      <Reveal delay={220}>
        <ul className="mt-16 flex flex-col">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors hover:border-foreground"
              >
                <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </span>
                <span className="flex min-w-0 items-center gap-2">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {s.value}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <footer className="mt-20 flex flex-col items-start justify-between gap-2 text-xs font-medium text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </footer>
    </section>
  )
}
