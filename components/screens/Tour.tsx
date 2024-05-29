import React from "react";

const Tour = () => {
  return (
    <section id="tour" className="tourSection px-16 py-16 bg-black">
      <div className="top w-full flex flex-col items-center justify-center mb-16 md:mb-20">
        <h2 className="text-white text-center font-semibold text-3xl sm:text-5xl mb-2">
          Gym Tour
        </h2>
        <p className="text-white text-center text-sm md:text-base">
          Take a Gym Tour with Us
        </p>
      </div>
      <div className="bottom flex items-center justify-center">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/UYbvjEWq5G0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-50 h-56 sm:h-72 md:h-80 lg:h-96"></iframe>
      </div>
    </section>
  );
};

export default Tour;
