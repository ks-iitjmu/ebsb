"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  location: string;
  type: "upcoming" | "past";
}

// Sample events data
const eventsData: Event[] = [
  {
    id: 1,
    title: "Cultural Festival 2025",
    date: "March 15, 2025",
    description: "A grand celebration of diverse Indian cultures with performances, food stalls, and cultural exhibitions.",
    image: "/gallery/1.png",
    location: "Main Auditorium, IIT Jammu",
    type: "upcoming"
  },
  {
    id: 2,
    title: "Folk Dance Competition",
    date: "April 20, 2025",
    description: "Inter-state folk dance competition showcasing traditional dances from different regions of India.",
    image: "/gallery/2.png",
    location: "Open Air Theatre",
    type: "upcoming"
  },
  {
    id: 3,
    title: "Art & Craft Exhibition",
    date: "May 10, 2025",
    description: "Display of traditional handicrafts and artworks from various states of India.",
    image: "/gallery/3.png",
    location: "Exhibition Hall",
    type: "upcoming"
  },
  {
    id: 4,
    title: "Unity Day Celebration",
    date: "October 31, 2024",
    description: "Celebrated the birth anniversary of Sardar Vallabhbhai Patel with various cultural activities.",
    image: "/gallery/4.png",
    location: "Central Lawn",
    type: "past"
  },
  {
    id: 5,
    title: "Regional Food Festival",
    date: "September 15, 2024",
    description: "A delightful journey through the flavors of different Indian states with authentic cuisines.",
    image: "/gallery/5.png",
    location: "Food Court Area",
    type: "past"
  },
  {
    id: 6,
    title: "Traditional Music Concert",
    date: "August 20, 2024",
    description: "An evening of classical and folk music performances by renowned artists from across India.",
    image: "/gallery/6.png",
    location: "Main Auditorium, IIT Jammu",
    type: "past"
  }
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = eventsData.filter(event => event.type === activeTab);

  return (
    <div className="min-h-screen bg-[#c8e0f3]">
      {/* Hero Section with decorative elements */}
      <section className="relative overflow-hidden bg-[#1d3261]">
        {/* Decorative SVG patterns - same as home page */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 w-80 h-80 transform rotate-12 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.3)" strokeWidth="2">
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(45 100 100)" />
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(90 100 100)" />
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(135 100 100)" />
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(180 100 100)" />
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(225 100 100)" />
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(270 100 100)" />
                <ellipse cx="100" cy="60" rx="25" ry="45" transform="rotate(315 100 100)" />
                <circle cx="100" cy="100" r="15" fill="rgba(250, 245, 234, 0.2)" />
              </g>
            </svg>
          </div>
          <div className="absolute -top-10 right-20 w-60 h-60 transform -rotate-45">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.25)" strokeWidth="1.5">
                <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(60 100 100)" />
                <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(120 100 100)" />
                <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(180 100 100)" />
                <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(240 100 100)" />
                <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(300 100 100)" />
                <circle cx="100" cy="100" r="12" fill="rgba(250, 245, 234, 0.15)" />
              </g>
            </svg>
          </div>
          <div className="absolute bottom-10 -left-32 w-96 h-96 transform rotate-30">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.2)" strokeWidth="2">
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(36 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(72 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(108 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(144 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(180 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(216 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(252 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(288 100 100)" />
                <ellipse cx="100" cy="55" rx="30" ry="50" transform="rotate(324 100 100)" />
                <circle cx="100" cy="100" r="18" fill="rgba(250, 245, 234, 0.25)" />
              </g>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-72 h-72 transform -rotate-15 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.3)" strokeWidth="1.8">
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(45 100 100)" />
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(90 100 100)" />
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(135 100 100)" />
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(180 100 100)" />
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(225 100 100)" />
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(270 100 100)" />
                <ellipse cx="100" cy="65" rx="22" ry="40" transform="rotate(315 100 100)" />
                <circle cx="100" cy="100" r="14" fill="rgba(250, 245, 234, 0.2)" />
              </g>
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/4 w-48 h-48 transform rotate-75 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.4)" strokeWidth="2">
                <ellipse cx="100" cy="80" rx="15" ry="25" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="80" rx="15" ry="25" transform="rotate(72 100 100)" />
                <ellipse cx="100" cy="80" rx="15" ry="25" transform="rotate(144 100 100)" />
                <ellipse cx="100" cy="80" rx="15" ry="25" transform="rotate(216 100 100)" />
                <ellipse cx="100" cy="80" rx="15" ry="25" transform="rotate(288 100 100)" />
                <circle cx="100" cy="100" r="8" fill="rgba(250, 245, 234, 0.3)" />
              </g>
            </svg>
          </div>

          <div className="absolute top-2/3 right-1/3 w-40 h-40 transform -rotate-30 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.45)" strokeWidth="2">
                <ellipse cx="100" cy="75" rx="18" ry="30" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="75" rx="18" ry="30" transform="rotate(60 100 100)" />
                <ellipse cx="100" cy="75" rx="18" ry="30" transform="rotate(120 100 100)" />
                <ellipse cx="100" cy="75" rx="18" ry="30" transform="rotate(180 100 100)" />
                <ellipse cx="100" cy="75" rx="18" ry="30" transform="rotate(240 100 100)" />
                <ellipse cx="100" cy="75" rx="18" ry="30" transform="rotate(300 100 100)" />
                <circle cx="100" cy="100" r="10" fill="rgba(250, 245, 234, 0.35)" />
              </g>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/6 w-28 h-28 transform rotate-45 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.35)" strokeWidth="1.5">
                <ellipse cx="100" cy="85" rx="12" ry="20" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="85" rx="12" ry="20" transform="rotate(90 100 100)" />
                <ellipse cx="100" cy="85" rx="12" ry="20" transform="rotate(180 100 100)" />
                <ellipse cx="100" cy="85" rx="12" ry="20" transform="rotate(270 100 100)" />
                <circle cx="100" cy="100" r="6" fill="rgba(250, 245, 234, 0.25)" />
              </g>
            </svg>
          </div>

          <div className="absolute top-1/5 right-1/4 w-24 h-24 transform -rotate-60 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.4)" strokeWidth="1.5">
                <ellipse cx="100" cy="85" rx="10" ry="18" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="85" rx="10" ry="18" transform="rotate(72 100 100)" />
                <ellipse cx="100" cy="85" rx="10" ry="18" transform="rotate(144 100 100)" />
                <ellipse cx="100" cy="85" rx="10" ry="18" transform="rotate(216 100 100)" />
                <ellipse cx="100" cy="85" rx="10" ry="18" transform="rotate(288 100 100)" />
                <circle cx="100" cy="100" r="5" fill="rgba(250, 245, 234, 0.3)" />
              </g>
            </svg>
          </div>

          <div className="absolute bottom-1/3 left-2/3 w-36 h-36 transform rotate-120 hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="rgba(250, 245, 234, 0.38)" strokeWidth="1.8">
                <ellipse cx="100" cy="78" rx="14" ry="22" transform="rotate(0 100 100)" />
                <ellipse cx="100" cy="78" rx="14" ry="22" transform="rotate(60 100 100)" />
                <ellipse cx="100" cy="78" rx="14" ry="22" transform="rotate(120 100 100)" />
                <ellipse cx="100" cy="78" rx="14" ry="22" transform="rotate(180 100 100)" />
                <ellipse cx="100" cy="78" rx="14" ry="22" transform="rotate(240 100 100)" />
                <ellipse cx="100" cy="78" rx="14" ry="22" transform="rotate(300 100 100)" />
                <circle cx="100" cy="100" r="7" fill="rgba(250, 245, 234, 0.28)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-[#c8e0f3] heading font-black text-4xl lg:text-6xl text-center mt-80 mb-5 tracking-widest">
            EVENTS
          </h1>
          <p className="text-[#c8e0f3] mb-40 px-8 text-center">
            Discover the vibrant cultural events that showcase the rich heritage and diversity of our nation through the EBSB initiative.
          </p>
          <div className="mb-20"></div>
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
          Ek Bharat Shreshtha Bharat (EBSB) events at IIT Jammu celebrate the unity in diversity of our great nation. 
          Through cultural festivals, performances, and exhibitions, we showcase the rich heritage and traditions that make India truly incredible.
        </p>
      </section>

      {/* Events Section */}
      <section className="px-4 lg:px-8 py-16">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1d3261] rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-[#c8e0f3] text-[#1d3261] shadow-lg"
                  : "text-[#c8e0f3]"
              }`}
            >
              UPCOMING EVENTS
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-[#c8e0f3] text-[#1d3261] shadow-lg"
                  : "text-[#c8e0f3]"
              }`}
            >
              PAST EVENTS
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group relative w-full max-w-sm">
                <div className="relative h-80 perspective-1000">
                  <div className="card-inner relative w-full h-full transition-all duration-500 transform-style-preserve-3d group-hover:scale-105 group-hover:-rotate-1">
                    <div className="absolute inset-0 w-full h-full bg-white rounded-xl overflow-hidden backface-hidden shadow-lg border-l-4 border-[#1d3261]">
                      <div className="relative p-6 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-[#1d3261] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                  {event.type === "upcoming" ? "📅" : "✅"}
                                </span>
                              </div>
                              <span className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
                                event.type === "upcoming" 
                                  ? "bg-[#1d3261]" 
                                  : "bg-[#1d3261] opacity-75"
                              }`}>
                                {event.date.split(', ')[1] || event.date}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-[#1d3261] mb-2 group-hover:text-[#0f1a3d] transition-colors">
                              {event.title}
                            </h4>
                            <h5 className="text-[#1d3261]/70 font-semibold text-sm mb-4 uppercase tracking-wider">
                              {event.location}
                            </h5>
                          </div>
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-[#1d3261]/60 text-sm leading-relaxed mb-4">
                            {event.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-[#1d3261] rounded-full"></div>
                              <div className="w-2 h-2 bg-[#c8e0f3] rounded-full"></div>
                              <div className="w-2 h-2 bg-[#1d3261] rounded-full"></div>
                            </div>
                            <div className="text-xs text-[#1d3261]/50 font-medium">
                              {event.type === "upcoming" ? "Coming Soon →" : "Event Details →"}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#1d3261] to-[#c8e0f3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="text-[#1d3261] text-xl font-bold mb-4">
                No {activeTab} events found
              </div>
              <p className="text-gray-600">
                {activeTab === "upcoming" 
                  ? "Check back soon for upcoming events!" 
                  : "No past events to display at the moment."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#c8e0f3] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[#1d3261] heading font-bold text-3xl lg:text-4xl mb-6">
            BE PART OF THE CELEBRATION
          </h2>
          <p className="text-[#1d3261] mb-8 text-lg">
            Join us in celebrating the unity in diversity of our great nation through cultural events and festivals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/team"
              className="bg-[#1d3261] text-[#c8e0f3] font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              KNOW ABOUT OUR TEAM
            </a>
            <a
              href="https://www.iitjammu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-[#1d3261] text-[#1d3261] font-bold px-8 py-3 rounded-lg hover:bg-[#1d3261] hover:text-[#c8e0f3] transition-all duration-300"
            >
              VISIT IIT JAMMU WEBSITE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
