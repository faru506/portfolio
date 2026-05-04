import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const projects = [
  {
    title: 'Content Management System',
    description:
      'A role-based CMS for editorial teams with scalable Rails APIs, MongoDB-backed content models, and AI-assisted publishing workflows.',
    features: [
      'Designed role-based workflows for 20+ editorial users with secure access and structured content operations',
      'Built Rails REST APIs with caching and indexing to improve publishing speed and reduce repeated database work',
      'Integrated LLM APIs to automate draft generation, suggestions, and editorial assistance inside CMS workflows',
    ],
    tech: ['Ruby on Rails', 'MongoDB', 'JavaScript', 'React'],
  },
  {
    title: 'Health Management System',
    description:
      'Backend APIs for patient and appointment workflows with database optimization, logging, and production reliability improvements.',
    features: [
      'Developed Rails APIs for patient records, appointment scheduling, and operational healthcare workflows',
      'Optimized PostgreSQL queries and data access patterns to keep backend responses predictable under load',
      'Added logging and issue tracing patterns that improved debugging speed and production stability',
    ],
    tech: ['Ruby on Rails', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Crowdfunding Platform',
    description:
      'A responsive React dashboard for campaign management and funding analytics with reusable UI components.',
    features: [
      'Built a responsive React.js dashboard for campaign setup, funding progress, and user-facing analytics',
      'Created reusable UI components to keep campaign cards, metrics, and dashboard states consistent',
      'Optimized rendering and layout behavior so funding data stayed readable across desktop and mobile screens',
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
          description="Resume-backed projects showing backend ownership, database optimization, AI workflow integration, and polished React dashboard development."
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
