import './Projects.css'

function Projects() {
  const projects = [
    {
      image: '/assets/project1.webp',
      title: 'Photo Gallery Platform',
      category: 'Web Development',
      description: 'A modern photo gallery platform with advanced filtering and search capabilities.'
    },
    {
      image: '/assets/project2.webp',
      title: 'Nature Portfolio',
      category: 'UI/UX Design',
      description: 'Beautiful nature photography portfolio with stunning visuals and smooth animations.'
    },
    {
      image: '/assets/project3.webp',
      title: 'Stock Photos Website',
      category: 'Full Stack',
      description: 'Complete stock photos platform with user authentication and payment integration.'
    },
    {
      image: '/assets/project4.webp',
      title: 'Personal Portfolio',
      category: 'Web Design',
      description: 'Minimalist personal portfolio showcasing creative work and professional experience.'
    },
    {
      image: '/assets/project5.webp',
      title: 'Photography Showcase',
      category: 'Frontend',
      description: 'Professional photography showcase with grid layout and lightbox functionality.'
    },
    {
      image: '/assets/project6.webp',
      title: 'Image Collection App',
      category: 'Web App',
      description: 'Interactive image collection application with categorization and favorites feature.'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>
        <p className="section-subtitle">My Latest Work</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button className="view-project">View Project →</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
