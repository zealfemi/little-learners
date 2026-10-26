import Image from "next/image";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type eventType = {
  heading: string;
  content: string;
  image: string;
};

const events: eventType[] = [
  {
    heading: "Annual Sports Day",
    content:
      "A day filled with friendly competition, team spirit, and sportsmanship.",
    image: "/images/students-life/events/Image.png",
  },
  {
    heading: "Cultural Festivals",
    content:
      "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
    image: "/images/students-life/events/Image-1.png",
  },
  {
    heading: "Art Exhibitions",
    content:
      "Showcasing our students' artistic talents through exhibitions and displays.",
    image: "/images/students-life/events/Image-2.png",
  },
  {
    heading: "Science Fair",
    content:
      "A platform for budding scientists to present their innovative projects and experiments.",
    image: "/images/students-life/events/Image-3.png",
  },
  {
    heading: "International Day",
    content:
      "A vibrant celebration of our diverse community, embracing cultures from around the world.",
    image: "/images/students-life/events/Image-4.png",
  },
  {
    heading: "Graduation Ceremony",
    content:
      "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
    image: "/images/students-life/events/Image-5.png",
  },
];

export default function StudentsEvents() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Features</HeadingTextBefore>
        <HeadingText>Events & Celebrations</HeadingText>
        <p>
          At Little Learners Academy, we celebrate every milestone and create
          cherished memories for our students. Throughout the year, we host a
          variety of events and celebrations that bring the entire school
          community together. Some of our memorable events include
        </p>
      </SectionHeader>

      <div className="mt-10 md:mt-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event: eventType) => (
            <div key={event.heading}>
              <Card>
                <div className="relative flex items-center">
                  <div className="border-t-2 border-b-2 border-secondary-800 h-15 lg:h-20 bg-primary-400 -left-6 -right-6 lg:-left-10 lg:-right-10 absolute"></div>

                  <div className="border-2 border-secondary-800 rounded-lg relative w-full h-55 lg:h-60">
                    <Image src={event.image} alt={event.heading} fill />
                  </div>
                </div>
                <div className="mt-10 flex flex-col gap-6 justify-center items-center text-center">
                  <h3 className="font-header font-bold text-secondary-800 text-xl md:text-2xl capitalize">
                    {event.heading}
                  </h3>
                  <p>{event.content}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
