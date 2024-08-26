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
        <div className="mt-28 flex flex-col h-full">
          <h1 className="text-center text-7xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              A Software development Company
            </span>
          </h1>
          <div className="pt-56 typewriter flex flex-col justify-center items-center w-3/4 m-auto">
            <h1>Your Vision Our Code</h1>
            <Link
              href={"www.google"}
              className="bg-[#1fde8e] px-4 py-2 rounded-2xl font-extrabold text-slate-800"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </BackgroundVideo>
      <div className="text-center py-4 shine text-2xl font-bold">
        {/* Brand That Trust Us */}
        <TempSlider />
      </div>
    </div>
  );
}
