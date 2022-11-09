import React from "react";
import Feature from "../components/feature";
import dummyData from '../dummyData'
const Features = () => {
  return (
    <div className="w-full flex flex-row px-[80px]">
      <div className="flex flex-col flex-1 gap-[34px]">
        <h1 className="w-[426px] gradient-text text-[34px] font-[800] leading-[45px]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <h6 className="text-[#FF8A71]">Request Early Access to Get Started</h6>
      </div>
      <div className="w-full flex flex-col flex-1 gap-[30px]">
      {dummyData.featureData.map(({id, title, content})=>(
        <Feature key={id} title={title} content={content}/>
      ))}
      </div>
    </div>
  );
};

export default Features;
