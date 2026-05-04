import { BriefcaseBusiness } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const responsibilities = [
  'Built and maintained REST APIs for production web applications',
  'Optimized database queries and improved data access patterns',
  'Developed reusable React UI components for responsive product screens',
  'Collaborated with teams through Git, GitHub, reviews, and delivery planning',
]

function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 transition-colors dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Software Engineer"
          description="3.5+ years working across application development, API design, database performance, and user interface delivery."
        />

        <div className="panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                <BriefcaseBusiness size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Software Engineer
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Full Stack Development · 3.5+ years
                </p>
              </div>
            </div>
            <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700 dark:bg-teal-950 dark:text-teal-200">
              Rails + React
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {responsibilities.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
