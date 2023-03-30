import React from "react";
import menhair from "../../../images/hair-comb.png";
import womenhair from "../../../images/hair-cutting.png";
import womenspa from "../../../images/hair-straightener.png";
import massagemen from "../../../images/massage (1).png";
import massagewomen from "../../../images/massage.png";
import { motion } from "framer-motion";
import '../../../style/headservices.css'

const ServiceCard = [
  { icon: massagewomen, title: "Salon For Women", link: "" },
  { icon: womenhair, title: "Hair,Skin & Nails", link: "" },
  { icon: womenspa, title: "Spa For Women", link: "" },
  { icon: menhair, title: "Salon For Men", link: "" },
  { icon: massagemen, title: "Massage For Men", link: "" },
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
