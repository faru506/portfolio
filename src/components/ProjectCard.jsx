import { ExternalLink, GitBranch } from 'lucide-react'

function ProjectCard({ title, description, features, tech }) {
  return (
    <article className="panel group flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 dark:hover:border-teal-800">
      <div className="mb-5 h-2 w-16 rounded-full bg-teal-500 transition group-hover:w-24 dark:bg-teal-300" />
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-500 dark:bg-teal-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:text-slate-100 dark:hover:border-teal-500 dark:hover:text-teal-200"
        >
          <GitBranch size={17} />
          GitHub
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-teal-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-600 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
        >
          <ExternalLink size={17} />
          Live Demo
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
