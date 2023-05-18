import React from "react";
import "./ItemCard.css"

function ItemCard(props) {
  return (
    <div key={props.data.key} className="list_items">
      <div>
        <img
          src={props.data.image}
          alt={props.data.title}
          className="img_src"
        />
      </div>
      <div className="itemcard-data">
      <div className="itemcard-data-inner">
      <h5>{props.data.title}  </h5>
        <h6 className="itemcard-data-rs"> Rs.{props.data.rs} </h6>
      </div>
        
      
      <hr></hr>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
