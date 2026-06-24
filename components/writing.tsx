import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { writings, writingsIntro } from '@/lib/portfolio-data'

export function Writing() {
  return (
    <section
      id="writing"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-32"
    >
      <Reveal>
        <p className="mb-14 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Writing
        </p>
      </Reveal>

      <Reveal delay={60}>
        <p className="mb-12 max-w-xl leading-relaxed text-muted-foreground">
          {writingsIntro}
        </p>
      </Reveal>

      <div className="flex flex-col">
        {writings.map((entry, i) => (
          <Reveal key={entry.url} delay={120 + i * 90}>
            <article className="group grid grid-cols-1 gap-2 border-t border-border py-8 sm:grid-cols-[7rem_1fr] sm:gap-8">
              <p className="font-mono text-sm font-medium text-muted-foreground">
                {entry.publication ?? 'Publication'}
              </p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {entry.title}
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </h3>
                {entry.date && (
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {entry.date}
                  </p>
                )}
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                  {entry.excerpt}
                </p>
                {entry.topics && entry.topics.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {entry.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-secondary-foreground"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
