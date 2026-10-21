import Image from "next/image";
import hero from "@/public/images/hero.png";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-10 py-15 md:px-5">
      <div className="">
        <Image
          src={hero}
          alt="hero image"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="h-full flex flex-col gap-10 justify-center">
        <div className="text-center md:text-left">
          <p className="text-secondary-800 md:text-lg underline">
            Welcome to Little Learners Academy
          </p>
          <h1 className="text-secondary-800 text-3xl md:text-4xl lg:text-5xl font-extrabold font-raleway">
            Where Young Minds Blossom and{" "}
            <span className="text-primary-800">Dreams Take Flight.</span>
          </h1>
        </div>

        <p className="text-center md:text-left">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>

        <div className="card-orange grid md:grid-cols-3">
          <p className="flex flex-col items-center gap-1">
            <span className="text-3xl lg:text-4xl font-header font-extrabold text-secondary-800">
              +7000
            </span>
            <span>Students Passed Out</span>
          </p>
          <span className="border-t-2 border-secondary-800 md:hidden"></span>

          <p className="flex flex-col items-center gap-1">
            <span className="text-3xl lg:text-4xl font-header font-extrabold text-secondary-800">
              +37
            </span>
            <span>Awards & Recognitions</span>
          </p>
          <span className="border-t-2 border-secondary-800 md:hidden"></span>
          <p className="flex flex-col items-center gap-1">
            <span className="text-3xl lg:text-4xl font-header font-extrabold text-secondary-800">
              +15
            </span>
            <span>Experience Educators</span>
          </p>
        </div>
      </div>
    </div>
  );
}
