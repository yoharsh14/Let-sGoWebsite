"use client";

import { useEffect, useState, useRef } from "react";
export default function Figures() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const boxcss =
    " w-full h-[40%] py-6 bg-figureBg rounded-lg flex flex-col justify-end items-center overflow-hidden border-2 border-fadedWhite";
  const numberCss =
    "desktop:text-7xl sm:text-5xl mobile:text-2xl p-3 font-black text-center";
  const textCss =
    "desktop:text-4xl sm:text-2xl mobile:text-xl text-fadedWhite text-center";
  return (
    <div
      ref={elementRef}
      className="w-full flex flex-col justify-center items-center pt-5 mainBody  tracking-widest"
    >
      <div className="flex w-[65%] h-[1000px] rounded-xl justify-center gap-4 figure desktop:text-6xl sm:text-3xl mobile:text-2xl">
        <div className="flex flex-col w-[35%] h-full gap-4 ">
          <div className={`${boxcss} relative card`}>
            <div className={` ${!isVisible ? "novisible" : "visible"} `}>
              <h1 className={numberCss}>90+</h1>
              <h1 className={textCss}>Projects</h1>
            </div>
          </div>
          <div className={`${boxcss} relative card`}>
            <div className={`${!isVisible ? "novisible" : "visible"} `}>
              <h1 className={numberCss}>70+</h1>
              <h1 className={textCss}>Clients</h1>
            </div>
          </div>
        </div>

        <div className="w-[35%] h-full gap-4 flex flex-col justify-center items-center">
          <div className={`${boxcss} relative card`}>
            <div className={`${!isVisible ? "novisible" : "visible"}`}>
              <h1 className={numberCss}>98%</h1>
              <h1 className={textCss}>Retentions</h1>
            </div>
          </div>
          <div className={`${boxcss} relative card`}>
            <div className={`${!isVisible ? "novisible" : "visible"} `}>
              <h1 className={numberCss}>60+</h1>
              <h1 className={textCss}>Experts</h1>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
          .mainBody{
            font-family: "DM Serif Text", serif;
          }
          
          {/* .novisible{
           top:380px;
          }
            .visible{
            animation: move 1s ease-out;
            top:290px;
            }
            @keyframes move{
              from {top:380px}
              to {top:290px} */}
            }
          `}
      </style>
    </div>
  );
}
