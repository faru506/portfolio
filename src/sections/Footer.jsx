import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import SocialLink from '../components/SocialLink'

function Footer() {
  return (
    <footer className="border-t border-white/55 bg-white/35 py-8 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/45">
      <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <p className="text-center text-sm font-semibold text-slate-700 sm:text-left dark:text-slate-200">
            Built with React & Tailwind
          </p>
          <p className="mt-1 text-center text-sm text-slate-500 sm:text-left dark:text-slate-400">
            Copyright © {new Date().getFullYear()} Farooq Shaik. All rights reserved.
          </p>
        </div>
        <div className="flex gap-3">
          <SocialLink href="https://github.com/faru506" icon={GitBranch} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/faru506" icon={BriefcaseBusiness} label="LinkedIn" />
          <SocialLink href="mailto:shaikfarooq2020@gmail.com" icon={Mail} label="Email" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
