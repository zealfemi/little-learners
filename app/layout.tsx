import type { Metadata } from "next";
import { Outfit, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic", "vietnamese"],
  display: "auto",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Little Learners",
    default: "Little Learners",
  },
  description: "A school education website template.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full max-w-[2000px] flex flex-col mx-auto">
        <main>{children}</main>
      </body>
    </html>
  );
}
