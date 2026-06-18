import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-32">
      <Reveal>
        <p className="mb-14 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Skills
        </p>
      </Reveal>

      <div className="grid gap-12 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 90}>
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {group.label}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-secondary-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
