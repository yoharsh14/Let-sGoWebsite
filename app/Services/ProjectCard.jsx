import Image from "next/image";
export default function ProjectCard({ data }) {
  const boxCss =
    " flex desktop:flex-row md:flex mobile:flex-col justify-center items-center desktop:p-16 sm:p-8 desktop:gap-4 sm:gap-4  rounded-5xl font-black ";
  const titleCss = "desktop:text-7xl md:text-3xl sm-2xl mobile:xl text-white";
  return (
    <div className="desktop:w-3/4 md:text-w-[85%] sm:w-full mobile:w-full m-auto p-10 mainBody">
      {data.flip ? (
        <div className={`h-auto bg-projectCard`}>
          <div className={`${boxCss}`}>
            <Image
              src={data.image}
              height={400}
              width={400}
              className="h-3/4 rounded-xl m-2"
            />
            <div className="desktop:text-left sm:text-center">
              <div className={titleCss}>{data.ServicesName}</div>
              <div className="text-midWhite">{data.description}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${boxCss}`}>
          <div className="desktop:text-right sm:text-center">
            <div className={titleCss}>{data.ServicesName}</div>
            <div className="text-midWhite">{data.description}</div>
          </div>
          <Image
            src={data.image}
            width={400}
            height={400}
            className="h-3/4 rounded-xl m-2"
          />
        </div>
      )}
      <style>
        {`
           @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      .mainBody{
        font-family: "Montserrat", sans-serif;
      }
          `}
      </style>
    </div>
  );
}
