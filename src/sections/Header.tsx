"use client";
import { FC, useEffect, MouseEvent } from "react";
import { useState } from "react";
import { motion, useAnimate } from "motion/react";

const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (open) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
      navAnimate(navScope.current, { height: "100%" }, { duration: 0.7 });
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);
      navAnimate(navScope.current, { height: 0 }, { duration: 0.7 });
    }
  }, [
    open,
    bottomLineAnimate,
    bottomLineScope,
    navAnimate,
    navScope,
    topLineAnimate,
    topLineScope,
  ]);

  const handleClickMobileNav = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-50"
        ref={navScope}
      >
        <nav className="mt-32 flex flex-col items-center justify-center">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 !w-full border-stone-400 border-dotted border-t  first:border-none last:border-b py-8 md:py-16 group/nav-item relative isolate"
              onClick={handleClickMobileNav}
            >
              <div className="container !max-w-screen-lg flex items-center justify-between">
                <span className="text-3xl md:text-4xl group-hover/nav-item:pl-4  transition-all duration-300">
                  {label}
                </span>
                <button className="slide-arrow border-transparent group-hover/nav-item:scale-125 transition-all duration-300">
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
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 -z-10 w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-300"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full backdrop-blur-md z-50 mix-blend-difference">
        <div className="container !min-w-full">
          <div className="h-20 flex items-center justify-between">
            <div className="font-bold text-xl uppercase">
              <a href="/">
                <span className="text-white">Ranjan M</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-50 w-full">
        <div className="container !min-w-full">
          <div className="h-20 flex items-center justify-end">
            <div className="flex items-center gap-4 ">
              <div
                className="border bg-stone-200 border-stone-400 size-11 rounded-full inline-flex items-center justify-center"
                onClick={() => setOpen(!open)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    ref={topLineScope}
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{ transformOrigin: "12px 8px" }}
                  />
                  <motion.rect
                    ref={bottomLineScope}
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{ transformOrigin: "12px 16px" }}
                  />
                </svg>
              </div>
              <a href="#contact">
                <button className="btn hidden md:block bg-red-orange-500 text-white">
                  Contact me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
