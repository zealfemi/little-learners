import Link from "next/link";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { FaArrowRight } from "react-icons/fa6";

type pageType = {
  title: string;
  desc: string;
  link: string;
};

const pages: pageType[] = [
  {
    title: "about us",
    desc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    link: "/about",
  },
  {
    title: "academics",
    desc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    link: "/academics",
  },
  {
    title: "student life",
    desc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    link: "/student-life",
  },
  {
    title: "admissions",
    desc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    link: "/admissions",
  },
];

export default function ExploreMore() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Explore More</HeadingTextBefore>
        <HeadingText>Navigate through our Pages</HeadingText>
        <p>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
      </SectionHeader>

      <div className="mt-10 grid md:grid-cols-2 gap-6 w-full">
        {pages.map((page: pageType) => (
          <div key={page.title} className="flex h-full">
            <Card>
              <div className="flex flex-col gap-6 items-center text-center justify-center">
                <p className="capitalize text-secondary-800 font-header font-bold text-lg lg:text-xl">
                  {page.title}
                </p>
                <span className="w-full border-t-2 border-secondary-800"></span>
                <p>{page.desc}</p>

                <Link
                  href={page.link}
                  className="mt-5 flex gap-2 items-center justify-center bg-primary-500 w-full border-2 border-secondary-800 rounded-lg p-4 md:p-4.5 text-secondary-800 shadow-[2px_2px_0px_1px] shadow-secondary-800 hover:bg-primary-300">
                  Learn more <FaArrowRight />
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
