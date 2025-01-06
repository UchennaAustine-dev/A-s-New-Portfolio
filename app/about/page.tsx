"use client";

import { motion } from "framer-motion";
import React, { memo, useCallback, useMemo } from "react";
import aboutImg from "../../public/pexels-cottonbro-6153354.jpg";
import Image from "next/image";

interface ButtonClickEvent extends React.MouseEvent<HTMLButtonElement> {
  preventDefault(): void;
}

const AboutPage = memo(() => {
  const experienceItems = useMemo(
    () => [
      "12 years experience in Web Design",
      "10 years experience in Software Design",
      "3 years experience in Front-end Web Development",
      "5 years experience in Webflow Development",
      "1 year experience in Framer Development",
      "4 years experience in Product Management",
    ],
    []
  );

  const skills = useMemo(
    () => [
      "UI/UX Design",
      "Strategy",
      "Product Management",
      "User Research",
      "Agile Methodologies",
      "Collaboration",
      "Design Sprints",
      "Design Systems",
      "HTML and CSS",
      "CMS Design & Architecture",
      "Webflow Development",
      "Framer Development",
      "Photography",
      "Graphic Design",
    ],
    []
  );

  const handleButtonClick = useCallback((event: ButtonClickEvent) => {
    event.preventDefault();
    // Handle button click logic here
  }, []);

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-12 md:py-16"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Header Section */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-5xl md:text-7xl text-[burlywood] font-medium font-italiana mb-6">
          About
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              I&apos;m Amidat. A Software Engineer and an innovative problem
              solver.
            </h2>
            <p className="text-gray-700 mb-4">
              The cusp of art and technology has always fascinated me and
              I&apos;ve never been afraid to just jump in and give it a go,
              whether it&apos;s Paint, Photoshop, Sketch or CSS. I&apos;ve been
              designing with computers since the day I first opened Microsoft
              Paint.
            </p>
            <p className="text-gray-700">
              Fast forward to 2023 and I&apos;ve tried it all, from Digital
              Campaign Design and Flash Actionscript to Web Design, Animation,
              HTML/CSS, No-Code Web Development.
            </p>
          </div>
          <div className="w-full md:w-64 flex justify-center md:justify-start">
            <Image
              src={aboutImg}
              alt="Profile picture of Amidat Ogunbiyi"
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl text-[burlywood] font-medium font-italiana mb-8">
          EXPERIENCE
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg">- Degree in Brand Communications</p>
            <p className="text-lg">
              - 15 years experience in Digital Design, Web Development,
              Advertising and Product Development
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-medium">
              Within those 15 years, I have:
            </p>
            <ul className="space-y-2 text-gray-700">
              {experienceItems.map((item, index) => (
                <li key={index} className="text-lg">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl text-[burlywood] font-medium font-italiana mb-8">
          SKILLS
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16">
        {/* Resume Button */}
        <button
          onClick={handleButtonClick}
          className="px-8 py-3 bg-[burlywood] text-white rounded-full text-lg hover:bg-gray-800 transition-all font-italiana font-semibold mb-16 ease-in-out duration-300"
        >
          Resume
        </button>

        {/* Contact Button */}
        <button
          onClick={handleButtonClick}
          className="px-8 py-3 bg-[burlywood] text-white rounded-full text-lg hover:bg-gray-800 transition-all font-italiana font-semibold ease-in-out duration-300 ml-5"
        >
          Contact me
        </button>
      </section>
    </motion.div>
  );
});

AboutPage.displayName = "AboutPage";

export default AboutPage;
