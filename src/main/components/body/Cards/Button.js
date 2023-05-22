import { useState } from "react";
import React from "react";
import "./Button.css";

export const Button = ({product, setCartProducts, cartProducts}) => {
  const [count, setCount] = useState(0);

  function buttonClickHandler() {
    setCount(count + 1);

    setCartProducts([...cartProducts,{...product,countitem:1}])
  }

  return (
    <>
      {count > 0 ? (
        <div className="button-parent-container">
          <div className="button-child-container">
            <button
              className="button-to-add"
              onClick={() => buttonClickHandler()}
            >
              -{count}+
            </button>
          </div>
        </div>
      ) : (
        <div className="button-parent-container">
          <div className="button-child-container">
            <button
              className="button-to-add"
              onClick={() => buttonClickHandler()  } 
              
            >
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};
