import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div className="bg-base-200">
      <Toaster/>
      <div>
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
