import React from "react";
import bag from "../../../image/featured/1.jpg";
import "./FeaturedItem.css";
const FeaturedItems = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-5">
          <div className="row services pt-5">
            <div className="col-md-12 col-lg-6 service-Details-img">
              <img src={bag} alt="" />
            </div>
            <div className="col-md-12 col-lg-6 services-containt mb-5 pb-5">
              <div className="item-title">
                <h5>Leather Bags </h5>
                <h3>Lady Shoulder Bag.</h3>
              </div>
              <div className="item-meta font-secondary">
                SKU: 8465415. Design: Leather / Blue
              </div>

              <div className="pt-4">
                <p>
                  Proactively empower highly efficient growth strategies
                  Completely enhance inexpensive best practices before front-end
                  content. Completely procrastinate innovative vortals through
                  maintainable leadership skills. Continually foster business
                  sources for viral leadership skills.
                </p>
                <div className="item-color bottommargin-sm">
                  <span>Available Colors:</span>
                  <div id="item-color-dots" className="owl-dots"></div>
                </div>
                <div className="button button-border button-circle m-0 font-secondary">
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
