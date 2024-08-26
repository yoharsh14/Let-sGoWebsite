import Image from "next/image";
import Metaverse_p1 from "../assets/images/Project/Metaverse_p1.png";
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
    <div className="w-[85%] flex  z-0 m-auto  ">
      <div className="flex flex-col ">
        {arr.map((el) => (
          <div className="h-svh flex flex-col justify-center m-auto ">
            <div className="text-3xl text-center">{el.ServicesName}</div>
            <div className="text-lg">{el.description}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-col justify-around">
          {arr.map((el, index) => (
            <div className="w-full h-screen border-2 border-black flex flex-col justify-center">
              <Image
                src={arr[index].image}
                height={400}
                width={400}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
