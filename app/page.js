"use client";
import Landing from "./components/landing";
import Footer from "./components/footer";
import LandingHomePage from "./Home/page";
import Project from "./Projects/page";
import ContactUs from "./ContactUs/page";
import AboutUs from "./AboutUs/page";
import Figures from "./Figures/page";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-[radial-gradient(ellipse_at_center,#000000_40%,#090414_69%)]  text-slate-200">
        <LandingHomePage />
      </div>
    </div>
  );
}
