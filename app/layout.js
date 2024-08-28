"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import gsap from "gsap";
import SplashScreenManager from "./components/SplashScreenManager";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
const inter = Inter({ subsets: ["latin"] });
gsap.registerPlugin(ScrollTrigger);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SplashScreenManager>{children}</SplashScreenManager>
      </body>
    </html>
  );
}
