import React from "react";
import menhair from "../../../images/hair-comb.png";
import womenspa from "../../../images/hair-straightener.png";
import home from "../../../images/home.png";
import delivery from "../../../images/delivery.png";
import cleaning from "../../../images/cleaning.png";
import tiles from "../../../images/tiles.png";
import Plumber from "../../../images/plumber.png";


import { motion } from "framer-motion";
import '../../../pages/HomeStyles/style/headservices.css'

const ServiceCard = [
  { icon: delivery, title: "Relocation", link: "" },
  { icon: cleaning, title: "Cleaning & Pest", link: "" },
  { icon: womenspa, title: "Body Care", link: "" },
  { icon: menhair, title: "Salon For Men", link: "" },
  { icon: home, title: "Home Reparing", link: "" },
  { icon: tiles, title: "Tile & Marble", link: "" },
  { icon: Plumber, title: "Plumber", link: "" },
];

function HeadServices() {
  return (
    <div className="headservices">
      {ServiceCard.map((card, idx) => {
        return (                   
              <motion.div
                key={card.title + idx}
                animate={{ y: 0,opacity:1 }}
                initial={{ y: idx % 2 === 0? -100 : 100 ,opacity:0}}
                transition={{ type: "spring", duration: 1.5, bounce: 0.5,delay: 0.5}}
                
                className="headservices_service"
              >
                <img src={card.icon} alt="" width={"50px"} />
                <div className="">{card.title}</div>
              </motion.div> 
          
        );
      })}
    </div>
  );
}

export default HeadServices;
