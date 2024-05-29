import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contactSection py-16 pb-0 bg-black">
      <div className="top w-full flex flex-col items-center justify-center mb-20">
        <h2 className="text-white text-center font-semibold text-3xl sm:text-5xl mb-2">
          Connect With Us
        </h2>
        <p className="text-white text-center text-sm md:text-base">
          We are happy to get connected with our customers.
        </p>
      </div>
      <div className="bottom w-full flex items-start flex-col-reverse lg:flex-row">
        <div className="left w-full lg:w-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126134.65548689966!2d76.99585668016218!3d8.906716693987653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05db537843ef03%3A0x1e4f4a2c9b4a7c35!2sFAT%20TO%20FIT%20GYM!5e0!3m2!1sen!2sin!4v1716894066118!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"></iframe>
        </div>
        <div className="right w-full lg:w-1/2 px-10 lg:pr-10 mb-20 lg:mb-0">
          <form action="">
            <div className="inputGroup w-full flex items-center space-x-5 ">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="px-4 py-4 bg-transparent border-b-2 border-white w-full mb-4"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="px-4 py-4 bg-transparent border-b-2 border-white w-full mb-4"
              />
            </div>
            <div className="inputGroup w-full flex items-center space-x-5 mb-12">
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="phone"
                maxLength={10}
                className="px-4 py-4 bg-transparent border-b-2 border-white w-full mb-4"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                className="px-4 py-4 bg-transparent border-b-2 border-white w-full mb-4"
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="your message..."
              className="px-4 py-4 bg-transparent w-full mb-4"></textarea>
            <div className="submitButton">
              <button className="px-4 py-3 bg-purple-700 text-white font-bold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
