"use client";
import Footer from "./components/footer";
import LandingHomePage from "./Home/page";
import Project from "./Projects/page";
import ContactUs from "./ContactUs/page";
import AboutUs from "./AboutUs/page";
import Services from "./Services/page";
import Navbar from "./components/navBar";
import Figures from "./Figures/page";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-[radial-gradient(ellipse_at_center,#000000_40%,#090414_69%)]  text-slate-200 overflow-hidden">
          <div id="Home">
            <LandingHomePage />
          </div>
          <div id="Services" className="h-[90px] opacity-0"></div>
          <Services className="mt-28" />
          <div id="Projects" className="h-[50px] opacity-0"></div>
          <Project />
          <div id="AboutUs" className="h-[70px] opacity-0"></div>
          <AboutUs />
          <Figures />
          <div id="ContactUs" className="h-[120px] opacity-0"></div>
          <ContactUs />
          {/* <MotionSlider /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
