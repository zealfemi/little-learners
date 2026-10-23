import Image from "next/image";
import { HiMail } from "react-icons/hi";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type memberType = {
  image: string;
  name: string;
  qualification: string;
  desc: string;
};

const members: memberType[] = [
  {
    image: "/images/members/member-1.png",
    name: "Ms. Sarah Anderson",
    qualification: "Bachelor's Degree in Early Childhood Education",
    desc: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    image: "/images/members/member-2.png",
    name: "Mr. David Roberts",
    qualification: "Master's Degree in Elementary Education",
    desc: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    image: "/images/members/member-3.png",
    name: "Ms. Emily Hernandez",
    qualification: "Diploma in Child Psychology",
    desc: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    image: "/images/members/member-4.png",
    name: "Mr. Michael Turner",
    qualification: "Bachelor's Degree in Physical Education",
    desc: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    image: "/images/members/member-5.png",
    name: "Ms. Jessica Lee",
    qualification: "Master's Degree in Special Education",
    desc: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    image: "/images/members/member-6.png",
    name: "Mr. William Parker",
    qualification: "Bachelor's Degree in Fine Arts",
    desc: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

export default function AboutTeamMembers() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Teachers With Expertise</HeadingTextBefore>
        <HeadingText>Our Team Members</HeadingText>
        <p>
          At Little Learners Academy, our teaching team is the heart of our
          educational journey. We take great pride in employing highly qualified
          and passionate educators who possess a deep understanding of early
          childhood development. Our teachers create a warm and engaging
          atmosphere, encouraging curiosity, instilling confidence, and
          fostering a love for learning.
        </p>
      </SectionHeader>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {members.map((member: memberType) => (
          <div key={member.name} className="flex h-full">
            <Card>
              <div>
                <div className="flex justify-between items-center mb-6 gap-1">
                  <div className="relative flex items-center gap-2">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={60}
                      height={60}
                      className="w-15 lg:20"
                    />
                    <p className="font-header font-bold text-secondary-800 md:text-xl lg:text-2xl capitalize">
                      {member.name}
                    </p>
                  </div>
                  <HiMail />
                </div>

                <div className="bg-primary-400 border-2 border-secondary-800 rounded-lg p-4 lg:p-8">
                  <p className="font-semibold mb-6">
                    Qualification:
                    {member.qualification}
                  </p>
                  <p className="">{member.desc}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
