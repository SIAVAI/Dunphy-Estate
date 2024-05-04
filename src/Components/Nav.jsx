import { Link } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdJoinInner } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { AuthContext } from "./Auth/FirebaseProvider";

const Nav = () => {
  AOS.init();
  const { userSignOut, user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
    </>
  );

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const closeDropdown1 = () => {
    setIsOpen1(false);
  };
  const closeDropdown2 = () => {
    setIsOpen2(false);
  };

  const [log, setLog] = useState(false);

  const logOutToggle = () => {
    setLog(!log);
  };

  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      data-aos-duration="1000"
      data-aos="fade-down"
      className="navbar bg-base-100 text-[#6A5ACD]"
    >
      <div className="navbar-start">
        <div className="dropdown relative top-0">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown1}
          >
            <TiThMenuOutline />
          </div>

          <ul
            className={`absolute top-0 z-10 mt-2 p-2 shadow bg-base-200 rounded-box w-80 font-semibold text-xl text-black ${
              isOpen1 ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-start">
              {isOpen1 && (
                <button
                  tabIndex={0}
                  role="button"
                  className="close-btn"
                  onClick={closeDropdown1}
                >
                  <RxCross2 className="border-2 rounded-full border-black mb-4" />
                </button>
              )}
            </div>
            <div className="flex justify-between items-center gap-2">
              {links}
            </div>
          </ul>
        </div>
        <div className="btn flex justify-center items-center gap-4  ">
          <img className="w-[10%]" src="../../public/logo.png" alt="" />
          <a className="text-sm md:text-base lg:text-xl font-semibold text-[#6A5ACD] ">
            Dunphy Estate
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end ">
        {user ? (
          <>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <IoIosPerson
                onClick={logOutToggle}
                className={`btn text-2xl font-bold w-auto mr-2`}
              />
              <button
                onClick={handleSignOut}
                className={`btn w-auto text-xl font-bold ${
                  !log && "hidden absolute"
                }`}
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="relative top-4">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost lg:hidden ${
                  isOpen2 ? "hidden" : "block"
                } ${isOpen2 ? "absolute" : ""}`}
                onClick={toggleDropdown2}
              >
                <MdJoinInner className="font-bold text-xl" />
              </div>

              <ul
                className={`  mt-2 p-2 shadow bg-stone-200 rounded-box w-auto font-semibold text-xl text-black ${
                  isOpen2 ? "block" : "hidden"
                }`}
              >
                <div className="flex justify-start">
                  {isOpen2 && (
                    <button
                      tabIndex={0}
                      role="button"
                      className="close-btn"
                      onClick={closeDropdown2}
                    >
                      <RxCross2 className="text-black text-xl font-bold border-2 rounded-full border-black mb-2" />
                    </button>
                  )}
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                  <Link to="/login">
                    <a className="btn">Sign In </a>
                  </Link>
                  <Link to="/register">
                    <a className="btn">Sign Up</a>
                  </Link>
                </div>
              </ul>
            </div>
            <div className="gap-4 hidden lg:flex">
              <Link to="/login">
                <a className="btn">Sign In </a>
              </Link>
              <Link to="/register">
                <a className="btn">Sign Up</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
