import Link from "next/link";

export const Menu = () => {
  return (
    <div className="mb-16">
      <div className="text-5xl text-right mb-4">
        <Link href={"/"} className="hover:opacity-75">
          Kaburagi.M
        </Link>
      </div>
      <div className="flex flex-row-reverse text-lg text-center">
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
    </div>
  );
};
