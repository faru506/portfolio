function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
