import React from "react";
import "./index.css";
import img1 from "../../../../foodItmes/FgZ6uiKUYAApTMZ.png";
import img2 from "../../../../foodItmes/burgir.png";
import img3 from"../../../../foodItmes/Tazikis-Celebrates-Grand-Re-Opening-with-1-Dollar-Menu-Items.jpg";
import img4 from"../../../../foodItmes/k-aacrlpufy4xh.jpg";
import img5 from"../../../../foodItmes/unnamed.jpg";

const Cart = () => {
  return (
    <>
      <div className="cart-parent-container">
        <div className="cart-child-head-container">
          <h4>+91 9182192281</h4>
          <h5 className="cart-image">
            <img
              src="./images/60992.png"
              alt="woah"
              style={{ width: "18px", height: "17px" }}
            />{" "}
            5 Cart-Items
          </h5>
          <h5>RS-16718</h5>
        </div>
        <div className="cart-child-body-container">
          <div className="cart-child-img-conatainer">
            <div><img src={img1} alt="img1"></img></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="cart-child-footer-container"></div>
      </div>
    </>
  );
};
export default Cart;
