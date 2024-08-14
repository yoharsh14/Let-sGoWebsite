// pages/index.js
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
export default function TempSlider() {
  const images = [
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/bloomberg.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/dot_pe.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/facebook.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/google.png",
];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1000); // Adjust interval time as needed

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="">
      <div className="flex justify-center">
        <Image
          width="200"
          height="250"
          className="w-2 h-2 rounded-md"
          style={{
            color: "transparent",
            objectFit: "contain",
            aspectRatio: "16 / 9",
            width: "15%",
            height: "15%",
            padding: "20px 20px",
          }}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      </div>
    </div>
  );
}
