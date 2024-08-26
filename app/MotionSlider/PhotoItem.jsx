import Image from "next/image";
export default function PhotoItem({ title, imgSrc }) {
  return (
    <div>
      <div>{title}</div>
      <Image src={imgSrc} width={400} height={400} />
    </div>
  );
}
