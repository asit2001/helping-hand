import React from "react";
import { motion } from "framer-motion";

function OtherServices({ servicelist, idx }) {
  return (
    <div className="otherServies">
      <div className="otherServies-wrap">
        <div className="otherServies-wrap_head">{servicelist.headTitle}</div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          initial={{ opacity: 0.5, scale: 0.5, x: idx % 2 === 0 ? -200 : 200 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="otherServies-wrap_Serviceslist"
        >
          <div className="otherServies-wrap_Serviceslist_wrap">
            {servicelist.data.map((services, idx) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5, type: "tween" }}
                  key={services.title + idx}
                  className="otherServies-wrap_Serviceslist_wrap_card"
                >
                  <div className="otherServies-wrap_Serviceslist_wrap_card_imgHolder">
                    <img src={services.img} alt="" />
                  </div>
                  <div className="otherServies-wrap_Serviceslist_wrap_card_body">
                    <div className="otherServies-wrap_Serviceslist_wrap_card_body_title">
                      {services.title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OtherServices;
