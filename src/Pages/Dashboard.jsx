import React, { useEffect, useState } from "react";

import { CiCircleRemove } from "react-icons/ci";
import { FaSortNumericDownAlt } from "react-icons/fa";
import {
  getAllCart,
  getAllWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../utils";

import { useNavigate } from "react-router-dom";
import modalImg from "../assets/Group.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("cart");

  const [gadget, setGadget] = useState([]);
  const [wish, setWish] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalTotalPrice, setModalTotalPrice] = useState(0);

  const handlePurchase = () => {
    if (gadget.length > 0) {
      const currentTotal = totalPrice;
      setModalTotalPrice(currentTotal);
      setShowModal(true);
      gadget.forEach((item) => removeFromCart(item.id));
      setGadget([]);
      setTotalPrice(0);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };
  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };
  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...gadget].sort((a, b) => b.price - a.price);
      setGadget(sorted);
    }
  };
  useEffect(() => {
    const gadgets = getAllCart();
    setGadget(gadgets);
    calculateTotalPrice(gadgets);
  }, []);
  useEffect(() => {
    const wishes = getAllWishlist();
    setWish(wishes);
  }, []);
  const handleRemoveCart = (id) => {
    removeFromCart(id);
    const updatedCart = getAllCart();
    setGadget(updatedCart);
    calculateTotalPrice(updatedCart);
  };
  const handleRemoveWish = (id) => {
    removeFromWishlist(id);
    setWish(getAllWishlist());
  };

  return (
    <div>
      <div className="flex flex-col  bg-purple-600 pb-20  rounded-2xl text-white  relative  ">
        <div className="space-y-4 pt-16 ">
          <h2 className="font-bold text-5xl text-center">Dashboard</h2>
          <p className="text-center text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex justify-center items-center ">
            <button
              className={`btn rounded-full px-8 ${
                activeTab === "cart"
                  ? "bg-white text-purple-600"
                  : "bg-purple-600 text-white"
              }`}
              onClick={() => setActiveTab("cart")}
            >
              Cart
            </button>
            <button
              className={`btn rounded-full ${
                activeTab === "wishlist"
                  ? "bg-white text-purple-600"
                  : "bg-purple-600 text-white"
              }`}
              onClick={() => setActiveTab("wishlist")}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {/* Display Items Based on Active Tab */}
      <div className="my-4">
        {activeTab === "cart" ? (
          <div className="flex flex-col ">
            <div className="flex justify-between py-4">
              <div>
                <p className="font-bold text-xl">Cart</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-bold text-xl">
                  Total Price : ${totalPrice.toFixed(2)}
                </p>
                <button
                  onClick={() => handleSort("price")}
                  className="p-3 btn border-2 rounded-full hover:bg-purple-600 hover:text-white border-purple-600 text-purple-600 flex items-center gap-3 font-semibold "
                >
                  Sort By Price <FaSortNumericDownAlt />
                </button>
                <button
                  onClick={handlePurchase}
                  disabled={gadget.length === 0}
                  className="p-3 btn border-2 rounded-full bg-purple-600 text-white border-purple-600  "
                >
                  Purchase
                </button>
              </div>
            </div>
            <div className="space-y-4 ">
              {gadget.map((items, idx) => (
                <div key={idx} className="p-6 bg-white border-2 rounded-2xl ">
                  <div className="grid grid-cols-2   justify-evenly">
                    <div className="flex gap-4">
                      <img
                        className="h-44 w-56 rounded-xl object-cover"
                        src={items.product_image}
                        alt=""
                      />
                      <div className="items-center space-y-3">
                        <h2 className="font-semibold text-2xl">
                          {items.product_title}
                        </h2>
                        <p className="text-gray-400">{items.description}</p>
                        <p className="text-xl">Price : ${items.price}</p>
                      </div>
                    </div>
                    <div className="grid justify-end">
                      <button
                        onClick={() => handleRemoveCart(items.id)}
                        className="text-5xl"
                      >
                        <CiCircleRemove />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="py-4">
              <p className="font-bold text-xl">WishList</p>
            </div>
            <div className="space-y-4 ">
              {wish.map((items, idx) => (
                <div key={idx} className="p-6 bg-white border-2 rounded-2xl ">
                  <div className="grid grid-cols-2   justify-evenly">
                    <div className="flex gap-4">
                      <img
                        className="h-44 w-56 rounded-xl object-cover"
                        src={items.product_image}
                        alt=""
                      />
                      <div className="items-center space-y-3">
                        <h2 className="font-semibold text-2xl">
                          {items.product_title}
                        </h2>
                        <p className="text-gray-400">{items.description}</p>
                        <p className="text-xl">Price : ${items.price}</p>
                      </div>
                    </div>
                    <div className="grid justify-end">
                      <button
                        onClick={() => handleRemoveWish(items.id)}
                        className="text-5xl"
                      >
                        <CiCircleRemove />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center space-y-3">
            <img src={modalImg} alt="" />
            <h2 className="text-2xl font-bold">Payment Successfully</h2>
            <hr className="border border-gray-200 w-full " />
            <p className=" text-gray-500">Thank For Purchasing.</p>
            <p className="text-gray-500">Price : ${modalTotalPrice}</p>
            <div className="flex w-full mt-6">
              <button
                onClick={handleCloseModal}
                className="btn w-full bg-purple-600 text-white rounded-full px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
