import React, { useState, useEffect } from "react";
// import slide1 from "../../../images/young-woman-346231_1920.jpg";
// import house from "../../../images/house.png";
import { AnimatePresence, motion } from "framer-motion";
import "../../../pages/HomeStyles/style/slider.css";

const slidesImg = [
  {
    title: "",
    subtitle: "",
    imgurl:
      "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "",
    subtitle: "",
    imgurl:
      "https://images.pexels.com/photos/4569340/pexels-photo-4569340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "",
    subtitle: "",
    imgurl:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  },
  {
    title: "",
    subtitle: "",
    imgurl:
      "https://images.pexels.com/photos/7217957/pexels-photo-7217957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "",
    subtitle: "",
    imgurl:
      "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "",
    subtitle: "",
    imgurl:
      "https://images.pexels.com/photos/5331118/pexels-photo-5331118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function Slider() {
  const [slideIdx, setSlideIdx] = useState(0);

  const variants = {
    initital: {
      x: -500,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 1000,
      opacity: 1,
    },
  };

  useEffect(() => {
    let id = setInterval(() => {
      setSlideIdx((oldidx) => oldidx + 1);
      if (slideIdx === slidesImg.length - 1) {
        setSlideIdx(0);
      }
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, [slideIdx]);

  let img = slidesImg[slideIdx];
  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ overflow: "hidden" }}>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          key={img.imgurl}
          className="slide-filter"
        ></motion.div> */}
        <div className="slide1">
          <AnimatePresence initial={false}>
            <motion.img
              variants={variants}
              animate="animate"
              initial="initital"
              key={img.imgurl}
              style={{filter:'brightness(0.7)'}}
              transition={{ ease: "easeInOut", type: "spring" }}
              // exit='exit'

              src={img.imgurl}
              alt=""
            />
          </AnimatePresence>
        </div>
        <div className="slide-text">
          {/* <div>Hair care solutions</div> */}
          {/* <div>ONE-STOP SOLUTION</div>
          <div>
            FOR YOUR <img src={house} alt="" width={"50px"} />{" "}
            <span>Services</span>
          </div>
          <div>on demand</div> */}
        </div>
      </div>
    </div>
  );
}

export default Slider;
