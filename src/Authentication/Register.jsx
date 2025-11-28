import React, { use, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const { signInWithGoogle, createUserWithEmail } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleGoogleButton = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Account Registered successfully");
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast.error("Password not matched❌");
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Must include uppercase, lowercase, and be ≥ 6 characters"
      );
    }

    createUserWithEmail(email, password)
      .then((result) => {
        const currenUser = result.user;

        updateProfile(currenUser, {
          displayName: name,
          photoURL: photoURL,
        });
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message);
      });

    e.target.reset();
  };

  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-[#ffe0d2] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body  rounded-2xl">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input"
                  placeholder="PhotoURl"
                  required
                />

                <label className="label">Password</label>
                <div  className="relative">
                    <input
                  type={showPass?'text':'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <p onClick={()=>{setShowPass(!showPass)}} className="absolute right-6 top-4 ">{showPass?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</p>
                </div>

                <label className="label">Confirm Password</label>
                <div className="relative">
                    <input
                  type={showConfirmPass?'text':'password'}
                  name="confirmPassword"
                  className="input"
                  placeholder="Confirm Password"
                  required
                />
                <p onClick={()=>{setShowConfirmPass(!showConfirmPass)}} className="absolute right-6 top-4 ">{showConfirmPass?<FaEyeSlash></FaEyeSlash>:<FaEye />}</p>
                </div>

                <div>
                  <a className="label link link-hover">Forgot password?</a>
                </div>
                <button className="btn-1 btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            {/* Google */}
            <button
              onClick={handleGoogleButton}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <div className="flex justify-around items-center">
              <p className="label font-bold">Have an account login!</p>
              <NavLink className="btn-1" to="/login">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
