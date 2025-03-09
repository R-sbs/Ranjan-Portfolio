"use client";
import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";

import { motion,useAnimate, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Testimonial } from "@/components/Testimonial";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
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
