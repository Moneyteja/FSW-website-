import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './Projects.css'
import Navbar from './Navbar'
/* =========================================================
   FEATURED PROJECTS
   ========================================================= */

   import metavid from './assets/metavid.jpg'

const featuredProjects = [
  {
    title: 'FSW Recruitment',
    description:
      'A recruitment platform built for managing applications and community onboarding.',
    alt: 'FSW Recruitment Portal',
    tags: ['Web App', 'React', 'Flask'],
    image: '/assets/recruitment.png',
    github: null,
  },
  {
    title: 'MetaVid',
    description:
      'Meaning-driven video intelligence powered by AI and computer vision.',
    alt: 'MetaVid',
    tags: ['AI', 'Computer Vision', 'Flask'],
    image: metavid, 
    github: 'https://github.com/akshaydev-git/Project-Metavid',
  },
]

/* =========================================================
   OTHER PROJECTS
   ========================================================= */

const projects = [
  {
    title: 'Rabbit',
    description:
      'A language assistant with translation, grammar checking, dictionary and summarization.',
    alt: 'Rabbit Language Assistant',
    tags: ['Python', 'Flask', 'AI'],
    image: '/assets/rabbit.png',
    github: null,
  },
  {
    title: 'VIVITSU',
    description:
      'A national-level hackathon bringing students together to build innovative solutions.',
    alt: 'VIVITSU Hackathon',
    tags: ['Hackathon', 'Community'],
    image: '/assets/vivitsu.png',
    github: null,
  },
  {
    title: 'FSW Website',
    description:
      'The digital home of the Free Software Wing community.',
    alt: 'FSW Website',
    tags: ['React', 'Web'],
    image: '/assets/fsw-website.png',
    github: null,
  },
  {
    title: 'Open Source',
    description:
      'Experiments, tools and contributions created by our community.',
    alt: 'Open Source Projects',
    tags: ['Open Source', 'Community'],
    image: '/assets/opensource.png',
    github: null,
  },
  {
    title: 'TableBot',
    description:
      'A Discord bot to create and manage tables in a server using simple commands.',
    alt: 'TableBot Discord Bot',
    tags: ['Discord Bot', 'Python'],
    image: '/assets/tablebot.png',
    github: 'https://github.com/Subham8705/Table-DiscordBot',
  },
  {
    title: 'Git Scavenger Hunt',
    description:
      'A story-driven game that teaches Git by making you solve puzzles inside a laptop.',
    alt: 'Git Scavenger Hunt',
    tags: ['Git', 'Game'],
    image: '/assets/git-scavenger-hunt.png',
    github: 'https://github.com/Subham8705/git-scavenger-hunt',
  },
  {
    title: 'GRIET StudySphere',
    description:
      'A student resource hub for notes, previous papers, placements and projects.',
    alt: 'GRIET StudySphere',
    tags: ['Web', 'Resources'],
    image: '/assets/studysphere.png',
    github: 'https://github.com/Subham8705/GRIET.StudySphere',
  },
  {
    title: 'satOps',
    description: 'TODO: one-line description.',
    alt: 'satOps',
    tags: ['TODO'],
    image: '/assets/satops.png',
    github: 'https://github.com/ShaikNada/satOps',
  },
  {
    title: 'CIRIS',
    description: 'TODO: one-line description.',
    alt: 'CIRIS',
    tags: ['TODO'],
    image: '/assets/ciris.png',
    github: 'https://github.com/shaik-sohel-cyber/ciris',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">

        <img src={project.image} alt={project.alt} />

        {/* CENTER ARROW */}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-arrow"
            aria-label={`Open ${project.title} on GitHub`}
          >
            <ArrowUpRight size={21} />
          </a>
        ) : (
          <span className="project-arrow">
            <ArrowUpRight size={21} />
          </span>
        )}

      </div>

      <div className="project-info">

        <div className="project-info-top">
          <h3>{project.title}</h3>

          <div className="project-meta">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <p>{project.description}</p>

      </div>

    </article>
  )
}

/* =========================================================
   PROJECTS PAGE
   ========================================================= */

function Projects() {
  return (
    <div className="projects-page">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main>
        {/* HERO */}
        <section className="project-hero">
          <div className="project-hero-content">
            <p className="eyebrow">
              FREE SOFTWARE WING · PROJECTS
            </p>
            <h1>
  Explore <em>Our</em> Projects
</h1>
            <p className="hero-description">
              Discover the projects built by our community
              through code, creativity and open source.
            </p>
          </div>

          {/* FEATURED PROJECTS */}
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </section>

        

          {/* ================= OTHER PROJECTS ================= */}

          <section className="all-projects">

              <div className="project-grid">
                  {projects.map((project) => (
                      <ProjectCard
                          key={project.title}
                          project={project}
                      />
                  ))}
              </div>

          </section>    
        

        {/* COMMUNITY CTA */}
        <section className="project-community">
          <p className="eyebrow">
            02 / COMMUNITY
          </p>
          <h2>
            Build something
            <em>with us.</em>
          </h2>
          <p>
            Have an idea? Want to contribute?
            There's always something to build.
          </p>

          <Link
            to="/community"
            className="primary-btn"
          >
            Join Community
            <ArrowUpRight size={18} />
          </Link>
        </section>
      </main>

       </div>
  )
}

export default Projects