import { FaCode } from "react-icons/fa";
import Skill_Comp from "./skillcomponent";

export default function Skills() {

   return (
      <>
         <h2 className="text-black dark:text-white text-2xl p-8 font-Inter font-light border-b-2 border-gray-300 dark:border-gray-700 mb-4
         sm:w-96 lg:w-[700px]">
            My Skills
         </h2>


         <div className="grid grid-cols-2 grid-flow-row gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <Skill_Comp skill={"SQL"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Python"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"JavaScript"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"React"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"HTML"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"CSS"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Django"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Bootstrap"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Tailwind CSS"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Git"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"GitHub"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"VS Code"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Jupyter Notebook"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Google Colab"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Microsoft Excel"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Microsoft PowerPoint"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Microsoft Word"}>
               <FaCode />
            </Skill_Comp>
            <Skill_Comp skill={"Google Sheets"}>
               <FaCode />
            </Skill_Comp>
         </div>
      </>
   );
}