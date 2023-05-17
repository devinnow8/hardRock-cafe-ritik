import React from "react"
import burgir from "../../../../foodItmes/burgir.png"
import "./CardItmes.css"
import ItemCard from "./ItemCard";

function CardItmesData() {
  const cardData = [
    {
      key: "1",
      title: "Buttermilk Pancakes",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
      image: burgir,
      rs:270,
    },

    {
      key: "",
      title: "GodZilla Milkshake",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
        image: burgir,
        rs:270,
    },
    {
      key: "3",
      title: "Egg Attacks",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
        image: burgir,
        rs:270,
    },
    {
      key: "4",
      title: "Beacon Overflow",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
        image: burgir,
        rs:270,
    },
    {
      key: "5",
      title: "Dinner Double",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
        image: burgir,
        rs:270,
    },
    {
      key: "6",
      title: "Country Delight",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
        image: burgir,
        rs:270,
    },
    {
      key: "7",
      title: "Oreo Classic",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
        image: burgir,
        rs:270,
    },
    {
      key: "8",
      title: "American Classic",
      description:
        "is simply dummy text of the printing and typesetting indusrty.Lorem ipsum has been the industry's",
        image: burgir,
        rs:270,
    },
  ];
  return (
    <div>
      <div className="main_card">
        {cardData.map((data) => {
          return (
           <ItemCard data={data}/>
          );
        })}
      </div>
    </div>
  );
}

export default CardItmesData;
