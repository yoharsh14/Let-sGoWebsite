"use client";
import Faq from "../components/faq";
import Map from "./map";
export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 bg-">
        <div className="flex flex-col justify-center items-center w-3/4 gap-3 p-5">
          <h1 className="text-5xl font-extrabold dark:text-white">About Us</h1>
          <div>
            Lets go solutions is a leading name in Metaverse and Game
            Development in India and US. With industry-leading experts on our
            side and vast experience of working on projects of different scales,
            we are ready to develop a business solution that lets you achieve
            your business goals with ease. Our wide gamut of clients includes
            Fortune 500-listers to budding start-ups with lets go solutions
            successfully serving their business needs.
          </div>
        </div>
        <div className="w-3/4 h-svh flex justify-center items-center m-auto gap-4 ">
          <div className="flex flex-col w-1/3 h-[90%] gap-4">
            <div className="bg-green-400 h-1/2  rounded-xl flex flex-col justify-center gap-2 items-center">
              <h1>Experties</h1>
              <p>Tailored IT solutions for your business.</p>
              <p>Latest technologies for cutting-edge solutions.</p>
              <p>Data-driven strategies for informed decisions.</p>
            </div>
            <div className="bg-green-400 h-1/2 rounded-xl text-center p-6 flex flex-col justify-center gap-2 items-center">
              <h1>Result</h1>
              <p>Proven track record of successful projects.</p>
              <p>Measurable outcomes for clear ROI.</p>
              <p>Scalable solutions for long-term growth.</p>
            </div>
          </div>
          <div className="w-1/3 bg-green-400 h-[90%] p-4 rounded-t-xl text-center flex flex-col justify-center gap-5 items-center">
            <h1> Why Us</h1>
            <p>Personalized service for your needs. </p>
            <p>Collaborative approach for shared goals.</p>
            <p>Cost-effective solutions for maximum ROI.</p>
          </div>
          <div className="flex flex-col w-1/3 h-[90%] gap-4">
            <div className="bg-green-400 h-1/2 rounded-s-xl text-center flex flex-col justify-center gap-2 items-center">
              <h1>Innovation</h1>
              <p>Creative problem-solving for unique solutions.</p>
              <p>Emerging trends for future-proof solutions.</p>
              <p>Continuous improvement for better solutions.</p>
            </div>
            <div className="bg-green-400 h-1/2 rounded-r-xl text-center flex flex-col justify-center gap-2 items-center">
              <h1>Trust</h1>
              <p>Client-centric approach for strong relationships.</p>
              <p>Ethical practices for data security.</p>
              <p>Reliable support for consistent service.</p>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
}
