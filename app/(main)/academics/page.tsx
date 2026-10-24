import AcademicsFeatures from "@/app/_components/AcademicsFeatures";
import AcademicsGallery from "@/app/_components/AcademicsGallery";
import AcademicsLearn from "@/app/_components/AcademicsLearn";
import PageHeader from "@/app/_components/PageHeader";
import Section from "@/app/_components/Section";

export default function Academics() {
  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader
          heading="Nurturing Young Minds for Success"
          subHeading="Academics"
          content="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        />
      </Section>

      <AcademicsFeatures />
      <AcademicsLearn />
      <AcademicsGallery />
    </div>
  );
}
