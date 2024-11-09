
export default function Proyect({ title, img, desc, link }) {

   return (
      <>
         <div className="py-5">
            <img src={img} alt="title" className="h-56 pb-1"/>
            <h3 className="py-1 font-Inter text-black dark:text-white">{title}</h3>
            <p className="py-1 font-Inter text-black dark:text-white">
               {desc}
            </p>
            <button className="border-2 w-24 h-9">
               View
            </button>
         </div>
      </>
   );
}