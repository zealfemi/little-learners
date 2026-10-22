import PageHeader from "@/app/_components/PageHeader";
import Section from "@/app/_components/Section";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader
          heading="Feel Free To Connect With Us"
          subHeading="Contact Us"
          content="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods">
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            <div className="border-2 border-secondary-800 rounded-lg px-4 py-2.5 lg:px-5 lg:py-4 flex gap-2 items-center">
              <HiMail /> example@gmail.com
            </div>
            <div className="border-2 border-secondary-800 rounded-lg px-4 py-2.5 lg:px-5 lg:py-4 flex gap-2 items-center">
              <HiPhone /> +234 123 4567 890
            </div>
          </div>
        </PageHeader>
      </Section>
    </div>
  );
}
