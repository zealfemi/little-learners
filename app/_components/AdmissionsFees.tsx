import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type programType = {
  program: string;
  ageGroup: string;
  annualTuition: string;
  registrationFee: string;
  activityFee: string;
};

const programs: programType[] = [
  {
    program: "Nursery",
    ageGroup: "2 - 3 Years",
    annualTuition: "$1,686",
    registrationFee: "$162",
    activityFee: "$12",
  },
  {
    program: "Pre - Kindergartens",
    ageGroup: "3 - 4 Years",
    annualTuition: "$2,686",
    registrationFee: "$220",
    activityFee: "$16",
  },
  {
    program: "Kindergarten",
    ageGroup: "4 - 5 Years",
    annualTuition: "$3,686",
    registrationFee: "$340",
    activityFee: "$20",
  },
];

const additional = [
  {
    service: "Before and After-School Care",
    fee: "$120 / per month",
  },
  {
    service: "Language Immersion Program",
    fee: "$60 / per semester",
  },
  {
    service: "Transportation (optional)",
    fee: "$80 / per month",
  },
];

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

      <div className="mt-10">
        <Card padding="w-full p-6 lg:p-10">
          <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-secondary-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary-700 hover:[&::-webkit-scrollbar-thumb]:bg-primary-800">
            <div className="min-w-225">
              {/* HEAD */}
              <div className="grid grid-cols-5 bg-primary-400 border-2 border-secondary-800 rounded-lg">
                <div className="whitespace-nowrap p-4 capitalize font-medium">
                  Program
                </div>
                <div className="whitespace-nowrap border-l-2 border-secondary-800 p-4 capitalize font-medium">
                  Age Group
                </div>
                <div className="whitespace-nowrap border-l-2 border-secondary-800 p-4 capitalize font-medium">
                  Annual Tuition
                </div>
                <div className="whitespace-nowrap border-l-2 border-secondary-800 p-4 capitalize font-medium">
                  Registration Fee
                </div>
                <div className="whitespace-nowrap border-l-2 border-secondary-800 p-4 capitalize font-medium">
                  Activity Fee
                </div>
              </div>

              <div className="mt-6 grid grid-cols-5 border-2 border-secondary-800 rounded-lg font-medium">
                {programs.map((row, index) => (
                  <div key={index} className="contents">
                    <div
                      className={`border-r-2 border-secondary-800 py-4 px-3 ${index !== programs.length - 1 ? "border-b-2" : ""}`}>
                      {row.program}
                    </div>
                    <div
                      className={`border-r-2 border-secondary-800 py-4 px-3 ${index !== programs.length - 1 ? "border-b-2" : ""}`}>
                      {row.ageGroup}
                    </div>
                    <div
                      className={`border-r-2 border-secondary-800 py-4 px-3 ${index !== programs.length - 1 ? "border-b-2" : ""}`}>
                      {row.annualTuition}
                    </div>
                    <div
                      className={`border-r-2 border-secondary-800 py-4 px-3 ${index !== programs.length - 1 ? "border-b-2" : ""}`}>
                      {row.registrationFee}
                    </div>
                    <div
                      className={`py-4 px-3 ${index !== programs.length - 1 ? "border-b-2 border-secondary-800" : ""}`}>
                      {row.activityFee}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-10">
        <Card padding="w-full p-6 lg:p-10">
          <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-secondary-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary-700 hover:[&::-webkit-scrollbar-thumb]:bg-primary-800">
            <div className="min-w-225">
              {/* HEAD */}
              <div className="bg-primary-400 border-2 border-secondary-800 rounded-lg">
                <div className="whitespace-nowrap p-4 capitalize font-medium">
                  Additional Services
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 border-2 border-secondary-800 rounded-lg font-medium">
                {additional.map((a, index) => (
                  <div key={index} className="contents">
                    <div
                      className={`border-r-2 border-secondary-800 py-4 px-3 ${index !== programs.length - 1 ? "border-b-2" : ""}`}>
                      {a.service}
                    </div>
                    <div
                      className={`border-r-2 border-secondary-800 py-4 px-3 ${index !== programs.length - 1 ? "border-b-2" : ""}`}>
                      {a.fee}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
