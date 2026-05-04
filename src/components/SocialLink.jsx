function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-teal-300 hover:text-teal-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-600 dark:hover:text-teal-300"
      aria-label={label}
      title={label}
    >
      <Icon size={18} />
    </a>
  )
}

export default SocialLink
