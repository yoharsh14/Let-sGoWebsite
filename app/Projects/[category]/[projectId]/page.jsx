import Image from "next/image";
import Metaverse_p1 from "../../../assets/images/Project/Metaverse_p1.png";
export default function Project({ params }) {
  return (
    <div>
      {/* <div>Category:{params.category}</div>
      <div>ProjectId:{params.projectId}</div> */}
      <div>Projects</div>
      <div>
        <div>
          <Image src={Metaverse_p1} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
