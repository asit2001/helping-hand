import React, { useState } from "react";
import quotesimg from '../../images/right-quote-sign.png'

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
    const [cuno,setnocurr] = useState([0,1,2,3])
    function handleprev(){
        let newdata = cuno.map((item,idx)=>{
            if(item === 0){
                return TestimonialCards.length-1;
            }
            else{
                return item-1
            }
           })
           setnocurr([
            ...newdata
           ])
    }
    function handlenext(){
       let newdata = cuno.map((item,idx)=>{
        if(item === TestimonialCards.length-1){
            return 0;
        }
        else{
            return item+1
        }
       })
       setnocurr([
        ...newdata
       ])
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
            <button onClick={handleprev}>prev</button>
            <button onClick={handlenext}>next</button>
          <div className="testimonial_container_wrap_card_holder_wrap">
            {TestimonialCards.map((card,idx)=>{
                return <div key={card.name+idx} className={`testimonial_container_wrap_card`} id={'card-'+idx} style={{zIndex:cuno[idx]}}>
                    <div className="testimonial_container_wrap_card_img-holder">
                        <img src={card.img} alt=""/>
                    </div>
                    <div className="testimonial_container_wrap_card_details">
                        <img className="quotes" src={quotesimg} alt="" />
                        <div className="testimonial_container_wrap_card_details_title">{card.name}</div>
                        <div className="testimonial_container_wrap_card_details_dec">{card.des}</div>
                    </div>
                </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
