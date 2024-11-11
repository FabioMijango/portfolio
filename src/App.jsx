import Header_ from "./assets/components/header_"
import Proyects from "./assets/components/proyects"
import Skills from "./assets/components/skills"

function App() {

  return (
    <>
      <Header_ />
      <main className="bg-primary-white dark:bg-black flex flex-col justify-center items-center">

        <section id="skills" className="w-full flex justify-center"> {/* Section for the skills */}
          <div className="w-80 sm:w-[500px] lg:w-[700px]">
            <Skills />
          </div>
        </section>

        <section id="projects" className="w-80 sm:w-[500px] lg:w-[700px] flex flex-col sm:items-center justify-center"> {/* Section for the projects */}
          <Proyects />
          {/* Add more projects as needed */}
        </section>
      </main>
    </>
  )
}

export default App
