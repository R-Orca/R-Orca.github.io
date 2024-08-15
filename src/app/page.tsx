import Image from "next/image";
import Youtube from "/public/youtube.svg";
import X from "/public/x.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto min-w-[360px] max-w-3xl h-[max(100dvh,600px)] px-8 pb-16 pt-12 flex flex-col">
      <div className="grow shrink-0 basis-32 relative my-16">
        <Image
          src="/top.jpg"
          alt="main image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "80% 95%",
          }}
        ></Image>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-right">
        Kaburagi.M
      </h1>
      <h2 className="text-2xl text-right">Composer & Pianist</h2>
      <h3 className="text-right mb-16">Tokyo, Japan</h3>
      <div className="flex flex-row-reverse text-lg text-center mb-4">
        <Link
          href={"/contact"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          Contact
        </Link>
        <div className="basis-[5%] flex-none">|</div>
        <Link
          href={"/links"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          Links
        </Link>
        <div className="basis-[5%] flex-none">|</div>
        <Link
          href={"/works"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          Works
        </Link>
      </div>
      <div className="flex space-x-4">
        <div className="flex-auto"></div>
        <Youtube width="24" height="24" />
        <X width="24" height="24" />
      </div>
    </div>
  );
}
