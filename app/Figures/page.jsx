"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);
const col1 = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Clients",
    postfix: "+",
    value: "70",
  },
];
const col2 = [
  {
    metric: "Retention",
    value: "100",
    postfix: "%",
  },
  {
    metric: "Experts",
    postfix: "+",
    value: "60",
  },
];

export default function Figures() {
  const boxcss =
    " w-full h-[40%] desktop:py-8 desktop:px-28 sm:py-6 sm:px-28 mobile:py-6 mobile:px-10 bg-figureBg rounded-lg flex flex-col justify-end items-center overflow-hidden border-2 border-fadedWhite";
  const numberCss =
    "desktop:text-7xl sm:text-5xl mobile:text-2xl p-3 font-black text-center";
  const textCss =
    "desktop:text-4xl sm:text-2xl mobile:text-xl text-fadedWhite text-center";

  return (
    <div className="w-full flex flex-col justify-center items-center pt-5 mainBody  tracking-widest">
      <div className="flex w-auto h-[1000px] rounded-xl justify-center gap-4 figure desktop:text-6xl sm:text-3xl mobile:text-2xl">
        <div className="flex flex-col items-center w-[35%] h-full gap-4 ">
          {col1.map((achievement, index) => {
            return (
              <div key={index} className={`${boxcss}`}>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-white desktop:text-4xl sm:text-3xl mobile:text-2xl font-bold flex flex-row p-2">
                    {achievement.prefix}
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={parseInt(achievement.value)}
                      locale="en-US"
                      className="text-white font-bold"
                      configs={(_, index) => {
                        return {
                          mass: 1,
                          friction: 100,
                          tensions: 140 * (index + 1),
                        };
                      }}
                    />
                    {achievement.postfix}
                  </h2>
                  <p className="text-[#ADB7BE] text-base">
                    {achievement.metric}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[35%] h-full gap-4 flex flex-col justify-center items-center">
          {col2.map((achievement, index) => {
            return (
              <div key={index} className={`${boxcss}`}>
                <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                  <h2 className="text-white desktop:text-4xl sm:text-3xl  font-bold flex flex-row p-2">
                    {achievement.prefix}
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={parseInt(achievement.value)}
                      locale="en-US"
                      className="text-white  font-bold"
                      configs={(_, index) => {
                        return {
                          mass: 1,
                          friction: 100,
                          tensions: 140 * (index + 1),
                        };
                      }}
                    />
                    {achievement.postfix}
                  </h2>
                  <p className="text-[#ADB7BE] text-base">
                    {achievement.metric}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            .mainBody{
              font-family: "DM Serif Text", serif;
            }
             `}
      </style>
    </div>
  );
}

// return (
//   <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//     <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//       {achievementsList.map((achievement, index) => {
//         return (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//           >
//             <h2 className="text-white text-4xl font-bold flex flex-row">
//               {achievement.prefix}
//               <AnimatedNumbers
//                 includeComma
//                 animateToNumber={100}
//                 locale="en-US"
//                 className="text-white text-4xl font-bold"
//                 configs={(_, index) => {
//                   return {
//                     mass: 1,
//                     friction: 100,
//                     tensions: 140 * (index + 1),
//                   };
//                 }}
//               />
//               {achievement.postfix}
//             </h2>
//             <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// );
