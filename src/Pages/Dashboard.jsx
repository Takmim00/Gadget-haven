import React, { useEffect, useState } from "react";
import {
  getAllCart,
  getAllWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../utils";
import { CiCircleRemove } from "react-icons/ci";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");

  const [gadget, setGadget] = useState([]);
  const [wish, setWish] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
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
      <div className="">
        {activeTab === "cart" ? (
          <div className="flex flex-col ">
            <div className="flex justify-between py-4">
              <div>
                <p className="font-bold text-xl">Cart</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-bold text-xl">Total Price : ${totalPrice.toFixed(2)}</p>
                <button className="p-3 border-2 rounded-full border-purple-600 text-purple-600 ">
                  Sort By Price
                </button>
                <button className="p-3 border-2 rounded-full border-purple-600 text-purple-600 ">
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
    </div>
  );
};

export default Dashboard;
