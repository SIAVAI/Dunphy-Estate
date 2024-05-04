/* eslint-disable react/no-unescaped-entities */
import add from "../assets/v1.mp4";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16 p-6 min-h-screen">
      <h2
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="text-4xl md:text-5xl lg:text-6xl text-center mb-10 font-bold"
      >
        Contact Us
      </h2>
      <div>
        <div className="rounded-xl p-6 bg-base-200 text-center mb-5">
          <p data-aos="zoom-in" data-aos-duration="1500" className="text-2xl">
            Thank you for your interest in Dunphy Estate. We're here to assist
            you with any inquiries or assistance you may need. Please feel free
            to reach out to us using the contact information below or by filling
            out the contact form.
          </p>
        </div>
        <div className="flex justify-center items-center my-10">
          <video
            className="lg:w-[15%] h-auto"
            controls
            loop
            autoPlay
            src={add}
          ></video>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-xl">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex flex-col justify-center items-center gap-4"
          >
            <FaPhoneVolume className="text-[#6A5ACD] w-[20%] h-auto" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex flex-col justify-center items-center"
          >
            <IoIosMail className="text-[#6A5ACD] w-[20%] h-auto" />
            <p>contact@dunphyestate.com</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex flex-col justify-center items-center"
          >
            <FaAddressCard className="text-[#6A5ACD] w-[20%] h-auto" />
            <p>123 Main Street, Civilly, USA</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex flex-col justify-center items-center"
          >
            <IoIosContacts className="text-[#6A5ACD] w-[10%] h-auto" />
            <p className="text-center">
              Monday - Friday: 9:00 AM - 6:00 PM (local time)
            </p>
          </div>
        </div>
      </div>

      <form
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="bg-[#d4cef9]  p-6 mt-10 rounded-xl text-xl flex flex-col justify-center items-center gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold">Name</p>
          <input
            className="text-xl rounded-lg py-2 px-4 border border-[#6A5ACD] "
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold">Email</p>
          <input
            className="text-xl rounded-lg py-2 px-4 border border-[#6A5ACD] "
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold">Phone</p>
          <input
            className="text-xl rounded-lg py-2 px-4 border border-[#6A5ACD] "
            type="tel"
            id="phone"
            name="phone"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold">Message</p>
          <textarea
            className="text-xl rounded-lg py-2 px-4 border border-[#6A5ACD] "
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button className="btn bg-[#6A5ACD] text-white font-bold" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
