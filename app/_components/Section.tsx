import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return <div className="py-10 md:py-15 lg:py-20 md:px-5">{children}</div>;
}
