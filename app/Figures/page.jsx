"use client";

import NumberAnimation from "./NumberAnimation";

export default function Figures() {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-5">
      <div>Figures And Numbers</div>
      <div className="flex w-[70%] h-[1000px] rounded-xl justify-center gap-4 figure font-extraboldr desktop:text-6xl sm:text-4xl mobile:text-2xl">
        <div className="flex flex-col w-[35%] h-full gap-4 ">
          <div className="w-full h-[40%] bg-matteBlack rounded-lg flex flex-col justify-evenly items-center">
            <h1>Projects</h1>
            <h1>
              <NumberAnimation initialVaue={10} targetValue={50} duration={3} />
              +
            </h1>
          </div>
          <div className="w-full h-[40%] bg-matteBlack rounded-lg flex flex-col justify-evenly items-center">
            <h1>Clients</h1>
            <h1>
              <NumberAnimation initialVaue={10} targetValue={55} duration={3} />
              +
            </h1>
          </div>
        </div>
        {/* <div className="flex flex-col w-[30%] h-full gap-4">
          <div className="w-full h-[20%]"></div>
          <div className="w-full h-[45%] bg-matteBlack rounded-lg">
            <h1>Experts</h1>
            <h1>25+</h1>
          </div>
          <div className="w-full h-[45%] bg-matteBlack rounded-lg">
            <h1>Retentions</h1>
            <h1>45+</h1>
          </div>
        </div> */}
        <div className="w-[35%] h-full gap-4 flex flex-col justify-evenly items-center">
          <div className="w-full h-[40%] bg-matteBlack rounded-lg flex flex-col justify-evenly items-center">
            <h1>Projects</h1>
            <h1>
              <NumberAnimation
                initialVaue={10}
                targetValue={100}
                duration={3}
              />
              +
            </h1>
          </div>
          <div className="w-full h-[40%] bg-matteBlack rounded-lg flex flex-col justify-evenly items-center">
            <h1>Projects</h1>
            <h1>
              <NumberAnimation initialVaue={10} targetValue={45} duration={3} />
              +
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
