import React, { useEffect, useState } from "react";
import "./preloader.css";

import { preLoaderAnim } from "../animations";

const Preloader = () => {
  const text1 = "GMAT";

  useEffect(() => {
    preLoaderAnim();
  }, [4000]);

  return (
    <div className="bg-black w-[100%] h-[100vh] overflow-hidden flex flex-col justify-center items-center">
      <img
        src={require("../assets/LogoGMAT.jpg")}
        width={300}
        height={300}
        className="texts-container flex items-center font-mono justify-between text-white"
      ></img>
      <span className="teks">GMAT</span>
    </div>
  );
};

export default Preloader;
