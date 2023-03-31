import React from "react";
import { motion } from "framer-motion";
import noimage from '../../../images/source-404.jpg'
import { useNavigate } from "react-router";
import '../../../pages/HomeStyles/style/otherservices.css'

function OtherServices({ servicelist, heading ,idx }) {
  const navigate = useNavigate();
  function handleOpenServicesPage(obj,name){
    let newName = name.toLowerCase().replaceAll(' ','-')
    navigate(`/services/${newName}`, {state:obj})
  }

  return (
    <div className="otherServies">
      <div className="otherServies-wrap">
        <div className="otherServies-wrap_head">{heading}</div>

        <div className="otherServies-wrap_Serviceslist"
        >
          <div className="otherServies-wrap_Serviceslist_wrap">
            {servicelist.map((services, idx) => {
              return (
                <motion.div 
                  onClick={e=>handleOpenServicesPage(services,services.serviceName)}                 
                  whileInView={{y:0,opacity:1}}
                  initial={{y:-80,opacity:0}}
                  transition={{duration:2,type:'spring',bounce:0.5}}
                  viewport={{ once: true, amount: 0.8 }}
                  layout
                  key={services.serviceName + idx}
                  className="otherServies-wrap_Serviceslist_wrap_card"
                >
                  <div className="otherServies-wrap_Serviceslist_wrap_card_imgHolder shine">
                    <img src={services.imgUrl?services.imgUrl:noimage} alt="" />
                  </div>
                  <div className="otherServies-wrap_Serviceslist_wrap_card_body">
                    <div className="otherServies-wrap_Serviceslist_wrap_card_body_title" style={{textTransform:'capitalize'}}>
                      {services.serviceName}
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
