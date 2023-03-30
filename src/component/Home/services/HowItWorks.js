import React from "react";
import texture from "../../../images/texture/4907157.jpg";
import Tex from "../../svg/Tex";
import { motion } from "framer-motion";
import '../../../style/howitwork.css'

let Steps = [
  {
    icon: "01",
    title: "Select The Service",
    dec: "Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metusil Vonean hrmentum sapien ac aliquet gravida.",
  },
  {
    icon: "02",
    title: "Pick Your Schedule",
    dec: "Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metusil Vonean hrmentum sapien ac aliquet gravida.",
  },
  {
    icon: "03",
    title: "Relax",
    dec: "Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metusil Vonean hrmentum sapien ac aliquet gravida.",
  },
];
function HowItWorks() {
  return (
    <div className="howitwork_container">
      <div className="howitwork_container_wrap">
        <div className="howitwork_container_wrap_head">
          <div className="howitwork_container_wrap_head_title">
            How it works
          </div>
          <div className="howitwork_container_wrap_head_des">
            3 step to take our services
          </div>
          <div className="howitwork_container_wrap_head_cards_holder">
            {Steps.map((step, idx) => {
              return (
                <motion.div
                  whileInView={{x:0,opacity:1}}
                  initial={{ x: -200, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    stiffness: 50,
                    delay: idx,
                  }}
                  viewport={{ once: true }}
                  key={step.title + idx}
                  className="howitwork_container_wrap_head_card"
                >
                  <div className="howitwork_container_wrap_head_card_icon-holder">
                    {step.icon}
                  </div>
                  <div className="">
                    <div className="howitwork_container_wrap_head_card_title">
                      {step.title}
                    </div>
                    <div className="howitwork_container_wrap_head_card_dec">
                      {step.dec}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="howitwork_container_wrap_img_holder">
          <motion.img
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            src="https://serve-nextjs.vercel.app/assets/images/home3/work.png"
            alt=""
          />
        </div>
      </div>
      <div className="textureimg">
        <img src={texture} alt="" />
      </div>
      <Tex />
    </div>
  );
}

export default HowItWorks;
