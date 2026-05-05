import { ArrowDownToLine, MapPin, Mail, Rocket, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-300/10" />
      <div className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="animate-fade-up max-w-3xl">
          <p className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-200">
            <Sparkles size={16} />
            Full Stack Developer · API Design · Performance Optimization
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I am Farooq Shaik.
            <span className="block text-teal-600 dark:text-teal-300">
              I build reliable, AI-ready web apps.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Bangalore-based Full Stack Developer with 3.5+ years building scalable,
            high-performance Ruby on Rails and React.js applications, RESTful APIs,
            responsive interfaces, and LLM-powered product features.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2">
              <MapPin size={16} />
              Bangalore, India
            </span>
            <a
              href="mailto:shaikfarooq2020@gmail.com"
              className="glass-pill focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:text-teal-700 dark:hover:text-teal-200"
            >
              <Mail size={16} />
              shaikfarooq2020@gmail.com
            </a>
          </div>

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
              href="/FarooqShaikFullStackResume.pdf"
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              <ArrowDownToLine size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-6 rounded-full bg-red-500/18 blur-3xl dark:bg-red-500/12" />
          <div className="panel animate-float-card shine-card relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-x-10 top-3 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-950">
              <img
                src="/farooq-hero.png"
                alt="Farooq Shaik portrait"
                loading="lazy"
                className="h-full w-full object-cover object-[50%_18%] transition duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {['Rails', 'React', 'LLMs'].map((skill) => (
                <span
                  key={skill}
                  className="glass-pill rounded-xl px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-200"
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
