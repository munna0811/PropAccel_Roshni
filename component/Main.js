import React from "react";
import { NavLink } from "react-router-dom";
import Review from "./Review";
import Pricing from "./Pricing";

const Main = () => {
  return (
    <div className="container">
      <div className="row mt-3 py-3">
        <div className="col-sm-12 col-lg-6">
          <NavLink to="/">logo</NavLink>
        </div>
        <div className="col-sm-12 col-lg-2">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="col-sm-12 col-lg-2">
          <NavLink to="/pricing">Pricing</NavLink>
        </div>
        <div className="col-sm-12 col-lg-2">
          <NavLink to="/review">Review</NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <h1 className="mt-5">Learn how to launch a successful podcast</h1>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
          <button className="px-5 py-2 rounded">Sign up Now</button>
        </div>
        <div className="col-sm-12 col-lg-5 position-realtive m-auto ">
          <img
            className="position-relative"
            src="everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png"
            alt="everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1"
          />
          <img
            className="position-absolute"
            style={{ right: "20%", top: "10rem" }}
            src="group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png"
            alt="group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1"
          />
          <img
            src="Group.png"
            className="position-absolute"
            style={{ right: "15%", top: "25rem" }}
            alt="group"
          />
          <img
            src="Vector.png"
            className="position-absolute"
            style={{ right: "10%", top: "17rem" }}
            alt="vector"
          />
        </div>
      </div>
      <Review />
      <Pricing />
    </div>
  );
};

export default Main;
