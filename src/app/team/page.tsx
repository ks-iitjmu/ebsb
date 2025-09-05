import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const coordinator = {
    name: "Subrahmanyam",
    role: "Club Coordinator",
    position: "Head of All Departments",
    description:
      "Leading and coordinating all EBSB initiatives at IIT Jammu with vision and dedication.",
    image: "/team/subrahmanyam.png",
  };

  const teamCategories = [
    {
      category: "Event Management",
      members: [
        {
          name: "Mr. Prateek",
          role: "Event Management Head",
          position: "Head",
          description:
            "Leading event planning and execution with precision and creativity.",
          image: "/team/prateek.png",
        },
        {
          name: "Aakanksha",
          role: "Event Management Head",
          position: "Co-Head",
          description:
            "Coordinating seamless events that bring communities together.",
          image: "/team/aakanksha.png",
        },
      ],
    },
    {
      category: "Media & Design",
      members: [
        {
          name: "Mr. Pankaj",
          role: "Social Media Head",
          position: "Head",
          description:
            "Crafting engaging content and managing our digital presence.",
          image: "/team/pankaj.png",
        },
        {
          name: "Mr. Eswar",
          role: "Media Head & Coverage",
          position: "Head",
          description:
            "Capturing moments and managing comprehensive media coverage.",
          image: "/team/eswar.png",
        },
        {
          name: "Ms. Moukthika",
          role: "Design Head",
          position: "Head",
          description:
            "Creating visually stunning designs that tell our story.",
          image: "/team/moukthika.png",
        },
        {
          name: "Mr. Rahul Yadav",
          role: "Design Head",
          position: "Co-Head",
          description:
            "Bringing creative visions to life through innovative design.",
          image: "/team/rahul.png",
        },
      ],
    },
    {
      category: "Partnerships & Outreach",
      members: [
        {
          name: "Aditya Pratap",
          role: "Sponsorship & Outreach Head",
          position: "Head",
          description:
            "Building strategic partnerships and expanding our network.",
          image: "/team/aditya.png",
        },
        {
          name: "Jyothiraditya",
          role: "Club Collaboration Head",
          position: "Head",
          description: "Fostering partnerships and collaborative initiatives.",
          image: "/team/jyothi.png",
        },
      ],
    },
    {
      category: "Operations & Support",
      members: [
        {
          name: "Mr. Kedar",
          role: "Inventory Head",
          position: "Head",
          description:
            "Managing resources and ensuring smooth operational flow.",
          image: "/team/kedar.png",
        },
        {
          name: "Kanhaiya Lal",
          role: "Core Team Member",
          position: "Core Member",
          description:
            "Contributing expertise and support across all initiatives.",
          image: "/team/kanhaiya.png",
        },
      ],
    },
    {
      category: "Website Development",
      members: [
        {
          name: "Kunal Sharma",
          role: "Web Dev Head",
          position: "Head",
          description: "Development and Handling of our Official Website.",
          image: "/team/kunal.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-[#1d3261]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 w-80 h-80 transform rotate-12 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.3)" strokeWidth="2">
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(45 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(90 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(135 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(180 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(225 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(270 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="60"
                  rx="25"
                  ry="45"
                  transform="rotate(315 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="rgba(250, 245, 234, 0.2)"
                />
              </g>
            </svg>
          </div>
          <div className="absolute -top-10 right-20 w-60 h-60 transform -rotate-45">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g
                fill="none"
                stroke="rgba(250, 245, 234, 0.25)"
                strokeWidth="1.5"
              >
                <ellipse
                  cx="100"
                  cy="70"
                  rx="20"
                  ry="35"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="70"
                  rx="20"
                  ry="35"
                  transform="rotate(60 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="70"
                  rx="20"
                  ry="35"
                  transform="rotate(120 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="70"
                  rx="20"
                  ry="35"
                  transform="rotate(180 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="70"
                  rx="20"
                  ry="35"
                  transform="rotate(240 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="70"
                  rx="20"
                  ry="35"
                  transform="rotate(300 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="12"
                  fill="rgba(250, 245, 234, 0.15)"
                />
              </g>
            </svg>
          </div>
          <div className="absolute bottom-10 -left-32 w-96 h-96 transform rotate-30">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.2)" strokeWidth="2">
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(36 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(72 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(108 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(144 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(180 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(216 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(252 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(288 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="30"
                  ry="50"
                  transform="rotate(324 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="18"
                  fill="rgba(250, 245, 234, 0.25)"
                />
              </g>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-72 h-72 transform -rotate-15 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g
                fill="none"
                stroke="rgba(250, 245, 234, 0.3)"
                strokeWidth="1.8"
              >
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(45 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(90 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(135 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(180 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(225 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(270 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="22"
                  ry="40"
                  transform="rotate(315 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="14"
                  fill="rgba(250, 245, 234, 0.2)"
                />
              </g>
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/4 w-48 h-48 transform rotate-75 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.4)" strokeWidth="2">
                <ellipse
                  cx="100"
                  cy="80"
                  rx="15"
                  ry="25"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="80"
                  rx="15"
                  ry="25"
                  transform="rotate(72 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="80"
                  rx="15"
                  ry="25"
                  transform="rotate(144 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="80"
                  rx="15"
                  ry="25"
                  transform="rotate(216 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="80"
                  rx="15"
                  ry="25"
                  transform="rotate(288 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="rgba(250, 245, 234, 0.3)"
                />
              </g>
            </svg>
          </div>

          <div className="absolute top-2/3 right-1/3 w-40 h-40 transform -rotate-30 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.45)" strokeWidth="2">
                <ellipse
                  cx="100"
                  cy="75"
                  rx="18"
                  ry="30"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="75"
                  rx="18"
                  ry="30"
                  transform="rotate(60 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="75"
                  rx="18"
                  ry="30"
                  transform="rotate(120 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="75"
                  rx="18"
                  ry="30"
                  transform="rotate(180 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="75"
                  rx="18"
                  ry="30"
                  transform="rotate(240 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="75"
                  rx="18"
                  ry="30"
                  transform="rotate(300 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="10"
                  fill="rgba(250, 245, 234, 0.35)"
                />
              </g>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/6 w-28 h-28 transform rotate-45 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g
                fill="none"
                stroke="rgba(250, 245, 234, 0.35)"
                strokeWidth="1.5"
              >
                <ellipse
                  cx="100"
                  cy="85"
                  rx="12"
                  ry="20"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="85"
                  rx="12"
                  ry="20"
                  transform="rotate(90 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="85"
                  rx="12"
                  ry="20"
                  transform="rotate(180 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="85"
                  rx="12"
                  ry="20"
                  transform="rotate(270 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="6"
                  fill="rgba(250, 245, 234, 0.25)"
                />
              </g>
            </svg>
          </div>

          <div className="absolute top-1/5 right-1/4 w-24 h-24 transform -rotate-60 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g
                fill="none"
                stroke="rgba(250, 245, 234, 0.4)"
                strokeWidth="1.5"
              >
                <ellipse
                  cx="100"
                  cy="85"
                  rx="10"
                  ry="18"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="85"
                  rx="10"
                  ry="18"
                  transform="rotate(72 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="85"
                  rx="10"
                  ry="18"
                  transform="rotate(144 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="85"
                  rx="10"
                  ry="18"
                  transform="rotate(216 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="85"
                  rx="10"
                  ry="18"
                  transform="rotate(288 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="5"
                  fill="rgba(250, 245, 234, 0.3)"
                />
              </g>
            </svg>
          </div>

          <div className="absolute bottom-1/3 left-2/3 w-36 h-36 transform rotate-120 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g
                fill="none"
                stroke="rgba(250, 245, 234, 0.38)"
                strokeWidth="1.8"
              >
                <ellipse
                  cx="100"
                  cy="78"
                  rx="14"
                  ry="22"
                  transform="rotate(0 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="78"
                  rx="14"
                  ry="22"
                  transform="rotate(60 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="78"
                  rx="14"
                  ry="22"
                  transform="rotate(120 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="78"
                  rx="14"
                  ry="22"
                  transform="rotate(180 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="78"
                  rx="14"
                  ry="22"
                  transform="rotate(240 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="78"
                  rx="14"
                  ry="22"
                  transform="rotate(300 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="7"
                  fill="rgba(250, 245, 234, 0.28)"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-[#c8e0f3] heading font-black text-4xl lg:text-6xl text-center mt-80 mb-5 tracking-widest">
            Meet the incredible
          </h1>
          <h1 className="text-[#c8e0f3] heading font-black text-4xl lg:text-6xl text-center mb-10 tracking-widest">
            TEAM EBSB
          </h1>
          <p className="text-[#c8e0f3] mb-40 px-4 lg:px-60 text-center">
            Get to know the talented individuals who form the backbone of our
            organization. Each member brings a unique set of skills,
            experiences, and passion, contributing to the synergy that drives
            our success.
          </p>
          <p className="text-[#c8e0f3] hover:scale-105 hover:font-black transition-transform ease-in-out duration-500 mb-20 text-center">
            2025-26
          </p>
        </div>
      </section>

      <Image
        src="/flowers.svg"
        alt="Flowers Left"
        width={1000}
        height={1000}
        className="absolute w-24 lg:w-64 lg:-translate-y-45 -translate-y-18"
      />
      <Image
        src="/flowers.svg"
        alt="Flowers Right"
        width={1000}
        height={1000}
        className="rotate-y-180 absolute w-24 lg:w-64 right-0 lg:-translate-y-45 -translate-y-18"
      />

      <section>
        <p className="text-[#1d3261] mb-40 lg:mx-90 mx-10 mt-20 text-center">
          Our dedicated team of passionate individuals works tirelessly to
          promote the rich cultural heritage of India through the Ek Bharat
          Shreshtha Bharat initiative. Each team member brings unique expertise
          and commitment to fostering unity in diversity across our nation.
        </p>
      </section>

      <section className="flex flex-col items-center px-4 lg:px-8 my-16">
        <div className="text-center font-bold text-4xl lg:text-5xl mb-20 text-[#1d3261] heading">
          OUR TEAM PORTFOLIOS
        </div>

        <div className="w-full max-w-2xl mx-auto mb-24">
          <div className="relative text-center mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1d3261]/30 to-transparent"></div>
            </div>
            <div className="relative bg-[#c8e0f3] px-8 py-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1d3261] heading tracking-wider">
                Club Coordinator
              </h3>
              <div className="flex justify-center mt-2">
                <div className="w-16 h-1 bg-[#1d3261] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="group relative w-full max-w-md">
              <div className="relative h-96 perspective-1000">
                <div className="card-inner relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-12 group-hover:scale-105">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1d3261] via-[#2d4371] to-[#1d3261] rounded-2xl overflow-hidden backface-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[#c8e0f3] rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-8 h-8 bg-[#c8e0f3] rounded-full animate-bounce"></div>
                      <div className="absolute top-1/3 left-4 w-2 h-2 bg-[#c8e0f3] rounded-full"></div>
                      <div className="absolute bottom-1/3 right-8 w-3 h-3 bg-[#c8e0f3] rounded-full"></div>
                    </div>

                    <div className="relative z-10 p-6 h-full flex flex-col justify-between text-[#c8e0f3]">
                      <div>
                        <div className="mb-4">
                          <span className="inline-block bg-[#c8e0f3] text-[#1d3261] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            {coordinator.position}
                          </span>
                        </div>

                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <div className="w-34 h-34 bg-[#c8e0f3] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                              {coordinator.image ? (
                                <Image
                                  src={coordinator.image}
                                  alt={coordinator.name}
                                  width={136}
                                  height={136}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-[#1d3261] font-bold text-4xl">
                                  {coordinator.name.charAt(0)}
                                </span>
                              )}
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-[#c8e0f3] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                          </div>
                        </div>

                        <div className="text-center">
                          <h4 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                            {coordinator.name}
                          </h4>
                          <h5 className="text-[#c8e0f3]/80 font-semibold text-base lg:text-lg mb-4 uppercase tracking-wider">
                            {coordinator.role}
                          </h5>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-[#c8e0f3]/70 text-sm leading-relaxed mb-4">
                          {coordinator.description}
                        </p>

                        <div className="flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#c8e0f3] rounded-full animate-pulse"></div>
                          <div
                            className="w-2 h-2 bg-[#c8e0f3]/60 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-[#c8e0f3]/40 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -translate-x-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {teamCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="w-full max-w-7xl mx-auto mb-20">
            <div className="relative text-center mb-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1d3261]/30 to-transparent"></div>
              </div>
              <div className="relative bg-[#c8e0f3] px-8 py-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#1d3261] heading tracking-wider">
                  {category.category}
                </h3>
                <div className="flex justify-center mt-2">
                  <div className="w-16 h-1 bg-[#1d3261] rounded-full"></div>
                </div>
              </div>
            </div>

            <div
              className={`grid gap-8 justify-items-center ${category.members.length === 1
                  ? "grid-cols-1 justify-center"
                  : category.members.length === 2
                    ? "grid-cols-1 md:grid-cols-2 justify-center max-w-2xl mx-auto"
                    : category.members.length === 3
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
            >
              {category.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="group relative w-full max-w-sm"
                >
                  <div className="relative h-96 perspective-1000">
                    <div className="card-inner relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-12 group-hover:scale-105">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1d3261] via-[#2d4371] to-[#1d3261] rounded-2xl overflow-hidden backface-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[#c8e0f3] rounded-full animate-pulse"></div>
                          <div className="absolute bottom-6 left-6 w-8 h-8 bg-[#c8e0f3] rounded-full animate-bounce"></div>
                          <div className="absolute top-1/3 left-4 w-2 h-2 bg-[#c8e0f3] rounded-full"></div>
                          <div className="absolute bottom-1/3 right-8 w-3 h-3 bg-[#c8e0f3] rounded-full"></div>
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between text-[#c8e0f3]">
                          <div>
                            <div className="mb-4">
                              <span className="inline-block bg-[#c8e0f3] text-[#1d3261] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                {member.position}
                              </span>
                            </div>

                            <div className="flex justify-center mb-6">
                              <div className="relative">
                                <div className="w-34 h-34 bg-[#c8e0f3] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                  {member.image ? (
                                    <Image
                                      src={member.image}
                                      alt={member.name}
                                      width={136}
                                      height={136}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <span className="text-[#1d3261] font-bold text-4xl">
                                      {member.name.charAt(0)}
                                    </span>
                                  )}
                                </div>
                                <div className="absolute inset-0 rounded-full border-2 border-[#c8e0f3] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                              </div>
                            </div>

                            <div className="text-center">
                              <h4 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                                {member.name}
                              </h4>
                              <h5 className="text-[#c8e0f3]/80 font-semibold text-sm lg:text-base mb-4 uppercase tracking-wider">
                                {member.role}
                              </h5>
                            </div>
                          </div>

                          <div className="text-center">
                            <p className="text-[#c8e0f3]/70 text-sm leading-relaxed mb-4">
                              {member.description}
                            </p>

                            <div className="flex justify-center space-x-2">
                              <div className="w-2 h-2 bg-[#c8e0f3] rounded-full animate-pulse"></div>
                              <div
                                className="w-2 h-2 bg-[#c8e0f3]/60 rounded-full animate-pulse"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-[#c8e0f3]/40 rounded-full animate-pulse"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -translate-x-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Link href="/about">
          <div className="bg-[#1d3261] text-[#c8e0f3] font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
            KNOW MORE ABOUT US
          </div>
        </Link>
      </section>

      <section className="py-20 bg-[#c8e0f3] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center font-bold text-4xl mb-20 text-[#1d3261]">
            TEAM STATISTICS
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
                <div className="text-4xl lg:text-5xl font-bold mb-4 text-[#1d3261] heading">
                  11
                </div>
                <div className="text-[#1d3261]/70 uppercase tracking-wide text-sm">
                  Team Members
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
                <div className="text-4xl lg:text-5xl font-bold mb-4 text-[#1d3261] heading">
                  5
                </div>
                <div className="text-[#1d3261]/70 uppercase tracking-wide text-sm">
                  Departments
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
                <div className="text-4xl lg:text-5xl font-bold mb-4 text-[#1d3261] heading">
                  2025
                </div>
                <div className="text-[#1d3261]/70 uppercase tracking-wide text-sm">
                  Active Year
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
                <div className="text-4xl lg:text-5xl font-bold mb-4 text-[#1d3261] heading">
                  ∞
                </div>
                <div className="text-[#1d3261]/70 uppercase tracking-wide text-sm">
                  Possibilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
