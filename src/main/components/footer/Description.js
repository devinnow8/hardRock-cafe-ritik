import React from "react";
import SocialButtons from "./SocialButtons";
import "./Description.css";

function Description() {
  return (
    <div className="main">

      <div className="first_div">

        <div className="logo_png">
          <img src="./images/logo192.png" alt="cart" />
        </div>

        <div>
          <div>weebly Themes</div>
          <div>Pre-sale Faq's</div>
          <div>Submit A ticket</div>
        </div>

        <div>
          <div>services</div>
          <div>THeme Tweaks</div>
        </div>

        <div>
          <div>showcase</div>
          <div>widgetkit</div>
          <div>Support</div>
        </div>

        <div>
          <div>About us</div>
          <div>Contact us</div>
          <div>Affiliate</div>
          <div>Resources</div>
        </div>

        
      </div>
      <hr></hr>

      <div className="second_div">
        <SocialButtons />
      </div>
    </div>
  );
}

export default Description;
