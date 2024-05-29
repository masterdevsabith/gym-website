import Footer from "@/components/includes/Footer";
import Navbar from "@/components/includes/Navbar";
import About from "@/components/screens/About";
import Contact from "@/components/screens/Contact";
import Hero from "@/components/screens/Hero";
import Offers from "@/components/screens/Offers";
import Team from "@/components/screens/Team";
import Testimonial from "@/components/screens/Testimonial";
import Time from "@/components/screens/Time";
import Tour from "@/components/screens/Tour";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative bg w-full ">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Team />
      <Offers />
      <Time />
      <Tour />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
