import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const projects = [
  {
    title: 'Content Management System',
    description:
      'A role-based CMS for editorial teams with scalable Rails APIs, MongoDB-backed content models, and AI-assisted publishing workflows.',
    features: ['Supported 20+ editorial users', 'Caching and indexing for publishing performance', 'LLM APIs for content generation and suggestions'],
    tech: ['Ruby on Rails', 'MongoDB', 'JavaScript', 'React'],
  },
  {
    title: 'Health Management System',
    description:
      'Backend APIs for patient and appointment workflows with database optimization, logging, and production reliability improvements.',
    features: ['Patient and appointment management APIs', 'Optimized database queries', 'Logging for faster debugging and stability'],
    tech: ['Ruby on Rails', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Crowdfunding Platform',
    description:
      'A responsive React dashboard for campaign management and funding analytics with reusable UI components.',
    features: ['Campaign management dashboard', 'Funding analytics UI', 'Optimized rendering for responsiveness'],
    tech: ['React.js', 'JavaScript', 'Responsive UI'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section-padding transition-colors">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Projects from my resume covering CMS automation, healthcare workflows, and responsive React dashboard development."
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
