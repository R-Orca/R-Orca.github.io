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
    <div className="flex flex-col">
        <h3 className="text-base">{caption}</h3>
        <div>{children}</div>
    </div>
  );
};
