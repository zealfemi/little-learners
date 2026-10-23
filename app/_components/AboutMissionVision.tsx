import { GiBinoculars } from "react-icons/gi";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { FaSchoolFlag } from "react-icons/fa6";

const missionVision = [
  {
    heading: "Mission",
    content:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
    icon: FaSchoolFlag,
  },
  {
    heading: "Vision",
    content:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    icon: GiBinoculars,
  },
];

export default function AboutMissionVision() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Mission & Visions</HeadingTextBefore>
        <HeadingText>Our Mission & Visions</HeadingText>
        <p>
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </SectionHeader>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {missionVision.map((mv) => (
          <div key={mv.heading} className="flex h-full">
            <Card>
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-header font-bold text-secondary-800 text-2xl md:text-3xl lg:text-4xl capitalize">
                    {mv.heading}
                  </p>
                  <mv.icon size={40} color="#ff8d4c" />
                </div>
                <p className="mt-6">{mv.content}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
