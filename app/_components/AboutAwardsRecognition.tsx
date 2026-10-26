import { IconType } from "react-icons";
import { HiLightningBolt } from "react-icons/hi";
import { HiChartBar, HiChartPie } from "react-icons/hi2";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type awardType = {
  title: string;
  desc: string;
  icon: IconType;
};

const awards: awardType[] = [
  {
    title: "Outstanding Early Childhood Education Award",
    desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon: HiChartPie,
  },
  {
    title: "Innovative STEAM Education Award",
    desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: HiChartBar,
  },
  {
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    icon: HiLightningBolt,
  },
];

export default function AboutAwardsRecognition() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Achievements</HeadingTextBefore>
        <HeadingText>Our Awards and Recognitions</HeadingText>
        <p>
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We are
          honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect our
          team&apos;s relentless efforts in creating an exceptional learning
          environment for our students.
        </p>
      </SectionHeader>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {awards.map((award: awardType) => (
          <div key={award.title} className="flex h-full">
            <Card icon={award.icon}>
              <div>
                <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl capitalize">
                  {award.title}
                </h3>
                <p className="mt-6">{award.desc}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
