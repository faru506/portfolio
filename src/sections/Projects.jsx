import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const projects = [
  {
    title: 'Content Management System',
    description:
      'A role-based CMS for editorial teams with scalable Rails APIs, MongoDB-backed content models, and AI-assisted publishing workflows.',
    features: [
      'Developed role-based CMS workflows supporting 20+ active users and improving publishing efficiency by 30%',
      'Built scalable Rails REST APIs with caching and indexing to improve backend performance',
      'Implemented React-based UI flows that improved workflow efficiency and reduced manual operations by 25%',
      'Integrated LLM APIs for AI-assisted content creation, reducing content generation time by 40%',
    ],
    tech: ['Ruby on Rails', 'MongoDB', 'JavaScript', 'React'],
  },
  {
    title: 'Health Management System',
    description:
      'Backend APIs for patient and appointment workflows with database optimization, logging, and production reliability improvements.',
    features: [
      'Developed Ruby on Rails backend APIs for patient and appointment management workflows',
      'Optimized PostgreSQL queries and added logging to improve backend performance, reliability, and debugging',
    ],
    tech: ['Ruby on Rails', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Crowdfunding Platform',
    description:
      'A responsive React dashboard for campaign management and funding analytics with reusable UI components.',
    features: [
      'Built a responsive React dashboard for campaign management and funding analytics',
      'Developed reusable UI components and optimized rendering performance for smoother dashboard interactions',
    ],
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
          description="Resume-backed projects showing API design, performance optimization, AI-assisted workflows, and responsive React dashboard development."
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
