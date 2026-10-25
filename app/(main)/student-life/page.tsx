import PageHeader from "@/app/_components/PageHeader";
import Section from "@/app/_components/Section";
import StudentsEvents from "@/app/_components/StudentsEvents";
import StudentsExtraActivities from "@/app/_components/StudentsExtraActivities";
import StudentsSupport from "@/app/_components/StudentsSupport";

export default function StudentLife() {
  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader
          heading="Embracing Learning with Discovery and Joy"
          subHeading="Enriching Student Life"
          content="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
        />
      </Section>

      <StudentsExtraActivities />
      <StudentsEvents />
      <StudentsSupport />
    </div>
  );
}
