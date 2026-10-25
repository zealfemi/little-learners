import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-15 gap-y-0 md:gap-10">
          {}
        </div>
      </div>
    </Section>
  );
}
