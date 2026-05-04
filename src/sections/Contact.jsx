import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SocialLink from '../components/SocialLink'

const contactActions = [
  {
    label: 'Email me',
    value: 'shaikfarooq2020@gmail.com',
    href: 'mailto:shaikfarooq2020@gmail.com?subject=Portfolio%20Enquiry&body=Hi%20Farooq%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect.',
    icon: Mail,
  },
  {
    label: 'Call',
    value: '+91 92906 62243',
    href: 'tel:+919290662243',
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'github.com/faru506',
    href: 'https://github.com/faru506',
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/faru506',
    href: 'https://linkedin.com/in/faru506',
    icon: BriefcaseBusiness,
  },
]

function Contact() {
  return (
    <section id="contact" className="section-padding transition-colors">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let us build something useful"
          description="Reach out directly through the working links below for Rails, React, API, database, monitoring, or LLM workflow work."
        />

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="panel shine-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-300/10" />
            <h3 className="relative text-2xl font-black tracking-tight text-slate-950 dark:text-white">
              Available for full stack work
            </h3>
            <p className="relative mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              I can help with Rails APIs, React UI, database performance, Sidekiq jobs,
              observability, and LLM integrations.
            </p>
            <div className="relative mt-6 flex items-center gap-3 rounded-2xl border border-white/55 bg-white/42 p-4 text-slate-700 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <MapPin className="text-teal-600 dark:text-teal-300" size={20} />
              Bangalore, India
            </div>
            <div className="relative mt-7 flex gap-3">
              <SocialLink href="https://github.com/faru506" icon={GitBranch} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/faru506" icon={BriefcaseBusiness} label="LinkedIn" />
              <SocialLink href="mailto:shaikfarooq2020@gmail.com" icon={Mail} label="Email" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactActions.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="panel shine-card group relative overflow-hidden rounded-3xl p-5 hover:-translate-y-2 hover:border-teal-200 hover:shadow-[0_26px_70px_rgba(20,184,166,0.14)] dark:hover:border-teal-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg shadow-teal-900/15 dark:bg-teal-300 dark:text-slate-950">
                    <Icon size={21} />
                  </div>
                  <ArrowUpRight
                    className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-600 dark:group-hover:text-teal-300"
                    size={20}
                  />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">
                  {label}
                </p>
                <p className="mt-2 break-words text-base font-bold text-slate-900 dark:text-white">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
