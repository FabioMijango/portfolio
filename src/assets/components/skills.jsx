import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPython } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { PiFileSql } from "react-icons/pi";
import { SiCplusplus, SiGodotengine, SiMongodb } from "react-icons/si";
import { IoLogoDocker, IoLogoReact } from "react-icons/io5";
import Skill_Comp from "./skillcomponent";


export default function Skills() {
   var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      // cssEase: "linear",
      arrows: false,
      responsive: [
         {
           breakpoint: 640,
           settings: {
             slidesToShow: 2,
             
           }
         },
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             
           }
         },
         
       ]
   };

   return (
      <>
         <h2 className="text-black dark:text-white text-2xl p-8 font-Inter font-light border-b-2 border-gray-300 dark:border-gray-700 mb-4
         sm:w-[500px] lg:w-[700px]">
            My Skills
         </h2>

         <div className="slider-container flex-none flex-row w-80 sm:w-[500px] lg:w-[700px] h-20 pt-4">
            <Slider {...settings}>
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
            </Slider>
         </div>

         {/* <div className="grid grid-cols-2 grid-flow-row gap-4 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5">
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
         </div> */}
      </>
   );
}