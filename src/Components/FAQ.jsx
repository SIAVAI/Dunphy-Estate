/* eslint-disable react/no-unescaped-entities */
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  AOS.init();
  return (
    <div>
      <h2 className="animate__animated animate__bounce animate__delay-2s text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-12 mb-10">
        Some Frequently Asked Questions
      </h2>

      <div
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        className="collapse bg-base-200 p-6 rounded-xl"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold text-xl">
          What types of properties does Dunphy Estate offer?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <p>
            Dunphy Estate offers a diverse range of properties including
            apartments, houses, condos, townhouses, villas, land, and commercial
            properties.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        className="collapse bg-base-200 p-6 rounded-xl"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold text-xl">
          How can I search for properties on Dunphy Estate?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <p>
            You can easily search for properties using our intuitive search bar,
            where you can filter by location, property type, price range, number
            of bedrooms/bathrooms, and more.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        className="collapse bg-base-200 p-6 rounded-xl"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold text-xl">
          Do you offer properties in specific neighborhoods or cities?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <p>
            Yes, we offer properties in various neighborhoods, cities, and
            regions across 40+ countries, ensuring you find the perfect location
            to suit your lifestyle and preferences.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        className="collapse bg-base-200 p-6 rounded-xl"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold text-xl">
          Can I schedule property viewings through Dunphy Estate?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <p>
            Absolutely! Once you find properties of interest, you can easily
            schedule viewings directly through our platform. Our agents will
            coordinate with you to arrange convenient viewing times.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        className="collapse bg-base-200 p-6 rounded-xl"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold text-xl">
          What are the costs associated with buying or selling a property?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <p>
            The costs associated with buying or selling a property vary and may
            include agent commissions, closing costs, taxes, legal fees, and
            other miscellaneous expenses. Our agents can provide detailed
            information specific to your situation.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        className="collapse bg-base-200 p-6 rounded-xl"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold text-xl">
          How can I get in touch with Dunphy Estate for further assistance?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <p>
            You can contact us through our website by filling out the contact
            form, emailing us at contact@dunphyestate.com, or calling our
            customer service hotline at +1 (555) 123-4567. Our team is ready to
            assist you with any inquiries or assistance you may need.
          </p>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
