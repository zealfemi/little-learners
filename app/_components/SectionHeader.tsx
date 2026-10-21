import { PropsWithChildren } from "react";

export default function SectionHeader({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-center max-w-200 mx-auto">
      {children}
    </div>
  );
}
