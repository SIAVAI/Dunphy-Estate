import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Client = () => {
  AOS.init();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("clients.json")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1500">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mt-16 mb-10 font-bold ">
        What Our Client Said
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((each) => (
          <div key={each.id}>
            <div className="bg-base-100 shadow-xl flex flex-col lg:flex-row justify-center items-center gap-6 p-6">
              <figure className="">
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src={each.img} />
                  </div>
                </div>
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">{each.email}</h2>
                <p className="text-base">{each.feedback}</p>
              </div>
              <div className="">
                <p className="text-base">{each.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
