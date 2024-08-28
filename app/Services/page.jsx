import Image from "next/image";
import AI from "../assets/images/service/AI.jpg";
import app from "../assets/images/service/App.jpg";
import AR from "../assets/images/service/AR.jpg";
import CRM from "../assets/images/service/CRM.jpg";
import Blockchain from "../assets/images/service/Blockchain.jpg";
import "./style.css";
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
    // <div className="w-full  z-0 m-auto  ">
    <div className="w-full flex flex-col justify-around h-svh overflow-auto p-2 no-scrollbar">
      {arr.map((el, index) => (
        <div className="w-auto relative">
          <Image
            src={arr[index].image}
            height={400}
            width={400}
            className="w-full"
          />
          <div className="p-4 text-center absolute bottom-0 bg-navBarBg w-full h-1/2">
            <div className="text-3xl">{el.ServicesName}</div>
            <div className="text-lg">{el.description}</div>
          </div>
        </div>
      ))}
      <style>
        {`
            .noscroller::-webkit-scrollbar {
    display: none;
}`}
      </style>
    </div>
    // </div>
  );
}
