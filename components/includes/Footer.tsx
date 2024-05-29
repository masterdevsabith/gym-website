import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black px-12 text-white">
      <div className="top flex flex-wrap sm:flex-nowrap items-center justify-between border-b-2 border-white py-8">
        <div className="mb-16 w-full sm:w-1/4 sm:mb-0 left flex items-start justify-center">
          <ul className="flex flex-col items-center justify-center">
            <li className="text-lg font-semibold">Quick Links</li>
            <li className="text-sm">
              <Link href="#home">Home</Link>
            </li>
            <li className="text-sm">
              <Link href="#about">About</Link>
            </li>
            <li className="text-sm">
              <Link href="#levels">Levels</Link>
            </li>
            <li className="text-sm">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mb-16 w-full sm:w-1/2 sm:mb-0 middle flex flex-col items-center">
          <h2 className="mb-3">Follow Us</h2>
          <div className="flex items-center justify-center">
            <Image
              src="/y_white.png"
              alt="social_media_icon"
              width={33}
              height={33}
              className="mr-8"
            />
            <Image
              src="/d_white.png"
              alt="social_media_icon"
              width={33}
              height={33}
              className="mr-8"
            />
            <Image
              src="/i_white.png"
              alt="social_media_icon"
              width={33}
              height={33}
              className="mr-8"
            />
            <Image
              src="/f_white.png"
              alt="social_media_icon"
              width={33}
              height={33}
            />
          </div>
        </div>
        <div className="mb-16 w-full sm:w-1/4 sm:mb-0 right flex items-end justify-center">
          <ul className="flex flex-col items-center justify-center">
            <li className="text-lg font-semibold">Contact Info</li>
            <li className="text-sm text-center">
              <Link href="#home">
                123 Street Name, <br /> City info@example.com <br />{" "}
                123-456-7890
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom w-full flex items-center justify-center py-8 text-center">
        <h5 className="text-sm">
          &copy; 2024 Fat To Fit. All Rights Reserved. Push Your Limits,
          Safeguarded by Us.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
