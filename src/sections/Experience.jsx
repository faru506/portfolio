import { BriefcaseBusiness } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const roles = [
  {
    company: 'Mirafra Technologies',
    role: 'Software Engineer',
    period: 'Sept 2025 - Present',
    tag: 'Reliability + Performance',
    items: [
      'Investigated production 500 errors from logs, traces, and failing request paths, then shipped fixes that improved application reliability.',
      'Moved bulk CSV processing into Sidekiq background jobs, reducing request processing time by 80% and preventing long-running web requests.',
      'Tuned ActiveRecord queries with better joins, eager loading, and database indexes to improve API response performance.',
      'Integrated DataDog monitoring and structured logging so production issues could be detected, traced, and resolved faster.',
    ],
  },
  {
    company: 'VIT Infotech',
    role: 'Software Engineer',
    period: 'Jul 2022 - Aug 2025',
    tag: 'Rails + React + LLMs',
    items: [
      'Designed, implemented, and deployed 15+ RESTful APIs in Ruby on Rails for authentication, workflow automation, and CMS operations.',
      'Integrated ChatGPT, Claude, Gemini, and Grok APIs into editorial workflows for AI-assisted content generation and suggestions.',
      'Improved query performance with indexing and data-access optimization for systems serving 10k+ monthly users.',
      'Built reusable React.js components and connected them with backend APIs to deliver consistent full stack product features.',
    ],
  },
  {
    company: 'VIT Infotech',
    role: 'Software Engineer Intern',
    period: 'Mar 2022 - Jun 2022',
    tag: 'Foundation',
    items: [
      'Built authentication screens and reusable UI modules in React.js with attention to usability and responsive behavior.',
      'Contributed to Ruby on Rails backend features, API integrations, and request/response validation.',
      'Supported debugging, manual testing, and issue verification across frontend and backend modules before release.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section-padding bg-white/30 transition-colors dark:bg-slate-950/20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Experience timeline"
          description="3.5+ years of full stack work across production debugging, API delivery, database performance, background processing, LLM integrations, and React UI development."
        />

        <div className="mx-auto max-w-5xl space-y-5">
          {roles.map((job) => (
            <article key={`${job.company}-${job.period}`} className="panel rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      {job.role} - {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {job.period}
                    </p>
                  </div>
                </div>
                <span className="glass-pill rounded-full px-4 py-2 text-sm font-bold text-teal-700 dark:text-teal-200">
                  {job.tag}
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {job.items.map((item) => (
                  <div key={item} className="rounded-xl border border-white/50 bg-white/42 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
