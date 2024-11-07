
export default function Skill_Comp({ skill, children }) {

   return (
      <>
         {/* <div className="text-black dark:text-white flex h-16 justify-center items-center border-4 border-indigo-500"> */}
         <div className="w-36 h-16 flex justify-center items-center relative rounded-2xl border-4 text-black dark:text-white
         
         ">
            <div className="absolute left-3">
               {children}
            </div>
            <h3 className="w-auto max-w-[70px] pl-3 text-center ">{skill}</h3>
         </div>
      </>
   );
}