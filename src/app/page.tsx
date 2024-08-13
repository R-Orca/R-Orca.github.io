import Image from "next/image";
import Youtube from "/public/youtube.svg";
import X from "/public/x.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-2xl h-dvh px-8 pb-16 pt-12 flex flex-col">
      <div className="flex-auto relative my-16">
        <Image
          src="/top.jpg"
          alt="main image"
          layout="fill"
          objectFit="cover"
          objectPosition="80% 95%"
        ></Image>
      </div>
      <h1 className="text-[clamp(40px,calc(10px+6vi),72px)] text-right">
        Kaburagi.M
      </h1>
      <h2 className="text-2xl text-right">Composer / Pianist</h2>
      <h3 className="text-right mb-16">Tokyo, Japan</h3>
      <div className="flex flex-row-reverse text-lg text-center mb-4">
        <Link
          href={"/contact"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          contact
        </Link>
        <div className="basis-[5%] flex-none">|</div>
        <Link
          href={"/links"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          links
        </Link>
        <div className="basis-[5%] flex-none">|</div>
        <Link
          href={"/works"}
          className="basis-[7%] flex-initial hover:opacity-75"
        >
          works
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
