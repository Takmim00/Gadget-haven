import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-10/12 mx-auto">
      <footer className="footer flex flex-col items-center p-10">
        <div className="flex flex-col items-center  justify-center">
          <h2 className="font-bold text-3xl ">Gadget Heaven</h2>
          <p className="font-medium text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className="border w-full" />
        <footer className="footer items-center justify-between w-2/3 ">
          <nav>
            <h6 className="font-bold">Services</h6>
            <Link className="link link-hover text-gray-500">Product Support</Link>
            <Link className="link link-hover text-gray-500">Order Tracking</Link>
            <Link className="link link-hover text-gray-500">Shipping & Delivery</Link>
            <Link className="link link-hover text-gray-500">Returns</Link>
          </nav>
          <nav>
            <h6 className="font-bold">Company</h6>
            <Link className="link link-hover text-gray-500">About Us</Link>
            <Link className="link link-hover text-gray-500">Careers</Link>
            <Link className="link link-hover text-gray-500">Contact</Link>
          </nav>
          <nav className="text-center">
            <h6 className="font-bold">Legal</h6>
            <Link className="link link-hover text-gray-500">Terms of Service</Link>
            <Link className="link link-hover text-gray-500">Privacy Policy</Link>
            <Link className="link link-hover text-gray-500">Cookie Policy</Link>
          </nav>
        </footer>
      </footer>
    </div>
  );
};

export default Footer;
