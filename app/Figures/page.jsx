"use client";
export default function Figures() {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-5">
      <div>Figures And Numbers</div>
      <div className="flex w-[70%] h-[1000px] rounded-xl justify-between">
        <div className="flex flex-col w-[30%] h-full gap-4 ">
          <div className="w-full h-[40%] bg-red-200 rounded-lg"></div>
          <div className="w-full h-[40%] bg-purple-400 rounded-lg"></div>
        </div>
        <div className="flex flex-col w-[30%] h-full gap-4">
          <div className="w-full h-[20%]"></div>
          <div className="w-full h-[45%] bg-red-400 rounded-lg"></div>
          <div className="w-full h-[45%] bg-teal-400 rounded-lg"></div>
        </div>
        <div className="flex flex-col w-[30%] h-full gap-4">
          <div className="w-full h-[40%] bg-amber-400 rounded-lg"></div>
          <div className="w-full h-[40%] bg-pink-400 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
