// import { Eye } from 'lucide-react';
// import backgroundRegister from '../assets/img/BackgroundRegister.png';

import { Link } from "react-router-dom";

import RightRegister from "../assets/img/rightregister.png";
import SignUp from "@/components/modules/sign-up";
import { FormAnimate, HideAnimate, ImageAnimate } from "@/components/anim/auth-animate";
import { HeadingForm } from "@/components/modules/form-modules";

export default function Register() {
  return (
    <div className="relative h-screen overflow-hidden p-0 font-serif">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex h-full w-full">
        <div className="relative hidden h-full w-3/6 items-center justify-center overflow-hidden py-10 pl-10 lg:flex">
          <figure className="h-full w-full overflow-hidden rounded-3xl">
            <ImageAnimate src={RightRegister} />
            <HideAnimate />
          </figure>
        </div>
        <FormAnimate className="flex h-full w-full items-center justify-center bg-white p-[3rem] lg:w-2/4">
          <div className="mx-auto w-full max-w-md">
            <HeadingForm title="Sign Up" subtitle="Welcome, please create a new account" />
            <SignUp />
          </div>
        </FormAnimate>
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

{
  /* <img
className="w-full h-full overflow-hidden object-cover grayscale filter"
src={RightRegister}
alt="photo-cowok"
style={{}}
/> */
}
