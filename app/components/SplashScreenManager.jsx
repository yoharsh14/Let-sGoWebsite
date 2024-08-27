"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashScreenManager({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);
  const finishLoading = () => {
    setShowSplash(false);
  };
  return showSplash ? <SplashScreen finishLoading={finishLoading} /> : children;
}
