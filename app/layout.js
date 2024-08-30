"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashScreenManager from "./components/SplashScreenManager";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>LetsGoSolutions</title>
      </head>
      <body className={inter.className}>
        <SplashScreenManager>{children}</SplashScreenManager>
      </body>
    </html>
  );
}
