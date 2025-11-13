import { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className={`home-content ${isVisible ? 'visible' : ''}`}>
          <div className="text-content">
            <h1 className="greeting">Hello, I'm</h1>
            <h1 className="name">Dipson Neupane</h1>
            <h2 className="title">Full Stack Developer & Designer</h2>
            <p className="description">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              Let's build something amazing together!
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="image-content">
            <div className="profile-image-wrapper">
              <img src="/assets/profile.jpg" alt="Dipson Neupane" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Home
