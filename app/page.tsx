import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Writing } from '@/components/writing'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
