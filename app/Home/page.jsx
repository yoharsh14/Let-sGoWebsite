import TempSlider from "./Components/TempSlider";
import BackgroundVideo from "next-video/background-video";
import Navbar from "../components/navBar";
import Link from "next/link";
import "./style.css";
export default function LandingHomePage() {
  const scrollDown = (to) => {
    const element = document.getElementById(to);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <BackgroundVideo src="/bg.mp4" className="w-full h-svh">
        <Navbar scrollDown={scrollDown} />
        <div className="h-screen flex flex-col align-middle justify-around ">
          <div className="text-center">
            <h1 className="mb-4 text-7xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                A Software development Company
              </span>
            </h1>
          </div>
        </div>
        <div className="typewriter flex flex-col justify-center items-center w-3/4 m-auto mb-10">
          <h1>Your Vision Our Code</h1>
          <Link href={"www.google"} className="bg-[#1fde8e] p-2 px-4 rounded-2xl font-extrabold text-slate-800">Let's Connect</Link>
        </div>
      </BackgroundVideo>
      <div className="text-center py-4 shine text-2xl font-bold">Brand That Trust Us</div>
      <TempSlider />
    </div>
  );
}
