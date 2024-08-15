import Link from "next/link";
import { ReactNode } from "react";

interface menuProps {
  current: string;
}

const availableLink: string = "basis-[7%] flex-initial text-clickable hover:opacity-75";
const disabledLink: string = "basis-[7%] flex-initial text-clickable-dark";
const divider: string ="basis-[5%] flex-none font-normal text-clickable";

export const Menu = ({ current }: menuProps) => {
  return (
    <div className="mb-12">
      <div className="text-3xl md:text-4xl text-right mb-1 md:mb-2">
        <Link href={"/"} className="text-clickable hover:opacity-75">
          Kaburagi.M
        </Link>
      </div>

      <div className="flex flex-row-reverse text-lg text-center">
        {current === "Contact" ? (
          <div className={disabledLink}>Contact</div>
        ) : (
          <Link href={"/contact"} className={availableLink}>
            Contact
          </Link>
        )}

        <div className={divider}>|</div>

        {current === "Links" ? (
          <div className={disabledLink}>Links</div>
        ) : (
          <Link href={"/links"} className={availableLink}>
            Links
          </Link>
        )}

        <div className={divider}>|</div>

        {current === "Works" ? (
          <div className={disabledLink}>Works</div>
        ) : (
          <Link href={"/works"} className={availableLink}>
            Works
          </Link>
        )}
      </div>
    </div>
  );
};
