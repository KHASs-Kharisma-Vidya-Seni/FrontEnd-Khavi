import RightRegister from "../assets/img/rightregister.png";
import SignUp from "@/components/modules/sign-up";
import { FormAnimate, HideAnimate, ImageAnimate } from "@/components/anim/auth-animate";
import { HeadingForm } from "@/components/modules/form-modules";
// import { useAuth } from "@/hooks/use-auth";
// import { useNavigate } from "react-router-dom";

export default function Register() {
  // const { currentUser } = useAuth();
  // const navigate = useNavigate();

  // if (currentUser) {
  //   return navigate("/profile");
  // }

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
