import React from "react";
import { ourMarketData } from "../../../ServicesData/data";
import circle1 from "../../../images/circle1.png";
import circle2 from "../../../images/circle2.png";
import squaredot from "../../../images/dot-square.png";
import linecross from "../../../images/line-cross.png";
import { motion } from "framer-motion";
import '../../../style/ourmarket.css'

function WhyOurMarket() {
  return (
    <div className="ourMarketplace">
      <div className="ourMarketplace_shapes">
        <motion.img
          animate={{ scale: [0, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          src={circle1}
          alt=""
        />
        <motion.img
          animate={{ scale: [0, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: 1,
          }}
          src={circle2}
          alt=""
        />
        <motion.img
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          src={squaredot}
          alt=""
        />
        <motion.img
          animate={{ x: [15, 5, 15] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: 2,
          }}
          src={linecross}
          alt=""
        />
      </div>
      <div className="ourMarketplace_wrap">
        <div className="ourMarketplace_wrap_head">
          <div className="ourMarketplace_wrap_head_title">
            Why Our Marketplace?
          </div>
          <div className="ourMarketplace_wrap_head_detail">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="ourMarketplace_wrap_body">
          {ourMarketData.map((data, idx) => {
            return (
              <div
                key={"mktdata" + idx}
                className="ourMarketplace_wrap_body_card"
              >
                <div
                  className="ourMarketplace_wrap_body_card_icon"
                  style={{ backgroundColor: `#${data.icoColor}` }}
                >
                  <data.icon
                    className="ourMarketplace_ico"
                    // icon={data.icon}
                  />
                </div>
                <div className="ourMarketplace_wrap_body_card_title">
                  {data.title}
                </div>
                <div className="ourMarketplace_wrap_body_card_dec">
                  {data.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyOurMarket;
