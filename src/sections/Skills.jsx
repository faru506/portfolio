import { Bot, Code2, Database, GitBranch, ServerCog } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SkillCard from '../components/SkillCard'

const skills = [
  {
    title: 'Backend',
    description: 'Production Rails services with API architecture, microservices, background jobs, and system design.',
    icon: ServerCog,
    items: ['Ruby', 'Ruby on Rails', 'RESTful APIs', 'GraphQL', 'Sidekiq', 'Microservices'],
  },
  {
    title: 'Frontend',
    description: 'Responsive React interfaces with state management, component architecture, and performance tuning.',
    icon: Code2,
    items: ['React.js', 'Redux', 'JavaScript ES6+', 'HTML5', 'CSS3', 'TailwindCSS'],
  },
  {
    title: 'Databases',
    description: 'Query optimization, indexing strategies, and caching for fast APIs and scalable workflows.',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Indexing', 'Query Optimization'],
  },
  {
    title: 'AI & LLMs',
    description: 'LLM-powered pipelines that automate manual workflows and accelerate content operations.',
    icon: Bot,
    items: ['OpenAI API', 'LLM Pipelines', 'Content Automation', 'Prompted Workflows'],
  },
  {
    title: 'Tools',
    description: 'Cloud, delivery, observability, testing, and collaboration practices for production teams.',
    icon: GitBranch,
    items: ['AWS', 'Docker', 'CI/CD', 'DataDog', 'RSpec', 'Code Review', 'Agile'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/30 transition-colors dark:bg-slate-950/20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Production stack from the resume"
          description="A practical stack covering distributed Rails services, React interfaces, REST and GraphQL APIs, AWS, Redis caching, CI/CD, testing, observability, and LLM-powered workflows."
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
