import React from "react";

const About = () => {
  return (
    <div className="container mt-5 " style={{ height: "30rem" }} id="about">
      <div className="row position-relative">
        <div className="col-sm-12 col-lg-6 ">
          <div className="vstack gap-5">
            <div className="hstack gap-5">
              <div className="card " style={{ width: "18rem" }}>
                <div className="card-body m-4">
                  <h5
                    className="card-title "
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Interactive Features
                  </h5>

                  <p className="card-text " style={{ fontSize: "12px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
              <div
                className="card position-absolute p "
                style={{
                  width: "18rem",
                  top: "3rem",
                  left: "20rem",
                }}
              >
                <div className="card-body m-4 ">
                  <h5
                    className="card-title "
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Interactive Features
                  </h5>

                  <p className="card-text " style={{ fontSize: "12px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
            </div>
            <div className="hstack gap-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body m-4">
                  <h5
                    className="card-title "
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Interactive Features
                  </h5>

                  <p className="card-text " style={{ fontSize: "12px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
              <div
                className="card position-absolute"
                style={{ width: "18rem", top: "16rem", left: "20rem" }}
              >
                <div className="card-body m-4">
                  <h5
                    className="card-title "
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Interactive Features
                  </h5>

                  <p className="card-text " style={{ fontSize: "12px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 m-2 " style={{ width: "28rem" }}>
          <h1 className="my-5" style={{ fontSize: "48px", fontWeight: "bold" }}>
            About the Course
          </h1>
          <p className="my-5" style={{ fontSize: "14px", width: "22rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unkno
          </p>
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
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
