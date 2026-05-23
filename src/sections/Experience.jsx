import { BriefcaseBusiness } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const roles = [
  {
    company: 'Mirafra Technologies',
    role: 'Software Engineer',
    period: 'Sept 2025 - Present',
    tag: 'SLA + Observability',
    items: [
      'Resolved 12+ critical full stack production incidents before SLA breach, reducing downtime by 30% and eliminating $180K/year in SLA penalties.',
      'Re-architected bulk data pipelines with Sidekiq distributed background jobs, cutting synchronous request time by 80% across 50K+ daily transactions.',
      'Eliminated N+1 query patterns through ActiveRecord optimization and composite indexing, reducing p95 API latency by 40% on 3 high-traffic endpoints.',
      'Designed DataDog APM and AWS CloudWatch dashboards with proactive alerting, cutting mean time to detect by 50% across the service layer.',
      'Led product and QA collaboration across 6 sprints, reducing average incident resolution cycle time by 25%.',
    ],
  },
  {
    company: 'VIT Infotech',
    role: 'Software Engineer',
    period: 'Jul 2022 - Aug 2025',
    tag: 'APIs + LLM Pipelines',
    items: [
      'Designed and shipped 15+ Rails RESTful APIs for 10K+ monthly active users at sub-200 ms average response time.',
      'Integrated OpenAI GPT APIs into an editorial pipeline, automating 40% of manual workflows and compressing content production from 3 days to under 1 day.',
      'Drove 35% database performance improvement through query plan analysis, selective indexing, and eager loading.',
      'Engineered 30+ reusable React.js components across 4 product modules, accelerating UI delivery by 25%.',
      'Led bi-weekly mentorship and structured code reviews, reducing production bug escape rate by 20% in 6 months.',
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
          description="Around 4 years designing scalable APIs, distributed background pipelines, React component systems, production observability, performance optimizations, and LLM-powered workflows."
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
