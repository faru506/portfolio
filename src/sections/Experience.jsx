import { BriefcaseBusiness } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const roles = [
  {
    company: 'Mirafra Technologies',
    role: 'Software Engineer',
    period: 'Sept 2025 - Present',
    tag: 'Reliability + Performance',
    items: [
      'Diagnosed and resolved frontend and backend production issues, reducing system downtime by 30%.',
      'Developed and enhanced React.js interfaces to improve user experience, responsiveness, and full stack feature delivery.',
      'Moved bulk CSV processing into Sidekiq background jobs, reducing request processing time by 80% and preventing long-running web requests.',
      'Optimized ActiveRecord queries and indexes, reducing API response time by 40%.',
      'Integrated DataDog monitoring and collaborated across teams, reducing issue detection time by 50%.',
    ],
  },
  {
    company: 'VIT Infotech',
    role: 'Software Engineer',
    period: 'Jul 2022 - Aug 2025',
    tag: 'Rails + React + LLMs',
    items: [
      'Designed and developed 15+ RESTful APIs in Ruby on Rails for scalable backend services and product workflows.',
      'Built reusable responsive React.js components, improving UI consistency and development speed.',
      'Integrated LLM APIs for AI-driven content generation, reducing manual effort by 40%.',
      'Optimized database queries and indexing, improving performance by 35% for 10k+ monthly users.',
      'Collaborated with cross-functional teams and code reviews, reducing production bugs by 20%.',
    ],
  },
  {
    company: 'VIT Infotech',
    role: 'Software Engineer Intern',
    period: 'Mar 2022 - Jun 2022',
    tag: 'Foundation',
    items: [
      'Developed React.js UI modules and assisted Rails backend development for API integrations.',
      'Participated in debugging, testing, and feature implementation across frontend and backend modules.',
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
          description="3.5+ years of full stack work across scalable API design, responsive React interfaces, performance optimization, production debugging, testing, and LLM integrations."
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
