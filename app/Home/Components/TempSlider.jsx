// pages/index.js
"use client";
import "./TempSlider.css";
export default function TempSlider() {
  const images = [
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/bloomberg.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/dot_pe.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/facebook.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/google.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/bloomberg.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/dot_pe.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/facebook.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/google.png",
  ];

  return (
    <div className="w-full flex justify-center">
      <div
        className="scroller"
        data-direction="right"
        data-animated="true"
        data-speed="slow"
      >
        <div className="scroller__inner">
          {images.map((el, index) => (
            <img
              loading="lazy"
              width="450"
              height="450"
              decoding="async"
              data-nimg="1"
              className="w-full h-full rounded-md"
              src={el}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
