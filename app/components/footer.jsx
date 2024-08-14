"use client";
import Link from "next/link";
import Video from "next-video";
import VideoPlayer from "./videoPlayer";
import BackgroundVideo from "next-video/background-video";
import {
  CiMobile1,
  CiMail,
  CiLinkedin,
  CiTwitter,
  CiFacebook,
  CiInstagram,
} from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
export default function Footer() {
  return (
    <BackgroundVideo
      src="/footer.mp4"
      style={{ height: "400px" }}
      className="w-full"
    >
      <div className="flex justify-around items-start flex-wrap gap-20 pt-14 pb-4">
        <div className="flex flex-col items-start">
          <h1>TECHNOLOGY</h1>
          <Link href="#">Technologies</Link>
          <Link href="#">Big Data</Link>
          <Link href="#">IOT</Link>
          <Link href="#">Salesforce</Link>
          <Link href="#">Cloud Computing</Link>
          <Link href="#">Digital Transformation</Link>
        </div>
        <div className="flex flex-col">
          <h1>SERVICES</h1>
          <Link href="#">E-Commerce</Link>
          <Link href="#">Mobile App Development</Link>
          <Link href="#">PHP Development</Link>
          <Link href="#">Python Development</Link>
          <Link href="#">Java Development</Link>
          <Link href="#">Maintenance & Support</Link>
          <Link href="#">Staff Augmentation</Link>
        </div>
        <div className="flex flex-col">
          <h1>INDUSTRIES</h1>
          <Link href="#">Automotive</Link>
          <Link href="#">EduTech</Link>
          <Link href="#">Retail/ e-commerce</Link>
          <Link href="#">FinTech</Link>
          <Link href="#">Tracel & Hospitality</Link>
          <Link href="#">Media & Entertainment</Link>
          <Link href="#">Manufacturing</Link>
        </div>
        <div className="flex flex-col">
          <h1>ENTERPRISE SOLUTION</h1>
          <Link href="#">Enterprise Applications</Link>
          <Link href="#">Data & Analytics</Link>
          <Link href="#">Mobile App Development</Link>
          <Link href="#">Product Engineering</Link>
          <Link href="#">Cloud Solutions</Link>
          <Link href="#">DevOps Engineering</Link>
          <Link href="#">Data Engineering</Link>
        </div>
        <div>
          <h1>CONNECT WITH US</h1>
          <div className="flex flex-col justify-between gap-3">
            <div className="flex justify-around">
              <a href="">
                <CiLinkedin />
              </a>
              <a href="">
                <CiFacebook />
              </a>
              <a href="">
                <CiInstagram />
              </a>
              <a href="">
                <CiTwitter />
              </a>
            </div>
            <h1>CONTACT US</h1>
            <div className="flex  items-center justify-center gap-2">
              <CiMobile1 /> <b>+91-9650021057</b>
            </div>
            <div className="flex  items-center justify-center gap-2">
              <CiMail /> <b>sales@letsgoSolutions.com</b>
            </div>
            <div className="flex  items-center justify-center gap-2">
              <FaRegBuilding /> <b>Delhi, cyber city, gurugram</b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white"></div>
      <div className="text-center mt-10">
        Copyright © 2023 Let's Go Solutions. All Rights Reserved.
      </div>
    </BackgroundVideo>
  );
}
