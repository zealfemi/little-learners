"use client";

import Image from "next/image";
import Card from "./Card";
import Carousel from "./Carousel";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type galleryType = {
  heading: string;
  content: string;
  images: string[];
};

const gallery: galleryType[] = [
  {
    heading: "Classrooms",
    content:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [
      "/images/academics/gallery/classrooms/Image.png",
      "/images/academics/gallery/classrooms/Image-1.png",
      "/images/academics/gallery/classrooms/Image-2.png",
      "/images/academics/gallery/classrooms/Image-3.png",
    ],
  },
  {
    heading: "Library",
    content:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [
      "/images/academics/gallery/library/Image.png",
      "/images/academics/gallery/library/Image-1.png",
      "/images/academics/gallery/library/Image-2.png",
      "/images/academics/gallery/library/Image-3.png",
    ],
  },
  {
    heading: "Science Lab",
    content:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [
      "/images/academics/gallery/science-lab/Image.png",
      "/images/academics/gallery/science-lab/Image-1.png",
      "/images/academics/gallery/science-lab/Image-2.png",
      "/images/academics/gallery/science-lab/Image-3.png",
    ],
  },
  {
    heading: "Computer Lab",
    content:
      "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills.",
    images: [
      "/images/academics/gallery/computer-lab/Image.png",
      "/images/academics/gallery/computer-lab/Image-1.png",
      "/images/academics/gallery/computer-lab/Image-2.png",
      "/images/academics/gallery/computer-lab/Image-3.png",
    ],
  },
  {
    heading: "Garden and Nature Area",
    content:
      "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [
      "/images/academics/gallery/garden-area/Image.png",
      "/images/academics/gallery/garden-area/Image-1.png",
      "/images/academics/gallery/garden-area/Image-2.png",
      "/images/academics/gallery/garden-area/Image-3.png",
    ],
  },
];

export default function AcademicsGallery() {
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSU5EUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Our Gallery</HeadingTextBefore>
        <HeadingText>Our Rooms Gallery</HeadingText>
        <p>
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </p>
      </SectionHeader>

      <div className="mt-30">
        <div className="grid gap-30">
          {gallery.map((g: galleryType) => (
            <div key={g.heading}>
              <Card>
                <Carousel>
                  <div className="-mt-25 -mx-4">
                    <Carousel.Slides
                      slides={g.images.map((i: string) => (
                        <div
                          key={g.heading}
                          className="relative border-2 border-secondary-800 rounded-lg w-full h-47.5 md:h-65 lg:h-75">
                          <Image
                            src={i}
                            alt={g.heading}
                            fill
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            className="w-full object-cover rounded-md"
                          />
                        </div>
                      ))}></Carousel.Slides>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                      <h3 className="order-2 md:order-1 font-header font-bold text-secondary-800 text-xl md:text-2xl lg:text-3xl capitalize">
                        {g.heading}
                      </h3>
                      <div className="order-1 md:order-2">
                        <Carousel.Buttons>
                          <Carousel.LeftButton position="normal" />
                          <Carousel.RightButton position="normal" />
                        </Carousel.Buttons>
                      </div>
                    </div>
                    <p className="text-center md:text-left">{g.content}</p>
                  </div>
                </Carousel>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
