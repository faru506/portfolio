import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const strengths = [
  'Clean, maintainable full stack architecture',
  'REST API design and backend performance tuning',
  'Responsive React interfaces with reusable components',
  'Database optimization across PostgreSQL and MongoDB',
]

function About() {
  return (
    <section id="about" className="section-padding bg-white transition-colors dark:bg-slate-950">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Practical engineering for real business workflows"
          description="I focus on shipping reliable features across the backend and frontend, with a strong bias toward readable code, clear APIs, and interfaces that work well on every screen."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
              Experience
            </p>
            <div className="mt-5 flex items-end gap-3">
              <span className="text-6xl font-black tracking-tight text-slate-950 dark:text-white">
                3.5+
              </span>
              <span className="pb-2 text-lg font-bold text-slate-600 dark:text-slate-300">
                years
              </span>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
              Building scalable web applications with Ruby on Rails, ReactJS,
              PostgreSQL, MongoDB, Git, GitHub, and REST APIs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div key={strength} className="panel rounded-2xl p-5">
                <CheckCircle2 className="text-teal-600 dark:text-teal-300" size={22} />
                <p className="mt-4 font-semibold leading-6 text-slate-800 dark:text-slate-100">
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
