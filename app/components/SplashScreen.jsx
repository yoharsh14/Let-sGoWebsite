"use client";
import anime from "animejs";
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
      duration: 2000,
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
      className="flex h-svh justify-center items-center bg-black"
      isMounted={isMounted}
    >
      <img src={"./splash.webp"} />
    </div>
  );
};

export default SplashScreen;
