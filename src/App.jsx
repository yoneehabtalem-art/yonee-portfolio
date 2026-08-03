import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav>
        <h2>Yonee</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-text">

          <h1>
  Hi, I'm <span>Yonee Habtalem</span>
</h1>

<h2>
  Python Developer | React Developer | Automation Builder
</h2>

<p>
  I create modern websites, Python automation tools,
  Telegram bots, and creative software solutions
  that solve real-world problems.
</p>

          <div className="hero-buttons">

            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>

          </div>

        </div>


        <div className="hero-card">

          <div className="code-box">
            <p>&lt;Developer /&gt;</p>
            <p>Python</p>
            <p>React</p>
            <p>JavaScript</p>
            <p>Git & GitHub</p>
          </div>

        </div>

      </section>


      {/* About */}
      <section id="about">

        <h2>About Me</h2>

        <p>
          I am a Python and Web Developer passionate about
          building useful applications and learning new technologies.
        </p>

      </section>


      {/* Skills */}
     <section id="skills">

  <h2>My Skills</h2>

  <div className="skill">

    <h3>Python <span>90%</span></h3>
    <div className="progress">
      <div className="progress-bar python"></div>
    </div>

  </div>


  <div className="skill">

    <h3>React <span>70%</span></h3>
    <div className="progress">
      <div className="progress-bar react"></div>
    </div>

  </div>


  <div className="skill">

    <h3>JavaScript <span>60%</span></h3>
    <div className="progress">
      <div className="progress-bar javascript"></div>
    </div>

  </div>


  <div className="skill">

    <h3>HTML & CSS <span>85%</span></h3>
    <div className="progress">
      <div className="progress-bar html"></div>
    </div>

  </div>


  <div className="skill">

    <h3>Git & GitHub <span>70%</span></h3>
    <div className="progress">
      <div className="progress-bar git"></div>
    </div>

  </div>


</section>


      {/* Projects */}
      <section id="projects">
  <h2>Projects</h2>

  <div className="project-container">

    <div className="project-card">
      <h3>💼 Portfolio Website</h3>

      <p>
        A modern personal portfolio built with React,
        featuring responsive design, animations,
        and a professional user interface.
      </p>

      <p className="tech">
        React • JavaScript • CSS • Vercel
      </p>

      <a
        href="https://yonee-portfolio-olive.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="project-btn"
      >
        Live Demo
      </a>

    </div>


    <div className="project-card">

      <h3>🤖 Telegram Bot</h3>

      <p>
        A Python Telegram bot that automates tasks,
        receives user messages, and provides instant responses.
      </p>

      <p className="tech">
        Python • Telegram API
      </p>

    </div>


    <div className="project-card">

      <h3>⚡ Python Automation</h3>

      <p>
        Automation scripts that save time by handling
        repetitive computer tasks efficiently.
      </p>

      <p className="tech">
        Python • Automation
      </p>

    </div>

  </div>

</section>
      {/* Contact */}
      <section id="contact">

        <h2>Contact Me</h2>

        <div className="contact-links">

          <a
            href="https://t.me/yoneeha"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            Telegram
          </a>


          <a
            href="mailto:yoneehabtalem@gmail.com"
            className="contact-btn"
          >
            Email
          </a>

        </div>

      </section>
            <footer>

        <p>
          © 2026 Yonee Habtalem. All Rights Reserved.
        </p>

      </footer>


    </div>
  );
}

export default App;