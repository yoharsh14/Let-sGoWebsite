"use client";
import Link from "next/link";
import BackgroundVideo from "next-video/background-video";

export default function Footer() {
  return (
    <div className="bg-white w-full">
      <BackgroundVideo
        src="/footer.mp4"
        className="w-full sm:h-[460px] overflow-auto  text-black font-bold"
      >
        <div className="w-full bg-footerBg backdrop-blur-md  rounded-lg p-2">
          <div className="flex justify-center m-auto items-start desktop:gap-20 pt-10 pb-14 container sm:text-sm sm:gap-10 mobile:pb-0 mobile:gap-[10px] mobile:text-[0.57rem]">
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
           
          </div>
          <div className="w-full h-[1px] bg-black sm:mt-14 mobile:mt-2 "></div>
          <div className="text-center sm:text-sm mobile:text-[0.5rem]">
            Copyright © 2023 Let&apos;s Go Solutions. All Rights Reserved.
          </div>
        </div>
      </BackgroundVideo>
    </div>
  );
}
