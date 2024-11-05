import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  const location = useLocation();
  const backgroundColor = location.pathname === "/" ? "#9333ea " : "#e5e7eb ";
  return (
    <div className="bg-gray-200 mt-3">
      <Toaster />
      <div
        style={{ backgroundColor }}
        className="w-11/12 mx-auto rounded-t-2xl "
      >
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-426px)] w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="bg-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
