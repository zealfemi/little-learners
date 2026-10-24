import AdmissionsFees from "@/app/_components/AdmissionsFees";
import AdmissionsProcess from "@/app/_components/AdmissionsProcess";
import PageHeader from "@/app/_components/PageHeader";
import Section from "@/app/_components/Section";

export default function Admission() {
  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader
          heading="Join Our Family of Young Learners"
          subHeading="Admissions"
          content="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
        />

        <AdmissionsProcess />
        <AdmissionsFees />
      </Section>
    </div>
  );
}
