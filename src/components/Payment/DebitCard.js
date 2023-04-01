import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function DebitCard() {
  const navigate = useNavigate()
  const [debitCardInfo, setDebitCardInfo] = useState({
    holdername: "",
    expmoth: "",
    expyear: "",
    cvv: "",
  });
  const [debitCardNumber, setDebitCardNumber] = useState("");
  const [error,setError] = useState({status:false,msg:''})

  function handleCarddetailOnchange(e) {
    const { name, value } = e.target;
    setDebitCardInfo({
      ...debitCardInfo,
      [name]: value,
    });
    handleSetError(false,'')
  }
  
  function debitCardNumberOnchange (event){
    handleSetError(false,'')
    const { value } = event.target;
    const formattedValue = value
      .replace(/\s/g, '') // Remove all spaces
      .replace(/(\d{4})/g, '$1 ') // Add space after every 4 digits
      .trim()
      .substring(0, 19); // Limit input to 16 digits with 3 spaces
      setDebitCardNumber(formattedValue);
  };

  function handleSetError(status,msg){
    setError({
      ...error,
      status:status,
      msg:msg
    })
  }

  function handleDebitPay(e){
    e.preventDefault();
    if(debitCardInfo.holdername==='' && debitCardInfo.expyear==='' && debitCardInfo.expmoth==='' && debitCardInfo.cvv === '' && debitCardNumber === ''){
      handleSetError(true,'All Field Are Required')
      return
    }
    else if(debitCardInfo.holdername==='' || debitCardInfo.expyear==='' || debitCardInfo.expmoth==='' || debitCardInfo.cvv === '' || debitCardNumber === ''){
      handleSetError(true,'All Field Are Required')
      return
    }
    else if(debitCardNumber.length < 19){
      handleSetError(true,'Please Enter Valid Card Number')
      return
    }

    alert('Payment success')
    navigate('/')
  }

  return (
    <div className="card_container">
      <form onSubmit={handleDebitPay}>
        <input
          placeholder="Card Holder Name"
          name="holdername"
          value={debitCardInfo.holdername}
          onChange={handleCarddetailOnchange}
        />
        <input
          placeholder="XXXX-XXXX-XXXX-XXXX"
          maxLength={19}
          name="cardnumber"
          value={debitCardNumber}
          onChange={debitCardNumberOnchange}
        />
        <div>
          <input
            placeholder="MM"
            name="expmoth"
            maxLength={2}
            value={debitCardInfo.expmoth}
            onChange={handleCarddetailOnchange}
          />
          <input
            placeholder="YY"
            name="expyear"
            maxLength={2}
            value={debitCardInfo.expyear}
            onChange={handleCarddetailOnchange}
          />
          <input
            type={"password"}
            placeholder="CVV"
            name="cvv"
            maxLength={3}
            value={debitCardInfo.cvv}
            onChange={handleCarddetailOnchange}
          />
        </div>
        {error.status && <span style={{color:'red'}}>*{error.msg}</span>}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default DebitCard;
