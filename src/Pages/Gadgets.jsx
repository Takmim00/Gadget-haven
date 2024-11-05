import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../components/Card';
import { FaSortNumericDownAlt } from 'react-icons/fa';

const Gadgets = () => {
    const data = useLoaderData();
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const handleSort = sortBy => {
    if (sortBy == 'price') {
      const sorted = [...data].sort((a, b) =>  a.price-b.price)
      setCategories(sorted)
    }
  }
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
    <div className="my-6">
        <div className="flex justify-between py-4">
              <div>
                <p className="font-bold text-xl">All Gadgets</p>
              </div>
              <div className="flex items-center gap-3">
                
                <button  onClick={()=> handleSort('price')}
                 className="p-3 btn border-2 rounded-full hover:bg-purple-600 hover:text-white border-purple-600 text-purple-600 flex items-center gap-3 font-semibold ">
                  Sort By Price <FaSortNumericDownAlt/>
                </button>
                
              </div>
            </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {categories.map((gadget) => (
          <Card key={gadget.id} gadget={gadget}></Card>
        ))}
      </div>
    </div>
    )

};

export default Gadgets;