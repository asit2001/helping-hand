import React from "react";
import slide1 from "../../../images/young-woman-346231_1920.jpg";
import house from "../../../images/house.png";
import { motion } from "framer-motion";
import '../../../style/slider.css'

function Slider() {
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slide-filter"></div>
        <div className="slide1">
          <img src={slide1} alt="" />
        </div>
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          initial={{ opacity: 0 }}
          className="slide-text"
        >
          <div>ONE-STOP SOLUTION</div>
          <div>
            FOR YOUR <img src={house} alt="" width={"50px"} />{" "}
            <span>Services</span>
          </div>
          <div>on demand</div>
        </motion.div>
      </div>
    </div>
  );
}

export default Slider;
