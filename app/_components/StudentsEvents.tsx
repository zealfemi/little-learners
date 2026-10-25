import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function StudentsEvents() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Features</HeadingTextBefore>
        <HeadingText>Events & Celebrations</HeadingText>
        <p>
          At Little Learners Academy, we celebrate every milestone and create
          cherished memories for our students. Throughout the year, we host a
          variety of events and celebrations that bring the entire school
          community together. Some of our memorable events include
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
