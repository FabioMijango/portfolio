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


function AutoPlay() {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   };
   return (
      <div className="slider-container">
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
   );
}

export default AutoPlay;

