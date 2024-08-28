import Image from "next/image";
import mobilegif from "../assets/gif/mobile.gif";
import blockchain from "../assets/gif/blockchain.gif";
import web from "../assets/gif/web.gif";
import design from "../assets/gif/design.gif";
import ProjectCard from "./ProjectCard";
export default function Services({ params }) {
  const arr = [
    {
      ServicesName: "Mobile App Development",
      image: mobilegif,
      description:
        " We focus on creating user-friendly mobile apps helpful in improving the operational efficiency of business and enhancing customer engagement. Our mobile app developers have excellence in the field of iOS, Android, custom mobile-first apps, bespoke web to cloud and mobile integrations, and many other domains.",
      service: "/appDev",
      flip: true,
    },
    {
      ServicesName: "Blockchain",
      image: blockchain,
      description:
        "Blockchain technology is rapidly reshaping business processes. The growing demand for a decentralized environment stems from a need for simpler business operations and avant-garde development. So, our team of dedicated blockchain experts proficiently meets the Blockchain demands of our clients by providing Crowdfunding Services, NFT Marketplace, as well as ICO Whitepaper Writing.",
      service: "/aiDev",
      flip: false,
    },
    {
      ServicesName: "Web Development",
      image: web,
      description:
        "Our proficient web developers create custom websites, web applications, web tools, and many more, tailored as per the needs of businesses and startups with the aim to boost business growth using the finest web technologies.",
      service: "/aiDev",
      flip: true,
    },
    {
      ServicesName: "Design",
      image: design,
      description:
        "We know that simple designs can’t work. To attract customers, we have to be unique. That’s why our creative team develops engaging content by following all essential design steps. From conceptualizing and information architecture to building visual identity and UI/UX design, our team covers everything to offer you a captivating experience.",
      service: "/aiDev",
      flip: false,
    },
  ];
  return (
    <div className="w-svh flex flex-col justify-around h-full">
      <h1 class="desktop:text-9xl md:text-8xl sm:text-7xl mobile:text-5xl font-black text-gray-900 leading-tight mb-2 pb-4 relative heading m-auto">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Services
        </span>
      </h1>
      {arr.map((el, key) => (
        <ProjectCard data={el} key={key} />
      ))}
    </div>
  );
}
