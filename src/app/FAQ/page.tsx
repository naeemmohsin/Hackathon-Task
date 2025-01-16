import React from 'react'
import NavBar from '../components/NavBar/page'
import Header from '../components/Header/page'
import Footer from '../components/Footer/page'
// import Image from 'next/image'

export default function FAQ() {
  return (

<div className='w-[1920px] h-[2126px]'> 
  <NavBar/>
  <Header/>


<div className=" w-[1320px] h-[702px] mt-[120px]">

<div  className=" w-[771px] h-[88px] mb-[70px]"> 
  <h1 className=" w-[510px] h-[56px] font-bold text-[48px] ml-[700px]">Questions Looks Here</h1><br />
  <p  className=" w-[771px] h-[24px] font-normal text-[16px] ml-[580px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the </p>
</div>
<br />
<br />

{/* FAQ QA Grid Section */}

<div className=" w-[1320px] h-[558px] grid gap-x-32 grid-cols-2 grid-rows-3 ml-[305px]">
    
      <div className='w-[648px] h-[170px]' >
        <p className='font-bold text-[18px]'>How we serve food?</p>
        <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
          odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      
      <div className='w-[648px] h-[170px]'>
        <p className='font-bold text-[18px]'>How is our food quality?</p>
        <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
          odit expedita eos molestiae ipsa totam quidem?</p>
      </div>

      <div className='w-[648px] h-[170px]'>
        <p className='font-bold text-[18px]'>How do we give home delivery?</p>
        <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
          odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      
      <div className='w-[648px] h-[170px]'>
        <p className='font-bold text-[18px]'>How can we get in touch with you?</p>
        <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
          odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      
      <div className='w-[648px] h-[170px]'>
        <p className='font-bold text-[18px]'>What will be delivered? And When?</p>
        <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
          odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      
      <div className='w-[648px] h-[170px]'>
        <p className='font-bold text-[18px]'>Is this restaurant 24 hours open?</p>
        <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
          odit expedita eos molestiae ipsa totam quidem?</p>
      </div>

</div>
</div>
<Footer/>
</div>
)
}


      
  



