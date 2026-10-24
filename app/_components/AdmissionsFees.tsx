import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function AdmissionsFees() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Features</HeadingTextBefore>
        <HeadingText>Fee Structure</HeadingText>
        <p>
          Our fee structure is transparent, and we strive to keep our fees
          competitive within the education sector. The fees vary based on the
          program, age group, and any additional services chosen.
        </p>
      </SectionHeader>

      <div className="mt-10"></div>
    </Section>
  );
}
