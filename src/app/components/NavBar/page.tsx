import Link from "next/link";
import Image from "next/image";
// import { FaSearch } from "react-icons/fa";
// import { AiOutlineUser } from "react-icons/ai";
// import { PiTote } from "react-icons/pi";

export default function NavBar() {
  return (
   
      <nav id="navbar">

<h1 className="w-[109px] h-[32px] mt-[4px] pb-[4px] font-bold text-[24px] ml-[605px] leading-[24px]  text-white">
          <Image src={"/Foodtuck.png"} alt="" width={109} height={32}/>
          </h1>

        <div className="navdiv">
          
          

          <div className="w-[508px] h-[24px] mt-[20px]  text-white">
            
            <Link className=" text-[#FF9F0D] " href="/HPbgImges/HPbgImg_1">
              Home
            </Link>

            <Link className="ml-[25px]" href="/Menu">
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


          {/* <div className="flex mt-[4px] ">
          <FaSearch className="w-[48px] h-[48px] ml-[318px] " />
          <AiOutlineUser className="w-[24px] h-[24px] ml-[40px]  bg-white" />
          <PiTote className="w-[24px] h-[24px] ml-[40px]  bg-white"/>
          </div> */}


          <div className=" mt-[4px]">
            <ul className="flex ml-[700px] gap-7">
              <li><Image src={"/MagnifyingGlass.png"} alt="" width={24} height={24} /></li>
              <li><Image src={"/User.png"} alt="" width={24} height={24} /></li>
              <li><Image src={"/Tote.png"} alt="" width={24} height={24} /></li>
            </ul>
          </div>

          
        </div>
      </nav>
    
  );
}
