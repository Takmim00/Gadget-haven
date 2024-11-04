import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";
const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner />
      <div className="flex">
        <Categories categories={categories} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
