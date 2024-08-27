"use client";
import Faq from "../components/faq";
import Map from "./map";
export default function AboutUs() {
  const h1Style =
    "desktop:text-5xl md:text-2xl sm:xl mobile:lg font-extrabold dark:text-white";
  const textStyle =
    "desktop:text-xl md:text-lg sm:text-md mobile:text-sm font-bold dark:text-white  ps-2";
  return (
    <div>
      <div className=" bg-[radial-gradient(ellipse_at_center,#020024_40%,#0303_60%,#000000_69%)] flex flex-col justify-center items-center gap-6 bg-">
        <div className="flex flex-col justify-center items-center w-3/4 gap-3 p-5">
          <h1 className="text-5xl font-extrabold dark:text-white">About Us</h1>
          <div className={`${textStyle}`}>
            Lets go solutions is a leading name in Metaverse and Game
            Development in India and US. With industry-leading experts on our
            side and vast experience of working on projects of different scales,
            we are ready to develop a business solution that lets you achieve
            your business goals with ease. Our wide gamut of clients includes
            Fortune 500-listers to budding start-ups with lets go solutions
            successfully serving their business needs.
          </div>
        </div>
        <div className="w-3/4 h-[800px] flex justify-center items-center m-auto gap-4 ">
          <div className="flex flex-col w-1/3 h-full gap-2">
            <div className=" h-1/2  rounded-xl flex flex-col justify-center gap-3 items-center overflow-hidden border-4 border-matteBlack">
              <h1 className={`${h1Style}`}>Experties</h1>
              <div className={`${textStyle}`}>
                <p>1. Tailored IT solutions for your business.</p>
                <p>2. Latest technologies for cutting-edge solutions.</p>
                <p>3. Data-driven strategies for informed decisions.</p>
              </div>
            </div>
            <div className="h-1/2  rounded-xl flex flex-col justify-center gap-2 items-center overflow-hidden border-4 border-matteBlack">
              <h1 className={`${h1Style}`}>Result</h1>
              <div className={`${textStyle}`}>
                <p>1. Proven track record of successful projects.</p>
                <p>2. Measurable outcomes for clear ROI.</p>
                <p>3. Scalable solutions for long-term growth.</p>
              </div>
            </div>
          </div>
          <div className=" h-full  rounded-xl flex flex-col justify-center gap-2 items-center overflow-hidden border-4 border-matteBlack">
            <h1 className={`${h1Style}`}> Why Us</h1>
            <div className={`${textStyle}`}>
            <p>1. Personalized service for your needs. </p>
            <p>2. Collaborative approach for shared goals.</p>
            <p>3. Cost-effective solutions for maximum ROI.</p>
            </div>
          </div>
          <div className="flex flex-col w-1/3 h-full gap-2">
            <div className="h-1/2  rounded-xl flex flex-col justify-center gap-2 items-center overflow-hidden border-4 border-matteBlack">
              <h1 className={`${h1Style}`}>Innovation</h1>
              <div className={`${textStyle}`}>
              <p>1. Creative problem-solving for unique solutions.</p>
              <p>2. Emerging trends for future-proof solutions.</p>
              <p>3. Continuous improvement for better solutions.</p>
              </div>
            </div>
            <div className="h-[60%]  rounded-xl flex flex-col justify-center gap-2 items-center overflow-hidden border-4 border-matteBlack">
              <h1 className={`${h1Style}`}>Trust</h1>
              <div className={`${textStyle}`}>
              <p>1. Client-centric approach for strong relationships.</p>
              <p>2. Ethical practices for data security.</p>
              <p>3. Reliable support for consistent service.</p>
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
}
