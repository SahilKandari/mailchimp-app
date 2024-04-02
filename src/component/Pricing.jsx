import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import PricingCard from "./PricingCard";
import AnimButton from "./AnimButton";

const Pricing = () => {
  const pricingCardsData = [
    {
      price: "11,500",
      offPrice: "23,000",
      title: "Premium",
      desc: "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
      items: [
        { desc: "Phone & Priority Support", disabled: false },
        { desc: "Custom-coded and Pre-built Email Templates", disabled: false },
        { desc: "Multivariate and A/B Testing", disabled: false },
        { desc: "Enhanced Automated Customer Journeys", disabled: false },
        { desc: "Dedicated Personalized Onboarding", disabled: false },
        { desc: "Predictive Segmentation", disabled: false },
        { desc: "Campaign Manager", disabled: false },
      ],
    },
    {
      best: true,
      price: "575",
      offPrice: "1,150",
      title: "Standard",
      desc: "Sell even more with personalization, optimization tools, and enhanced automations.",
      items: [
        { desc: "24/7 Email & Chat Support", disabled: false },
        { desc: "Custom-coded and Pre-built Email Templates", disabled: false },
        { desc: "Multivariate and A/B Testing", disabled: false },
        { desc: "Enhanced Automated Customer Journeys", disabled: false },
        { desc: "Personalized Onboarding", disabled: false },
        { desc: "Predictive Segmentation", disabled: false },
        { desc: "Campaign Manager", disabled: false },
      ],
    },
    {
      price: "385",
      offPrice: "770",
      title: "Essentials",
      desc: "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
      items: [
        { desc: "Phone & Priority Support", disabled: false },
        { desc: "Pre-built Email Templates", disabled: false },
        { desc: "A/B Testing", disabled: false },
        { desc: "Enhanced Automated Customer Journeys", disabled: false },
        { desc: "Personalized Onboarding", disabled: true },
        { desc: "Predictive Segmentation", disabled: true },
        { desc: "Campaign Manager", disabled: true },
      ],
    },
    {
      price: "0",
      title: "Free",
      desc: "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
      items: [
        { desc: "Phone & Priority Support", disabled: false },
        { desc: "Custom-coded and Pre-built Email Templates", disabled: false },
        { desc: "A/B Testing", disabled: true },
        { desc: "Enhanced Automated Customer Journeys", disabled: true },
        { desc: "Onboarding", disabled: true },
        { desc: "Predictive Segmentation", disabled: true },
        { desc: "Campaign Manager", disabled: true },
      ],
    },
  ];
  return (
    <div className="bg-stone-100  pt-[100px] pb-[70px]">
      <div className="flex flex-col items-center">
        <p className="text-base mb-5 font-semibold">Limited Time Offer</p>
        <h2 className="text-[40px] font-means-web font-semibold	mb-10">
          Save{" "}
          <span className="underline decoration-8	decoration-yellow-400	">
            50%
          </span>{" "}
          for 12 months
        </h2>
        <div className="flex border border-gray-400 items-center">
          <p className="px-5  py-2 text-base">How many contacts do you have?</p>
          <span className="flex items-center justify-between border-l border-gray-400 p-2 w-48 text-lg font-means-web bg-white cursor-pointer">
            500 <AiOutlineDown className="mt-1" />
          </span>
        </div>
      </div>
      <div className="mt-[90px] px-5 flex max-w-7xl	ml-auto mr-auto flex-wrap gap-y-[50px] justify-center">
        {pricingCardsData.map((cardData, index) => (
          <PricingCard key={index} {...cardData} />
        ))}
      </div>
      <div className="flex flex-col items-center mt-[80px]">
        <p className="text-[11px] mb-7 m-md:w-[400px]">
          *See{" "}
          <span className="underline decoration-dotted decoration-gray-500 underline-offset-2">
            Offer Terms
          </span>{" "}
          Overages apply if contact or email send limit is exceeded. Free plan
          sending will be paused if contact or email send limit is exceeded.{" "}
          <span className="underline decoration-dotted decoration-sky-500 underline-offset-2">
            Learn more
          </span>
        </p>
        <AnimButton>See all plan details</AnimButton>
      </div>
    </div>
  );
};

export default Pricing;
