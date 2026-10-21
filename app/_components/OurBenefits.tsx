import { IconType } from "react-icons";
import {
  FaCrown,
  FaFlag,
  FaGraduationCap,
  FaLifeRing,
  FaUsers,
} from "react-icons/fa6";
import { RiParentFill } from "react-icons/ri";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import SectionHeader from "./SectionHeader";
import Section from "./Section";

type benefitType = {
  icon: IconType;
  header: string;
  content: string;
};

const benefits: benefitType[] = [
  {
    icon: FaGraduationCap,
    header: "Holistic Learning Approach",
    content:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    icon: FaCrown,
    header: "Experienced Educators",
    content:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    icon: FaLifeRing,
    header: "Nurturing Environment",
    content:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    icon: FaFlag,
    header: "Play-Based Learning",
    content:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    icon: FaUsers,
    header: "Individualized Attention",
    content:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    icon: RiParentFill,
    header: "Parent Involvement",
    content:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

export default function OurBenefits() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Children Deserve Bright Future</HeadingTextBefore>
        <HeadingText>Our Benefits</HeadingText>
        <p>
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child&apos;s future.
        </p>
      </SectionHeader>

      <div className="grid md:grid-cols-3 gap-10 mt-10 md:mt-12 h-full">
        {benefits.map((benefit: benefitType) => (
          <div key={benefit.header} className="flex h-full">
            <Card icon={benefit.icon}>
              <p className="mb-4 text-secondary-800 font-header font-bold">
                {benefit.header}
              </p>
              <p>{benefit.content}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
