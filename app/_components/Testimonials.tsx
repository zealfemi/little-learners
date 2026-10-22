import Image from "next/image";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { FaStar } from "react-icons/fa6";
import Carousel from "./Carousel";

type testimonialType = {
  image: string;
  name: string;
  rating: number;
  content: string;
};

const testimonials: testimonialType[] = [
  {
    image: "/images/testimonials/testimonial-1.png",
    name: "Jennifer B.",
    rating: 5,
    content:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    image: "/images/testimonials/testimonial-2.png",
    name: "David K.",
    rating: 5,
    content:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    image: "/images/testimonials/testimonial-3.png",
    name: "Emily L.",
    rating: 5,
    content:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];

export default function Testimonials() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Their Happy Words 🤗</HeadingTextBefore>
        <HeadingText>Our Testimonials</HeadingText>
        <p>
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </SectionHeader>

      <div className="mt-10 h-full">
        <Carousel
          slides={testimonials.map((testimonial: testimonialType) => (
            <div key={testimonial.name} className="flex h-full w-full">
              <Card>
                <div className="flex flex-col gap-5 items-center text-center justify-center w-full">
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="w-16.5 h-16.5 rounded-full border-2 flex flex-col items-center justify-center border-secondary-800 bg-primary-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={45}
                        height={45}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-secondary-800 font-semibold">
                      {testimonial.name}
                    </p>
                  </div>
                  <span className="text-primary-800 flex items-center">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                  <p>{testimonial.content}</p>
                </div>
              </Card>
            </div>
          ))}
        />
      </div>
    </Section>
  );
}
