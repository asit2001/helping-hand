import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
import React, { useRef } from "react";
import quotesimg2 from "../../images/icons8-get-quote-50.png";
import whiteteture from '../../images/white-paper-texture.jpg'
import '../../pages/HomeStyles/style/testimonial.css'


const TestimonialCards = [
  {
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Mark",
    des: "It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.",
  },
  {
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80",
    name: "Jony",
    des: "It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    name: "Addam",
    des: "It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Eva",
    des: "It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.",
  },
];

function Testimonial() {
  const ref = useRef();
  function handleprev() {
    // let clientwidth = ref.current.clientWidth;
    let itemDivWidth = ref.current.children[0].clientWidth
    ref.current.scrollLeft = ref.current.scrollLeft - itemDivWidth;
    // console.log(ref.current.scrollWidth)
  }
  function handlenext() {
    // let clientwidth = ref.current.clientWidth;
    // console.log(ref.current.children[0].clientWidth)
    let itemDivWidth = ref.current.children[0].clientWidth
    ref.current.scrollLeft = ref.current.scrollLeft + itemDivWidth;
  }
  return (
    <div className="testimonial_container">
   
      <div className="testimonial_container_wrap">
        <div className="testimonial_container_wrap_head">
          <div className="testimonial_container_wrap_title">Testimonial</div>
          <div className="testimonial_container_wrap_sub-title">
            What Clients Say
          </div>
        </div>
        <div className="testimonial_container_wrap_card_holder">
          <div
            onClick={handleprev}
            className="testimonial_card_arrow testimonial_card_arrow_left"
          >
            <FaAngleLeft
              className="testimonial_card_arrow_left_ico"
              
            />
          </div>
          <div
            onClick={handlenext}
            
            className="testimonial_card_arrow testimonial_card_arrow_right"
          >
            <FaAngleRight className="testimonial_card_arrow_right_ico"/>
          </div>
          <div
            ref={ref}
            className="testimonial_container_wrap_card_holder_wrap"
          >
            {TestimonialCards.map((card, idx) => {
              return (
                <div
                  key={card.name + idx}
                  className={`testimonial_container_wrap_card`}
                  id={"card-" + idx}
                >
                  <div className="testimonial_container_wrap_card_img-holder">
                    <img src={card.img} alt="" />
                  </div>
                  <div className="testimonial_container_wrap_card_details">
                  <img className='testmonialsvg' src={whiteteture} alt=''/>
                    <img className="quotes" src={quotesimg2} alt="" />
                    <div className="testimonial_container_wrap_card_details_title">
                      {card.name}
                    </div>
                    <div className="testimonial_container_wrap_card_details_dec">
                      {card.des}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
