"use clietn";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function NumberAnimation({
  initialVaue,
  targetValue,
  duration,
}) {
  const numberRef = useRef(null);
  useEffect(() => {
    const numberElement = numberRef.current;
    gsap.to(numberElement, {
      duration: duration || 2,
      innerHTML: targetValue,
      onStart: () => {
        numberElement.innerText = Math.round(initialVaue);
      },
      ease: "power1.out",
      stagger: 1,
      snap: 10,
      scrollTrigger: {
        trigger: ".figure",
        toggleActions: "play complete none complete",
      },
    });
  }, [initialVaue, targetValue, duration]);
  return <span ref={numberRef}></span>;
}
