import React from "react";
import OurMenu from "./OurMenu";
import FoodFilters from "./FoodFilters";
import "./Main.css";

function Main({HandleCartClick}) {
  return (
<div>
<div className="navbar">
      <div className="logo_div" >
        <img src="./images/logo192.png" alt="logo" />
      </div>
      <h1>Sunrise</h1>
      <div className="cart_logo">
        <img src="./images/60992.png" alt="cart"  style={{width:"35px", height:"40px"}} onClick={()=>{HandleCartClick()}}/>
        <span className="cart_no">2</span>
      </div>
     
    </div>
     <div>
     <div className="menu_text">
     <OurMenu/>
   </div>
   <div>
     <FoodFilters />
   </div>
     </div>
</div>
  );
}

export default Main;
