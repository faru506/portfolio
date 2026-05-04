function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass-pill focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:-translate-y-1 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-300"
      aria-label={label}
      title={label}
    >
      <Icon size={18} />
    </a>
  )
}

export default SocialLink
