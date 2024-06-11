// import { Eye } from 'lucide-react';
// import backgroundImage from '../assets/img/bg-login-15052024.png';

import SignIn from "@/components/modules/sign-in";
import { FormAnimate, HideAnimate, ImageAnimate } from "@/components/anim/auth-animate";
import { HeadingForm } from "@/components/modules/form-modules";

const images = [
  "/images/right-img-login.png",
  "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Login() {
  return (
    <div className="relative h-screen overflow-hidden p-0 font-serif">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex h-full w-full">
        <div className="relative hidden h-full w-3/6 items-center justify-center gap-x-2 overflow-hidden py-10 pl-10 lg:flex">
          {images.map((img, i: number) => (
            <figure key={i} className="relative h-full w-3/6 overflow-hidden rounded-3xl">
              <ImageAnimate index={i} src={img} />
              ss
              <HideAnimate i={i} />
            </figure>
          ))}
        </div>
        <FormAnimate className="flex h-full w-full items-center justify-center bg-white p-[3rem] lg:w-3/6">
          <div className="mx-auto w-full max-w-md">
            <HeadingForm title="Sign In" subtitle="Welcome, please enter your account" />
            <SignIn />
          </div>
        </FormAnimate>
      </div>
    </div>
  );
}
