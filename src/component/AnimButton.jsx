import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const AnimButton = ({ children, className }) => {
  const classes = `flex items-center gap-3 fill-button-yellow rounded-full hover:gap-1 hover:pl-3 hover:pr-1 pl-2 ${className}`;
  return (
    <button className={classes}>{children}<AiOutlineArrowRight className='rounded-full bg-yellow-400 h-[30px] w-[30px] p-1'/></button>
  )
}

export default AnimButton