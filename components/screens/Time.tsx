"use client";

import React, { useState } from "react";

const Time = () => {
  const [selectedTime, setSelectedTime] = useState<string>("Morning");

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const getTimeText = (timePeriod: string) => {
    switch (timePeriod) {
      case "Morning":
        return (
          <div>
            <h2>
              <b>5:00 am</b> - <b> 8:30 am</b>
            </h2>
            <h5 className="text-lg font-normal">Men & Women</h5>
          </div>
        );
      case "Noon":
        return (
          <div>
            <h2>
              <b>8:30 am</b> - <b>11:00 am</b>
            </h2>
            <h5 className="text-lg font-normal">
              Women <b className="text-red-600">Only</b>
            </h5>
          </div>
        );
      case "Evening":
        return (
          <div>
            <h2>
              <b>4:00 am</b> - <b>10:00 am</b>
            </h2>
            <h5 className="text-lg font-normal">Men & Women</h5>
          </div>
        );
      default:
        return "";
    }
  };
  return (
    <section id="time" className="timeSection px-16 py-16 bg-gray-900">
      <div className="top w-full flex flex-col items-center justify-center mb-20">
        <h2 className="text-white text-center font-semibold text-3xl sm:text-5xl mb-2">
          Working Time
        </h2>
        <p className="text-white text-center text-sm md:text-base">
          We&apos;ve a flexible working time, to ensure everyone can access our
          gym.
        </p>
      </div>
      <div className="bottom w-full flex flex-col items-center">
        <select
          value={selectedTime}
          onChange={handleTimeChange}
          className="mb-8 px-4 py-3 rounded-lg bg-gray-700 text-white">
          <option value="Morning">Morning</option>
          <option value="Noon">Noon</option>
          <option value="Evening">Evening</option>
        </select>
        <h2 className="text-white text-center font-semibold text-2xl sm:text-4xl">
          {getTimeText(selectedTime)}
        </h2>
      </div>
    </section>
  );
};

export default Time;
