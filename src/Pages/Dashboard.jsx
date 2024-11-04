import React, { useEffect, useState } from "react";
import { getAllCart } from "../utils";
import { CiCircleRemove } from "react-icons/ci";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");

  const [gadget, setGadget] = useState([]);
  useEffect(() => {
    const gadgets = getAllCart();
    setGadget(gadgets);
  }, []);

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
      <div className="">
        {activeTab === "cart" ? (
          <div className="flex flex-col">
            <div className="flex justify-between py-4">
              <div>
                <p>Cart</p>
              </div>
              <div className="flex items-center gap-3">
                <p>Total Price</p>
                <button className="p-3 border-2 rounded-full border-purple-600 text-purple-600 ">
                  Sort By Price
                </button>
                <button className="p-3 border-2 rounded-full border-purple-600 text-purple-600 ">
                  Purchase
                </button>
              </div>
            </div>
            <div>
              {gadget.map((items, idx) => (
                <div key={idx} className="p-6 border-2 rounded-2xl ">
                  <div className="grid grid-cols-2   justify-evenly">
                    <div className="flex gap-4">
                      <img
                        className="h-44 w-56 rounded-xl object-cover"
                        src={items.product_image}
                        alt=""
                      />
                      <div className="items-center space-y-3">
                        <h2 className="font-semibold text-2xl">{items.product_title}</h2>
                        <p className="text-gray-400">{items.description}</p>
                        <p className="text-xl">Price : ${items.price}</p>
                      </div>
                    </div>
                    <div className="grid justify-end">
                      <button className="text-5xl">
                        <CiCircleRemove/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            wishlist
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
