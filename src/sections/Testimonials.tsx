"use client";
import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/projects/laura-1a.png";
import image2 from "@/assets/images/testimonials/sachin.jpg";
import image3 from "@/assets/images/projects/poor-1a.png";
import image4 from "@/assets/images/testimonials/scout.png";

import { motion,useScroll, useTransform, AnimatePresence } from "motion/react";
import { Testimonial } from "@/components/Testimonial";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Laura",
    company: "Laura's Touch",
    role: "Founder",
    quote: "Ranjan revamped our  website, making it modern, fast, and seamless. His attention to detail and technical expertise ensured a smooth transition without disrupting our live site.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Darshan Bharadwaj",
    company: "Poorveshana Developers Pvt Ltd",
    role: "Founding Director",
    quote: "Ranjan delivered a sleek, high-performing website that boosted client inquiries by 35%. His expertise in modern design, SEO, and speed optimization ensured a seamless user experience.",
    image: image3,
    imagePositionY: 0.55,
  },
  {
    name: "Satish",
    company: "Scout's Gym",
    role: "Owner",
    quote: "The system Ranjan built streamlined our gym management, automating emails and WhatsApp alerts. His attention to detail and expertise made membership tracking and feedback collection effortless.",
    image: image4,
    imagePositionY: 0.55,
  },
];


const Testimonials: FC = () => {
  const htwoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: htwoRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const [ testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if(curr === 0) {
        return testimonials.length - 1;
      } else {
        return curr - 1;
      }
    })
  }

  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if(curr === testimonials.length -1) {
        return 0;
      } else {
        return curr + 1;
      }
    })
  }

  return (
    <section className="section" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
        ref={htwoRef}
      >
        <motion.span className="whitespace-nowrap" style={{ x:transformTop}}>
          Nice Words From My Past Clients
        </motion.span>
        <motion.span className="whitespace-nowrap self-end text-red-orange-500" style={{ x:transformBottom}}>
          Nice Words From My Past Clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20 md:mt-10">
          <AnimatePresence mode="wait" initial={false}>
          <>
          {testimonials.map(
            (props, index) =>
              index === testimonialIndex && (
               <Testimonial key={props.name} {...props} />
              )
          )}
          </>
          </AnimatePresence>
        </div>
        <div className="flex gap-4 my-4">
          <button className="slide-arrow" onClick={handleClickPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="slide-arrow" onClick={handleClickNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
