import React from "react";
import Users from "../includes/Users";

const Team = () => {
  return (
    <section id="team" className="teamSection px-16 py-16 bg-gray-900">
      <div className="top w-full flex flex-col items-center justify-center mb-20">
        <h2 className="text-white text-center font-semibold text-3xl sm:text-5xl mb-2">
          Our Team
        </h2>
        <p className="text-white text-center">
          Our team is always ready to help you on your fitness journey!
        </p>
      </div>
      <div className="bottom flex items-center justify-center w-full ">
        <div className="w-full flex items-center justify-center flex-col sm:flex-row flex-wrap md:flex-nowrap lg:space-x-5 md:space-y-0 space-y-8">
          <Users image="/user1.jpg" name="Ajith" />
          <Users image="/user2.jpg" name="Pramod" />
          <Users image="/user3.jpg" name="Das" />
          <Users image="/user1.jpg" name="Varun" />
          <Users image="/user2.jpg" name="Joe" />
        </div>
      </div>
    </section>
  );
};

export default Team;
