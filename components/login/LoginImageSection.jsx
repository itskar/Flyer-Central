import Image from "next/image";
import React from "react";
import BgImage from "../../public/static/The-Encounter.jpg"

const LoginImageSection = () => {
  return (
    <div id="image-section" className="bg-black">
      <img className="hidden xl:inline h-full w-full opacity-90" src={BgImage.src}></img>
    </div>
  );
};

export default LoginImageSection;
