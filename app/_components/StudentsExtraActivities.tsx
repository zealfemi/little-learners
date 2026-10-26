import { IconType } from "react-icons";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { HiLightningBolt } from "react-icons/hi";
import {
  HiMusicalNote,
  HiPaintBrush,
  HiPuzzlePiece,
  HiSparkles,
} from "react-icons/hi2";
import { PiFlaskFill } from "react-icons/pi";
import Card from "./Card";

type activityType = {
  heading: string;
  content: string;
  icon: IconType;
};

const activities: activityType[] = [
  {
    heading: "Sports and Athletics",
    content:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    icon: HiLightningBolt,
  },
  {
    heading: "Art and Creativity",
    content:
      "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    icon: HiPaintBrush,
  },
  {
    heading: "Music and Performing Arts",
    content:
      "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    icon: HiMusicalNote,
  },
  {
    heading: "Language Clubs",
    content:
      "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    icon: HiPuzzlePiece,
  },
  {
    heading: "Science Club",
    content:
      "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    icon: PiFlaskFill,
  },
  {
    heading: "Cooking and Culinary Arts",
    content:
      "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    icon: HiSparkles,
  },
];

export default function StudentsExtraActivities() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Features</HeadingTextBefore>
        <HeadingText>Extracurricular Activities</HeadingText>
        <p>
          At Little Learners Academy, we believe in nurturing well-rounded
          individuals. Our extracurricular activities offer a diverse range of
          experiences that complement our academic curriculum and encourage
          students to explore their interests and passions. We offer a wide
          array of extracurricular activities, including
        </p>
      </SectionHeader>

      <div className="mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity: activityType) => (
            <div key={activity.heading}>
              <Card icon={activity.icon}>
                <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl capitalize mb-6">
                  {activity.heading}
                </h3>
                <p>{activity.content}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
