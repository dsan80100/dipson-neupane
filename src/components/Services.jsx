import './Services.css'

function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces with a focus on user experience and modern design principles.'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable web applications using the latest technologies and best practices.'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Ensuring your website looks perfect on all devices, from smartphones to desktops.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed and efficiency to provide the best user experience.'
    },
    {
      icon: '🔧',
      title: 'API Development',
      description: 'Creating robust RESTful APIs and backend solutions for your applications.'
    },
    {
      icon: '🚀',
      title: 'Deployment & Hosting',
      description: 'Deploying and maintaining applications with modern DevOps practices and cloud services.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">What I Offer</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
