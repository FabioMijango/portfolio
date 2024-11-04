
function App() {

  return (
    <>
      <header>
        <hr />
        <a>Projects</a>
        <a>Resume</a>
        <a>Contact</a>
        <button></button>
      </header>
      <main>
        <section>
          <p>Hey, I'm</p>
          <h1>Fabio Mijango</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Sed nisi. Nulla quis sem at nibh elementum imperdiet.

          </p>
        </section>

        <section id="contact"> {/* Section for contact me */}
          <button>Send an email</button>
          <button>GitHub</button>
          <button>Curriculum</button>
        </section>

        <section id="skills"> {/* Section for the skills */}
          <h2>Skills</h2>
          <div>
            <svg>{/* Insert image */}</svg>
            <h3>SQL</h3>
          </div>
          <div>
            <svg>{/* Insert image */}</svg>
            <h3>C++</h3>
          </div>
          <div>
            <svg>{/* Insert image */}</svg>
            <h3>Python</h3>
          </div>
          <div>
            <svg>{/* Insert image */}</svg>
            <h3>React</h3>
          </div>
        </section>

        <section id="projects"> {/* Section for the projects */}
          <h2>Projects</h2>
          <div>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
          </div>
          {/* Add more projects as needed */}
        </section>
      </main>
    </>
  )
}

export default App
