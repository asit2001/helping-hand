import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";
import "../../style/payment.css";
import DebitCard from "./DebitCard";
import cardImg from "../../images/cardimg.png";
import upiimg from "../../images/QR Code-amico.png";
import circle2 from "../../images/circle2.png";
import circle1 from "../../images/circle1.png";
import {FaAngleLeft} from 'react-icons/fa'

import { motion } from "framer-motion";
import Other from "./Other";

const paymentoption = ["Debit Card", "Other"];

function PaymentPage() {
  const [selectPayament, setSelectPayment] = useState("Debit Card");
  const [selectOption, setSelectOption] = useState(false);
  return (
    <div className="paymentPage">
      <div className="payment-holder">
        <div className="paymentPage_head"> <FaAngleLeft /> Payment Method</div>
        <div className="order">
          <div>Services Name</div>
          <div>&#8377;450</div>
        </div>
        <div className="playmentCard">
          <img
            className="playmentCard_backgound_circile2"
            src={circle2}
            alt=""
          />
          <img
            className="playmentCard_backgound_circile1"
            src={circle1}
            alt=""
          />
          <div className="playmentCard-holder">
            {selectPayament === "Debit Card" && (
              <motion.img
                animate={{ opacity: 1, x: 0 }}
                initial={{ x: -200, opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                  bounce: 0.5,
                }}
                className="cardimg"
                src={cardImg}
                alt=""
              />
            )}
            {selectPayament === "Other" && (
              <motion.img
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0, opacity: 0 }}
                transition={{ duration: 1.5, type: "spring" }}
                className="cardimg cardimg2"
                src={upiimg}
                alt=""
              />
            )}
            <motion.div
              animate={{ height: "100%" }}
              initial={{ height: 0 }}
              transition={{ duration: 1 }}
              className="playmentCard-left"
            ></motion.div>
            <div className="playmentCard-right">
              <div className="Select_Payment_Option">
                Select Payment Option
                <div
                  className="payemntSelect_holder"
                  onClick={() => setSelectOption(!selectOption)}
                >
                  <div className="payemntSelect">
                    {selectPayament}{" "}
                    <FaCaretDown
                      style={{
                        transform: selectOption
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                  </div>
                  {selectOption && (
                    <div className="payemntOption">
                      {paymentoption.map((option, idx) => {
                        return (
                          <div
                            key={option + idx}
                            onClick={(e) => {
                              setSelectPayment(option);
                              setSelectOption(false);
                            }}
                            className="option"
                          >
                            {option}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {selectPayament === "Debit Card" && <DebitCard />}
              {selectPayament === "Other" && <Other />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
