import { Bot, Code2, Database, GitBranch, ServerCog } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SkillCard from '../components/SkillCard'

const skills = [
  {
    title: 'Backend',
    description: 'Production Rails services with clean APIs, authentication, async jobs, and maintainable domain logic.',
    icon: ServerCog,
    items: ['Ruby', 'Ruby on Rails', 'RESTful APIs', 'Sidekiq', 'Microservices', 'Auth'],
  },
  {
    title: 'Frontend',
    description: 'Responsive React interfaces with reusable components, clean state handling, and polished UX details.',
    icon: Code2,
    items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'TailwindCSS'],
  },
  {
    title: 'Databases',
    description: 'Query tuning, indexing, and data modeling for fast APIs and reliable application workflows.',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Indexes', 'Query Tuning'],
  },
  {
    title: 'AI & LLMs',
    description: 'LLM API integrations that turn product workflows into assisted, content-aware experiences.',
    icon: Bot,
    items: ['OpenAI', 'Claude', 'Gemini', 'Grok', 'Prompted Workflows'],
  },
  {
    title: 'Tools',
    description: 'Delivery and observability tooling for debugging, monitoring, collaboration, and deployment readiness.',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'Docker', 'DataDog', 'CI/CD', 'RSpec', 'Unit Testing', 'Agile'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/30 transition-colors dark:bg-slate-950/20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Stack from the resume"
          description="A practical production stack covering Rails services, React interfaces, API design, testing, CI/CD, database tuning, monitoring, async processing, and LLM-powered product workflows."
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
