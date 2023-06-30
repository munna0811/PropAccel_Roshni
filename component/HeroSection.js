import React from "react";

const HeroSection = () => {
  return (
    <div
      className="container"
      style={{
        height: "30rem",
        color: " rgba(255, 255, 255, 1)",
      }}
    >
      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <h1 className="mt-5 px-5">
            Learn how to launch a successful podcast
          </h1>
          <p className="mt-5 px-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
          <button
            className=" mx-5 py-2 rounded border-0"
            style={{
              width: "12rem",
              height: "3.5rem",
              background: "linear-gradient(to right, #4776E6 , #8E54E9)",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Sign up Now
          </button>
        </div>
        <div className="col-sm-12 col-lg-5 position-realtive m-auto ">
          <img
            className="position-relative "
            src="everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png"
            alt="everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1"
          />
          <img
            className="position-absolute "
            style={{ right: "17rem", top: "17rem" }}
            src="group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png"
            alt="group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1"
          />
          <img
            src="Group.png"
            className="position-absolute"
            style={{ right: "13rem", top: "29rem" }}
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
    </div>
  );
};

export default HeroSection;
