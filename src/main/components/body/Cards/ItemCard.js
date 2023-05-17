import React from "react";

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
      <div>
        <h5>{props.data.title}</h5>
        <h6> Rs.{props.data.rs}</h6>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
