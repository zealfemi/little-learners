import type { Metadata } from "next";
import { Outfit, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
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
      className={`${raleway.className} ${outfit.className} h-full antialiased`}>
      <body className="min-h-full max-w-[2000px] flex flex-col px-4 md:px-12.5 py-5">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
