import Proyect from "./proyect";

export default function Proyects() {

   return (
      <>
         <h2 className="text-black dark:text-white text-2xl p-8 font-Inter font-extralight border-b-2 border-gray-300 dark:border-gray-700 mb-4
         sm:w-[500px] lg:w-[700px]">
            Projects
         </h2>
         <div className="">
            <Proyect title="title proyect" img="https://th.bing.com/th/id/R.18f14463a91f8316ec8daea09ab5baaf?rik=1ONxPv6onaga7A&pid=ImgRaw&r=0"
               desc="Lorem ipsum dolor " link={""}
            />
            <Proyect title="title proyect 2" img="https://th.bing.com/th/id/R.18f14463a91f8316ec8daea09ab5baaf?rik=1ONxPv6onaga7A&pid=ImgRaw&r=0"
               desc="Lorem ipsum dolor " link={""}
            />
            <Proyect title="title proyect 3" img="https://th.bing.com/th/id/R.18f14463a91f8316ec8daea09ab5baaf?rik=1ONxPv6onaga7A&pid=ImgRaw&r=0"
               desc="Lorem ipsum dolor " link={""}
            />

         </div>
      </>
   );
}
