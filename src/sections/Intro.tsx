"use client";
import {  useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {
  const sectionRef = useRef(null);
  const { scope, entranceAnimation} = useTextRevealAnimation();
  const { scope: subScope , entranceAnimation: subAnimate } = useTextRevealAnimation();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
     entranceAnimation()?.then( () => subAnimate())
    }
  }, [inView]);
  return (
    <section className="section md:mt-16" id="intro" ref={sectionRef}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl leading-relaxed" ref={scope}>
          Building Beautiful Websites with Clean Code and thoughtful design to
          help your business grow and stand out online.
   
        </h2>
        <p className="mt-10 italic text-2xl" ref={subScope}>I Specialize in crafting seamless user experiences, optimizing performance, and implementing modern frontend architectures.</p>
      </div>
    </section>
  );
};

export default Intro;
