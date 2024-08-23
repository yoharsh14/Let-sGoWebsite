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
    <div className="no-scrollbar">
      <div className="flex flex-col no-scrollbar">
        <div className="bg-[radial-gradient(ellipse_at_center,#000000_40%,#090414_69%)]  text-slate-200 no-scrollbar">
          <div id="Home">
            <LandingHomePage />
          </div>
          <div id="Services">
            <Services />
          </div>
          <div id="Projects">
            <Project />
          </div>
          <div id="AboutUs">
            <AboutUs />
            <Figures />
          </div>
          <div id="ContactUs">
            <ContactUs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
