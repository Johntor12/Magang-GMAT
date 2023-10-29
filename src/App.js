import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Preloader from "./components/preloader.js";
import { io } from "socket.io-client";
import { Mapping } from "./components/Mapping.js";
import "leaflet/dist/leaflet.css";
import "./index.css";
import Grafik from "./Chart";
import { HomePage } from "./components/HomePage/index.js";
import Partikel from "./components/Partikel";

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
      setMsg((prevMsg) => [
        ...prevMsg,
        splitData.map((item) => parseInt(item)),
      ]);
      splitData.forEach((item) => {
        setTimeout(() => {
          dataIndex = (dataIndex + 1) % 10;
        }, dataIndex * 1000);
      });
    });
  }, []);

  return (
    <>
      {console.log(msg)}
      <div className="bg-black p-[20px]">
        <Partikel />
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
      </div>
    </>
  );
}

export default App;
