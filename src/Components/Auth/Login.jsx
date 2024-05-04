/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import bg from "../../assets/loginBg.png";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "./FirebaseProvider";
import { useForm } from "react-hook-form";
import { ImHappy2 } from "react-icons/im";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [eye, setEye] = useState(false);
  const handleEye = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  //Toast
  const [successToast, setSuccessToast] = useState(false);
  const handleSuccessToast = () => {
    setSuccessToast(!successToast);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Authentication
  const { userSignIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const onSubmit = (data) => {
    userSignIn(data.email, data.password)
      .then((result) => {
        if (result.user) {
          setSuccessToast(true);
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        if (result.user) {
          setSuccessToast(true);
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        {
          alert(error.message);
        }
      });
  };
  const handleGithub = (e) => {
    e.preventDefault();
    githubSignIn()
      .then((result) => {
        if (result.user) {
          setSuccessToast(true);
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div
        className={`toast toast-top toast-center ${!successToast && "hidden"}`}
      >
        <div className="alert alert-success">
          <span className="text-xl text-white font-bold flex justify-center items-center">
            Signed In successfully
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
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-black">
              Login
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

              <div className="form-control w-full mt-6">
                <button className="btn bg-[#6A5ACD] text-xl font-bold text-white">
                  Login
                </button>
                <button
                  onClick={handleGoogle}
                  className="btn bg-[#6A5ACD] text-xl font-bold text-white"
                >
                  <FaGoogle />
                </button>
                <button
                  onClick={handleGithub}
                  className="btn bg-[#6A5ACD] text-xl font-bold text-white"
                >
                  <FaGithub />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
