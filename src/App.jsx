import React, { useState } from 'react'
import './App.css'

// Card Component
const Card = ({ children, className = '', hover = true }) => (
  <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
    {children}
  </div>
)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">HA</span>
            <span className="logo-subtitle">Tax & Corporate Law</span>
      </div>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={isMenuOpen ? 'active' : ''}></span>
            <span className={isMenuOpen ? 'active' : ''}></span>
            <span className={isMenuOpen ? 'active' : ''}></span>
        </button>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#education" onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a>
            <a href="#experience" onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#achievements" onClick={() => scrollToSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/heb.png" alt="Hebron Asrat" />
            <div className="image-decoration"></div>
          </div>
          <div className="hero-text">
            <h1>Hebron Asrat</h1>
            <p className="subtitle">Tax & Corporate Law Specialist</p>
            <p className="location">Arsi, Ethiopia</p>
            <div className="hero-buttons">
              <a href="/CV.pdf" download className="btn btn-primary">Download CV</a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">Personal Profile</h2>
          <Card>
            <p className="about-text">
              Motivated and detail-oriented Law student at Arsi University, with a strong passion for 
              <span className="highlight"> Tax Law</span>, 
              <span className="highlight"> Corporate Law</span>, and 
              <span className="highlight"> International Taxation</span>. 
              Experienced in legal research, case analysis, and public service through volunteer 
              work with the Ministry of Revenue and EWLA. Committed to using law as a tool for 
              fair governance, corporate compliance, and social justice.
            </p>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <Card>
            <div className="education-header">
              <h3>Arsi University - LL.B in Law</h3>
              <span className="year">Expected Graduation: 2026</span>
            </div>
            <div className="education-details">
              <div className="detail-item">
                <h4>Focus Areas:</h4>
                <ul>
                  <li>Tax Law & International Taxation</li>
                  <li>Corporate & Business Law</li>
                  <li>International Law</li>
                </ul>
              </div>
              <div className="detail-item">
                <h4>Research Interest:</h4>
                <p>Comparative study on tax dispute settlement between Ethiopia and Kenya, with emphasis on corporate tax compliance and international tax treaties.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          
          <Card>
            <div className="experience-header">
              <h3>Volunteer, Ministry of Revenue - Legal Department</h3>
              <span className="date">June 2025 - August 2025</span>
            </div>
            <div className="experience-content">
              <h4>Key Responsibilities:</h4>
              <ul>
                <li>Conducted legal research on taxation and compliance matters</li>
                <li>Drafted and reviewed administrative documents</li>
                <li>Observed dispute resolution processes related to tax enforcement</li>
                <li>Analyzed corporate tax regulations and compliance requirements</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="experience-header">
              <h3>Volunteer, Ethiopian Women Lawyers Association (EWLA)</h3>
              <span className="date">July 2023 - August 2023</span>
            </div>
            <div className="experience-content">
              <h4>Key Responsibilities:</h4>
              <ul>
                <li>Supported legal aid programs for women's rights and justice access</li>
                <li>Helped organize case files and client interviews under supervision</li>
              </ul>
            </div>
          </Card>

          {/* Internship Completion Letter */}
          <Card className="internship-letter">
            <h3>Ministry of Revenue - Internship Completion</h3>
            <div className="letter-content">
              <p><strong>June 2025 - August 2025 | Law Directorate, Headquarters</strong></p>
              <p>
                Successfully completed a 3-month internship at the Ministry of Revenues as a dedicated 
                4th-year law student, gaining practical experience in tax law and corporate compliance.
              </p>
              <p><strong>Key Areas of Exposure:</strong></p>
              <ul className="letter-list">
                <li>Tax laws and practical execution</li>
                <li>Tax assessment and appeals procedures</li>
                <li>Tax law drafting and interpretation</li>
                <li>Tax law enforcement and administration</li>
              </ul>
              <p><em>Ministry of Revenues</em></p>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <Card>
              <h3 className="skill-category">Tax & Corporate Law</h3>
              <ul className="skill-list">
                <li>Tax Law interpretation & compliance</li>
                <li>Corporate tax regulations</li>
                <li>International taxation</li>
                <li>Tax dispute resolution</li>
                <li>Corporate governance</li>
              </ul>
            </Card>
            <Card>
              <h3 className="skill-category">Legal Skills</h3>
              <ul className="skill-list">
                <li>Legal research and drafting</li>
                <li>Case analysis and report writing</li>
                <li>Contract review and analysis</li>
                <li>Regulatory compliance</li>
              </ul>
            </Card>
            <Card>
              <h3 className="skill-category">Technical & Soft Skills</h3>
              <ul className="skill-list">
                <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                <li>Legal databases and online research tools</li>
                <li>Attention to detail</li>
                <li>Communication and teamwork</li>
                <li>Critical thinking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements & Activities</h2>
          <div className="achievements-grid">
            <Card>
              <div className="achievement-icon">🏆</div>
              <h4>Moot Court Competition, Respondent</h4>
              <p>Arsi University, 2025</p>
            </Card>
            <Card>
              <div className="achievement-icon">📚</div>
              <h4>Tax Law Research Project</h4>
              <p>Comparative Study: Tax Dispute Settlement in Ethiopia and Kenya</p>
            </Card>
            <Card>
              <div className="achievement-icon">👥</div>
              <h4>Member, University Law Students' Association</h4>
              <p>Active participation in legal community and tax law discussions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section languages-section">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <Card>
              <h4>English</h4>
              <p>Advanced</p>
            </Card>
            <Card>
              <h4>Amharic</h4>
              <p>Native</p>
            </Card>
            <Card>
              <h4>Spanish</h4>
              <p>Beginner</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <Card>
              <div className="contact-icon">📍</div>
              <h4>Location</h4>
              <p>Arsi, Ethiopia</p>
            </Card>
            <Card>
              <div className="contact-icon">📧</div>
              <h4>Email</h4>
              <a href="mailto:asrathebron00@gmail.com">asrathebron00@gmail.com</a>
            </Card>
            <Card>
              <div className="contact-icon">📱</div>
              <h4>Phone</h4>
              <a href="tel:+251979695977">+251 979695977</a>
            </Card>
            <Card>
              <div className="contact-icon">💼</div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/hebron-asrat-6a3b8a316" target="_blank" rel="noopener noreferrer">
                Connect with me
              </a>
            </Card>
          </div>
          <Card className="references-card">
            <p><strong>References:</strong> Available upon request</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Hebron Asrat. All rights reserved.</p>
          <p className="footer-subtitle">Specializing in Tax Law, Corporate Law & International Taxation</p>
          <p className="footer-dev">
            Developed by <a href="https://izzyt.netlify.app" target="_blank" rel="noopener noreferrer">izzyt.netlify.app</a>
          </p>
        </div>
      </footer>
      </div>
  )
}

export default App