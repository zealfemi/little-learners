import abstract from "@/public/images/abstract/design-3.png";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Card from "./Card";
import HeadingTextBefore from "./HeadingTextBefore";

type pageHeaderType = {
  heading: string;
  content: string;
  subHeading: string;
};

export default function PageHeader({
  heading,
  content,
  subHeading,
  children,
}: PropsWithChildren<pageHeaderType>) {
  return (
    <Card>
      <Image
        src={abstract}
        alt="abstract 3"
        className="w-25 md:w-30 lg:w-35 absolute left-0 top-0"
      />

      <div className="grid md:grid-cols-2 place-items-center gap-6 lg:gap-10 py-6 md:py-8 lg:py-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3 w-full">
          <HeadingTextBefore>{subHeading}</HeadingTextBefore>
          <p className="font-header font-bold text-secondary-800 text-2xl md:text-3xl lg:text-4xl capitalize">
            {heading}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="">{content}</p>
          {children}
        </div>
      </div>
    </Card>
  );
}
