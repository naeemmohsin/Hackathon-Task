import React from "react";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      <div className="w-[1320px] h-[628px] ml-[300px] py-[531px] grid grid-cols-2 grid-rows-1">
        <div>
          <Image src={"/menu-image.png"} alt="" width={448} height={626} />
        </div>

        <div>
          <div>
            <Image src={"/Coffee.png"} alt="" width={24} height={24} />
            <h1 className="w-[294px] h-[56px] font-bold text-[48px]">
              Starter Menu
            </h1>
          </div>

          <div>
            <li>
              <h1>Alder Grilled Chinook Salmon</h1>
            </li>
            <li>Toasted French bread topped with romano, cheddar</li>
            <li>560 CAL</li>
          </div>

          <div>
            <li>
              <h1>Berries and creme tart</h1>
            </li>
            <li>Gorgonzola, ricotta, mozzarella, taleggio</li>
            <li>700 CAL</li>
          </div>

          <div>
            <li>
              <h1>Spicy Vegan Potato Curry</h1>
            </li>
            <li>Spreadable cream cheese, crumbled blue cheese</li>
            <li>560 CAL</li>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}

      {/* <div>
        <div className="w-[1320px] h-[628px] ml-[300px] py-[531px] grid grid-cols-2 grid-rows-1">
          <div>
            <div>
              <Image src={"/Coffee.png"} alt="" width={24} height={24} />
              <h1 className="w-[294px] h-[56px] font-bold text-[48px]">
                Starter Menu
              </h1>
            </div>

            <div>
              <li>
                <h1>Alder Grilled Chinook Salmon</h1>
              </li>
              <li>Toasted French bread topped with romano, cheddar</li>
              <li>560 CAL</li>
            </div>

            <div>
              <li>
                <h1>Berries and creme tart</h1>
              </li>
              <li>Gorgonzola, ricotta, mozzarella, taleggio</li>
              <li>700 CAL</li>
            </div>

            <div>
              <li>
                <h1>Spicy Vegan Potato Curry</h1>
              </li>
              <li>Spreadable cream cheese, crumbled blue cheese</li>
              <li>560 CAL</li>
            </div>
          </div>

          <div>
            <Image src={"/menu-image.png"} alt="" width={448} height={626} />
          </div>
        </div>
      </div>

<br />
<br />
    <div className="w-[1920px] h-[468px]">
      <div className="w-[1314px] h-[255px] grid grid-cols-4 grid-rows-1">
        <div>
        <Image src={"/PS.png"} alt="" width={88} height={68} />
       <a> 420</a>
       <a>Professional Chefs </a>   
        </div>

        <div>
        <Image src={"/PS.png"} alt="" width={88} height={68} />
       <a> 420</a>
       <a>Professional Chefs </a>   
        </div>

        <div>
        <Image src={"/PS.png"} alt="" width={88} height={68} />
       <a> 420</a>
       <a>Professional Chefs </a>   
        </div>
      

      </div>
    </div>








 */}


    </div>
  );
}


