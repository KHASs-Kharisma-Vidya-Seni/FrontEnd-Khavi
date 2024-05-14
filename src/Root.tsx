import { Outlet } from "react-router-dom";

export default function Root() {
  // w-10/12
  return (
    <div className="">
      <header>{/* <Navbar /> */}</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
