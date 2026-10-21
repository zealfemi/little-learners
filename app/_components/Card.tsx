import { PropsWithChildren } from "react";

type cardType = {
  shadow?: string;
};

export default function Card({
  shadow,
  children,
}: PropsWithChildren<cardType>) {
  return (
    <div
      className={`p-6 lg:p-10 border-2 border-secondary-800 rounded-lg shadow-[4px_4px_0px_1px] ${shadow ? shadow : "shadow-secondary-800"} `}>
      {children}
    </div>
  );
}
