import React from "react";
import "./ItemCard.css"
import { Button } from "./Button";


function ItemCard(props) {
  const {data, setCartProducts, cartProducts} = props
  return (
    <div key={data.key} className="list_items">
      <div>
        <img
          src={data.image}
          alt={data.title}
          className="img_src"
        />
      </div>
      <div className="itemcard-data">
      <div className="itemcard-data-inner">
      <h5>{data.title}  </h5>
        <h6 className="itemcard-data-rs"> Rs.{data.rs} </h6>
      </div>
        
      
      <hr></hr>
        <p>{data.description}</p>
        <div></div>
        <Button product={data} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
      </div>

      
      
      
    </div>
  );
}

export default ItemCard;
