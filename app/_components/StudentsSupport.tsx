import { IconType } from "react-icons";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { HiBookOpen, HiLightBulb, HiUsers } from "react-icons/hi2";
import Card from "./Card";

type supportType = {
  heading: string;
  content: string;
  icon: IconType;
};

const supports: supportType[] = [
  {
    heading: "Counseling",
    content:
      "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    icon: HiLightBulb,
  },
  {
    heading: "Learning Support",
    content:
      "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    icon: HiBookOpen,
  },
  {
    heading: "Parent-Teacher Collaboration",
    content:
      "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    icon: HiUsers,
  },
];

export default function StudentsSupport() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Achievements</HeadingTextBefore>
        <HeadingText>Student Support</HeadingText>
        <p>
          At Little Learners Academy, we are committed to providing a supportive
          and nurturing environment that meets the unique needs of each student.
          Our student support services include
        </p>
      </SectionHeader>

      <div className="mt-10 md:mt-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {supports.map((support: supportType) => (
            <div key={support.heading}>
              <Card icon={support.icon}>
                <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl capitalize mb-6">
                  {support.heading}
                </h3>
                <p>{support.content}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
