import { FaCode } from "react-icons/fa";

export default function Skill_Comp({ skill, children }) {

   return (
      <>
         <div className="w-[148px] h-[68px] rounded-2xl flex justify-center items-center bg-gradient-to-r from-gr-0 to-gr-100 hover:animate-bounce_v2">
            <div className="w-36 h-16 flex justify-center items-center relative rounded-2xl 
            text-black dark:text-white bg-white dark:bg-black
            hover:bg-transparent hover:text-white
            ">
               <div className="absolute left-3">
                  {children ? children : <FaCode />}
               </div>
               <h3 className="w-auto max-w-[70px] pl-3 text-center ">{skill}</h3>
            </div>
         </div>
      </>
   );
}