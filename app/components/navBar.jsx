// components/Dropdown.js
"use client";
import Image from "next/image";
import logo from "../assets/images/logo/logo.png";
import { useRouter } from "next/navigation";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ scrollDown }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-2 left-[15%] z-50 w-3/4 ">
      <div className="bg-navBarBg backdrop-blur-md flex mobile:justify-evenly mobile:gap-12 sm:justify-between items-center m-auto rounded-3xl">
        <button onClick={() => scrollDown("Home")} className="">
          <Image
            className="overflow-hidden"
            width={80}
            height={80}
            src={logo}
            alt={`alt`}
          ></Image>
        </button>
        <div className="px-6 sm:inline mobile:hidden">
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
        <div
          onClick={() => {
            setOpen(~open);
          }}
          className="text-4xl btn-dropdown sm:hidden"
        >
          {!open ? <IoReorderThreeSharp /> : <FaAngleDown />}
        </div>
      </div>
      {open ? (
        <div className="absolute top-[90px] w-full h-auto bg-navBarBg backdrop-blur-md rounded-xl">
          <div className="px-6 flex flex-col gap-5 py-4">
            <button
              className="px-4 hover:text-slate-300"
              onClick={() => {
                scrollDown("Services");
                setOpen(~open);
              }}
            >
              Services
            </button>
            <button
              className="px-4 hover:text-slate-300"
              onClick={() => {
                scrollDown("Projects");
                setOpen(~open);
              }}
            >
              Projects
            </button>
            <button
              className="px-4 hover:text-slate-300"
              onClick={() => {
                scrollDown("AboutUs");
                setOpen(~open);
              }}
            >
              About Us
            </button>
            <button
              className="px-4 hover:text-slate-300"
              onClick={() => {
                scrollDown("ContactUs");
                setOpen(~open);
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
