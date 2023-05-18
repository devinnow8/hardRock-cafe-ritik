import React from "react";
import "./SocialButtons.css";

function SocialButtons() {
  return (
    <div className="lower_section">
      <div className="buttons">
        <button className="fa fa-facebook"></button>
        <button className="fa fa-twitter"></button>
        <button className="fa fa-instagram"></button>
        <button className="fa fa-linkedin"></button>
        <button className="fa fa-rss"></button>
      </div>

      <div className="end_point">
        <a href="/" className="fa fa-copyright">
          copyright. All Rights Reserved
        </a>
      </div>
    </div>
  );
}

export default SocialButtons;
