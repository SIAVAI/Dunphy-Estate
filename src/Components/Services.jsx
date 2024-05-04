/* eslint-disable react/no-unescaped-entities */
import service from "../assets/service.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  AOS.init();
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="p-6">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mt-16 mb-10 font-bold ">
        Services
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6  p-4S">
        <div className="lg:w-[40%]">
          <img className="rounded-full box" src={service} alt="world" />
        </div>
        <div className="lg:w-[50%] bg-gray-200 p-10 rounded-xl">
          <h2 className="text-justify text-4xl md:text-5xl lg:text-6xl mb-2">
            We Are Available IN
          </h2>
          <h2 className="text-justify text-4xl md:text-5xl lg:text-6xl mb-8 text-[#6A5ACD] font-bold font-rubik">
            40+ Countries!!
          </h2>
          <p className="text-justify text-xl">
            Dunphy Estate extends its services across 40+ countries, offering
            unparalleled access to a global real estate market. Whether you're
            searching for a luxurious penthouse in bustling cityscapes, a serene
            waterfront villa overlooking pristine landscapes, or a quaint
            countryside cottage nestled in picturesque surroundings, our
            expansive network of properties caters to diverse preferences and
            lifestyles. With a deep understanding of local markets and
            regulations in each country, our team of experienced agents provides
            expert guidance and support at every step of your real estate
            journey. From initial consultation to property tours, negotiations,
            and beyond, we ensure a seamless and personalized experience
            tailored to your needs, no matter where you are in the world. At
            Dunphy Estate, our commitment to excellence knows no bounds. Whether
            you're buying, selling, or investing in properties across borders,
            trust us to be your reliable partner in achieving your real estate
            goals with confidence and peace of mind, no matter where your
            aspirations take you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
