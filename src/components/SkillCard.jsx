function SkillCard({ icon: Icon, title, description, items }) {
  return (
    <article className="panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 dark:hover:border-teal-800">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillCard
