import React from "react";
import Image from "next/image";
import NB_HP from "./components/NB_HP/page";

export default function HomePage() {
  return (


      // <div className="container">
      <div className="bg-[url('/hp-image.png')] w-[1920px] h-[950px] bg-no-repeat bg-cover ">
  
        {/* Applying background image and adding styles in css */}

        {/* Inserted Navbar component over background image settings */} 

        <NB_HP/>

        {/* Section contains an image and tex with flex property */}  
        
        <div className="flex">

        <div className="flex items-center">

        <div className="ml-[250px]">
          <Image src={"/H-image2.png"} alt="Image containing vertical line and three icons" 
          width={25.28} height={500}/>
        </div>

        <div className=" w-[472px] h-[356px] ml-[50px] text-white">
          <p className="w-[300px] h-[40px] font-normal text-[32px]  leading-[40px]">Its Quick & Amusing!</p><br />
          <h1 className="w-[472px] h-[136px] leading-[68px] font-bold text-[60px]">The Art of speed food Quality</h1><br />
          <p className="w-[418px] h-[48px] font-normal text-[16px] leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p> <br />
          <button className="w-[190px] h-[60px] text-white border rounded-[30px] border-[#FF9F0D] bg-[#FF9F0D]">See Menu</button>
        </div>

        </div>

      <div className="ml-[450px] my-[200px]">
      <Image src={"/H-image.png"}alt='A dish containing boiled eggs and rice and two leaves' 
             width={200} height={450}/>
      </div>

      </div>


      </div>
      

  
  );
}
