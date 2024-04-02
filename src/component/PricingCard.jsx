import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import PopButton from "./PopButton";

const PricingCard = ({ best, title, desc, offPrice, price, items, id }) => {
  return (
    <div
      className={`py-7 px-5 bg-gray-50 xl:w-1/4 m-md:1/2 m-sm:w-full  border border-gray-400 ${
        best &&
        "scale-105 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] before-box text-[13px] bg-white"
      }`}
    >
      {best && (
        <div className="absolute top-[-26px] bg-blue-200 w-[calc(100%+1.5px)] ml-[-1px] left-0 border-x border-t border-gray-400	h-[25px] flex items-center justify-center underline decoration-dotted decoration-sky-500 underline-offset-2">
          <p>Best Value</p>
        </div>
      )}
      <div className="flex flex-col justify-between h-60">
        <div>
          <h2 className="font-means-web text-2xl font-medium mb-3">{title}</h2>
          <p className="text-[11px]">{desc}</p>
        </div>
        <div>
          {
            offPrice &&
          <>
            <p className="text-[12px]">Starts at</p>
            <h3 className="line-through text-2xl text-gray-400	font-means-web decoration-1	decoration-black	font-medium">
              &#8377;{offPrice}
            </h3>
          </>
          }
          
          <h2 className="text-3xl font-means-web font-medium flex">
            <span className="text-sm mt-1">&#8377;</span>{price}
          </h2>
          <p className="text-[13px]">/month for 12 months*</p>
        </div>
      </div>
      <ul className="mt-2 mb-7">
        {
          items.map((item, index) => (
            !item.disabled ?
            <li key={`list_${index}`} className="flex items-center gap-2 border-b py-5 border-gray-300 cursor-pointer">
              <BiCheck className="text-2xl" />
              <p className="text-[11px] underline decoration-dotted">
                {item.desc}
              </p>
            </li>
            :
            <li key={`list_${index}`} className="flex items-center gap-2 border-b py-5 border-gray-300 cursor-pointer text-gray-500">
              <AiOutlineClose className="text-xl mr-1" />
              <p className="text-[11px]">{item.desc}</p>
            </li>
          ))
        }
        
        
      </ul>
      {best ? (
        <PopButton bg="#ffe01b" className="w-full">
          Buy Now
        </PopButton>
      ) : (
        <PopButton className="w-full">Buy Now</PopButton>
      )}
    </div>
  );
};

export default PricingCard;
