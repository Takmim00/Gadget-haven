import React from "react";
import { useLoaderData } from "react-router-dom";

import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TabTitle } from "../utils/tab";

const Statistics = () => {
  TabTitle('Statistics || Gadget Heaven')
  const data = useLoaderData();

  return (
    <div>
      <div className="flex flex-col bg-purple-600 pb-20 rounded-2xl text-white">
        <div className="space-y-4 pt-16">
          <h2 className="font-bold text-5xl text-center">Statistics</h2>
          <p className="text-center text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>

      <div className="py-6">
        <p className="font-bold text-xl">Statistics</p>
      </div>

      <div className="my-4">
        <div className="bg-white p-5 rounded-md ">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={20} fill="#413ea0" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
