import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CategoryCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (category) {
      const filterCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setCategories(filterCategory);
    } else {
      setCategories(data);
    }
  }, [category, data]);
  return (
    <div className="lg:w-3/4 ml-4 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {categories.map((gadget) => (
          <Card key={gadget.id} gadget={gadget}></Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
