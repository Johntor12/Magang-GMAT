import { io } from "socket.io-client";

const socket = io("https://gmat.haikalhilmi.my.id/");

socket.on("connect", () => {
  console.log("Connected to the Socket.io server");
});

socket.on("message", (mess) => console.log(mess));
