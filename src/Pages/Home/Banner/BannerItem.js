import React from "react";
import './BannerItem.css';

const BannerItem = ({ slide }) => {
  // console.log(slide);
  const { id, prev, next, image } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="img-gradient">
        <img alt="" src={image} className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="text-white font-bold text-6xl">
          Affordable <br />
          Pricing <br />
          Amount
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/2">
        <p className="text-white">
          This is the most beautiful things that will be happen at the all time
          are going at all..
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 bottom-1/4">
        <button className="btn btn-outline btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
    </div>
  );
};

export default BannerItem;
