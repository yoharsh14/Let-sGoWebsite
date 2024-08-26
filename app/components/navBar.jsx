// components/Dropdown.js
"use client";
import Image from "next/image";
import logo from "../assets/images/logo/logo.png";
import { useRouter } from "next/navigation";
const Navbar = ({ scrollDown }) => {
  const router = useRouter();
  return (
    <div className="fixed top-2 left-[15%] z-50 w-3/4 ">
      <div className="bg-navBarBg backdrop-blur-md flex justify-between items-center m-auto rounded-3xl">
        <div>
          <button onClick={() => scrollDown("Home")} className="">
            <Image
              className="overflow-hidden"
              width={80}
              height={80}
              src={logo}
              alt={`alt`}
            ></Image>
          </button>
        </div>
        <div className="px-6">
          <button
            className="px-4 hover:text-slate-300"
            onClick={() => scrollDown("Services")}
          >
            Services
          </button>
          <button
            className="px-4 hover:text-slate-300"
            onClick={() => scrollDown("Projects")}
          >
            Projects
          </button>
          <button
            className="px-4 hover:text-slate-300"
            onClick={() => scrollDown("AboutUs")}
          >
            About Us
          </button>
          <button
            className="px-4 hover:text-slate-300"
            onClick={() => scrollDown("ContactUs")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
