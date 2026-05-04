import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full stack shopping platform with account flows, product browsing, checkout, and scalable API boundaries.',
    features: ['Authentication and role-aware flows', 'Payments-ready checkout UI', 'REST APIs backed by PostgreSQL'],
    tech: ['Rails', 'React', 'PostgreSQL'],
  },
  {
    title: 'CMS System',
    description:
      'A content management system for dynamic pages, editorial workflows, and role-based access control.',
    features: ['Dynamic page management', 'User roles and permissions', 'MongoDB-backed content models'],
    tech: ['Rails', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive developer portfolio with reusable sections, smooth navigation, and theme persistence.',
    features: ['Responsive React components', 'Tailwind dark and light modes', 'Accessible contact form UI'],
    tech: ['React', 'TailwindCSS', 'Vite'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section-padding bg-white transition-colors dark:bg-slate-950">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Representative projects showing backend API design, frontend implementation, and responsive product UI."
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
