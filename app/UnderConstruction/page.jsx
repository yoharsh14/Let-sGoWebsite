import Image from "next/image";
export default function UnderConstruction({}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={"./underConstruction.gif"} width={400} height={400} />
      {/* <div className="font-black text-7xl">UNDER CONSTRUCTION</div> */}
    </div>
  );
}
