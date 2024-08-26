export default function WorkItem({ title, description }) {
  return (
    <div className="h-svh flex flex-col justify-center m-auto ">
      <div className="text-3xl text-center">{title}</div>
      <div className="text-lg">{description}</div>
    </div>
  );
}
