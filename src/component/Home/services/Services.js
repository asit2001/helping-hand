import React from "react";
import { FaStar,FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import noimage from '../../../images/source-404.jpg'
import { useNavigate } from "react-router";

function Services({ heading, servicelist, idx }) {
  function handleleftmove(e) {
    let div = document.querySelector(`#${heading}${idx}`);
    // let clienwidth = div.clientWidth;
    // console.log(clienwidth)
    div.scrollLeft = div.scrollLeft - 320;
  }
  function handlerightmove(e) {
    let div = document.querySelector(`#${heading}${idx}`);
    // let clienwidth = div.clientWidth;
    div.scrollLeft = div.scrollLeft + 320;
  }
  const navigate = useNavigate();

  function sendData(obj,name){
    let newName = name.toLowerCase().replaceAll(' ','-')
    navigate(`/services/${newName}`, {state:obj})
  }



  return (
    <div className="services">
      <div className="services-heading">
        <div>{heading} Services</div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="services__list">
        <div className="services__list__arrows services__list__arrows_left">

          <FaArrowLeft  onClick={handleleftmove}
            className="arrow-icon"
           />
        </div>
        <div className="services__list__arrows services__list__arrows_right">
          <FaArrowRight
            onClick={handlerightmove}
            className="arrow-icon"
           
          />
        </div>
        <div className="services__list_wrap" id={`${heading}${idx}`}>
          
          {servicelist.map((cat,idx)=>{
            return cat.data.map((card,idx)=>{
              return (
                <div key={"card" + idx}>
                {idx % 2 === 0 ?
                  <motion.div
                    whileInView={{ y: 0 ,opacity: 1}}
                    transition={{ type: "spring", duration: 2 }}
                    initial={{ y: heading[0] === 'popular'? 100 : 100 ,opacity:0}}
                    viewport={{ once: true,amount: 0.5}}
                    className="services__card"
                    style={{                     
                      height: heading[0] === "popular" && "350px",
                    }}
                  >
                    <div className="services__card-img-holder">
                      <img src={card.imgUrl?card.imgUrl: noimage} alt="" />
                    </div>
                    <div className="services__card-body">
                      <div>
                        <div style={{textTransform:'uppercase'}}>{cat.category}</div>
                        <div>
                          <FaStar                           
                            color="orange"                           
                          />
                          <span>{card.ratting?card.ratting:card.rating}</span>
                        </div>
                      </div>
                      <div className="services__card-body_title" style={{textTransform:'capitalize'}}>
                        {card.serviceName}
                      </div>
                      {heading[0] !== "popular" && (
                        <div className="services__card-dec">{card.services[0].details}</div>
                      )}

                      {heading[0] === "popular" ? (
                        <div className="services__card-pricebtn">
                          <div>
                            <span style={{fontSize:'1rem'}}>Starting at:</span>                           
                            <span>&#8377;{card.services[0].price}</span>
                          </div>
                          <button onClick={(e)=>{sendData(card,card.serviceName)}}>Book Now</button>
                        </div>
                      ) : (
                        <div className="services__card-price-btn">
                          <div className="services__card-price-btn-price">
                            <span>Starting at</span>
                            <span>&#8377;{card.services[0].price}</span>
                          </div>
                          <button onClick={(e)=>{sendData(card,card.serviceName)}}>Book Now</button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                  :
                  <motion.div
                    whileInView={{opacity : 1, scale:1 }}
                    transition={{ type: "spring", duration: 2 }}
                    initial={{ opacity : 0, scale: heading[0] === 'popular'? .5 : .5 }}       
                    viewport={{ once: true ,amount: 0.5}}             
                    className="services__card"
                    style={{
                      
                      height: heading[0] === "popular" && "350px",
                    }}
                  >
                    <div className="services__card-img-holder">
                      <img src={card.imgUrl?card.imgUrl: noimage} alt="" />
                    </div>
                    <div className="services__card-body">
                      <div>
                        <div style={{textTransform:'uppercase'}}>{cat.category}</div>
                        <div>
                          <FaStar                           
                            color="orange"                           
                          />
                          <span>{card.ratting?card.ratting:card.rating}</span>
                        </div>
                      </div>
                      <div className="services__card-body_title" style={{textTransform:'capitalize'}}> 
                        {card.serviceName}
                      </div>
                      {heading[0] !== "popular" && (
                        <div className="services__card-dec">{card.services[0].details}</div>
                      )}

                      {heading[0] === "popular" ? (
                        <div className="services__card-pricebtn">
                          <div>
                            <span style={{fontSize:'1rem'}}>Starting at:</span>
                            <span>&#8377;{card.services[0].price}</span>
                          </div>
                          <button onClick={(e)=>{sendData(card,card.serviceName)}}>Book Now</button>
                        </div>
                      ) : (
                        <div className="services__card-price-btn">
                          <div className="services__card-price-btn-price">
                            <span>Starting at</span>
                            <span>&#8377;{card.services[0].price}</span>
                          </div>
                          <button onClick={(e)=>{sendData(card,card.serviceName)}}>Book Now</button>
                        </div>
                      )}
                    </div>
                  </motion.div>                 
                }
              </div>
              )
            })
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
