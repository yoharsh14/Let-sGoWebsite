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
      duration: 4000,
      easing: "linear",
    });
  };
  const style = `
    @import url("https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap");

/*SPLASH SCREEN STYLE*/
.typewriter h1 {
  font-weight: 600;
  font-size: 5rem;
  color: #fff;
  font-family: "Baskervville SC", serif;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 1.5s steps(70, end), blink-caret 1.24s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  0% {
    border-color: orange;
  }
}
  `;
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className="flex h-svh justify-center items-center bg-[radial-gradient(ellipse_at_center,#020024_40%,#0303_60%,#000000_69%)]"
      isMounted={isMounted}
    >
      <div className=" typewriter w-3/4 m-auto">
        <h1>Your Vision Our Code</h1>
      </div>
      <style>{style}</style>
    </div>
  );
};

export default SplashScreen;
