import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NB_HP.module.css"


export default function NB_HP() {
  return (
    <nav className={styles.NB_HP}>
      <h1 className="w-[109px] h-[32px] mt-[4px] pb-[4px] font-bold text-[24px] ml-[605px] leading-[24px]  text-white">
        <Image src={"/Foodtuck.png"} alt="" width={109} height={32} />
      </h1>
      <br />
      <br />

      <div className="main">
        <div className="w-[508px] h-[24px] mt-[20px]  text-white">
          <Link className=" text-[#FF9F0D] " href="/Home">
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

        <div className="search-input-container">
          <input type="text" placeholder="Search..." className="search-input" />

          <div className="search-icon">
            <Image
              src="/Search.png" // search icon path
              alt="Search"
              width={24}
              height={24}
            />
          </div>
        </div>
        <Image src={"/Tote.png"} alt="" width={24} height={24} />
      </div>
    </nav>
  );
}
