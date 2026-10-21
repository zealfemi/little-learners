import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import SectionHeader from "./SectionHeader";

export default function OurBenefits() {
  return (
    <div className="py-10 md:py-15 lg:py-20 md:px-5">
      <SectionHeader>
        <HeadingTextBefore>Children Deserve Bright Future</HeadingTextBefore>
        <HeadingText>Our Benefits</HeadingText>
        <p>
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child&apos;s future.
        </p>
      </SectionHeader>
    </div>
  );
}
