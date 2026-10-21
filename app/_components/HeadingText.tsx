import { PropsWithChildren } from "react";

export default function HeadingText({ children }: PropsWithChildren) {
  return (
    <div className="font-header font-bold text-secondary-800 text-3xl md:text-4xl lg:text-5xl capitalize">
      {children}
    </div>
  );
}
