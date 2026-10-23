import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

type cardType = {
  icon?: IconType;
  shadow?: string;
};

export default function Card({
  icon: Icon,
  shadow,
  children,
}: PropsWithChildren<cardType>) {
  return (
    <div
      className={`p-6 lg:p-10 bg-primary-100 border-2 border-secondary-800 rounded-lg shadow-[4px_4px_0px_1px] ${shadow ? shadow : "shadow-secondary-800"} relative w-full`}>
      {Icon && (
        <span className="absolute -top-4 bg-primary-500 border-2 border-secondary-800 text-secondary-800 text-lg w-8 h-8 rounded-lg grid place-items-center">
          <Icon />
        </span>
      )}
      {children}
    </div>
  );
}
