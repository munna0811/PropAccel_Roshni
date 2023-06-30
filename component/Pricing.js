import React from "react";

const Pricing = () => {
  return (
    <div className="container" id="pricing">
      <div className="row m-lg-auto  text-center" style={{ width: "40%" }}>
        <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>
          Choose your plan
        </h3>
        <p style={{ fontSize: "14px", width: "25rem", margin: "auto" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <div className="row position-relative">
        <div
          className="col position-absolute"
          style={{
            left: "35rem",
            top: "1rem",
            fontSize: "14px",
          }}
        >
          {/* <div className="border rounded-pill " style={{ width: "9rem" }}>
            <button
              className="rounded border-0 rounded-pill"
              style={{ width: "4rem", backgroundColor: "#E1A6FF66" }}
            >
              monthly
            </button>
            <button
              className="rounded border-0 rounded-pill"
              style={{ width: "4rem", backgroundColor: "#fff" }}
            >
              yearly
            </button>
          </div> */}
        </div>
      </div>
      <div className="row" style={{ marginTop: "5rem" }}>
        <div className="col-lg-4 col-sm-12 ">
          <div className="card" style={{ width: "18rem", height: "24rem" }}>
            <div className="card-body p-4">
              <h5
                className="card-title py-3"
                style={{ fontSize: "16px", fontWeight: "bolder" }}
              >
                Basic Plan
              </h5>

              <p className="card-text " style={{ fontSize: "12px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <h3 className="d-inline " style={{ fontSize: "32px" }}>
                $ 54
              </h3>
              <p className="d-inline mx-4">/month</p>
              <ul
                className="py-4 p-1"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <button
                className="card-link px-5 py-3 rounded "
                style={{
                  fontSize: "12px",
                  color: "#7A3199",

                  backgroundColor: "white",
                }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="card" style={{ width: "18rem", height: "24rem" }}>
            <div className="card-body p-4">
              <h5
                className="card-title py-3"
                style={{ fontSize: "16px", fontWeight: "bolder" }}
              >
                Basic Plan
              </h5>

              <p className="card-text " style={{ fontSize: "12px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <h3 className="d-inline " style={{ fontSize: "32px" }}>
                $ 54
              </h3>
              <p className="d-inline mx-4">/month</p>
              <ul
                className="py-4 p-1"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <button
                className="card-link px-5 py-3 rounded "
                style={{
                  fontSize: "12px",
                  color: "#7A3199",

                  backgroundColor: "white",
                }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="card" style={{ width: "18rem", height: "24rem" }}>
            <div className="card-body p-4">
              <h5
                className="card-title py-3"
                style={{ fontSize: "16px", fontWeight: "bolder" }}
              >
                Basic Plan
              </h5>

              <p className="card-text " style={{ fontSize: "12px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <h3 className="d-inline " style={{ fontSize: "32px" }}>
                $ 54
              </h3>
              <p className="d-inline mx-4">/month</p>
              <ul
                className="py-4 p-1"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <button
                className="card-link px-5 py-3 rounded "
                style={{
                  fontSize: "12px",
                  color: "#7A3199",

                  backgroundColor: "white",
                }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
