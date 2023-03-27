import React from "react";
import { motion } from "framer-motion";

function OtherServices({ servicelist, idx }) {
  return (
    <div className="otherServies">
      <div className="otherServies-wrap">
        <div className="otherServies-wrap_head">{servicelist.headTitle}</div>

        <div className="otherServies-wrap_Serviceslist"
        >
          <div className="otherServies-wrap_Serviceslist_wrap">
            {servicelist.data.map((services, idx) => {
              return (
                <motion.div                  
                  whileInView={{y:0,opacity:1}}
                  initial={{y:-80,opacity:0}}
                  transition={{duration:2,type:'spring',bounce:0.5}}
                  viewport={{ once: true, amount: 0.8 }}
                  layout
                  key={services.title + idx}
                  className="otherServies-wrap_Serviceslist_wrap_card"
                >
                  <div className="otherServies-wrap_Serviceslist_wrap_card_imgHolder shine">
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
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
