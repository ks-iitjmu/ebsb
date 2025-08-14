"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="absolute top-0 z-50 w-full">
      <div className="relative flex flex-row pt-4 px-4 lg:py-6 align-middle lg:justify-center">
        <Link href="/">
          <Image
            src="/image.png"
            alt="EBSB Logo"
            width={1000}
            height={1000}
            className="hidden text-white w-16 lg:block lg:mx-8"
          />
        </Link>
        <div className="flex text-[#c8e0f3] lg:text-[#1d3261] lg:bg-white flex-row lg:py-5 lg:px-12 lg:rounded-[40px] lg:*:px-6 xl:*:px-12 lg:text-md">
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } fixed flex-col z-50 bg-foreground bg-[#1d3261] text-background h-screen w-screen left-0 top-0 py-20 px-12`}
          >
            <Image
              src="/close.svg"
              alt="Close"
              width={32}
              height={32}
              className="w-[2rem] text-white absolute top-4 left-4 cursor-pointer"
              onClick={closeMenu}
            />
            <div className="text-3xl font-semibold mb-14">Explore EBSB</div>

            <Link href="/" onClick={closeMenu}>
              <div className="flex flex-row text-xl items-center my-4 py-2 ml-2">
                <div className="w-[4rem] flex justify-center px-2 mr-4">
                  <Image
                    className="h-[2rem] self-center"
                    src="/home.svg"
                    alt="Home"
                    width={32}
                    height={32}
                  />
                </div>
                <div>Home</div>
              </div>
            </Link>

            <Link href="/about" onClick={closeMenu}>
              <div className="flex flex-row text-xl items-center my-4 py-2 ml-2">
                <div className="w-[4rem] flex justify-center px-2 mr-4">
                  <Image
                    className="h-[2rem] self-center"
                    src="/about.svg"
                    alt="About"
                    width={32}
                    height={32}
                  />
                </div>
                <div>About Us</div>
              </div>
            </Link>

            <Link href="/events" onClick={closeMenu}>
              <div className="flex flex-row text-xl items-center my-4 py-2 ml-2">
                <div className="w-[4rem] flex justify-center px-2 mr-4">
                  <Image
                    className="h-[2rem] self-center"
                    src="/event.svg"
                    alt="Events"
                    width={32}
                    height={32}
                  />
                </div>
                <div>Events</div>
              </div>
            </Link>

            <Link href="/yuva-sangam" onClick={closeMenu}>
              <div className="flex flex-row text-xl items-center my-4 py-2 ml-2">
                <div className="w-[4rem] flex justify-center px-2 mr-4">
                  <Image
                    className="h-[2rem] self-center"
                    src="/yuvaSangam.svg"
                    alt="Yuva Sangam"
                    width={32}
                    height={32}
                  />
                </div>
                <div>Yuva Sangam</div>
              </div>
            </Link>

            <Link href="/team" onClick={closeMenu}>
              <div className="flex flex-row text-xl items-center my-4 py-2 ml-2">
                <div className="w-[4rem] flex justify-center px-2 mr-4">
                  <Image
                    className="h-[2rem] self-center"
                    src="/teams.svg"
                    alt="Team"
                    width={32}
                    height={32}
                  />
                </div>
                <div>Team</div>
              </div>
            </Link>
          </div>
          <Image
            src="/menu.svg"
            alt="Menu"
            width={32}
            height={32}
            className={`${
              isMenuOpen ? "hidden" : "block"
            } lg:hidden cursor-pointer`}
            onClick={toggleMenu}
          />
          <Link href="/about">
            <div className="hidden lg:block">About Us</div>
          </Link>
          <Link href="/events">
            <div className="hidden lg:block">Events</div>
          </Link>
          <Link href="/yuva-sangam">
            <div className="hidden lg:block">Yuva Sangam</div>
          </Link>
          <Link href="/team">
            <div className="hidden lg:block">Team</div>
          </Link>
        </div>
        <Link href="/">
          <Image
            src="/image.png"
            alt="EBSB Logo"
            width={1000}
            height={1000}
            className="block absolute w-8 right-4 top-4 lg:relative lg:hidden lg:mx-8"
          />
        </Link>
        <Link href="https://iitjammu.ac.in">
          <Image
            src="/iitjmu.svg"
            alt="IITJMU Logo"
            width={1000}
            height={1000}
            className="hidden w-16 lg:block lg:mx-8 bg-white rounded"
          />
        </Link>
      </div>
    </div>
  );
}
