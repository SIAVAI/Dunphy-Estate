import "animate.css";
import { useEffect, useState } from "react";

import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Featured = () => {
  AOS.init();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="p-6">
      <h2 className="animate__animated animate__bounce animate__delay-2s text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-12 mb-10">
        Featured Properties
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((each) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            key={each.id}
            className="mb-4"
          >
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={each.image} alt="Property" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {each.estate_title}
                  <div className="rounded-xl p-2 text-[#6A5ACD] border-2 border-[#6A5ACD] hover:bg-slate-200">
                    {each.segment_name}
                  </div>
                </h2>
                <p>Price : {each.price}</p>
                <p>Area : {each.area}</p>
                <p>Location : {each.location}</p>
                <p className="flex justify-start items-center gap-4">
                  Rating : {each.rating} <IoStar className="text-amber-400" />{" "}
                  <IoStar className="text-amber-400" />{" "}
                  <IoStar className="text-amber-400" />{" "}
                  <IoStar className="text-amber-400" />{" "}
                  <IoStar className="text-amber-400" />
                </p>
                <div className="mt-6  font-bold justify-start">
                  <Link to={`/property/${each.id}`}>
                    <button className="btn text-white bg-[#6A5ACD]">
                      Details
                    </button>
                  </Link>
                </div>
                {each.facilities.map((single) => (
                  <div key={each.id} className="card-actions justify-end">
                    <div className="badge badge-outline">{single}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
