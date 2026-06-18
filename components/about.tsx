import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-32">
      <Reveal>
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          About
        </p>
      </Reveal>
      <Reveal delay={80}>
        <p className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
          Five years building enterprise software for multinational teams —
          where engineering excellence is the only standard.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-muted-foreground">
          I care about the craft behind the code: clean architecture, automated
          quality, and developer experience that scales across whole
          organizations.
        </p>
      </Reveal>
    </section>
  )
}
