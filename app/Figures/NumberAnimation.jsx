"use clietn";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function NumberAnimation({
  initialVaue,
  targetValue,
  duration,
}) {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   gsap.to("#number", {
  //     innerText: 10,
  //     duration: 20,
  //   });
  // }, []);
  return <div>{targetValue}+</div>;
}
