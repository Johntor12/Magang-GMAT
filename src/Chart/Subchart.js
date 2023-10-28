import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const Subchart = ({ data, variant, warna }) => {
  const chartDataKey =
    variant === "voltage"
      ? "voltage"
      : variant === "pressure"
      ? "pressure"
      : variant === "altitude"
      ? "altitude"
      : "";

  return (
    <LineChart
      width={400}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid fill="#F9F5ED" />
      <XAxis
        dataKey="clock"
        type="number"
        domain={["auto", "auto"]}
        tickFormatter={formatXAxis}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      {chartDataKey && (
        <Line
          type="monotone"
          dataKey={chartDataKey}
          stroke={warna}
          activeDot={{ r: 10 }}
          legendType="diamond"
        />
      )}
    </LineChart>
  );
};

const formatXAxis = (tickItem) => {
  const date = new Date(tickItem);
  return (
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes()
  );
};

export default Subchart;
