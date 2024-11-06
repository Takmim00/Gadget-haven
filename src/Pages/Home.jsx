import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";
import { TabTitle } from "../utils/tab";
const Home = () => {
  TabTitle('Gadget Heaven')
  const categories = useLoaderData();

  return (

    <div>
      <Banner />
      <div className="flex lg:flex-row md:flex-row flex-col">
        <Categories categories={categories} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
