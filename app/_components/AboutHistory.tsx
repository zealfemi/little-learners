import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type historyType = {
  year: number;
  heading: string;
  content: string;
};

const history: historyType[] = [
  {
    year: 2023,
    heading: "Resilience and Future Horizons",
    content:
      "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    year: 2017,
    heading: "Innovation and Technology",
    content:
      "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: 2012,
    heading: "Expansion and Recognition",
    content:
      "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    year: 2005,
    heading: "Inception and Growth",
    content:
      "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

export default function AboutHistory() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Progressive Journey</HeadingTextBefore>
        <HeadingText>Our History</HeadingText>
        <p>
          Founded with a passion for early education in 2005, our kindergarten
          school boasts a rich history of empowering young learners to reach
          their potential through innovative teaching methods and a supportive
          learning environment
        </p>
      </SectionHeader>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {history.map((hist: historyType) => (
          <div key={hist.heading} className="flex h-full">
            <Card>
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl capitalize">
                    {hist.heading}
                  </h3>
                </div>
                <p className="mt-6">{hist.content}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
