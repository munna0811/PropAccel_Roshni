import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="row mt-3 p-5 ">
        <div className="col-sm-12 col-lg-6 px-5" style={{ fontSize: "16px" }}>
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            logo
          </NavLink>
        </div>
        <div className="col-sm-12 col-lg-2">
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
        </div>
        <div className="col-sm-12 col-lg-2">
          <a href="#pricing" style={{ color: "white", textDecoration: "none" }}>
            Pricing
          </a>
        </div>
        <div className="col-sm-12 col-lg-2">
          <a href="#review" style={{ color: "white", textDecoration: "none" }}>
            Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
