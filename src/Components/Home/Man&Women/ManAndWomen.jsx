import React from "react";
import "./ManAndWomen.css";
const ManAndWomen = () => {
  return (
    <div className="mb-5 pb-5">
      <div className="man-woman">
        <div className="man-image">
          <div className="img">
            <div className="man-text text">
              <h3>Travel Bags for Men</h3>
              <p>
                Designed to help you never make your bed again. Superior
                materials for comfort and lasting quality in a complete bedding
                package..
              </p>
              <a href="1">Go to shop</a>
            </div>
          </div>
        </div>
        <div className="women-image">
          <div className="img">
            <div className="women-text text">
              <h3 className="">Luxury Bags for Women</h3>
              <p>
                Designed to help you never make your bed again. Superior
                materials for comfort and lasting quality in a complete bedding
                package.
              </p>
              <a href="1">Go to shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManAndWomen;
