import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Services({ heading, servicelist, idx }) {
  function handleleftmove(e) {
    let div = document.querySelector(`#${heading}${idx}`);
    let clienwidth = div.clientWidth;
    div.scrollLeft = div.scrollLeft - clienwidth;
  }
  function handlerightmove(e) {
    let div = document.querySelector(`#${heading}${idx}`);
    let clienwidth = div.clientWidth;
    div.scrollLeft = div.scrollLeft + clienwidth;
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
          <FontAwesomeIcon
            onClick={handleleftmove}
            className="arrow-icon"
            icon={faArrowLeft}
          />
        </div>
        <div className="services__list__arrows services__list__arrows_right">
          <FontAwesomeIcon
            onClick={handlerightmove}
            className="arrow-icon"
            icon={faArrowRight}
          />
        </div>
        <div className="services__list_wrap" id={`${heading}${idx}`}>
          {servicelist.map((card, idx) => {
            return (
              <div key={"card" + idx}>
                {idx % 2 === 0 ?
                  <motion.div
                    whileInView={{ y: 0 ,opacity: 1}}
                    transition={{ type: "spring", duration: 2 }}
                    initial={{ y: heading[0] === 'popular'? 100 : 100 ,opacity:0}}
                    viewport={{ once: true}}
                    className="services__card"
                    style={{
                      height: heading[0] === "popular" && "fit-content",
                    }}
                  >
                    <div className="services__card-img-holder">
                      <img src={card.img} alt="" />
                    </div>
                    <div className="services__card-body">
                      <div>
                        <div>{card.name}</div>
                        <div>
                          <FontAwesomeIcon
                            size="xs"
                            color="orange"
                            icon={faStar}
                          />
                          <span>{card.rating}</span>
                        </div>
                      </div>
                      <div className="services__card-body_title">
                        {card.title}
                      </div>
                      {heading[0] !== "popular" && (
                        <div className="services__card-dec">{card.dec}</div>
                      )}

                      {heading[0] === "popular" ? (
                        <div className="services__card-pricebtn">
                          <div>
                            <span>Starting at:</span>
                            <span>&#8377;{card.price}</span>
                          </div>
                          <button>Book Now</button>
                        </div>
                      ) : (
                        <div className="services__card-price-btn">
                          <div className="services__card-price-btn-price">
                            <span>Starting at</span>
                            <span>&#8377;{card.price}</span>
                          </div>
                          <button>Book Now</button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                  :
                  <motion.div
                    whileInView={{opacity : 1, scale:1 }}
                    transition={{ type: "spring", duration: 2 }}
                    initial={{ opacity : 0, scale: heading[0] === 'popular'? .5 : .5 }}       
                    viewport={{ once: true}}             
                    className="services__card"
                    style={{
                      height: heading[0] === "popular" && "fit-content",
                    }}
                  >
                    <div className="services__card-img-holder">
                      <img src={card.img} alt="" />
                    </div>
                    <div className="services__card-body">
                      <div>
                        <div>{card.name}</div>
                        <div>
                          <FontAwesomeIcon
                            size="xs"
                            color="orange"
                            icon={faStar}
                          />
                          <span>{card.rating}</span>
                        </div>
                      </div>
                      <div className="services__card-body_title">
                        {card.title}
                      </div>
                      {heading[0] !== "popular" && (
                        <div className="services__card-dec">{card.dec}</div>
                      )}

                      {heading[0] === "popular" ? (
                        <div className="services__card-pricebtn">
                          <div>
                            <span>Starting at:</span>
                            <span>&#8377;{card.price}</span>
                          </div>
                          <button>Book Now</button>
                        </div>
                      ) : (
                        <div className="services__card-price-btn">
                          <div className="services__card-price-btn-price">
                            <span>Starting at</span>
                            <span>&#8377;{card.price}</span>
                          </div>
                          <button>Book Now</button>
                        </div>
                      )}
                    </div>
                  </motion.div>                 
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
