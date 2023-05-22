import React from "react";
import burgir from "../../../../foodItmes/burgir.png";
import burgir1 from "../../../../foodItmes/k-aacrlpufy4xh.jpg";
import burgir2 from "../../../../foodItmes/Tazikis-Celebrates-Grand-Re-Opening-with-1-Dollar-Menu-Items.jpg";
import burgir3 from "../../../../foodItmes/FgZ6uiKUYAApTMZ.png";
import burgir4 from "../../../../foodItmes/menu-icon-soup.jpg";
import burgir5 from "../../../../foodItmes/unnamed.jpg";
import burgir6 from "../../../../foodItmes/Tazikis-Celebrates-Grand-Re-Opening-with-1-Dollar-Menu-Items.jpg";
import burgir7 from "../../../../foodItmes/k-aacrlpufy4xh.jpg";
import ItemCard from "./ItemCard";

import "./CardItmes.css";

function CardItmesData() {
  const cardData = [
    {
      key: "1",
      title: "Buttermilk Pancakes",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir,
      rs: 270,
      category:"breakfast"
    },

    {
      key: "2",
      title: "GodZilla Milkshake",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir1,
      rs: 270,
      category:"shakes"
    },
    {
      key: "3",
      title: "Egg Attacks",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir2,
      rs: 270,
      category:"breakfast"
    },
    {
      key: "4",
      title: "Beacon Overflow",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir3,
      rs: 270,
      category:"lunch"
    },
    {
      key: "5",
      title: "Dinner Double",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir4,
      rs: 270,
      category:"lunch"
    },
    {
      key: "6",
      title: "Country Delight",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir5,
      rs: 270,
      category:"lunch"
    },
    {
      key: "7",
      title: "Oreo Classic",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir6,
      rs: 270,
      category:"shakes"
    },
    {
      key: "8",
      title: "American Classic",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir7,
      rs: 270,
      category:"shakes"
    },
  ];
  return (
    <div>
      <div className="main_card">
        {cardData.map((data) => {
          return <ItemCard key={data.key} data={data} />;
        })}
      </div>
    </div>
  );
}

export default CardItmesData;
