import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "1",
    uv: 18,
    amt: 2400,
  },
  {
    name: "2",
    uv: 10.2,
    amt: 2210,
  },
  {
    name: "3",
    uv: 15.1,
    amt: 2290,
  },
  {
    name: "4",
    uv: 16,
    amt: 2000,
  },
  {
    name: "5",
    uv: 16.1,
    amt: 2181,
  },
];

export default function Graph() {
  return (
    <LineChart
      width={525}
      height={300}
      data={data}
      margin={{
        top: 5,
        // right: 30,
        // left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
