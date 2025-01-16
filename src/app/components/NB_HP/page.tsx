import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NB_HP() {
  return (
    
    <nav className=" ml-[300px] py-[32px] bg-cover bg-no-repeat ">
      
              <div className="w-[109px] h-[32px] mt-[4px] pb-[4px] font-bold text-[24px] ml-[605px] leading-[24px]  text-white">
              <Image 
                src={"/Foodtuck.png"} 
                alt="" width={109} 
                height={32} />
              </div>
      <br />
      <br />

      <div className="w-[1320px] h-[32px] flex ">
      <div className="mt-[20px]  text-white ">
          <Link href={"/"} className="text-[#FF9F0D]">
            Home
          </Link>

          <Link className="ml-[25px]" href="/Menu/">
            Menu
          </Link>

          <Link className="ml-[25px]" href="/Blog">
            Blog
          </Link>

          <Link className="ml-[25px]" href="/Pages">
            Pages
          </Link>

          <Link className="ml-[25px]" href="/About">
            About
          </Link>

          <Link className="ml-[25px]" href="/Shop">
            Shop
          </Link>

          <Link className="ml-[25px]" href="/Contact">
            Contact
          </Link>
        </div>

           {/* Search place holder */}
        <div className="ml-[500px] relative flex items-center">                 
              <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-[280px] p-[11px] border border-[#FF9F0D] bg-[#0D0D0D] rounded-[27px]"/>

        <div className=" cursor-pointer m-2">
                 <Image
                  src="/Search.png" // search icon path
                  alt="Search"
                  width={24}
                  height={24} />
        </div>
        </div>
                 <Image 
                  src={"/Tote.png"} // Cart icon
                  alt="" 
                  width={24} 
                  height={24} />
    </div>
    </nav>
  );
}
