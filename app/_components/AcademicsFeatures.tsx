import { IconType } from "react-icons";
import {
  HiBookOpen,
  HiChartBar,
  HiPaintBrush,
  HiPuzzlePiece,
  HiStar,
  HiSun,
} from "react-icons/hi2";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type featureType = {
  heading: string;
  content: string;
  icon: IconType;
};

const features: featureType[] = [
  {
    heading: "Thematic Learning",
    content:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    icon: HiBookOpen,
  },
  {
    heading: "STEAM Education",
    content:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    icon: HiChartBar,
  },
  {
    heading: "Language Immersion",
    content:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    icon: HiPuzzlePiece,
  },
  {
    heading: "Art and Creativity",
    content:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    icon: HiPaintBrush,
  },
  {
    heading: "Outdoor Education",
    content:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    icon: HiSun,
  },
  {
    heading: "Play-Based Learning",
    content:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    icon: HiStar,
  },
];

export default function AcademicsFeatures() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Features</HeadingTextBefore>
        <HeadingText>Our Special Features</HeadingText>
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
      </SectionHeader>

      <div className="mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature: featureType) => (
            <div key={feature.heading} className="flex h-full">
              <Card icon={feature.icon}>
                <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl capitalize">
                  {feature.heading}
                </h3>
                <p className="mt-6">{feature.content}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
