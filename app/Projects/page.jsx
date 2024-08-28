import Image from "next/image";
import Card from "../components/Card";
import p1 from "../assets/images/Project/p1.png";
import p2 from "../assets/images/Project/p2.png";
import p3 from "../assets/images/Project/p3.png";
import p4 from "../assets/images/Project/p4.png";
export default function Project({ params }) {
  return (
    <div className="w-3/4 flex flex-col gap-10 items-start my-10 m-auto">
      <h1 class="desktop:text-9xl md:text-8xl sm:text-7xl mobile:text-5xl font-black text-gray-900 leading-tight mb-2 pb-4 relative heading m-auto">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Projects
        </span>
      </h1>
      <div className="flex flex-wrap justify-around ">
        <Card
          image={p1}
          description={"NSIDE is a multi-purpose webflow template"}
        />
        <Card
          image={p2}
          description={"lorem ipsum dolo rama gaku sama chika"}
        />
        <Card
          image={p3}
          description={"lorem ipsum dolo rama gaku sama chika"}
        />
        <Card
          image={p4}
          description={"lorem ipsum dolo rama gaku sama chika"}
        />
      </div>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        .heading{
          font-family: "Arvo", serif;
        }
        `}
      </style>
    </div>
  );
}
