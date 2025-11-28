import React, { use, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const { signInWithGoogle,signInWithEmail} = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleGoogleButton = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // toast.success("Account Registered successfully");
        navigate(location.state || '/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const signInUser=(e)=>{
    e.preventDefault();

    const email= e.target.email.value;
    const password= e.target.password.value;

    signInWithEmail(email,password)
    .then(result=>{
      console.log(result.user);
      // toast.success("Signed in Successful✅");
      navigate(location.state || '/')
      e.target.reset();
    })
    .catch(error=>{
      toast.error(error.message);
    })
    
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-[#ffe0d2] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body  rounded-2xl">
            <form onSubmit={signInUser}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <div className="relative ">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    className="absolute right-6 top-4 "
                  >
                    {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div>
                  <a className="label link link-hover">Forgot password?</a>
                </div>
                <button className="btn-1 btn-neutral mt-4">Login</button>
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
              <p className="label font-bold">New here please register</p>
              <NavLink className="btn-1" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
