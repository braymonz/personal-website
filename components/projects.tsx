import { ArrowUpRight, Code2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-32">
      <Reveal>
        <p className="mb-14 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Projects
        </p>
      </Reveal>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 90}>
            <div className="group grid grid-cols-1 gap-2 border-t border-border py-8 sm:grid-cols-[7rem_1fr] sm:gap-8">
              <p className="font-mono text-sm font-medium text-muted-foreground">
                {project.role ?? 'Project'}
              </p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {project.name}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  {project.tagline}
                </p>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
                  >
                    <Code2 className="size-3.5" aria-hidden="true" />
                    View source
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
