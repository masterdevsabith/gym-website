import Image from "next/image";
import React from "react";
import Button from "../includes/Button";

const About = () => {
  return (
    <section id="about" className="aboutSection px-8 md:px-16 py-16 bg-black">
      <div className="top w-full flex flex-col items-center justify-center mb-20">
        <h2 className="text-white text-center font-semibold text-3xl sm:text-5xl mb-2">
          Why Choose Us ?
        </h2>
        <p className="text-white text-center text-sm md:text-base">
          We are here to help you guide a healthy life using exercises.
        </p>
      </div>
      <div className="bottom flex items-center flex-col lg:flex-row">
        <div className="left mb-8 lg:mb-0 w-full lg:w-1/2 relative flex items-center justify-center md:flex-none">
          <Image
            src="/about.jpg"
            alt="about_image"
            width={500}
            height={500}
            className="ring-2 ring-cyan-500 borderRadius brightness-75"
          />
        </div>
        <div className="right w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:justify-start">
          <p className="text-white font-normal text-sm md:text-base mb-5 text-center lg:text-left">
            At Gym Name, we empower individuals to achieve their fitness goals
            with personalized training and state-of-the-art facilities. We
            foster an inclusive community where everyone feels welcome and
            motivated. Our experienced trainers provide innovative, effective
            fitness solutions tailored to each member&apos;s needs. Join us for
            a healthier lifestyle.
          </p>
          <Button title="Contact Us" href="/" classes="bg-white" />
        </div>
      </div>
    </section>
  );
};

export default About;
