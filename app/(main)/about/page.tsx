import AboutAwardsRecognition from "@/app/_components/AboutAwardsRecognition";
import AboutHistory from "@/app/_components/AboutHistory";
import AboutMissionVision from "@/app/_components/AboutMissionVision";
import AboutTeamMembers from "@/app/_components/AboutTeamMembers";
import PageHeader from "@/app/_components/PageHeader";
import Section from "@/app/_components/Section";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader
          heading="Welcome to Little Learners Academy"
          subHeading="Overview"
          content="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        />

        <AboutMissionVision />
        <AboutAwardsRecognition />
        <AboutHistory />
        <AboutTeamMembers />
      </Section>
    </div>
  );
}
