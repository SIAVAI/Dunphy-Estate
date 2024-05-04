/* eslint-disable no-unused-vars */
import bg from "../../assets/regbg.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "./FirebaseProvider";
import { useForm } from "react-hook-form";
import { ImHappy2 } from "react-icons/im";

const Reg = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //Toast
  const [successToast, setSuccessToast] = useState(false);
  const handleSuccessToast = () => {
    setSuccessToast(!successToast);
  };
  //Authentication
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          setSuccessToast(true);
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Animation
  AOS.init();
  const [eye, setEye] = useState(false);
  const handleEye = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  const [eye2, setEye2] = useState(false);
  const handleEye2 = () => {
    setEye2(!eye2);
  };

  return (
    <div>
      <div
        className={`toast toast-top toast-center ${!successToast && "hidden"}`}
      >
        <div className="alert alert-success">
          <span className="text-xl text-white font-bold flex justify-center items-center">
            Registration Complete!!
            <ImHappy2 />
          </span>
          <span
            onClick={handleSuccessToast}
            className="btn border-2 border-white rounded-full bg-green-500 text-white"
          >
            X
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-black">
              Register Now!
            </h1>
          </div>

          <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Direct link of your photo"
                  className="input input-bordered"
                  {...register("photoUrl", { required: true })}
                />
                {errors.photoUrl && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <div className="flex flex-row justify-center items-center">
                  <input
                    type={`${eye ? "text" : "password"}`}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />

                  <button
                    onClick={handleEye}
                    className="btn bg-white font-bold text-xl"
                  >
                    {eye ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Confirm Password</span>
                </label>
                <div className="flex flex-row justify-center items-center">
                  <input
                    type={`${eye2 ? "text" : "password"}`}
                    placeholder="Confirm password"
                    className="input input-bordered w-full"
                    {...register("confirmPassword", { required: true })}
                  />

                  <button
                    onClick={handleEye2}
                    className="btn bg-white font-bold text-xl"
                  >
                    {eye2 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control w-full mt-6">
                <button className="btn bg-[#6A5ACD] text-xl font-bold text-white">
                  Registration
                </button>
                <Link to="/login">
                  <button className="btn bg-[#6A5ACD] text-xl font-bold text-white w-full ">
                    Back to Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
