import React from "react";
import Button from "../includes/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="heroSection px-8 md:px-16 pt-20 py-8 md:py-8 md:pt-32">
      <div className="left">
        <h1 className=" font-semibold text-center md:text-left text-white mb-10 text-5xl sm:text-6xl md:text-7xl">
          Never
          <br />
          Give Up On
          <br />
          Your Dreams
        </h1>
        <div className="buttons mb-10 flex items-center justify-center md:justify-start">
          <Button title="Contact Us" href="/" classes="mr-3 bg-white" />
          <Button
            title="Take a Gym Tour"
            href="/"
            classes="border-2 border-white bg-transparent hover:bg-white text-white hover:text-black"
          />
        </div>
        <div className="counting_numbers flex flex-col items-center sm:flex-row justify-center md:justify-start">
          <div className="flex flex-col items-center first_one mb-10 border-b-2 border-slate-300 pb-8 sm:mr-10 sm:border-r-2 pr-4 sm:border-b-0 sm:mb-0 sm:pb-0">
            <h4 className="text-white text-lg font-bold">3+</h4>
            <span className="text-gray-300 text-sm">Expert Trainers</span>
          </div>
          <div className="flex flex-col items-center second_one mb-10 border-b-2 border-slate-300 pb-8 sm:mr-10 sm:border-r-2 pr-4 sm:border-b-0 sm:mb-0 sm:pb-0">
            <h4 className="text-white text-lg font-bold">935+</h4>
            <span className="text-gray-300 text-sm">Members Joined</span>
          </div>
          <div className="flex flex-col items-center third_one mb-10 sm:mb-0">
            <h4 className="text-white text-lg font-bold">80+</h4>
            <span className="text-gray-300 text-sm">Fitness Programmes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
