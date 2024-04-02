import React from "react";
import PopButton from "./PopButton";
import { Link } from "react-router-dom";

const HeroCard = ({ title, imageSrc, desc, btnTxt, btnCol }) => {
  return (
    <Link to="/" className="xl:w-1/4 m-xl:w-1/2 m-md:w-1/2 m-sm:w-full relative group hover:cursor-pointer overflow-hidden">
      <h3 className="font-means-web text-[26px] absolute py-4 px-5 font-semibold leading-9 group-hover:decoration-solid group-hover:underline z-10">{title}</h3>
      <img className="group-hover:scale-105 duration-200" src={imageSrc} />
      <div style={{background: btnCol}} className="p-8">
        <p className="mb-7 text-base	">{desc}</p>
        <PopButton>{btnTxt}</PopButton>
      </div>
    </Link>
  );
};

export default HeroCard;
