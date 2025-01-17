import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NB_HP() {
  return (
    <nav className=" ml-[300px] py-[32px] bg-cover bg-no-repeat ">
      <div className="w-[109px] h-[32px] mt-[4px] pb-[4px] font-bold text-[24px] ml-[605px] leading-[24px]  text-white">
        <Image src={"/Foodtuck.png"} alt="" width={109} height={32} />
      </div>
      <br />
      <br />

      <div className="h-[32px] flex items-center justify-between pr-24 w-full mx-auto">
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
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between border-2 rounded-full p-2 px-4">
            <input type="text" placeholder="Search..." className="bg-transparent" />
            <Image
              src="/Search.png" // search icon path
              alt="Search"
              width={24}
              height={24}
              className=""
            />
          </div>
        
        <div className=""> 
          <Image
            src={"/Tote.png"} // Cart icon
            alt=""
            width={24}
            height={24}
          />
        </div>
        </div>
      </div>
    </nav>
  );
}
