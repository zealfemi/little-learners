import Image from "next/image";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type learnType = {
  heading: string;
  content: string;
  image: string;
};

const learn: learnType[] = [
  {
    heading: "Language Arts",
    content: "Reading, writing, storytelling, and communication skills.",
    image: "/images/academics/learn/Image.png",
  },
  {
    heading: "Mathematics",
    content: "Number sense, basic operations, problem-solving, and logic.",
    image: "/images/academics/learn/Image-1.png",
  },
  {
    heading: "Science",
    content:
      "Exploring the natural world through hands-on experiments and investigation.",
    image: "/images/academics/learn/Image-2.png",
  },
  {
    heading: "Social Studies",
    content:
      "Cultivating an understanding of diverse cultures and communities.",
    image: "/images/academics/learn/Image-3.png",
  },
  {
    heading: "Arts and Crafts",
    content: "Encouraging creativity through various art forms and crafts.",
    image: "/images/academics/learn/Image-4.png",
  },
  {
    heading: "Physical Education",
    content: "Promoting physical fitness, coordination, and teamwork.",
    image: "/images/academics/learn/Image-5.png",
  },
];

export default function AcademicsLearn() {
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSU5EUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Features</HeadingTextBefore>
        <HeadingText>What Students Learn</HeadingText>
        <p>
          At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include
        </p>
      </SectionHeader>

      <div className="mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {learn.map((l: learnType) => (
            <div key={l.heading} className="flex h-full">
              <Card>
                <div className="flex flex-col items-center justify-center w-full gap-10">
                  <span className="border-2 border-t-0 border-secondary-800 rounded-bl-lg rounded-br-lg w-20 h-65 lg:w-25 lg:h-75 absolute top-0 bg-primary-400"></span>

                  <div className="border-2 border-secondary-800 rounded-lg relative w-full h-55 lg:h-60">
                    <Image
                      src={l.image}
                      alt={l.heading}
                      fill
                      quality={100}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl capitalize">
                      {l.heading}
                    </h3>
                    <p>{l.content}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
