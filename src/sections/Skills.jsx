import { Bot, Code2, Database, GitBranch, ServerCog } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SkillCard from '../components/SkillCard'

const skills = [
  {
    title: 'Backend',
    description: 'Rails applications, REST APIs, authentication, Sidekiq, and production services.',
    icon: ServerCog,
    items: ['Ruby', 'Ruby on Rails', 'REST APIs', 'Sidekiq', 'Auth'],
  },
  {
    title: 'Frontend',
    description: 'Responsive interfaces built with React, hooks, and modern JavaScript.',
    icon: Code2,
    items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'TailwindCSS'],
  },
  {
    title: 'Databases',
    description: 'Schema design, query optimization, and data modeling for app scale.',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Indexes', 'Query Tuning'],
  },
  {
    title: 'AI & LLMs',
    description: 'LLM API integrations for CMS workflows, suggestions, and content automation.',
    icon: Bot,
    items: ['OpenAI', 'Claude', 'Gemini', 'Grok', 'Prompted Workflows'],
  },
  {
    title: 'Tools',
    description: 'Operational tools for delivery, debugging, monitoring, and collaboration.',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'Docker', 'DataDog', 'System Design Basics'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/30 transition-colors dark:bg-slate-950/20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Stack from the resume"
          description="A practical production stack covering Rails services, React interfaces, database tuning, monitoring, and LLM-powered product workflows."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
