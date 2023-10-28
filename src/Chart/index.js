import React from "react";
import { useState } from "react";
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
import Subchart from "./Subchart";

const Grafik = () => {
  const warna = [
    "#8884d8",
    "#831ad9",
    "#68e39e",
    "#e3e29a",
    "#82ca9d",
    "#68e39e",
    "#ab38e0",
    "#fa7366",
    "#ff45b8",
  ];
  const data = [
    {
      teamid: 1,
      clock: "12:00",
      yaw: 10.0,
      pitch: 11.0,
      roll: 121.02,
      latitude: -7.765945,
      longitude: 110.371374,
      voltage: 12,
      pressure: 200,
      altitude: 800,
    },
    {
      teamid: 2,
      clock: "14:00",
      yaw: 20.0,
      pitch: 11.0,
      roll: 144.02,
      latitude: -7.77025487582,
      longitude: 110.37776624,
      voltage: 20,
      pressure: 400,
      altitude: 900,
    },
    {
      teamid: 3,
      clock: "15:00",
      yaw: 200.0,
      pitch: 100.0,
      roll: 123.02,
      latitude: -7.7751787,
      longitude: 110.3676948,
      voltage: 40,
      pressure: 400,
      altitude: 200,
    },
  ];

  const formattedData = data.map((item) => ({
    ...item,
    clock: new Date(`2023-10-27 ${item.clock}`).getTime(),
  }));

  return (
    <div className="flex flex-col justify-center items-center w-full h-[full] gap-y-[50px]">
      <div className="w-fit h-fit p-[20px] bg-[#323030] rounded-[40px]">
        <div className="text-[20px] ml-[75px] font-Inter font-bold text-[#789172] tracking-[.25em]">
          Data Chart
        </div>
        <LineChart
          width={1000}
          height={600}
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="clock"
            type="number"
            domain={["auto", "auto"]}
            tickFormatter={formatXAxis}
          ></XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="teamid"
            stroke={warna[0]}
            activeDot={{ r: 10 }}
            legendType="diamond"
          />
          <Line type="monotone" dataKey="yaw" stroke={warna[1]} />
          <Line type="monotone" dataKey="pitch" stroke={warna[2]} />
          <Line type="monotone" dataKey="roll" stroke={warna[3]} />
          <Line type="monotone" dataKey="latitude" stroke={warna[4]} />
          <Line
            type="monotone"
            dataKey="longitude"
            legendType="diamond"
            stroke={warna[5]}
          />
          <Line type="monotone" dataKey="voltage" stroke={warna[6]} />
          <Line type="monotone" dataKey="pressure" stroke={warna[7]} />
          <Line type="monotone" dataKey="altitude" stroke={warna[8]} />
        </LineChart>
      </div>
      <div className="flex justify-between gap-2 inline-block">
        <div className="w-fit h-fit p-[20px] bg-[#323030] rounded-[40px]">
          <div className="text-[20px] ml-[75px] font-Inter font-bold text-[#789172]">
            Chart Voltage
          </div>
          <Subchart
            data={formattedData}
            variant="voltage"
            warna={warna[6]}
          ></Subchart>
        </div>
        <div className="w-fit h-fit p-[20px] bg-[#323030] rounded-[40px]">
          <div className="text-[20px] ml-[75px] font-Inter font-bold text-[#789172]">
            Chart Pressure
          </div>
          <Subchart
            data={formattedData}
            variant="pressure"
            warna={warna[7]}
          ></Subchart>
        </div>
        <div className="w-fit h-fit p-[20px] bg-[#323030] rounded-[40px]">
          <div className="text-[20px] ml-[75px] font-Inter font-bold text-[#789172]">
            Chart Altitude
          </div>
          <Subchart
            data={formattedData}
            variant="altitude"
            warna={warna[8]}
          ></Subchart>
        </div>
      </div>
    </div>
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

export default Grafik;
