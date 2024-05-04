/* eslint-disable react/no-unescaped-entities */
import work from "../assets/works.jpeg";
import { SlEnergy } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";

import "animate.css";
const HowItWorks = () => {
  AOS.init();
  return (
    <div>
      <h2 className="animate__animated animate__bounce animate__delay-2s font-bold text-4xl md:text-5xl lg:text-6xl text-center mt-12 mb-10">
        How It Works
      </h2>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex flex-col lg:flex-row justify-center items-start bg-base-200 p-6 gap-10"
      >
        <div className="lg:w-[45%] text-justify text-xl">
          <p className="mb-6">
            Welcome to Dunphy Estate, where your dream home awaits. Nestled at
            the intersection of elegance and functionality, Dunphy Estate is
            your premier destination for finding the perfect property to call
            home. Whether you're seeking a cozy urban apartment, a sprawling
            suburban estate, or a charming countryside retreat, our extensive
            listings cater to every taste and lifestyle. With a commitment to
            excellence and personalized service, we strive to make your real
            estate journey seamless and enjoyable. Explore our curated selection
            of properties and embark on the path to finding your ideal living
            space with Dunphy Estate.
          </p>
          <div className="flex justify-center items-start gap-6 mb-4">
            <SlEnergy className="bg-green-700 text-white rounded-full" />
            <p>
              Effortless property search: Our intuitive platform allows you to
              easily filter through thousands of listings based on your
              preferences.
            </p>
          </div>
          <div className="flex justify-center items-start gap-6 mb-4">
            <SlEnergy className="bg-green-700 text-white rounded-full" />
            <p>
              Detailed listings: Explore comprehensive property information,
              including photos, virtual tours, floor plans, and amenities.
            </p>
          </div>
          <div className="flex justify-center items-start gap-6 mb-4">
            <SlEnergy className="bg-green-700 text-white rounded-full" />
            <p>
              Expert guidance: Connect with experienced real estate agents who
              provide personalized assistance tailored to your needs.
            </p>
          </div>
          <div className="flex justify-center items-start gap-6 mb-4">
            <SlEnergy className="bg-green-700 text-white rounded-full" />
            <p>
              Transparent process: We prioritize integrity and client
              satisfaction, ensuring a smooth and successful real estate
              experience from start to finish.
            </p>
          </div>
        </div>
        <img className="lg:w-[45%] rounded-xl" src={work} alt="work" />
      </div>
    </div>
  );
};

export default HowItWorks;
