import AboutUs from "./AboutUs";
import Client from "./Client";
import Featured from "./Featured";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Services from "./Services";

const Home = () => {
  return (
    <div className="p-6">
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <hr className="my-10" />
      <Featured></Featured>
      <hr className="my-10" />
      <Services></Services>
      <hr className="my-10" />
      <AboutUs></AboutUs>
      <hr className="my-10" />
      <Client></Client>
    </div>
  );
};

export default Home;
