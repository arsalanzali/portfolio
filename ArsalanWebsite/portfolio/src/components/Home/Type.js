import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer 👨‍💻",
          "Software Engineer 💻",
          "Self Proclaimed Pro Gamer 🕹️",
          "Car Enthusiast 🚗",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
