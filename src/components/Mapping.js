import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

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

export const Mapping = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col bg-[#323030] w-fit h-fit p-[20px] py-[40px] rounded-[30px]">
        <div className="text-[20px] text-center font-Inter font-bold text-[#696367] tracking-[.5em]">
          GPS
        </div>
        <div className="text-white">
          <div>
            *Ini leafletnya aneh kak tiba-tiba mapnya padahal sebelumnya muncul
            udah sesuai tapi tiba-tiba jadi ilang
          </div>
          <div>
            udah saya coba segala macem balikinnya bahkan coba codingan yang
            basic dari dokumentasi juga tetep gabisa :(
          </div>
        </div>
        <MapContainer
          center={[data[0].latitude, data[0].longitude]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((item, index) => (
            <Marker
              key={index}
              position={[item.latitude, item.longitude]}
              icon={
                new L.icon({
                  iconUrl: require("../assets/LogoGMAT.jpg"),
                  iconSize: [32, 32],
                })
              }
            >
              <Popup>
                Team ID: {item.teamid} <br />
                Clock: {item.clock} <br />
                Voltage: {item.voltage} <br />
                Pressure: {item.pressure} <br />
                Altitude: {item.altitude} <br />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
