import Image from "next/image";
import Header from "../components/Header/page";
import NavBar from "../components/NavBar/page";
import Footer from "../components/Footer/page";
export default function SignUP() {
  return (
    <div className="w-[1920px] h-[2048px]">
      <div >
        <NavBar/>
        <Header/>

        <div className="w-[424px] h-[624px]  ml-[743px] mb-20 flex justify-center items-center ">
  
          <div className="w-[371px] h-[530px] relative left-[25px] mt-28 ">
            <div>
              <div className="w-[339px] h-[30px]">
                <p className="font-bold  text-[20px] text-black mt-[30px]">
                  Sign Up
                </p>
              </div>
            </div>

            <div className="w-[370px]  h-[104px] gap-[40px]">
              <div className="w-[370px] h-[176px] gap-[40px]">
                <div className="w-[370px] h-[32px] gap-[8px]">
                  <div className="w-[49px] h-[24px] mt-[30px]">
                    {/* Name Input   */}
                    <form>
                      <input type="text" placeholder="Name" />
                    </form>
                  </div>

                  <div className="w-[360px] h-[44px] gap-[8px]">
                    <div className="w-[41px] h-[24px] mt-[30px]">
                      {/* Email/Phone No. Input */}
                      <form>
                        <input type="text" placeholder="Email" /> <br />
                      </form>
                    </div>

                    <div className="w-[360px] h-[44px] gap-[8px]">
                      <div className="w-[71px] h-[24px] mt-[30px]">
                        {/* Password Input */}
                        <form>
                          <input type="text" placeholder="Password" />
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              
              <div className="h-[56px] gap-[16px] rounded-[4px] pt-[16px] pr-[122px] pb-[16px] pl-[122px] bg-[#FF9F0D]  text-white ">
                <button className="w-[px] h-[24px] font-medium gap-[10px]">
                  Sign Up
                </button>
                <br />

                <p className=" w-[150px] h-[22px] ml-[120px] mt-[30px] text-black ">
                  Forget password?
                </p>
              </div>


              <br />
              <br />

              <button className="text-center ml-[150px]"> OR</button>
              <br />

              <div className="w-[371px] h-[56px] rounded-[4px] border-spacing-1 pt-[16px] pr-[88px] pb-[16px] pl-[88px] gab-[10px] ">
                <div className="w-[199px] h-[24] gap-[16px] flex">
                  <Image src={"/Google.png"} alt="" width={24} height={24} />
                  <p className="w-[159px] h-[24px] leading-[24px] text-[16px] gap-[10px]">
                    Sign up with Google
                  </p>
                </div>
              </div>


              <div className="w-[371px] h-[56px] rounded-[4px] border-spacing-1 pt-[16px] pr-[88px] pb-[16px] pl-[88px] gab-[10px] ">
                <div className="w-[199px] h-[24] gap-[16px] flex">
                  <Image src={"/Apple.png"} alt="" width={24} height={24} />
                  <p className="w-[159px] h-[24px] leading-[24px] text-[16px] gap-[10px]">
                    Sign up with Apple
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>

        <Footer/>

        <br/>
        <br/>
      </div>
    </div>
  );
}
