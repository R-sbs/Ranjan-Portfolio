"use client";
import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="section my-auto" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, idx) => (
            <div
              className="border-t border-stone-400 border-dotted py-6 md:py-8 last:border-b relative isolate group/faq"
              key={question}
              onClick={() => {
                if (idx === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(idx);
                }
              }}
            >
              <div className="absolute bottom-0 left-0 h-0 w-full bg-stone-300 group-hover/faq:h-full transition-all duration-300 -z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"></div>
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl md:text-3xl group-hover/faq:px-8 transition-all duration-500">{question}</div>

                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400  rounded-full shrink-0 tranition duration-300",
                    idx === selectedIndex && "-rotate-45 self-center"
                  )}
                >
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <>
                  {idx === selectedIndex && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <p className="text-xl mt-4 group-hover/faq:px-8 transition-all duration-500">{answer}</p>
                    </motion.div>
                  )}
                </>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
