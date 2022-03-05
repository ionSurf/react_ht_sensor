import React from "react";
import propTypes from "prop-types";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Graph({ XAxisKey, YAxisKey, data }) {
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
      <XAxis dataKey={XAxisKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={YAxisKey}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
Graph.propTypes = {
  XAxisKey: propTypes.string,
  YAxisKey: propTypes.string,
  data: propTypes.arrayOf(propTypes.object),
};
