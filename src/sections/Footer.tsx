"use client";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { FC, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "FAQs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer: FC = () => {
  const footerRef = useRef(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, { once: false });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView]);

  return (
    <footer className="bg-stone-900 text-stone-50" id="contact" ref={footerRef}>
      <div className="container">
        <div className="section relative">
          <div className="absolute left-0 md:-left-80 bottom-0 md:top-0 size-96 z-0">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
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
                  d="M183.967 86.9455C252.62 12.0977 244.517 75.8891 263.023 85.1447C268.275 87.7725 275.324 85.0069 279.193 83.347"
                  stroke="currentColor"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M219.968 106.121C241.931 80.0587 278.638 143.309 281.516 119.913"
                  stroke="currentColor"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M157.258 63.7549C121.516 74.7106 105.852 117.17 121.513 148.401"
                  stroke="currentColor"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M110.544 171.591C97.2219 190.533 110.121 194.598 125.903 188.961"
                  stroke="currentColor"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M125.988 193.171C121.915 260.485 266.13 345.452 275.71 186.666"
                  stroke="currentColor"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M176.84 149.305C192.345 148.711 256.228 140.836 268.06 147.641C290.76 160.692 276.999 199.124 249.499 202.832C225.999 206 214.898 146.506 217.717 146.902C224.482 147.853 222.319 190.253 209.856 202.832C182.676 230.265 152.592 179.295 168.142 153.514"
                  stroke="#f45c2d"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                   className="animate-draw stroke-[#f45c2d]"
                ></path>{" "}
                <path
                  d="M79 346.16C109.376 314.794 132.649 289 175.228 289C180.405 298.068 196.368 316.205 218.81 316.205C241.252 316.205 246.862 298.068 246.862 289C302.967 289 307.115 331.849 321 349"
                  stroke="currentColor"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex items-center gap-3 uppercase">
            <div className="size-3 rounded-full bg-green-400 animate-pulse duration-100 relative z-0"></div>
            <span>Available for Work</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl mt-8 font-extralight"
                ref={scope}
              >
                Enough Talk, Let's Make Something Great Together
              </h2>
              <button className="btn lowercase mt-8 group/btn hover:text-stone-200 hover:bg-red-orange-500 transition-all duration-500">
                <span className="text-xl">m2rm.bng@gmail.com</span>
                <span className="group-hover/btn:rotate-45 transition-all duration-500">
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
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <nav className="flex flex-col  gap-8 mt-16 md:mt-8 md:items-end">
              {navItems.map(({ href, label }) => (
                <div key={label}>
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    className="relative"
                  >
                    <a
                      className="btn text-stone-200 border-transparent anim-underline text-xl capitalize hover:-translate-x-1 transition-all duration-500"
                      href={href}
                    >
                      {label}
                    </a>
                  </motion.div>
                </div>
              ))}
            </nav>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Ranjan M &bull; All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
