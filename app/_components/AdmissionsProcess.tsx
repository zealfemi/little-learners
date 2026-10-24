import Card from "./Card";
import CardsConnector from "./CardsConnector";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type processType = {
  heading: string;
  content: string;
};

const process: processType[] = [
  {
    heading: "Inquiry",
    content:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    heading: "School Tour",
    content:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    heading: "Application Form",
    content:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    heading: "Parent Interview",
    content:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    heading: "Student Assessment",
    content:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    heading: "Acceptance",
    content:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];

export default function AdmissionsProcess() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Process</HeadingTextBefore>
        <HeadingText>Admission Process</HeadingText>
        <p>
          Embark on a remarkable educational journey with us! Our Admission and
          Enrollment process is the gateway to providing your child with an
          exceptional learning experience at our kindergarten school
        </p>
      </SectionHeader>

      <div className="mt-10 md:mt-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-15 gap-y-0 md:gap-10">
          {process.map((p: processType, index) => (
            <div key={p.heading} className="flex flex-col h-full">
              <CardsConnector connector={index} />
              <Card>
                <div className="flex flex-col gap-6">
                  <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl lg:text-3xl capitalize">
                    {p.heading}
                  </h3>
                  <p>{p.content}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
