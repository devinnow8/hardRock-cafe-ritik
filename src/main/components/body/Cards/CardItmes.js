import React from "react";
import "./CardItmes.css"
import CardItmesData from "./CardItmesData";

function CardItmes({setCartProducts, cartProducts}) {
  return (
    <div>
      <CardItmesData setCartProducts={setCartProducts} cartProducts={cartProducts}/>
    </div>
  );
}

export default CardItmes;
