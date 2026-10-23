"use client";

import { useState } from "react";
import Faq from "./Faq";
import HeadingText from "./HeadingText";
import HeadingTextBefore from "./HeadingTextBefore";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export type faqsType = {
  question: string;
  answer: string;
};

const faqs: faqsType[] = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, we have a simple and comfortable uniform to help students feel a sense of belonging. You can pick up a sizing guide and purchase uniforms directly from the school office.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a variety of fun after-school clubs, including arts and crafts, music, introductory sports, and a reading club to keep the little ones engaged and learning new skills.",
  },
  {
    question: "What kind of curriculum do you follow?",
    answer:
      "We use a play-based learning approach. This means your child will build a strong foundation in reading, math, and social skills through fun, hands-on activities and creative play.",
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "We take allergies very seriously. Our campus is completely nut-free, and our staff works closely with parents to accommodate any specific dietary needs to keep every child safe at mealtime.",
  },
  {
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "We keep our class sizes small to ensure every child gets the personal attention they need. Our current ratio is 1:8 for younger toddlers and 1:12 for our preschool and primary classes.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "We focus on positive reinforcement and gentle guidance. Our teachers encourage good behavior through praise and help children talk through their emotions in a supportive, caring environment.",
  },
  {
    question: "How do I apply for admission to Little Learners Academy?",
    answer:
      "Applying is easy! You can fill out the online application form right here on our website, or reach out to schedule a campus tour and pick up a physical registration packet from the front desk.",
  },
];

export default function Faqs() {
  const [showFaq, setShowFaq] = useState<string | null>(null);

  function toggleFaq(faq: string) {
    setShowFaq((prev) => (prev === faq ? null : faq));
  }

  return (
    <Section>
      <SectionHeader>
        <HeadingTextBefore>Solutions For The Doubts</HeadingTextBefore>
        <HeadingText>Frequently Asked Questions</HeadingText>
        <p>
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child&apos;s education.
        </p>
      </SectionHeader>

      <div className="grid md:grid-cols-2 place-items-start mt-10 gap-6 lg:gap-7.5">
        {faqs.map((faq: faqsType) => (
          <div key={faq.question}>
            <Faq
              question={faq.question}
              answer={faq.answer}
              onClick={() => toggleFaq(faq.question)}
              isOpen={showFaq === faq.question}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
