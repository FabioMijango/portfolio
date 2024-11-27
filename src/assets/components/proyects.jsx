import Proyect from "./proyect";
import data from "../../data/proyects";

export default function Proyects() {

   return (
      <>
         <h2 className="text-black dark:text-white text-2xl p-8 font-Inter font-extralight border-b-2 border-gray-300 dark:border-gray-700 mb-4
         sm:w-[500px] lg:w-[700px]">
            Projects
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:w-[600px] lg:w-[900px]  gap-x-3">
            {
               data.map((proyect, index) => (
                  <Proyect
                     key={index}
                     title={proyect.title}
                     img={proyect.img}
                     desc={proyect.desc}
                     link={proyect.link}
                  />
               ))
            }
         </div>
      </>
   );
}
