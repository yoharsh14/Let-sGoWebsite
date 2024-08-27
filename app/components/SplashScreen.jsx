"use client"
import anime from "animejs";
import Image from "next/image";
import { useState, useEffect } from "react";
const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      target: "#logo",
      delay: 0,
      scale: 1,
      duration: 4000,
      easing: "linear",
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className="flex h-screen items-center justify-center"
      isMounted={isMounted}
    >
      <Image id="logo" src="/Rhombus.gif" alt="" width={60} height={60} />
    </div>
  );
};

export default SplashScreen;
