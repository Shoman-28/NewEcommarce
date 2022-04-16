import React from "react";
import visa from "../../../image/card/visa.svg";
import mc from "../../../image/card/mc.svg";
import ae from "../../../image/card/ae.svg";
import pp from "../../../image/card/pp.svg";
import sk from "../../../image/card/sk.svg";
import c2co from "../../../image/card/2co.svg";
import wu from "../../../image/card/wu.svg";

const ShoppingCard = () => {
  const cardImage = [
    { img: visa },
    { img: mc },
    { img: ae },
    { img: pp },
    { img: sk },
    { img: c2co },
    { img: wu },
  ];
 
  return (
    <div>
      <div className="section dark mb-0 mt-0">
        <div className="container clearfix">
          <div className="row payments-info">
            <div className="col-lg-6">
              <p className="lead m-0" style={{color:'#716363', lineHeight: '1.8', fontSize:'1.25rem', fontWeight:'300', fontFamily:'"lato", sans-serif'}}>
                Free Shipping on Orders of <strong>$199</strong> or above.
              </p>
            </div>
            <div className="col-lg-6">
              <ul
                className="payment-cards clearfix"
                style={{ marginTop: "5px" }}
              >
                {cardImage.map((p) => (
                  <li>
                    <img src={p.img} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
