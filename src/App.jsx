import Header_ from "./assets/components/header_"
import Skills from "./assets/components/skills"

function App() {

  return (
    <>
      <Header_ />
      <main className="bg-primary-white dark:bg-black flex flex-col justify-center items-center">

        <section id="skills w-96"> {/* Section for the skills */}
          <Skills />
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
