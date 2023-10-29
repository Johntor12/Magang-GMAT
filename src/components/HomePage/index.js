import React from "react";
import Preloader from "../preloader";

export const HomePage = () => {
  return (
    <>
      <div className="bg-black w-full h-[100vh] py-[40px] text-white px-[60px] z-[5]">
        <div className="mt-[50px] w-fit">
          <text className="font-Inter text-[48px] font-bold shadow-md">
            Final Assignment
          </text>
        </div>
        <div className="flex items-center rounded-tl-[150px] rounded-tr-[200px] rounded-br-[200px] w-[1200px] h-[60%] mt-[40px] bg-[#D9D9D9] p-[40px]">
          <div className="flex flex-col tracking-[.25em] p-[30px] text-[60px] text-[#111149] font-Inter font-bold">
            <text className="text-right ">GADJAH MADA </text>
            <text>AEROSPACE TEAM</text>
            <text className="text-[14px]">Arkananta Firjatullah Ariza</text>
            <text className="text-[14px] tracking-[.5em]">
              22/506019/TK/55417
            </text>
          </div>
          <div className="gambar">
            <img
              src={require("../../assets/LogoGMAT.jpg")}
              width="300"
              height="30"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
