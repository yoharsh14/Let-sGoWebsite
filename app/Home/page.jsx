import Slider from "./Components/slider";
import TempSlider from "./Components/TempSlider";
export default function LandingHomePage() {
  return (
    <div>
      <div className="h-screen flex flex-col align-middle justify-around ">
        <div className="text-center">
          <h1 className="mb-4 text-7xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              A Software development Company
            </span>
          </h1>
        </div>
        <TempSlider />
      </div>
    </div>
  );
}
