"use client";

import React from "react";
import Cards from "../includes/Cards";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Offers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <section id="offers" className="offerSection px-16 py-16 bg-black">
      <div className="top w-full flex flex-col items-center justify-center mb-20">
        <h2 className="text-white text-center font-semibold text-3xl sm:text-5xl mb-2">
          What We Offer
        </h2>
        <p className="text-white text-center text-sm md:text-base">
          We offer wide variety of execises and workouts to keep you go on the
          fitness journey.
        </p>
      </div>
      <div className="bottom ">
        <Slider {...settings}>
          <div>
            <Cards
              image="/four.jpg"
              title="Nutritional Guidance"
              desc="Diet Plans: Personalized meal plans to complement fitness goals.
          Nutrition Workshops: Educational sessions on healthy eating and nutrition.
          "
            />
          </div>
          <div>
            <Cards
              image="/two.jpeg"
              title="Personal Training"
              desc="
          One-on-One Sessions: Customized workouts with a personal trainer. Small Group Training: Personalized, affordable group sessions."
            />
          </div>
          <div>
            <Cards
              image="/three.webp"
              title="Group Fitness Classes"
              desc="Yoga,zumba,Spinning/Cycling,HIIT (High-Intensity Interval Training),Aerobics,Strength Training"
            />
          </div>
          <div>
            <Cards
              image="/four.jpg"
              title="Nutritional Guidance"
              desc="Diet Plans: Personalized meal plans to complement fitness goals.
          Nutrition Workshops: Educational sessions on healthy eating and nutrition.
          "
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Offers;
