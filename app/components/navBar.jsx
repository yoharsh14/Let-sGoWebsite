// components/Dropdown.js
"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import logo from "../assets/images/logo/logo.png";
import { useRouter } from "next/navigation";
const Navbar = ({ scrollDown }) => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full bg-navBarBg flex justify-around items-center">
        <div>
          <Link href="/#Home">
            <Image
              className="pr-24"
              width={200}
              height={200}
              src={logo}
              alt={`alt`}
            ></Image>
          </Link>
        </div>
        <div>
          <button className="px-4" onClick={() => scrollDown("Services")}>
            Services
          </button>
          <button className="px-4" onClick={() => scrollDown("Projects")}>
            Projects
          </button>
          <button className="px-4" onClick={() => scrollDown("AboutUs")}>
            About Us
          </button>
          <button className="px-4" onClick={() => scrollDown("ContactUs")}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
