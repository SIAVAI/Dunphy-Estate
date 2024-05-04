import logo from "../assets/home.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import i1 from "../assets/image-1.jpg";
import i2 from "../assets/image-2.jpg";
import i3 from "../assets/image-3.jpg";
import i4 from "../assets/image-4.jpg";
import i5 from "../assets/image-5.jpg";
import i6 from "../assets/image-6.jpg";
import i7 from "../assets/image-7.jpg";
import i8 from "../assets/image-8.jpg";
import i9 from "../assets/image-9.jpg";
import i10 from "../assets/image-10.jpg";
import i11 from "../assets/image-11.jpg";
import i12 from "../assets/image-12.jpg";

const Hero = () => {
  AOS.init();
  const options = [
    { label: "Sell", value: 1 },
    { label: "Buy", value: 2 },
    { label: "Rent", value: 2 },
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="hero min-h-screen rounded-xl "
      style={{
        backgroundImage: `url(${logo})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold">
            Discover Your Dream Home with{" "}
            <span className="text-[#6A5ACD]">Dunphy Estate</span>
          </h1>
          <p className="mb-10">
            Discover your dream home with our real estate services. Whether you
            are looking to buy, sell, or rent, we are here to help.
          </p>
          <div className="h-96 carousel carousel-vertical rounded-box mb-6">
            <div className="carousel-item h-full">
              <img src={i1} />
            </div>
            <div className="carousel-item h-full">
              <img src={i2} />
            </div>
            <div className="carousel-item h-full">
              <img src={i3} />
            </div>
            <div className="carousel-item h-full">
              <img src={i4} />
            </div>
            <div className="carousel-item h-full">
              <img src={i5} />
            </div>
            <div className="carousel-item h-full">
              <img src={i6} />
            </div>
            <div className="carousel-item h-full">
              <img src={i7} />
            </div>
            <div className="carousel-item h-full">
              <img src={i8} />
            </div>
            <div className="carousel-item h-full">
              <img src={i9} />
            </div>
            <div className="carousel-item h-full">
              <img src={i10} />
            </div>
            <div className="carousel-item h-full">
              <img src={i11} />
            </div>
            <div className="carousel-item h-full">
              <img src={i12} />
            </div>
          </div>
          <div className="bg-black p-6 rounded-xl text-center text-xl ">
            <form className="w-full items-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              <div className="">
                <p className="text-xl font-bold mb-2">Property</p>
                <select className="px-4 py-2 rounded-lg text-black w-full">
                  {options.map((each) => (
                    <option key={each.value} value={each.value}>
                      {each.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <p className="text-xl font-bold mb-2">Address</p>
                <input
                  className="px-4 py-2 rounded-lg text-black w-full"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="">
                <p className="text-xl font-bold mb-2">Date</p>
                <input
                  className="px-4 py-2 rounded-lg text-black w-full"
                  type="datetime-local"
                  name=""
                  id=""
                />
              </div>
              <button className="btn w-full  bg-[#6A5ACD] border border-none text-xl font-bold text-white">
                Search
              </button>
            </form>
          </div>
          <div className="w-full items-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-white font-bold">
                10+
              </h2>
              <p className="text-2xl text-white">Years of Services</p>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-white font-bold">
                50+
              </h2>
              <p className="text-2xl text-white">Awards</p>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-white font-bold">
                1200+
              </h2>
              <p className="text-2xl text-white">Property Ready</p>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-white font-bold">
                24/7
              </h2>
              <p className="text-2xl text-white">Contacts are Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
