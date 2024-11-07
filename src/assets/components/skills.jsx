import { FaPython } from "react-icons/fa";
import Skill_Comp from "./skillcomponent";
import { IoLogoCss3, IoLogoGithub, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { PiFileSql } from "react-icons/pi";
import { SiCplusplus, SiGodotengine, SiMongodb } from "react-icons/si";
import { IoLogoDocker, IoLogoReact } from "react-icons/io5";


export default function Skills() {

   return (
      <>
         <h2 className="text-black dark:text-white text-2xl p-8 font-Inter font-light border-b-2 border-gray-300 dark:border-gray-700 mb-4
         sm:w-[500px] lg:w-[700px]">
            My Skills
         </h2>


         <div className="grid grid-cols-2 grid-flow-row gap-4 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5">
            <Skill_Comp skill={"Python"}>
               <FaPython />
            </Skill_Comp>
            <Skill_Comp skill={"JavaScript"}>
               <IoLogoJavascript />
            </Skill_Comp>
            <Skill_Comp skill={"SQL"}>
               <PiFileSql />
            </Skill_Comp>
            <Skill_Comp skill={"MongoDB"}>
               <SiMongodb />
            </Skill_Comp>
            <Skill_Comp skill={"React"}>
               <IoLogoReact />
            </Skill_Comp>
            <Skill_Comp skill={"HTML"}>
               <IoLogoHtml5 />
            </Skill_Comp>
            <Skill_Comp skill={"CSS"}>
               <IoLogoCss3 />
            </Skill_Comp>
            <Skill_Comp skill={"Github"}>
               <IoLogoGithub />
            </Skill_Comp>
            <Skill_Comp skill={"Docker"}>
               <IoLogoDocker />
            </Skill_Comp>
            <Skill_Comp skill={"Godot Engine"}>
               <SiGodotengine />
            </Skill_Comp>
            <Skill_Comp skill={"C++"}>
               <SiCplusplus />
            </Skill_Comp>
         </div>
      </>
   );
}