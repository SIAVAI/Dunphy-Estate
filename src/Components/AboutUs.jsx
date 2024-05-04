/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";

import bg from "../assets/bg.png";

const AboutUs = () => {
  AOS.init();
  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="lg:w-[60%]">
          <h2 className="text-center  text-4xl md:text-5xl lg:text-6xl mt-16 mb-10 font-bold ">
            About Us
          </h2>
          <p className="text-xl  text-justify mb-10">
            At Dunphy Estate, we're more than just a real estate platform –
            we're your trusted partner in finding your perfect home. With a
            passion for excellence and a commitment to personalized service, we
            pride ourselves on delivering unparalleled expertise and support
            throughout your real estate journey. Whether you're buying, selling,
            or investing, count on Dunphy Estate to provide innovative
            solutions, transparent guidance, and a seamless experience every
            step of the way. Welcome to a world of possibilities with Dunphy
            Estate – where your dream home becomes a reality.
          </p>
        </div>
        <img className="lg:w-[20%]" src={bg} alt="" />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1500">
        <div className="flex flex-col w-full lg:flex-row text-center">
          <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center p-6">
            <h2 className="text-5xl md:text-6xl lg:text-8xl text-teal-500 font-bold">
              10000+
            </h2>
            <p className="text-4xl mt-4">Clients Until This Day!!</p>
          </div>
          <div className="divider lg:divider-horizontal">AND</div>
          <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center p-6">
            <h2 className="text-5xl md:text-6xl lg:text-8xl text-violet-500 font-bold">
              30000+
            </h2>
            <p className="text-4xl mt-4">
              {" "}
              Properties Were Traded Successfully!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
