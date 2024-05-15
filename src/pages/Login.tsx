import { Eye } from "lucide-react";
import backgroundImage from "D:/IL/FrontEnd-Khavi/src/assets/img/bg-login-15052024.png";
import ImageRight from "D:/IL/FrontEnd-Khavi/src/assets/img/right-img-login-15052024.png";

export default function Login() {
  return (
    <div className="relative h-screen bg-[#AFAFAF] p-0 font-serif sm:px-[7.5rem] sm:py-[2rem]">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[10px] grayscale filter"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}></div>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex h-full w-full bg-[#D4D3D3]">
        <div className="relative hidden h-full w-2/4 items-center justify-center lg:flex">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale filter"
            style={{
              backgroundImage: `url(${ImageRight})`,
            }}></div>
        </div>
        <div className="flex h-full w-full items-center justify-center bg-white p-[3rem] lg:w-2/4">
          <div className="mx-auto w-full max-w-md lg:w-auto">
            <div className="mb-8 text-center">
              <h1 className="mb-[0.5rem] text-5xl font-bold text-[#2E323A]">
                Sign In
              </h1>
              <h4 className="text-xl font-medium text-[#2E323A]">
                Welcome, please enter your account
              </h4>
            </div>
            <form action="">
              <div className="mb-2">
                <label
                  htmlFor=""
                  className="mb-2 block text-xl font-normal text-[#2E323A]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded border-2 border-[#D9D9D9] px-4 text-lg text-[#2E323A]"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor=""
                  className="mb-2 block text-xl font-normal text-[#2E323A]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Masukkan kata sandi"
                    className="h-12 w-full rounded border-2 border-[#D9D9D9] px-4 text-lg text-[#2E323A]"
                  />
                  <span className="absolute inset-y-0 right-4 flex items-center">
                    <Eye color="#2E323A" />
                  </span>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="h-5 w-5 rounded border-2 border-[#D9D9D9]"
                  />
                  <label
                    htmlFor=""
                    className="ml-2 text-base font-medium text-[#2E323A]">
                    Remember me
                  </label>
                </div>
                <a href="" className="text-base font-semibold text-[#2E323A]">
                  Forgot Password
                </a>
              </div>
              <div className="mb-6">
                <button className="mb-2 h-12 w-full rounded-[0.625rem] bg-[#2E323A] text-base font-semibold text-white">
                  Sign In
                </button>
                <button className="flex h-[2.75rem] w-full items-center justify-center rounded-[0.625rem] border-2 text-base font-semibold text-[#2E323A]">
                  <img
                    src="src/assets/img/Google.png"
                    alt=""
                    className="mr-2 h-6"
                  />
                  <span>Sign In With Google</span>
                </button>
              </div>
              <div className="text-center">
                <p className="text-base font-normal">
                  Don't have an account?{" "}
                  <span className="font-semibold text-[#CDB16E]">
                    <a href="register">Sign up for free!!</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
