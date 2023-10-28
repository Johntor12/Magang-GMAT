import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Preloader from "./components/preloader.js";
import { io } from "socket.io-client";
import "leaflet/dist/leaflet.css";
import { Mapping } from "./components/Mapping.js";
import Grafik from "./Chart";
import { HomePage } from "./components/HomePage/index.js";

function App() {
  const [ganteng, setGanteng] = useState(true);
  const [hitungan, setHitungan] = useState([1, 2, 3, 4]);
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const socket = io("https://gmat.haikalhilmi.my.id/");
    let dataIndex = 0;

    socket.on("connect", () => {});

    socket.on("message", (message) => {
      const splitData = message.split(",");
      setMsg((prevMsg) => [...prevMsg, ...splitData]);
      splitData.forEach((item) => {
        setTimeout(() => {
          dataIndex = (dataIndex + 1) % 10;
        }, dataIndex * 1000);
      });
    });
  }, []);

  return (
    <>
      <div className="w-full h-full bg-black p-[20px]">
        <HomePage></HomePage>
        <div className="w-fit">
          <img
            src={require("./assets/GMAText.png")}
            width="300"
            height="30"
            className="drop-shadow-lg"
          ></img>
        </div>
        <div className="flex flex-col gap-y-[50px]">
          <Grafik />
          <Mapping />
        </div>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          {ganteng ? (
            <text className="text-[48px] text-black">Anjay GG Gemink</text>
          ) : (
            <text className="text-[48px] text-black">Arka B aja</text>
          )}

          <div className="flex flex-col">Counter : {hitungan.join(",")}</div>
        </div>
      </div>
    </>
  );
}

export default App;
