import { HiChevronDown } from "react-icons/hi2";
import Card from "./Card";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function ContactForm() {
  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Contact Form</HeadingTextBefore>
        <HeadingText>Student Information</HeadingText>
        <p>
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs
        </p>
      </SectionHeader>

      <div className="mt-10">
        <Card>
          <div>
            <form className="flex flex-col gap-6 lg:gap-10">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-10 text-secondary-800">
                <span className="flex flex-col gap-2">
                  <label htmlFor="parentName" className="font-semibold text-lg">
                    Parent Name
                  </label>
                  <input
                    name="parentName"
                    type="text"
                    placeholder="Enter Parent Name"
                    className="w-full px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg"
                  />
                </span>

                <span className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-semibold text-lg">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg"
                  />
                </span>

                <span className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-semibold text-lg">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg"
                  />
                </span>

                <span className="flex flex-col gap-2">
                  <label
                    htmlFor="studentName"
                    className="font-semibold text-lg">
                    Student Name
                  </label>
                  <input
                    name="studentName"
                    type="text"
                    placeholder="Enter Student Name"
                    className="w-full px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg"
                  />
                </span>

                <span className="flex flex-col gap-2">
                  <label htmlFor="studentAge" className="font-semibold text-lg">
                    Student Age
                  </label>
                  <input
                    name="studentAge"
                    type="text"
                    placeholder="Enter Student Age"
                    className="w-full px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg"
                  />
                </span>

                <span className="flex flex-col gap-2">
                  <label htmlFor="program" className="font-semibold text-lg">
                    Program of Interest
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="program"
                      className="w-full px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg appearance-none">
                      <option disabled selected className="p-3">
                        Select Program
                      </option>
                      <option value="" className="p-3">
                        Nursery
                      </option>
                      <option value="" className="p-3">
                        Pre-Kindergartens
                      </option>
                      <option value="" className="p-3">
                        Kindergartens
                      </option>
                    </select>

                    <span className="absolute right-4">
                      <HiChevronDown />
                    </span>
                  </div>
                </span>
              </div>

              <div className="flex flex-col gap-6 lg:gap-10 text-secondary-800">
                <span className="flex flex-col gap-2">
                  <label className="font-semibold text-lg">Message</label>
                  <textarea
                    placeholder="Enter Your Message"
                    className="w-full h-50 px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg resize-none"
                  />
                </span>

                <div className="grid place-items-center w-full px-4 py-2 lg:py-3 border-2 border-secondary-800 rounded-lg text-secondary-800 bg-primary-600 cursor-pointer">
                  Submit
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </Section>
  );
}
