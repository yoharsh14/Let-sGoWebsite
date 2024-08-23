"use client";
import Faq from "../components/faq";
import Map from "./map";
export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center w-3/4 gap-3 p-5">
        <h1 className="text-5xl font-extrabold dark:text-white">About Us</h1>
        <div>
          Lets go solutions is a leading name in Metaverse and Game Development
          in India and US. With industry-leading experts on our side and vast
          experience of working on projects of different scales, we are ready to
          develop a business solution that lets you achieve your business goals
          with ease. Our wide gamut of clients includes Fortune 500-listers to
          budding start-ups with lets go solutions successfully serving their
          business needs.
        </div>
      </div>
      <div className="w-3/4 h-svh flex justify-center items-center m-auto gap-4 ">
        <div className="flex flex-col w-1/3 h-[90%] gap-4">
          <div className="bg-[rgba(0,0,0,0.7)] h-1/2  rounded-xl border-4 border-green">
            Experties
          </div>
          <div className="bg-[rgba(0,0,0,0.7)] h-1/2 rounded-xl border-4 border-white">
            Result
          </div>
        </div>
        <div className="w-1/3 bg-[rgba(0,0,0,0.7)] h-[90%] p-4 rounded-xl border-4 border-white">
          Why Us
        </div>
        <div className="flex flex-col w-1/3 h-[90%] gap-4">
          <div className="bg-[rgba(0,0,0,0.7)] h-1/2 rounded-xl border-4 border-white">
            Innovation
          </div>
          <div className="bg-[rgba(0,0,0,0.7)] h-1/2  rounded-xl border-4 border-white">
            Trust
          </div>
        </div>
      </div>
      <Faq />
      {/* <div className=""> */}
      {/* <Map/> */}
      {/* </div> */}
    </div>
  );
}
