import { Reveal } from '@/components/reveal'
import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-32">
      <Reveal>
        <p className="mb-14 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Experience
        </p>
      </Reveal>

      <div className="flex flex-col">
        {experiences.map((job, i) => (
          <Reveal key={job.company} delay={i * 90}>
            <div className="group grid grid-cols-1 gap-2 border-t border-border py-8 sm:grid-cols-[7rem_1fr] sm:gap-8">
              <p className="font-mono text-sm font-medium text-muted-foreground">
                {job.period}
              </p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {job.role}
                  <span className="text-muted-foreground">
                    {' · '}
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </span>
                </h3>
                <p className="mt-3 max-w-xl font-medium leading-relaxed text-muted-foreground">
                  {job.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
