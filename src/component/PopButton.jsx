import React from "react";
import { Link } from "react-router-dom";

const PopButton = ({ children, bg, path='/', className }) => {
  const classes = `${className} border border-black	rounded-3xl	text-sm font-medium	font-graphik-web py-3 px-5 text-center w-fit duration-200 hover:shadow-[0px_6px_0px_0px_#000000] hover:-translate-y-2 tracking-wide`
  return (
    <button style={{background: bg}} className={classes}>
      {children}
    </button>
  );
};

export default PopButton;
