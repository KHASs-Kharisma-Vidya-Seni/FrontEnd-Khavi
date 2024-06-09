import { Eye } from "lucide-react";
import backgroundRegister from "../assets/img/BackgroundRegister.png";
import RightRegister from "../assets/img/rightregister.png";
import { Link } from "react-router-dom";
import SignUp from "@/components/modules/sign-up";

export default function Register() {
  // sm:px-[7.5rem] sm:py-[2rem]  p-0
  return (
    <div className="relative h-screen bg-[#AFAFAF] p-0 font-serif ">
      {/* <div
        className="absolute inset-0 bg-cover bg-center blur-[10px] grayscale filter"
        style={{
          backgroundImage: `url(${backgroundRegister})`,
        }}
      ></div> */}
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex h-full w-full bg-[#D4D3D3] ">
        <div className="relative hidden h-full w-2/4 items-center justify-center lg:flex">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale filter"
            style={{
              backgroundImage: `url(${RightRegister})`,
            }}
          ></div>
        </div>
        <div className="flex h-full w-full items-center justify-center bg-white p-[3rem] lg:w-2/4">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="mb-[0.5rem] mt-[2rem] text-5xl font-bold text-[#2E323A]">
                Sign Up
              </h1>
              <h4 className="text-xl font-medium text-[#2E323A]">
                Welcome, please create a new account
              </h4>
            </div>
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

const Down = () => {
  return (
    <div>
      {/* <div className="mb-2 flex items-center justify-between">
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            className="h-5 w-5 rounded border-2 border-[#D9D9D9]"
          />
          <label
            htmlFor=""
            className="ml-2 text-base font-medium text-[#2E323A]"
          >
            Remember me
          </label>
        </div>
        <a href="" className="text-base font-semibold text-[#2E323A]">
          Forgot Password
        </a>
      </div> */}
      <div className="mb-6">
        <button className="mb-2 h-12 w-full rounded-[0.625rem] bg-[#2E323A] text-base font-semibold text-white">
          Sign Up
        </button>
        <Link to="/profile">
          <button className="flex h-[2.75rem] w-full items-center justify-center rounded-[0.625rem] border-2 text-base font-semibold text-[#2E323A]">
            <img src="src/assets/img/Google.png" alt="" className="mr-2 h-6" />
            <span>Sign Up With Google</span>
          </button>
        </Link>
      </div>
     
    </div>
  );
};
