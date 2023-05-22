import React from "react";
import "./index.css";
import img1 from "../../../../foodItmes/FgZ6uiKUYAApTMZ.png";
import img2 from "../../../../foodItmes/burgir.png";
import img3 from "../../../../foodItmes/Tazikis-Celebrates-Grand-Re-Opening-with-1-Dollar-Menu-Items.jpg";
import img4 from "../../../../foodItmes/k-aacrlpufy4xh.jpg";
import img5 from "../../../../foodItmes/unnamed.jpg";
import { Button } from "../Cards/Button";
import { useState } from "react";

const Cart = ({ cartProducts, cart, onCancelClick }) => {
  if (!cart) {
    return null;
  }

  function trashDeleteHandler() {
    console.log("CLICKED");
  }

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
          <img
            src="./images/xmark-solid.svg"
            alt="cancel"
            style={{ height: "30px", width: "20px" }}
            onClick={onCancelClick}
          />
        </div>
        <div className="cart-child-body-container">
          {cartProducts &&
            cartProducts.map((item, index) => {
              return (
                <div key={item.key} className="cart-child-img-conatainer">
                  <div>
                    <img
                      src={item.image}
                      alt="img1"
                      style={{
                        border: "2px solid transparent",
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                        padding: "10px",
                      }}
                    ></img>
                  </div>
                  <div style={{ paddingTop: "26px" }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>{item.rs}</div>
                      <div>
                        <Button />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ paddingTop: "46px" }}
                    onClick={() => trashDeleteHandler()}
                  >
                    <img
                      src="./images/trash-solid.svg"
                      alt="trash-can"
                      style={{ width: "105px", height: "30px" }}
                    />
                  </div>
                </div>
              );
            })}
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
