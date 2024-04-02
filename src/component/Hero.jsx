import React from "react";
import PopButton from "./PopButton";
import HeroCard from "./HeroCard";
import AnimButton from "./AnimButton";

const Hero = () => {
  const heroCardsData = [
    {
      title: "Convert with email automations",
      imageSrc: "https://eep.io/images/yzco4xsimv0y/5EODYdgDf1houB82RfR8e0/d3a56636ba2d48943ab54513277458bc/Homepage-Feature-Card-Automations-Desktop-INT__1_.png?w=630&fm=avif&q=60",
      desc: "Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.",
      btnTxt: "Explore marketing automation",
      btnCol: '#d99536'
    },
    {
      title: "Create faster with generative AI",
      imageSrc: "https://eep.io/images/yzco4xsimv0y/3JSoRinRB2VTmBiD7NyEUg/f48b012abacf15bc323135c3d9e3cbe2/Homepage-Feature-Card-AI-Desktop.png?w=630&fm=avif&q=60",
      desc: "Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates.",
      btnTxt: "Explore AI tools",
      btnCol: '#f6f6f4'
    },
    {
      title: "Refine with segmentation",
      imageSrc: "https://eep.io/images/yzco4xsimv0y/6QVNtP8As7OHsx5mivPn8f/c802814a27e36ee4a016556501e6ec85/Homepage-Feature-Card-Segmentation-Desktop.png?w=630&fm=avif&q=60",
      desc: "Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.",
      btnTxt: "Explore audience management",
      btnCol: '#e7b75f'
    },
    {
      title: "Optimize with analytics & reporting",
      imageSrc: "https://eep.io/images/yzco4xsimv0y/6JxWAec8e3X3OMFmX9dVvd/9f34fab9dcbe5d69c4faf2c0d1b9b5ae/Homepage-Feature-Card-Analytics-Reporting-Desktop.png?w=630&fm=avif&q=60",
      desc: "Analyze performance with custom reports, funnel visualizations, and industry benchmarking.",
      btnTxt: "Explore analytics & reporting",
      btnCol: '#fbeeca'
    },
  ];
  return (
    <>
      <div className="text-center flex flex-col items-center gap-3 mt-[80px]">
        <h1 className="font-means-web text-[42px] font-semibold	text-gray-900	">
          Turn Emails into Revenue
        </h1>
        <p className="text-2xl	max-w-4xl	tracking-wide">
          Win new customers with the #1 email marketing and automations
          platform* that recommends ways to get more opens, clicks, and sales.
        </p>
        <PopButton bg="#ffe01b" className="mt-5">
          Sign Up
        </PopButton>
      </div>
      <div className="mt-[80px] flex flex-wrap">
        {heroCardsData.map((cardData, index) => (
          <HeroCard key={index} {...cardData} />
        ))}
      </div>
      <div className="flex p-[80px] m-lg:flex-col-reverse m-lg:gap-10">
        <div className="w-1/2 pr-5 m-lg:w-full flex flex-col justify-center">
          <h2 className="text-[40px] leading-10 font-means-web mb-7">Get started easily with a personalized product tour</h2>
          <p className="text-base	font-graphik-web tracking-wide	mb-7 max-w-lg">An onboarding specialist is here to help you get started with confidence—it is included with a paid plan.*</p>
          <AnimButton className="ml-[-8px] w-fit">Learn more about onboarding</AnimButton>
        </div>
        <div className="w-1/2 m-lg:w-full m-lg:flex">
          <img src="https://eep.io/images/yzco4xsimv0y/eeOxTgGvLZjag4xB9SK7h/18bbe5f5514e075ae697322976223c1f/Onboarding_Placement_-_Woman_on_phone_and_laptop.png?w=842&fm=avif&q=60" />
        </div>
      </div>
    </>
  );
};

export default Hero;
