import { useState } from 'react'
import './Navbar.css'

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-text">Dipson</span>
          <span className="logo-dot">.</span>
        </a>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={handleNavClick}>Home</a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
          <a href="#services" className="nav-link" onClick={handleNavClick}>Services</a>
          <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
