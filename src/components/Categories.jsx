import React from "react";
import { Link } from "react-router-dom";

const Categories = ({categories}) => {
  return (
    <div className="lg:w-1/4">
      <div className="card bg-white  ">
        <div className="card-body items-center text-center">
        <Link to='/'  className="btn w-full  rounded-full bg-purple-600">All products</Link>
        {
            categories.map(category=>(
                <Link to={`/category/${category.category}`} key={category.id} className="btn w-full  rounded-full bg-purple-600 text-white">{category.category}</Link>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Categories;
