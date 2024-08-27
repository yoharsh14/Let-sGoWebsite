import Image from "next/image";
import imge from "../assets/images/Project/p1.png";
export default function PhotoItem({ title, imgSrc }) {
  return (
    <div>
      <div>{title}</div>
      <Image src={imgSrc} width={300} height={100} />
    </div>
  );
}
