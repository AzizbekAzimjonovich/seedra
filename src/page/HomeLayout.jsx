import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
function HomeLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout;
