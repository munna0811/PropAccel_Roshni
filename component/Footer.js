import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="container position-relative "
      style={{
        height: "25rem",
        background: "linear-gradient(to bottom left, #7A3199,#161033)",
      }}
    >
      <div className="row m-auto  text-center" style={{ width: "50%" }}>
        <h2
          className="my-lg-4 "
          style={{ fontSize: "32px", fontWeight: "bold" }}
        >
          We have what you’re looking for
        </h2>
        <p className="m-3" style={{ fontSize: "12px", color: "#4776E6" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type a
        </p>
      </div>
      <div className="row m-auto my-5" style={{ width: "15rem" }}>
        <button
          className=" py-2 rounded border-0"
          style={{
            width: "12rem",
            height: "3.5rem",
            background: "linear-gradient(to right, #4776E6 , #8E54E9)",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Get Started Now
        </button>
      </div>

      <div
        className="row m-lg-5  p-4 border-top"
        style={{ fontSize: "12px", width: "70rem" }}
      >
        <div className="col-lg-4 text-center" style={{ color: "white" }}>
          All Right Reserved @Copyright 2023
        </div>

        <div className="col-2" style={{ color: "white" }}>
          Terms of Service
        </div>
        <div className="col-2" style={{ color: "white" }}>
          Privacy Policy
        </div>
        <div className="col-2" style={{ color: "white" }}>
          Product
        </div>

        <div className="col " style={{ fontSize: "16px", color: "white" }}>
          <BsFacebook />
        </div>
        <div className="col " style={{ fontSize: "16px", color: "white" }}>
          <AiFillYoutube />
        </div>
        <div className="col " style={{ fontSize: "16px", color: "white" }}>
          <AiFillInstagram />
        </div>
        <div className="col " style={{ fontSize: "16px", color: "white" }}>
          <AiOutlineTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
