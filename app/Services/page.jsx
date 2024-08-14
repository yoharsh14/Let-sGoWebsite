import Image from "next/image";
import Card from "./components/Card";
import Metaverse_p1 from "../assets/images/Project/Metaverse_p1.png";
import AI from "../assets/images/service/AI.jpg";
import app from "../assets/images/service/App.jpg";
import AR from "../assets/images/service/AR.jpg";
import CRM from "../assets/images/service/CRM.jpg";
import Blockchain from "../assets/images/service/Blockchain.jpg";
export default function Services({ params }) {
  const arr = [
    {
      ServicesName: "Web Development",
      image: AI,
      description:
        "Crafting responsive, high-performance websites tailored to your business needs. App Development: Building seamless, user-centric mobile applications for Android and iOS.",
      service: "/webDev",
    },
    {
      ServicesName: "App Development",
      image: app,
      description:
        " Building seamless, user-centric mobile applications for Android and iOS.",
      service: "/appDev",
    },
    {
      ServicesName: "AR",
      image: AR,
      description:
        " Immersive augmented and virtual reality experiences that redefine user engagement.",
      service: "/web3Dev",
    },
    {
      ServicesName: "CRM",
      image: CRM,
      description:
        " Custom CRM systems to streamline customer relationships and drive growth.",
      service: "/crmDev",
    },
    {
      ServicesName: "AI",
      image: AI,
      description:
        "AI-powered solutions that transform data into actionable insights.",
      service: "/aiDev",
    },
    {
      ServicesName: "Blockchain",
      image: Blockchain,
      description:
        "Secure, transparent blockchain solutions for innovative digital transactions.",
    },
  ];
  return (
    <div className="w-3/4 flex flex-col gap-10 items-start mt-10 mb-14 m-auto z-0">
      {/* <div>Category:{params.category}</div>
      <div>ProjectId:{params.projectId}</div> */}
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Services
        </span>
      </h1>
      <div className="flex flex-wrap gap-2 justify-around ">
        {arr.map((el, key) => {
          return (
            <Card
              key={key}
              image={el.image}
              description={el.description}
              title={el.ServicesName}
              service={el.service}
            />
          );
        })}
      </div>
    </div>
  );
}
