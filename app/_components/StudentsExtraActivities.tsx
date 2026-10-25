import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

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

      <div className="mt-10 md:mt-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-15 gap-y-0 md:gap-10">
          {}
        </div>
      </div>
    </Section>
  );
}
