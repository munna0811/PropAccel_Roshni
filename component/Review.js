import React from "react";

import { DemoCarousel } from "./Carousel";

const Review = (reviewPage) => {
  return (
    <div className="container" id="review">
      <div className="row py-5">
        <h2 className="py-4" style={{ fontSize: "40px", fontWeight: "bold" }}>
          Review from customers
        </h2>
        <p style={{ fontSize: "12px", width: "25rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
      </div>
      <DemoCarousel />
    </div>
  );
};

export default Review;
