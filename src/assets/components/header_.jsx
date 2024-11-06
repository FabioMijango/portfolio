import { useEffect, useState } from "react";
import Switcher from "./darkModeSwitch";
import ContactMeButton from "./contactme_button";
import { FaGithub } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { CiMail } from "react-icons/ci";



function Header_() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

   useEffect(() => {
      const handleResize = () => {

         setIsMobile(window.innerWidth <= 1024);
         setIsMenuOpen(window.innerWidth > 1024);

      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      {/* Just a first time check for the menu */ }
      // Command to execute on page load
      if (window.innerWidth > 1024) {
         setIsMenuOpen(true);
      }
   }, []);

   return (
      <header className="bg-white flex-col h-auto w-full dark:bg-secondary-darkgray">
         <nav className="p-8 flex flex-col items-center fixed top-0 right-0 gap-y-8">
            {(isMobile) &&
               <>
                  <button className="font-Inter font-light text-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>{/*Hamburger*/}
               </>
            }

            {isMenuOpen &&
               <div className="flex flex-col items-center gap-y-8 lg:flex-row">
                  <a href="#about" className=" font-Inter font-light text-black dark:text-white lg:px-6 ">About</a>
                  <a href="#projects" className="font-Inter font-light text-black dark:text-white lg:px-6">Projects</a>
                  <a href="#contact" className="font-Inter font-light text-black dark:text-white lg:px-6">Contact</a>
                  <Switcher /> {/* Dark mode switch */}
               </div>

            }

         </nav>
         <section className="p-8 pt-16 flex flex-col  items-center justify-center lg:flex-row lg:gap-x-24"> {/* Section for the hero */}
            <div className="">
               <p className="font-Inter_Light font-light text-xl text-black dark:text-white">
                  Hey, I&apos;m
               </p>
               <h1 className="font-GTWalsheim text-7xl text-transparent bg-cover bg-clip-text bg-gradient-to-r from-gr-0 via-gr-55 to-gr-100 py-3">
                  Fabio Mijango
               </h1>
               <p className="font-Inter font-extralight text-black py-8 h-72 w-80 dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  Sed nisi. Nulla quis sem at nibh elementum imperdiet.
               </p>
            </div>
            <div className="max-w-3xl w-80 h-80 bg-gray-700 rounded-lg place-self-center" />

            {/* </div> */}
         </section>

         <section id="contact" className="place-self-center flex flex-col pb-16 gap-10 lg:flex-row"> {/* Section for contact me */}
            <ContactMeButton text="Send an email" link={""} icon={CiMail}>
               <CiMail size={23}/>
            </ContactMeButton>
            <ContactMeButton text="Github" link={"https://github.com/FabioMijango"} icon={FaGithub}>
               <FaGithub size={20} />
            </ContactMeButton>
            <ContactMeButton text="Download CV" link={""} icon={SiReaddotcv}>
               <SiReaddotcv size={20}/>
            </ContactMeButton>
         </section>
      </header>
   );
}

export default Header_;