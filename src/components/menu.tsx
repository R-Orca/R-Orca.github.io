import Link from "next/link";

export const Menu = () => {
  return (
    <div>
      <div className="text-5xl text-right">
        <Link href={"/"} className="hover:opacity-75">Kaburagi.M</Link>
      </div>
      <div className="flex flex-row-reverse text-lg text-center">
        <Link href={"/works"} className="basis-[7%] flex-initial hover:opacity-75">
          works
        </Link>
        <div className="basis-[5%] flex-none">|</div>
        <Link href={"/links"} className="basis-[7%] flex-initial hover:opacity-75">
          links
        </Link>
        <div className="basis-[5%] flex-none">|</div>
        <Link href={"/contact"} className="basis-[7%] flex-initial hover:opacity-75">
          contact
        </Link>
      </div>
    </div>
  );
};
