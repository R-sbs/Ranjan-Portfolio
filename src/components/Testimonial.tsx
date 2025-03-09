"use client";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { usePresence, motion } from "motion/react";
import { useEffect } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

export const Testimonial = ({
  name,
  company,
  role,
  quote,
  image,
  imagePositionY,
}: {
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string | StaticImport;
  imagePositionY: number;
}) => {
  const [isPresent, safeToRemove] = usePresence();

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimate,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();

  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimate,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimate()?.then(() => citeEntranceAnimate());
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove?.();
      });
    }
  }, [isPresent]);

  return (
    <div
      className="grid md:grid-cols-5 md:gap-6 lg:gap-16 md:items-center"
      key={name}
    >
      <div className="relative aspect-square md:aspect-[9/16] md:col-span-2 overflow-hidden">
        <motion.div className="absolute w-full bg-[linear-gradient(to_bottom,black,black,transparent)]" initial={{ height: "200%"}} animate={{ height: 0}} exit={{ height: "100%"}} transition={{ duration: 0.7}}></motion.div>
        <Image
          src={image}
          alt="name"
          className="size-full object-cover"
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div className="mt-8 text-3xl md:text-5xl lg:text-6xl" ref={quoteScope}>
          &ldquo;
          {quote}
          &rdquo;
        </div>
        <cite
          className="mt-4 not-italic block md:text-lg lg:text-xl"
          ref={citeScope}
        >
          {name}, {role}, {company}
        </cite>
      </blockquote>
    </div>
  );
};
