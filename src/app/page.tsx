import Image from "next/image";
import Youtube from "/public/youtube.svg";
import X from "/public/x.svg";
import Link from "next/link";
import nextConfig from "../../next.config.js";

const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className="container mx-auto min-w-[360px] max-w-3xl h-[max(100dvh,625px)] px-8 md:px-12 pt-20 pb-24 flex flex-col">
      <div className="grow shrink-0 basis-32 relative mb-16">
        <Image
          src={`${BASE_PATH}/top.jpg`}
          alt="main image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "80% 95%",
          }}
        ></Image>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl mb-[8px] md:mb-[7px] text-right">
        Kaburagi.M
      </h1>
      <h2 className="text-2xl text-right">Composer & Pianist</h2>
      <h3 className="mb-16 text-right font-normal">Tokyo, Japan</h3>
      <div className="flex flex-row-reverse text-lg text-center mb-4 text-clickable">
        <Link
          href={"/contact"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          Contact
        </Link>
        <div className="basis-[5%] flex-none opacity-50 font-normal">|</div>
        <Link
          href={"/links"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          Links
        </Link>
        <div className="basis-[5%] flex-none  opacity-50 font-normal">|</div>
        <Link
          href={"/works"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          Works
        </Link>
      </div>
      <div className="flex space-x-5">
        <div className="flex-auto"></div>
        <a href="https://www.youtube.com/@Ka.M" className="text-clickable hover:opacity-75">
        <Youtube width="24" height="24"/></a>
        <a href="https://x.com/Maburagi" className="text-clickable hover:opacity-75">
        <X width="24" height="24"/></a>
      </div>
    </div>
  );
}
