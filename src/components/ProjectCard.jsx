function ProjectCard({ title, description, features, tech }) {
  return (
    <article className="panel shine-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 hover:-translate-y-2 hover:border-teal-200 hover:shadow-[0_26px_70px_rgba(20,184,166,0.14)] dark:hover:border-teal-800 dark:hover:shadow-[0_26px_70px_rgba(45,212,191,0.10)]">
      <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-teal-300/15 blur-2xl transition duration-500 group-hover:scale-150 dark:bg-teal-300/10" />
      <div className="relative mb-5 h-2 w-16 rounded-full bg-teal-500 transition group-hover:w-24 dark:bg-teal-300" />
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
            className="glass-pill rounded-full px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-7">
        <div className="glass-pill rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
          Resume project · details available on request
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
