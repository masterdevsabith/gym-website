"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "./Button";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false); // Optional: Close the menu when a link is clicked
  };
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-5 md:py-8 fixed top-0 left-0 w-full z-50 bg-gray-100/20 backdrop-blur">
      <div className="left">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Link>
      </div>
      <div className="middle items-center justify-center hidden md:block">
        <ul className="flex items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="text-white font-normal ml-7 text-lg">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="right hidden md:block">
        <Button title="Contact Us" href="/" classes="bg-white" />
      </div>

      {/* hamMenu icon */}
      <div className="right md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="w-6 justify-self-start text-white"
          onClick={toggleMenu}
        />
      </div>

      {/* hammenu code */}
      <div
        className={`hamMenu flex flex-col items-center absolute top-0 left-0 w-full h-screen transition-transform duration-300 px-8 py-8 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="top">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className="w-6 justify-self-start "
            onClick={toggleMenu}
          />
        </div>
        <div className="bottom mt-24">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((link) => (
              <li
                onClick={handleLinkClick}
                key={link.key}
                className="mb-10 font-semibold text-center text-gray-950">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="calltoactions flex flex-col items-center mt-12"
          onClick={handleLinkClick}>
          <Button title="Contact Us" href="/" classes="bg-black text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
