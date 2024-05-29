"use client";

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../includes/Review";

const Testimonial = () => {
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
    <section
      id="testimonial"
      className="testimonialSection px-16 py-16 bg-gray-900">
      <div className="top w-full flex flex-col items-center justify-center mb-20">
        <h2 className="text-white text-center font-semibold text-3xl sm:text-5xl mb-2">
          Testimonials
        </h2>
        <p className="text-white text-center text-sm md:text-base">
          Look what our customers are saying about us.
        </p>
      </div>
      <div className="bottom">
        <Slider {...settings}>
          <div>
            <Review
              image="/user1.jpg"
              name="Das"
              comment="Joining this gym has been life-changing! The trainers are incredibly supportive, and the atmosphere is so motivating. I've never felt better about myself"
            />
          </div>
          <div>
            <Review
              image="/user2.jpg"
              name="Das"
              comment="I've been a member of this gym for over a year now, and I can't imagine going anywhere else. The variety of classes keeps things interesting, and the staff always go above and beyond to help you reach your goals."
            />
          </div>
          <div>
            <Review
              image="/user3.jpg"
              name="Das"
              comment="I was hesitant to join a gym at first, but I'm so glad I did. The team here makes everyone feel welcome, regardless of their fitness level. It's been amazing to see my progress week after week"
            />
          </div>
          <div>
            <Review
              image="/user1.jpg"
              name="Das"
              comment="I've tried other gyms in the past, but none compare to this one. The facilities are top-notch, and the trainers genuinely care about your success. I've never felt stronger or more confident"
            />
          </div>
          <div>
            <Review
              image="/user2.jpg"
              name="Das"
              comment="From the moment I walked through the doors, I knew this gym was special. The sense of community here is like no other, and it's pushed me to achieve things I never thought possible. I'm grateful for the support and encouragement I've received along the way."
            />
          </div>
          <div>
            <Review
              image="/user3.jpg"
              name="Das"
              comment="I've tried other gyms in the past, but none compare to this one. The facilities are top-notch, and the trainers genuinely care about your success. I've never felt stronger or more confident"
            />
          </div>
          <div>
            <Review
              image="/user1.jpg"
              name="Das"
              comment="Joining this gym has been life-changing! The trainers are incredibly supportive, and the atmosphere is so motivating. I've never felt better about myself"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
