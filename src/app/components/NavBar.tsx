import Link from "next/link";
import Image from "next/image";
// import { FaSearch } from "react-icons/fa";
// import { AiOutlineUser } from "react-icons/ai";
// import { PiTote } from "react-icons/pi";

export default function NavBar() {
  return (
    
      <div className="w-[1920px] h-[90px] bg-black flex ">

        <div className="w-[1320px] h-[32px] mt-[29px] ml-[300px] flex">
          
          <h1 className="w-[109px] h-[32px] mt-[4px] font-bold text-[24px] leading-[24px] text-white">
          <Image src={"/Foodtuck.png"} alt="" width={109} height={32} />

          </h1>

          <div className="w-[508px] h-[24px] mt-[4px] ml-[151px] text-white">
            <Link className="ml-[30px] text-[#FF9F0D] " href="/Home">
              Home
            </Link>
            <Link className="ml-[75px]" href="/Menu">
              Menu
            </Link>
            <Link className="ml-[75px]" href="/Blog">
              Blog
            </Link>
            <Link className="ml-[75px]" href="/Pages">
              Pages
            </Link>
            <Link className="ml-[75px]" href="/About">
              About
            </Link>
            <Link className="ml-[75px]" href="/Shop">
              Shop
            </Link>
            <Link className="ml-[75px]" href="/Contact">
              Contact
            </Link>
          </div>
          {/* <div className="flex mt-[4px] ">
          <FaSearch className="w-[48px] h-[48px] ml-[318px] " />
          <AiOutlineUser className="w-[24px] h-[24px] ml-[40px]  bg-white" />
          <PiTote className="w-[24px] h-[24px] ml-[40px]  bg-white"/>
          </div> */}
          <div className=" mt-[4px]">
            <ul className="flex ml-[400px] gap-7">
              <li><Image src={"/MagnifyingGlass.png"} alt="" width={24} height={24} /></li>
              <li><Image src={"/User.png"} alt="" width={24} height={24} /></li>
              <li><Image src={"/Tote.png"} alt="" width={24} height={24} /></li>
            </ul>
          
          </div>
          
        </div>
      </div>
    
  );
}
