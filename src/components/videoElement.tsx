import { ReactNode } from "react";

interface videoElementProps {
  children: ReactNode;
  caption: string;
}

export const VideoElement = ({
  children,
  caption,
}: videoElementProps) => {
  return (
    <div className="flex flex-col font-normal">
        <h3 className="text-base pb-2">{caption}</h3>
        <div>{children}</div>
    </div>
  );
};
