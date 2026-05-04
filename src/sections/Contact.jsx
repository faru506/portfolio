import { BriefcaseBusiness, GitBranch, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SocialLink from '../components/SocialLink'

function Contact() {
  return (
    <section id="contact" className="section-padding transition-colors">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let us build something useful"
          description="Reach out for Rails, React, API, database, monitoring, or LLM workflow work. The form is UI-only for now."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Contact details</h3>
            <div className="mt-6 space-y-4">
              <a
                href="mailto:shaikfarooq2020@gmail.com"
                className="focus-ring flex items-center gap-3 rounded-xl p-3 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <Mail className="text-teal-600 dark:text-teal-300" size={20} />
                shaikfarooq2020@gmail.com
              </a>
              <a
                href="tel:+919290662243"
                className="focus-ring flex items-center gap-3 rounded-xl p-3 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <Phone className="text-teal-600 dark:text-teal-300" size={20} />
                +91 92906 62243
              </a>
              <div className="flex items-center gap-3 rounded-xl p-3 text-slate-700 dark:text-slate-200">
                <MapPin className="text-teal-600 dark:text-teal-300" size={20} />
                Bangalore, India
              </div>
              <a
                href="https://github.com/faru506"
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-xl p-3 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <GitBranch className="text-teal-600 dark:text-teal-300" size={20} />
                github.com/faru506
              </a>
              <a
                href="https://linkedin.com/in/faru506"
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-xl p-3 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <BriefcaseBusiness className="text-teal-600 dark:text-teal-300" size={20} />
                linkedin.com/in/faru506
              </a>
            </div>

            <div className="mt-7 flex gap-3">
              <SocialLink href="https://github.com/faru506" icon={GitBranch} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/faru506" icon={BriefcaseBusiness} label="LinkedIn" />
              <SocialLink href="mailto:shaikfarooq2020@gmail.com" icon={Mail} label="Email" />
            </div>
          </div>

          <form className="panel rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="focus-ring mt-2 w-full rounded-xl border border-white/55 bg-white/55 px-4 py-3 text-slate-900 backdrop-blur-xl transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="focus-ring mt-2 w-full rounded-xl border border-white/55 bg-white/55 px-4 py-3 text-slate-900 backdrop-blur-xl transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                rows="6"
                placeholder="Tell me about your project"
                className="focus-ring mt-2 w-full resize-none rounded-xl border border-white/55 bg-white/55 px-4 py-3 text-slate-900 backdrop-blur-xl transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </label>
            <button
              type="button"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-600 sm:w-auto dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
