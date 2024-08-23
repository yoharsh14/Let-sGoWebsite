"use client";
import Footer from "./components/footer";
import LandingHomePage from "./Home/page";
import Project from "./Projects/page";
import ContactUs from "./ContactUs/page";
import AboutUs from "./AboutUs/page";
import Services from "./Services/page";
import Navbar from "./components/navBar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
export default function Home() {
  const container = useRef();
  const scrollDown = (to) => {
    const element = document.getElementById(to);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollDown={scrollDown} />
      <div className="flex flex-col">
        <div className="bg-[radial-gradient(ellipse_at_center,#000000_40%,#090414_69%)]  text-slate-200">
          <div>
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
