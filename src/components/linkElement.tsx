import { ReactNode } from "react";

interface linkElementProps {
  children: ReactNode;
  title: string;
  caption: string;
  url: string;
}

export const LinkElement = ({
  children,
  title,
  caption,
  url,
}: linkElementProps) => {
  return (
    <div className="flex font-normal text-clickable">
      <a className="flex gap-4 pr-6 hover:opacity-75" href={url}>
        <div className="flex-none my-auto">{children}</div>
        <div>
          <h3 className="text-xl">{title}</h3>
          <div className="text-sm mb-[6px]">{caption}</div>
        </div>
      </a>
      <div className="flex-auto"></div>
    </div>
  );
};
