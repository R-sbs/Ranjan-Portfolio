import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "OnePass Users Administration System",
    image: image1,
  },
  {
    name: "Laura\'s Touch  E-commerce Site",
    image: image2,
  },
  {
    name: "Gym Management System",
    image: image3,
  },
  {
    name: "Poorveshana Developers Pvt Ltd",
    image: image4,
  },
  {
    name: "Auction Platform | Cultural Heritage Marketplace",
    image: image5,
  },
];

const Projects: FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="mt-10 md:mt-16">
          {projects.map((project) => (
            <a key={project.name} className="relative group/project">
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-stone-300 -z-10 [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)]"></div>
              <div className="border-t last:border-b py-6 md:py-8 lg:py-10 border-stone-400 border-dotted">
                <div className="aspect-video md:hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} image`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl group-hover/project:scale-110 duration-300 transition-all">
                    {project.name}
                  </h3>
                  <div className="hidden md:block relative">
                    <div className="absolute aspect-video w-full z-10 shadow-md top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-150 transition-all duration-500">
                      <Image
                        src={project.image}
                        alt={`${project.name} image`}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="h-6 overflow-hidden">
                    <div className="w-6 h-12 flex flex-col group-hover/project:-translate-y-1/2 duration-300 transition-all">
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
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
