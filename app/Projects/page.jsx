import Image from "next/image";
import Card from "../components/Card";
import Metaverse_p1 from "../assets/images/Project/Metaverse_p1.png";
export default function Project({ params }) {
  return (
    <div className="w-3/4 flex flex-col gap-10 items-start mt-10 m-auto">
      {/* <div>Category:{params.category}</div>
      <div>ProjectId:{params.projectId}</div> */}
      <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Projects
        </span>
      </h1>
      <div className="flex flex-wrap gap-2 justify-around ">
        <Card
          image={Metaverse_p1}
          description={"lorem ipsum dolo rama gaku sama chika"}
        />
        <Card
          image={Metaverse_p1}
          description={"lorem ipsum dolo rama gaku sama chika"}
        />
        <Card
          image={Metaverse_p1}
          description={"lorem ipsum dolo rama gaku sama chika"}
        />
        <Card
          image={Metaverse_p1}
          description={"lorem ipsum dolo rama gaku sama chika"}
        />
      </div>
    </div>
  );
}
