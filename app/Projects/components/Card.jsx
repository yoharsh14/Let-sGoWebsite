"use client";
import Image from "next/image";
export default function Card(props) {
  return (
    <div className="w-[40%] bg-matteBlack container flex flex-col p-2 m-2 gap-2 rounded-3xl relative">
      <Image
        src={props.image}
        alt={"Metaverse Image"}
        width={500}
        height={500}
        className="rounded-2xl"
      />
      <div
        className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] opacity-0 transition duration-300 ease-in-out
"
      >
        <h2 className="text-2xl font-bold">Image Title</h2>
        <p>{props.description}</p>
      </div>

      <style jsx>
        {`
          .container:hover .overlay {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}
