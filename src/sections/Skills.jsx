import { Code2, Database, GitBranch, ServerCog } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SkillCard from '../components/SkillCard'

const skills = [
  {
    title: 'Backend',
    description: 'Rails applications, REST APIs, authentication flows, and service logic.',
    icon: ServerCog,
    items: ['Ruby on Rails', 'REST APIs', 'Auth', 'Performance'],
  },
  {
    title: 'Frontend',
    description: 'Responsive interfaces built with React, hooks, and modern JavaScript.',
    icon: Code2,
    items: ['ReactJS', 'Hooks', 'JavaScript ES6+', 'TailwindCSS'],
  },
  {
    title: 'Databases',
    description: 'Schema design, query optimization, and data modeling for app scale.',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Indexes', 'Query Tuning'],
  },
  {
    title: 'Tools',
    description: 'Daily workflows for source control, reviews, collaboration, and delivery.',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'API Testing', 'Agile Teams'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50 transition-colors dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A focused stack for full stack delivery"
          description="The stack is intentionally practical: Rails for robust backend systems, React for clean interfaces, and databases tuned for real-world usage."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
