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
  {
    teamid: 4,
    clock: "15:15",
    yaw: 228.4,
    pitch: 200.0,
    roll: 130.2,
    latitude: -7.774381,
    longitude: 110.367695,
    voltage: 51,
    pressure: 300,
    altitude: 500,
  },
  {
    teamid: 5,
    clock: "16:15",
    yaw: 300.5,
    pitch: 400.0,
    roll: 150.19,
    latitude: -7.7639135,
    longitude: 110.3868515,
    voltage: 63,
    pressure: 500,
    altitude: 800,
  },
  {
    teamid: 6,
    clock: "16:25",
    yaw: 394.5,
    pitch: 37.0,
    roll: 10.19,
    latitude: -7.7652533,
    longitude: 110.3676408,
    voltage: 72,
    pressure: 400,
    altitude: 850,
  },
  {
    teamid: 7,
    clock: "16:35",
    yaw: 180.2,
    pitch: 320.9,
    roll: 79.32,
    latitude: -7.7652533,
    longitude: 110.3676408,
    voltage: 48,
    pressure: 500,
    altitude: 900,
  },
];

export const Mapping = () => {
  return (
    <div className="flex justify-center items-center z-[10]">
      <div className="flex flex-col bg-[#323030] w-fit h-fit p-[20px] py-[40px] rounded-[30px]">
        <div className="text-[20px] text-center font-Inter font-bold text-[#696367] tracking-[.5em]">
          GPS
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
