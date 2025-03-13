"use client";
import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpeg";
import Image from "next/image";
import SplitType from "split-type";
import {
  useAnimate,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "motion/react";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const potraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      { transform: "translateY(0)" },
      { duration: 0.5, delay: stagger(0.2) }
    );
  }, [titleAnimate, titleScope]);

  return (
    <section>
      <div className="md:grid md:grid-cols-12 md:h-screen items-strech sticky top-20 z-10">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !min-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-7xl mt-40 md:mt-0 max-w-[35ch]  capitalize relative -z-10"
              ref={titleScope}
            >
              Transforming Ideas into High-Performance Digital Solutions
            </motion.h1>
            <div className="flex flex-col md:flex-row items-start gap-4 my-6">
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <a
                  href="#projects"
                  className="btn text-stone-900 group/btn hover:text-stone-200 hover:bg-red-orange-500 transition-all duration-500"
                >
                  View my Work
                  <div className="text-red-orange-500 group-hover/btn:text-stone-200  transition-all duration-500">
                    <div className="overflow-hidden w-5 h-5">
                      <div className="h-10 w-5 flex flex-col group-hover/btn:-translate-y-1/2 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="relative"
              >
                <a href="https://drive.google.com/uc?export=download&id=1PHLDIDcjOGcXcwFSGQLvYSxGS-yNMePj" download className="btn border-transparent anim-underline text-xl capitalize">
                  Download CV{" "}
                  <span className="text-red-orange-500">
                    <svg
                      className="size-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="svg_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="svg_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="svg_iconCarrier">
                        {" "}
                        <path
                          d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.1198 22 8.79986 22H12.5M14 11H8M10 15H8M16 7H8M15 19L18 22M18 22L21 19M18 22V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </a>
              </motion.div>
              
            </div>
          </div>
        </div>
        <div className="col-span-5 relative ">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{ width: potraitWidth }}
          >
            <Image
              src={heroImage}
              alt="portfolio-image"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
