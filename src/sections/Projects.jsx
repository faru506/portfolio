import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const projects = [
  {
    title: 'AI-Powered Content Management System',
    description:
      'A multi-tenant, role-based CMS with MongoDB-backed content models, Redis caching, webhook-driven events, and OpenAI-assisted editorial workflows.',
    features: [
      'Supported 20+ concurrent editors while LLM-assisted drafting cut content generation time by 40% and improved publishing throughput by 30%',
      'Implemented Redis-backed ETags and REST API caching, reducing average read latency by 45% under peak editorial load',
      'Designed webhook-driven event flows that decoupled editorial actions from downstream services for zero-downtime deploys',
    ],
    tech: ['Rails', 'MongoDB', 'React.js', 'OpenAI API', 'Redis'],
  },
  {
    title: 'Health Management System',
    description:
      'A HIPAA-aligned Rails backend for healthcare workflows with PostgreSQL, structured query logging, RBAC, and JWT authentication.',
    features: [
      'Resolved 8 critical slow queries and reduced average page load from 3+ seconds to under 500 ms',
      'Implemented role-based access control and JWT authentication across API endpoints for stronger patient-record security',
    ],
    tech: ['Ruby on Rails', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Crowdfunding Platform',
    description:
      'A React campaign analytics dashboard with lazy loading, memoized selectors, and real-time contribution updates.',
    features: [
      'Cut initial render time by 35% through code-split lazy loading and memoized selectors',
      'Implemented WebSocket-based contribution tracking for live pledge updates without full-page reloads',
      'Reached a 92/100 Lighthouse score with responsive dashboard performance optimizations',
    ],
    tech: ['React.js', 'JavaScript', 'WebSocket', 'Performance'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section-padding transition-colors">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Resume-backed projects showing distributed APIs, Redis caching, OpenAI-powered workflows, healthcare security, and high-performance React dashboards."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
