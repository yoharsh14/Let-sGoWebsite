"use client";
import Faq from "../components/faq";
export default function AboutUs() {
  const h1Style =
    "desktop:text-5xl md:text-2xl sm:xl mobile:lg mobile:px-4 font-extrabold dark:text-white  title";
  const textStyle =
    "desktop:text-xl md:text-lg sm:text-md mobile:text-sm font-bold dark:text-white  mobile:px-4 texthide absolute";
  const boxCss =
    " rounded-xl flex flex-col justify-center gap-3 items-center overflow-hidden border-4 border-matteBlack hover:border-0 bg-figureBg hover:bg-hoverWhyusCard myDiv relative";
  return (
    <div>
      <div className=" gradient(ellipse_at_center,#020024_40%,#0303_70%,#000000_59%)]  flex flex-col justify-center items-center gap-6 mainBody">
        <div className="flex flex-col justify-center items-center w-3/4 gap-3 p-5">
          <h1 class="desktop:text-9xl md:text-8xl sm:text-7xl mobile:text-5xl font-black text-gray-900 leading-tight mb-2 pb-4 relative">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              About Us
            </span>
          </h1>
          <div
            className={`desktop:text-xl md:text-lg sm:text-md mobile:text-sm font-bold dark:text-white  ps-2`}
          >
            Welcome to Let&apos;s Go Solutions, a fast-growing software and IT
            services company based in Gurgaon Cyber City, India. Founded with
            the vision of turning innovative ideas into reality, we specialize
            in delivering cutting-edge technology solutions that drive business
            success.
          </div>
        </div>
        <div className="w-3/4 h-[800px] flex justify-center items-center m-auto gap-4 ">
          <div className="flex flex-col w-1/3 h-full gap-2">
            <div className={`${boxCss} h-1/2 `}>
              <h1 className={`${h1Style}`}>Experties</h1>
              <div className={`${textStyle}`}>
                <p>1. Tailored IT solutions for your business.</p>
                <p>2. Latest technologies for cutting-edge solutions.</p>
                <p>3. Data-driven strategies for informed decisions.</p>
              </div>
            </div>
            <div className={`${boxCss} h-1/2 `}>
              <h1 className={`${h1Style}`}>Result</h1>
              <div className={`${textStyle}`}>
                <p>1. Proven track record of successful projects.</p>
                <p>2. Measurable outcomes for clear ROI.</p>
                <p>3. Scalable solutions for long-term growth.</p>
              </div>
            </div>
          </div>
          <div className={`${boxCss} h-full desktop:flex  mobile:hidden`}>
            <h1 className={`${h1Style}`}> Why Us</h1>
            <div
              className={`desktop:text-xl md:text-lg sm:text-md mobile:text-sm font-bold dark:text-white ps-2 absolute whyus`}
            >
              <p>1. Personalized service for your needs. </p>
              <p>2. Collaborative approach for shared goals.</p>
              <p>3. Cost-effective solutions for maximum ROI.</p>
            </div>
          </div>
          <div className="flex flex-col w-1/3 h-full gap-2">
            <div className={`${boxCss} h-1/2`}>
              <h1 className={`${h1Style}`}>Innovation</h1>
              <div className={`${textStyle}`}>
                <p>1. Creative problem-solving for unique solutions.</p>
                <p>2. Emerging trends for future-proof solutions.</p>
                <p>3. Continuous improvement for better solutions.</p>
              </div>
            </div>
            <div className={`${boxCss} h-1/2`}>
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
      <style>
        {`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      .mainBody{
        font-family: "Montserrat", sans-serif;
      }
        .texthide {
  top: 385px;
}
          .whyus {
  top: 790px;
}
.myDiv:hover h1{
  animation:hiding 0.5s ease-in;
  opacity:0;
}
@keyframes hiding{
 from {opacity:1}
  to {opacity:0}
}
.myDiv:hover .texthide{
  animation:movin 1s ease-out;
  top:100px;
}
@keyframes movin{
from {top:380px}
to {top:100px}
}
.myDiv:hover .whyus{
  animation:movewhyus 0.7s ease-out;
  top:350px;
}

@keyframes movewhyus{
from {top:790px}
to {top:350px}
}


`}
      </style>
    </div>
  );
}
