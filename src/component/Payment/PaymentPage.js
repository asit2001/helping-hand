import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../payment.css";
import DebitCard from "./DebitCard";
import cardImg from '../../images/cardimg.png'
import upiimg from '../../images/QR Code-amico.png'
import Upi from "./Upi";
import Cash from "./Cash";

const paymentoption = ['Debit Card','UPI','Cash']

function PaymentPage() {
    const [selectPayament,setSelectPayment] = useState('Debit Card')
    const [selectOption, setSelectOption] = useState(false)
  return (
    <div className="paymentPage">
      <div className="payment-holder">
        <div className="paymentPage_head"> {"<---"} Payment Method</div>
        <div className="order">
          <div>Services Name</div>
          <div>&#8377;450</div>
        </div>
        <div className="playmentCard">
          <div className="playmentCard-holder">
            {selectPayament === 'Debit Card' && <img className="cardimg" src={cardImg} alt=''/>}
            {selectPayament === 'UPI' && <img className="cardimg" src={upiimg} alt=''/>}
            <div className="playmentCard-left">
            </div>
            <div className="playmentCard-right">
                <div className="Select_Payment_Option">
                    Select Payment Option
                    <div className="payemntSelect_holder" onMouseEnter={()=>{
                        setSelectOption(!selectOption)
                    }} onMouseLeave={()=>{setSelectOption(!selectOption)}}>
                        <div className="payemntSelect">{selectPayament}  <FontAwesomeIcon style={{transform:selectOption?'rotate(180deg)':'rotate(0)'}} icon={faCaretDown} /> </div>
                        {selectOption && <div className="payemntOption">
                            {paymentoption.map((option,idx)=>{
                                return <div key={option+idx} onClick={(e)=>{
                                    setSelectPayment(option)
                                    setSelectOption(false)            
                                }} className="option">{option}</div>
                            })}
                        </div>}
                    </div>
                </div>
                {selectPayament === 'Debit Card' && <DebitCard />}
                {selectPayament === 'UPI' && <Upi />}
                {selectPayament === 'Cash' && <Cash />}
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
