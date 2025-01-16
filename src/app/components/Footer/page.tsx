import Image from "next/image";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-[1920px] h-[774px] text-white bg-black">
      {/* Footer Upper Container */}
      <div  className="w-[1169px] h-[112px] ml-[350px] py-[130px] gap-x-[250px] rounded  flex items-center justify-center">
        <div>
          <h1 className=" font-bold text-[32px]">
            Still You Need Our Support ?
          </h1>
          <p className=" font-normal text-[16px]">
            {" "}
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        <div>
          <form className=" ">
            <input
              className=" w-[296px] h-[55.86px]   bg-[#FF9F0D] text-white text-[16px] "
              type="text"
              placeholder="Enter Your Email"
            />{" "}
            <button className= "w-[163px] h-[55.86px]   bg-white ml-[-4] text-[#FF9F0D]">
              Sbscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Container */}
      <div className="w-[1320px] h-[331px] ml-[300px] flex  gap-x-28 ">
        <div>
          <div>
            <h1 className="font-bold text-[20px]">About Us.</h1>
            <br />
            <p className="w-[395.2px] h-[103.69px]  font-normal text-[18px]">
              orporate clients and leisure travelers hasbeen relying on
              Groundlink for dependablesafe, and professional chauffeured
              carservice in major cities across World.
            </p>
          </div>
          <br />

          {/* Footer Bottom Container 1st Section */}
          <div className="flex items-center gap-4">
            <Image src={"/Watch.png"} alt="" width={77.23} height={70.79} />

            <ul>
              <li>Opening Houres</li>
              <li>Mon-Sat(8.00-6.00)</li>
              <li>Sunday-Closed</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Container 2nd Section */}
        <div>
          <h1 className="font-bold text-[20px]"> Useful Links</h1>
          <ul className="my-4">
            <li className="my-2">About</li>
            <li className="my-2">News</li>
            <li className="my-2">Patners</li>
            <li className="my-2">Team</li>
            <li className="my-2">Menu</li>
            <li className="my-2">Contact</li>
          </ul>
        </div>

        {/* Footer Bottom Container 3rd Section */}
        <div>
          <h1 className="font-bold text-[20px]"> Help?</h1>
          <ul className="my-4">
            <li className="my-2">FAQ</li>
            <li className="my-2">Term & Condition</li>
            <li className="my-2">Reporting</li>
            <li className="my-2">Documentation</li>
            <li className="my-2">Support Policy</li>
            <li className="my-2">Privacy</li>
          </ul>
        </div>

        {/* Footer Bottom Container 4th Section */}

        {/* Container Containing three Sections(Image+text) */}
        <div>
          {/* First Section */}
          <h1 className="font-bold text-[20px]"> Recent Post</h1>
          <div className="flex items-center gap-4 ">
            <Image
              src={"/footer-recentpost-img.png"}
              alt=""
              width={77.23}
              height={70.79}
              className="my-3"
            />
            <ul>
              <p className="flex">
                Is fastfood good for <br /> your body?
              </p>
              <p>February 28,2022</p>
            </ul>
          </div>

          {/* Second Section */}

          <div className="flex items-center gap-4">
            <Image
              src={"/footer-recentpost-img.png"}
              alt=""
              width={77.23}
              height={70.79}
              className="my-3"
            />
            <ul>
              <p className="flex">
                Change your food habit <br />
                With organic food
              </p>
              <p>February 28,2022</p>
            </ul>
          </div>

          {/* Third Section */}
          <div className="flex items-center gap-4 ">
            <Image
              src={"/footer-recentpost-img.png"}
              alt=""
              width={77.23}
              height={70.79}
              className="my-3"
            />
            <ul>
              <p className="flex">
                Do you like fastfood for <br />
                your life?
              </p>
              <p>February 28,2022</p>
            </ul>
          </div>
        </div>
      </div>


      <div className="w-[1920px] h-[99px] bg-[#4F4F4F] flex items-center my-40">

           <div className="w-[1318px] h-[33px]">
           <p className="text-[16px] ml-[300px]">Copyright © 2022 by Ayeman. All Rights Reserved.
           </p>
           </div>

      <div className=" flex gap-4 ml-[100px]">
        <TiSocialFacebook  className="w-[36px] h-[33px]"/>
        <FaTwitter className="w-[36px] h-[33px]"/>
        <FaInstagram className="w-[36px] h-[33px]"/>
        <RiYoutubeLine className="w-[36px] h-[33px]"/>
        <FaPinterest className="w-[36px] h-[33px]"/>
      </div>

      </div>

      
    </footer>
  );
}
