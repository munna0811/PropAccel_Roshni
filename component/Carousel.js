import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa";

export const DemoCarousel = () => {
  const commonDiv = () => {
    return (
      <div
        className="card my-5 mx-2"
        style={{ width: "25rem", height: "14rem" }}
      >
        <div className="hstack">
          <img
            src="Lolla.png"
            className="card-img-top my-3 mx-3   "
            style={{ width: "3rem", height: "3rem" }}
            alt="lolla"
          />
          <div className="card-body  ">
            <h3 className="card-title mt-3" style={{ fontSize: "16px" }}>
              Lolla Smith
            </h3>
            <h6 style={{ fontSize: "14px" }}>Microsoft</h6>
            <div style={{ width: "10rem", color: "#FCD53F" }}>
              <FaStar />
              <FaStar className="m-1" />
              <FaStar className="m-1" />
              <FaStar className="m-1" />
              <FaStar className="m-1" />
            </div>
          </div>
        </div>
        <p className="px-4" style={{ fontSize: "11px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </p>
      </div>
    );
  };
  return (
    <Carousel>
      <div className="row">
        {commonDiv()}
        {commonDiv()}
        {commonDiv()}
      </div>
      <div className="row">
        {commonDiv()}
        {commonDiv()}
        {commonDiv()}
      </div>
      <div className="row">
        {commonDiv()}
        {commonDiv()}
        {commonDiv()}
      </div>
    </Carousel>
  );
};
