import { PropsWithChildren } from "react";

export default function HeadingTextBefore({ children }: PropsWithChildren) {
  return (
    <p className="inline-flex bg-primary-100 border-2 border-secondary-800 py-2 px-3.5 lg:py-2.5 lg:px-5 rounded-lg items-center justify-center w-fit">
      {children}
    </p>
  );
}
