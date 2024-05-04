/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const property = properties.find((each) => each.id == id);
  const {
    estate_title,
    image,
    segment_name,
    price,
    status,
    description,
    area,
    location,
    facilities,
  } = property;
  return (
    <div className="p-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mt-12 mb-10 font-bold">
        Property Details
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
        <div className="lg:w-[50%]">
          <img className="rounded-xl" src={image} alt="property" />
        </div>
        <div className="lg:w-[50%] bg-base-200 rounded-xl p-6 h-screen">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#6A5ACD] font-bold mb-5">
            {estate_title}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5">
            {segment_name}
          </h2>
          <h2 className="text-2xl">{location}</h2>
          <h2 className="text-2xl mb-5">"{facilities}"</h2>
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 box">
            <h2 className="text-4xl text-[#6A5ACD] font-bold">{price}</h2>
            <h2 className="text-4xl text-black font-bold">{status}</h2>
            <h2 className="text-4xl text-[#6A5ACD] font-bold">{area}</h2>
          </div>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
