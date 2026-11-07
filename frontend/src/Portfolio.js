import "./portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">

    
      <nav className="navbar">
        <h2 className="logo">
          RB<span>.</span>
        </h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="talk-btn">
          Let's Talk ↗
        </a>
      </nav>

    
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>
            Rohit <span>Bind</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <h3>Build. Code. Innovate.</h3>

          <p className="description">
            I'm a BCA student passionate about web development.
            I enjoy creating modern websites and learning new
            technologies to build useful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-circle"></div>

          <div className="code-card">
            <span>&lt;/&gt;</span>
            <p>Full Stack Developer</p>
            <p>React.js | Node.js</p>
          </div>
        </div>
      </section>

    
      <section className="about" id="about">
        <p className="section-subtitle">GET TO KNOW ME</p>

        <h2>
          About <span>Me</span>
        </h2>

        <div className="about-container">
          <div className="about-icon">
            <span>&lt;RB /&gt;</span>
          </div>

          <div className="about-content">
            <h3>I'm Rohit Bind</h3>
            <h4>Full Stack Developer</h4>

            <p className="about-text">
              I'm currently pursuing my BCA at Ramdev PG College,
              Bhadohi. I'm passionate about programming and web
              development. I enjoy creating modern, responsive
              websites using HTML, CSS, JavaScript and React.js.
              I'm also learning backend development with Node.js
              and Express.js.
            </p>

            <p className="about-text">
              My goal is to join a reputed IT company as a Full
              Stack Developer, work on real-world projects and
              continuously improve my technical skills.
            </p>

            <div className="about-details">
              <p><strong>Education:</strong> BCA</p>
              <p><strong>College:</strong> Ramdev PG College, Bhadohi, Uttar Pradesh</p>
              <p><strong>Interests:</strong> Coding, Cricket & Learning</p>
            </div>
          </div>
        </div>
      </section>


      <section className="skills" id="skills">
        <p className="section-subtitle">MY TECHNICAL EXPERTISE</p>

        <h2>
          My Technical <span>Skills</span>
        </h2>

        <p className="skills-description">
          Technologies I use to build web applications.
        </p>

        <div className="skills-container">

          <div className="skill-card">
            <span className="skill-number">01</span>
            <h3>HTML5</h3>
            <p>Web Page Structure</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <h3>CSS3</h3>
            <p>Styling & Responsive Design</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <h3>JavaScript</h3>
            <p>Interactive Web Applications</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>
            <h3>React.js</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">05</span>
            <h3>Node.js</h3>
            <p>Backend Development</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">06</span>
            <h3>Express.js</h3>
            <p>REST API Development</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">07</span>
            <h3>SQL</h3>
            <p>Database Management</p>
          </div>

        </div>
      </section>

      
      <section className="projects" id="projects">
        <p className="section-subtitle">MY RECENT WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="skills-description">
          Explore some of my web development projects.
        </p>

        <div className="projects-container">

          
          <div className="project-card">
            <div className="project-icon">🍽️</div>

            <h3>Restaurant Website</h3>

            <p>
              A restaurant website built with HTML, CSS and
              JavaScript, featuring a menu and an attractive
              user interface.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://rohitbind2213088-lgtm.github.io/Restaurent/"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                Live Demo ↗
              </a>

              <a
                href="https://github.com/rohitbind2213088-lgtm"
                target="_blank"
                rel="noreferrer"
                className="project-btn outline-btn"
              >
                GitHub ↗
              </a>
            </div>
          </div>

        
          <div className="project-card">
            <div className="project-icon">🏆</div>

            <h3>KBC Quiz Website</h3>

            <p>
              An interactive quiz inspired by Kaun Banega
              Crorepati, featuring multiple-choice questions,
              lifelines and quiz functionality.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://rohitbind2213088-lgtm.github.io/kbc/hello.html"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                Live Demo ↗
              </a>

              <a
                href="https://github.com/rohitbind2213088-lgtm"
                target="_blank"
                rel="noreferrer"
                className="project-btn outline-btn"
              >
                GitHub ↗
              </a>
            </div>
          </div>

        </div>
      </section>

    
      <section className="contact" id="contact">
        <p className="section-subtitle">LET'S CONNECT</p>

        <h2>
          Contact <span>Me</span>
        </h2>

        <p className="skills-description">
          Interested in working together? Connect with me through
          GitHub or LinkedIn.
        </p>

        <div className="contact-buttons">
          <a
            href="https://github.com/rohitbind2213088-lgtm"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="project-btn outline-btn"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Rohit Bind | Full Stack Developer</p>
      </footer>

    </div>
  );
}

export default Portfolio;