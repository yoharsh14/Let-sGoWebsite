// components/Dropdown.js
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu1 } from "./menu/menu1";
import Image from "next/image";
import clsx from "clsx";
import logo from "../assets/images/logo/logo.png";
const Navbar = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  return (
    <div className="sticky top-0 z-50">
      <div
        className="w-full bg-navBarBg flex justify-around items-center"
        onMouseLeave={() => setHovering(null)}
      >
        <div>
          <Image className="pr-24" width={200} height={200} src={logo} alt={`alt`}></Image>
        </div>
        <div>
          <Link href="/" className="px-4">
            Home
          </Link>
          <Link
            href="/Services"
            onMouseEnter={(event) => {
              setHovering(1);
              setPopoverLeft(event.currentTarget.offsetLeft);
            }}
            className="px-4"
          >
            Services
          </Link>
          <Link href="/Projects" className="px-4">
            Projects
          </Link>
          <Link href="/AboutUs" className="px-4">
            About Us
          </Link>
          <Link href="/ContactUs" className="px-4">
            Contact Us
          </Link>
          {hovering && (
            <div
              style={{
                left: popoverLeft || 0,
              }}
              className="absolute top-16  -ml-24 w-1/5 bg-matteBlack overflow-hidden transform-gpu rounded shadow transition-all duration-300 z-50"
            >
              {hovering === 1 ? <Menu1 /> : null}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
