import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function AboutTeamMembers() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore></HeadingTextBefore>
        <HeadingText></HeadingText>
        <p></p>
      </SectionHeader>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {missionVision.map((mv: mvType) => (
          <div key={mv.heading} className="flex h-full">
            <Card>
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-header font-bold text-secondary-800 text-2xl md:text-3xl lg:text-4xl capitalize">
                    {mv.heading}
                  </p>
                  <mv.icon size={40} color="#ff8d4c" />
                </div>
                <p className="mt-6">{mv.content}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
