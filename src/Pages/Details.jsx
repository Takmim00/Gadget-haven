import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { addToCart, addToWist, getAllWishlist } from "../utils";


const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [gadgets, setGadgets] = useState({});
  const [wishes, SetIsWishes] = useState(false)
  useEffect(() => {
    const singleData = data.find((gadget) => gadget.id == id);
    setGadgets(singleData || {});
    const wish = getAllWishlist()
    const isExist = wish.find(item => item.id == singleData.id)
    if (isExist) {
      SetIsWishes(true)
    }
  }, []);
  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification = [],
    rating
  } = gadgets;
  
  const handleAddCart = (gadgets)=>{
    addToCart(gadgets)
    window.dispatchEvent(new Event('storage'));


  }
  const handleAddWish = (gadgets)=>{
    addToWist(gadgets)
    SetIsWishes(true)
    window.dispatchEvent(new Event('storage')); 
  }
  return (
    <div className="flex flex-col  bg-purple-600 pb-44  rounded-2xl text-white  relative mb-96 ">
      <div className="space-y-4 pt-16 mb-28">
        <h2 className="font-bold text-5xl text-center">Product Details</h2>
        <p className="text-center text-gray-200">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="absolute top-56 left-48 backdrop-blur-xl w-9/12 ">
        <div class=" flex flex-col lg:flex-row gap-8 bg-white text-black rounded-2xl p-6">
          <div className="px-5 py-5 bg-[#F3F3F3] items-center rounded-xl">
            <img src={product_image} class="max-w-sm h-full object-cover" />
          </div>
          <div className="space-y-4 ">
            <h2 className="text-3xl font-semibold">{product_title}</h2>
            <p className="font-medium text-xl ">Price : $ {price}</p>
            <div>
              <span
                className={`font-semibold border p-2 ${
                  availability
                    ? "text-green-600 bg-green-100 border-green-600 rounded-full"
                    : "text-red-600 bg-red-100 border-red-600 rounded-full"
                }`}
              >
                {availability ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <p>{description}</p>
            <p>Specification : </p>
            <div>
                <ul className="list-decimal ml-4">
                    {
                        specification.map(tags=><li>{tags}</li>)
                    }
                </ul>
            </div>
            
            <p>Rating : </p>
            <div className="card-actions items-center justify-between">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <p className="py-1 px-4 border rounded-full bg-gray-200">{rating}</p>
              </div>

            </div>


            <div className="flex gap-6">
              <button
                onClick={() => handleAddCart(gadgets)}
                className="btn bg-purple-600 text-white rounded-full font-bold"
              >
                Add To Cart <MdOutlineAddShoppingCart/>
              </button>
              <button
              disabled={wishes}
                onClick={() => handleAddWish(gadgets)}
                className="btn rounded-full  bg-white shadow text-xl"
              >
                <GiSelfLove/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
