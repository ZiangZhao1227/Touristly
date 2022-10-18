import NavBar from "../../components/Navbar/Navbar";
// react-router-dom
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
