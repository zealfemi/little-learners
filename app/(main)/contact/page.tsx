import PageHeader from "@/app/_components/PageHeader";
import Section from "@/app/_components/Section";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader
          heading="Feel Free To Connect With Us"
          subHeading="Contact Us"
          content="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        />
      </Section>
    </div>
  );
}
