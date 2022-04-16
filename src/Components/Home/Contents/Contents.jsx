import React from "react";
import "./contant.css";
import image1 from "../../../image/catagories/1.jpg";
import image2 from "../../../image/catagories/2.jpg";
import image3 from "../../../image/catagories/3.jpg";

const Contents = () => {
  return (
    <div className="section mt-0" style={{ padding: "100px 0" }}>
      <div className="container">
        <div className="row grid-item">
          <div className="col-md-2 grid-image">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="col-md-2">
            <div className="grid-info clearfix content-text">
              <h3>
                <a href="/allProduct">
                  Fresh Arrivals<span>Summer is Coming!</span>
                </a>
              </h3>
              <a href="/allProduct" className="more-link clearfix contant">
                Shop Now
              </a>
            </div>
          </div>
          <div className="col-md-2 grid-image">
            <img src={image2} alt="Image 1" />
          </div>
          <div className="col-md-2">
            <div className="grid-info clearfix content-text">
              <h3>
                <a href="1">
                  Acessories
                  <span>Check out more Products for your Lifestyles</span>
                </a>
              </h3>
              <a href="/allProduct" className="more-link clearfix contant">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-2 grid-image">
            <img src={image3} alt="Image 1" />
          </div>
          <div className="col-md-2">
            <div className="grid-info clearfix content-text">
              <h3>
                <a href="1">
                  Our Store<span>Where we Manufacture!</span>
                </a>
              </h3>
              <i className="icon-map-marker2"></i>{" "}
              <a
                href="/allProduct"
                dataLightbox="iframe"
                className="more-link clearfix contant"
              >
                Find Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
