"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Card(props) {
  const router = useRouter();
  const pathname = usePathname();
  const [scale, setScale] = useState(1);

  return (
    <div
      className="w-[45%] h-auto overflow-hidden container flex flex-col m-2 gap-2 rounded-xl relative"
      onClick={() => {
        router.push(`${pathname}${props.service}`);
      }}
    >
      <Image
        src={props.image}
        alt={"Metaverse Image"}
        width={500}
        height={500}
        className={`rounded-xl h-fit image`}
      />
      <div
        className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] opacity-0 transition duration-300 ease-in-out
"
      >
        <Link href={"www.google.com"}>
          <FaExternalLinkAlt />
        </Link>
      </div>

      <style jsx>
        {`
          .container:hover .image {
            transform: scale(1.5);
          }
          .container:hover .overlay {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}
