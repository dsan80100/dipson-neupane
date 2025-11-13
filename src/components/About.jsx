import './About.css'

function About() {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'UI/UX Design', level: 92 }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/about.jpg" alt="Dipson Neupane" />
            <div className="image-overlay"></div>
          </div>
          <div className="about-text">
            <h3>Who Am I?</h3>
            <p>
              I'm a passionate Full Stack Developer and Designer based in Nepal, dedicated to 
              creating exceptional digital experiences. With a keen eye for design and a deep 
              understanding of modern web technologies, I bring ideas to life through clean, 
              efficient code and beautiful interfaces.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites work, 
              and it has evolved into a passion for building scalable applications that make a 
              difference. I specialize in React.js, Node.js, and modern web technologies, always 
              staying updated with the latest industry trends.
            </p>
            
            <div className="skills">
              <h4>My Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats">
              <div className="stat-item">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>30+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
