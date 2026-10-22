import abstract from "@/public/images/abstract/design-3.png";
import Image from "next/image";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import { PropsWithChildren } from "react";

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
        className="w-20 md:w-25 lg:w-30 absolute left-0 top-0"
      />

      <div className="grid md:grid-cols-2 place-items-center gap-6 lg:gap-10 px-1.5 py-6.5 md:px-5 md:py-11.5 lg:px-10 lg:py-17.5 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3 w-full">
          <HeadingTextBefore>{subHeading}</HeadingTextBefore>
          <HeadingText>{heading}</HeadingText>
        </div>
        <div className="flex flex-col gap-6">
          <p className="">{content}</p>
          {children}
        </div>
      </div>
    </Card>
  );
}
