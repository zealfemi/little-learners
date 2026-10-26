import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function ContactForm() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Contact Form</HeadingTextBefore>
        <HeadingText>Student Information</HeadingText>
        <p>
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs
        </p>
      </SectionHeader>
    </Section>
  );
}
