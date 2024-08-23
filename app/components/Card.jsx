"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Card(props) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className="w-[40%] bg-matteBlack container flex flex-col p-2 m-2 gap-2 rounded-3xl relative"
      onClick={() => {
        router.push(`${pathname}${props.service}`);
      }}
    >
      <Image
        src={props.image}
        alt={"Metaverse Image"}
        width={500}
        height={500}
        className="rounded-2xl h-full"
      />
      <div
        className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] opacity-0 transition duration-300 ease-in-out
"
      >
        <p className="p-4 text-center">{props.description}</p>
      </div>
      <h2 className="text-2xl font-bold text-center">{props.title}</h2>

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
