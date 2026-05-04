import { ArrowDownToLine, Mail, Rocket } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] pt-20 dark:bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_30%),linear-gradient(180deg,#0f172a_0%,#0d1117_100%)]"
    >
      <div className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 dark:border-teal-900/70 dark:bg-teal-950/70 dark:text-teal-200">
            Software Engineer · Full Stack Developer
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I am Farooq Shaik.
            <span className="block text-teal-600 dark:text-teal-300">
              I build scalable web products.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Full Stack Developer with 3.5+ years of experience in Ruby on Rails,
            ReactJS, REST APIs, database optimization, and responsive UI development.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-600 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
            >
              <Rocket size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-teal-500 dark:hover:text-teal-200"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="/resume-placeholder.txt"
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              <ArrowDownToLine size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-5 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" />
          <div className="panel relative overflow-hidden rounded-[2rem] p-6">
            <div className="aspect-square overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-teal-100 via-white to-blue-100 dark:from-slate-900 dark:via-slate-950 dark:to-teal-950">
              <img
                src="/profile-placeholder.svg"
                alt="Profile placeholder illustration for Farooq Shaik"
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {['Rails', 'React', 'APIs'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
