import { FaExternalLinkAlt } from "react-icons/fa";

export default function Proyect({ title, img, desc, link }) {


   return (
      <>
         <div className="py-5 pb-10">
            <img src={img} alt="title" className="h-56 pb-1" />
            <h3 className="py-1 px-1 font-Inter  font-light text-black text-2xl dark:text-white">{title}</h3>
            <p className="py-1 px-1 font-Inter text-black font-extralight text-lg dark:text-white">
               {desc}
            </p>
            <button onClick={() => window.open(link)}
            className="relative inline-block px-1 py-1 w-28 h-9 rounded bg-gradient-to-r from-gr-0 to-gr-55">
               <span className="absolute inset-0 bg-white dark:bg-black rounded border-2 border-transparent bg-clip-padding"></span>
               <span className="relative gap-x-2 flex items-center justify-center text-black dark:text-white">
                  <FaExternalLinkAlt className="" />
                  View
               </span>
            </button>
         </div>
      </>
   );
}