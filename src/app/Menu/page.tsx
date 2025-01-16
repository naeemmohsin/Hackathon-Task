import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar/page";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

export default function Menu() {
  return (
    <div className="w-[1920px] h-[5282px]">
      <NavBar/>
      <Header/>

      {/* /************************************************************************************ */}
      <div className="w-[1320px] h-[628px] ml-[300px] mt-[121px] grid grid-cols-2 grid-rows-1 items-center">

        <div>
          <Image src={"/menu-image.png"} alt="" width={448} height={626} />
        </div>

        <div>

          <div>
            <Image src={"/Coffee.png"} alt="" width={24} height={24} />
            <h1 className="w-[294px] h-[56px] font-bold text-[48px] leading-[56px]"> 
            Starter Menu 
            </h1>
          </div>

          <br />

          <div className=" grid grid-cols-2 grid-rows-4 gap-x-32">

          <div className="w-[760px] h-[111px] leading-8">            
            <p><h1 className="font-bold text-[24px] ">Alder Grilled Chinook Salmon</h1></p>
            <p className="font-normal text-[16px] leading-6">Toasted French bread topped with romano, cheddar</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>           
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            32$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8">Berries and creme tart</h1></p>
            <p className="font-normal text-[16px] leading-6">Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className="font-normal text-[16px] leading-6">700 CAL</p>
          
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            43$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8">Tormentoso Bush Pizza Pintoage</h1></p>
            <p className="font-normal text-[16px] leading-6">Ground cumin, avocados, peeled and cubed</p>
            <p className="font-normal text-[16px] leading-6">1000 CAL</p>
          
          </div>

          
          <div className="font-bold text-[24px] text-[#FF9F0D]">
            14$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8">Spicy Vegan Potato Curry</h1></p>
            <p className="font-normal text-[16px] leading-6">Spreadable cream cheese, crumbled blue cheese</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>
          
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            35$
          </div>

          
          </div>

        </div>
      </div>

      {/* *********************************************************************************************** */}

      <div className="w-[1320px] h-[628px] ml-[300px] py-[531px] grid grid-cols-2 grid-rows-1 items-center ">
        
        <div>
          <div>
            <Image src={"/Coffee.png"} alt="" width={24} height={24} />
            <h1 className="w-[294px] h-[56px] font-bold text-[48px]">
            Main Course
            </h1>
          </div>
          <br />

          <div className=" grid grid-cols-2 grid-rows-4 gap-x-32">

          <div className="w-[760px] h-[111px] leading-8">
            
            <p><h1 className="font-bold text-[24px] ">Optic Big Breakfast Combo Menu</h1></p>
            <p className="font-normal text-[16px] leading-6">Toasted French bread topped with romano, cheddar</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>
            
          </div>
          
          <div className="font-bold text-[24px] text-[#FF9F0D]">
            32$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8">Cashew Chicken With Stir-Fry</h1></p>
            <p className="font-normal text-[16px] leading-6">Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className="font-normal text-[16px] leading-6">700 CAL</p>
          
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            43$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8"> Vegetables & Green Salad</h1></p>
            <p className="font-normal text-[16px] leading-6">Ground cumin, avocados, peeled and cubed</p>
            <p className="font-normal text-[16px] leading-6">1000 CAL</p>
          
          </div>

          
          <div className="font-bold text-[24px] text-[#FF9F0D]">
            14$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8">Spicy Vegan Potato Curry</h1></p>
            <p className="font-normal text-[16px] leading-6">Spreadable cream cheese, crumbled blue cheese</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>
          
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            35$
          </div>

          
          </div>
        </div>

        <div>
          <Image src={"/Menu-Image2.png"} alt="" width={448} height={626} />
        </div>

      </div>
      {/* **************************************************************************** */}

      <div className="MenuBgImg2">

        <div className="w-[1314px] h-[255px] ml-[307px] grid grid-cols-4 grid-rows-1 py-32  text-white"> 

        <div>
        <Image src={"/PS.png"} alt="" width={120} height={119} />
        <h1 className=" font-bold text-[40px] ml-[25px]">420</h1>
        <p>Professional Chefs</p>
        </div>
        
        <div>
        <Image src={"/Food.png"} alt="" width={120} height={119} />
        <h1 className=" font-bold text-[40px] ml-[25px]">320</h1>
        <p>Items Of Food</p>
        </div>

        <div>
        <Image src={"/Fork.png"} alt="" width={120} height={119} />
        <h1 className=" font-bold text-[40px] ml-[25px]">30+</h1>
        <p>Years Of Experienced</p>
        </div>

        <div>
        <Image src={"/Customers.png"} alt="" width={120} height={119} />
        <h1 className=" font-bold text-[40px] ml-[25px]">220</h1>
        <p>Happy Customers</p>
        </div>

        </div>

     </div>

        {/* ****************************************************************** */}

        <div className="w-[1320px] h-[628px] ml-[300px]  grid grid-cols-2 grid-rows-1 mt-32 mb-32 items-center">

        <div>
          <Image src={"/Desert.Image.png"} alt="" width={448} height={626} />
        </div>

        <div>

          <div>
            <Image src={"/Coffee.png"} alt="" width={24} height={24} />
            <h1 className="w-[294px] h-[56px] font-bold text-[48px] leading-[56px]">
            Dessert
            </h1>
          </div>

          <br />

          <div className=" grid grid-cols-2 grid-rows-4 gap-x-32">

          <div className="w-[760px] h-[111px] leading-8">           
            <p><h1 className="font-bold text-[24px] ">Fig and lemon cake</h1></p>
            <p className="font-normal text-[16px] leading-6">Toasted French bread topped with romano, cheddar</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>           
          </div>
          
          <div className="font-bold text-[24px] text-[#FF9F0D]">
            32$
          </div>
          

          <div className="w-[760px] h-[111px] leading-8">
          <p><h1 className="font-bold text-[24px] leading-8">Creamy mascarpone cake</h1></p>
            <p className="font-normal text-[16px] leading-6">Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className="font-normal text-[16px] leading-6">700 CAL</p>         
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            43$
          </div>

          <div className="w-[760px] h-[111px] leading-8">
          <p><h1 className="font-bold text-[24px] leading-8">Pastry, blueberries, lemon juice</h1></p>
            <p className="font-normal text-[16px] leading-6">Ground cumin, avocados, peeled and cubed</p>
            <p className="font-normal text-[16px] leading-6">1000 CAL</p>         
          </div>
        
          <div className="font-bold text-[24px] text-[#FF9F0D]">
            14$
          </div>


          <div className="w-[760px] h-[111px] leading-8">
          <p><h1 className="font-bold text-[24px] leading-8">Pain au chocolat</h1></p>
            <p className="font-normal text-[16px] leading-6">Spreadable cream cheese, crumbled blue cheese</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>        
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            35$
          </div>
</div>
</div>
</div>
{/* *************************************************************************************************/}
<div className="w-[1320px] h-[628px] ml-[300px] mt-[200px] mb-[200px] grid grid-cols-2 grid-rows-1 items-center ">
        
        <div>
          <div>
            <Image src={"/Coffee.png"} alt="" width={24} height={24} />
            <h1 className="w-[294px] h-[56px] font-bold text-[48px]">
            Drinks
            </h1>
          </div>
          <br />

          <div className=" grid grid-cols-2 grid-rows-4 gap-x-32">

          <div className="w-[760px] h-[111px] leading-8">
            
            <p><h1 className="font-bold text-[24px] ">Caffè macchiato</h1></p>
            <p className="font-normal text-[16px] leading-6">Toasted French bread topped with romano, cheddar</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>
            
          </div>
          
          <div className="font-bold text-[24px] text-[#FF9F0D]">
            32$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8">Aperol Spritz Capacianno</h1></p>
            <p className="font-normal text-[16px] leading-6">Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className="font-normal text-[16px] leading-6">700 CAL</p>
          
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            43$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8"> Caffe Latte Campuri</h1></p>
            <p className="font-normal text-[16px] leading-6">Ground cumin, avocados, peeled and cubed</p>
            <p className="font-normal text-[16px] leading-6">1000 CAL</p>
          
          </div>

          
          <div className="font-bold text-[24px] text-[#FF9F0D]">
            14$
          </div>

          <div className="w-[760px] h-[111px] leading-8">

          <p><h1 className="font-bold text-[24px] leading-8">Tormentoso BushTea Pintoage</h1></p>
            <p className="font-normal text-[16px] leading-6">Spreadable cream cheese, crumbled blue cheese</p>
            <p className="font-normal text-[16px] leading-6">560 CAL</p>
          
          </div>

          <div className="font-bold text-[24px] text-[#FF9F0D]">
            35$
          </div>
         
          </div>
        </div>

        <div>
          <Image src={"/Drinks-Image.png"} alt="" width={448} height={626} />
        </div>

      </div>
      {/* ******************************************************************* */}
       
       
      <div>
      <div className="text-center">
           <h3 className="font-normal text-[18px]">Partners & Clients</h3>
           <p className="font-bold text-[48px]"> We work with the best pepole</p>
      </div>
        <div className="grid grid-cols-6 grid-rows-1 items-center">
        <Image src={"/Resturant.png"} alt="" width={240} height={130} />
        <Image src={"/Bakery.png"} alt="" width={240} height={130} />
        <Image src={"/Fork&Spoon.png"} alt="" width={240} height={130} />
        <Image src={"/WolfCoffee.png"} alt="" width={240} height={130} />
        <Image src={"/Bistro.png"} alt="" width={240} height={130} />
        <Image src={"/Bakery2.png"} alt="" width={240} height={130} />
        </div>

      </div>

       
 <Footer/>
    </div>
  );
}


