import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const strengths = [
  'Distributed Rails systems handling 50K+ daily transactions with 80% latency reduction',
  'Production observability with DataDog APM, AWS CloudWatch dashboards, and proactive alerting',
  'API architecture across REST, GraphQL, microservices, RBAC, JWT auth, and Redis-backed caching',
  'Technical mentorship, code review, stakeholder communication, and Agile delivery ownership',
]

function About() {
  return (
    <section id="about" className="section-padding transition-colors">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Full stack engineering with systems ownership"
          description="I work across Rails, React.js, microservices, API architecture, databases, AWS, observability, testing, and LLM-assisted workflows. My focus is production-ready delivery: fast APIs, stable systems, measurable business impact, and polished interfaces."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
              Experience
            </p>
            <div className="mt-5 flex items-end gap-3">
              <span className="text-6xl font-black tracking-tight text-slate-950 dark:text-white">
                4
              </span>
              <span className="pb-2 text-lg font-bold text-slate-600 dark:text-slate-300">
                years
              </span>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
              Building scalable applications with Ruby on Rails, React.js, Redux,
              PostgreSQL, MongoDB, MySQL, Redis, Sidekiq, AWS, Docker, DataDog,
              CI/CD, RSpec, RESTful APIs, GraphQL, and LLM-powered pipelines.
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
