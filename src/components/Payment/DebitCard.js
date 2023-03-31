import React, { useState } from "react";


function DebitCard() {
  const [debitCardInfo, setDebitCardInfo] = useState({
    holdername: "",
    expmoth: "",
    expyear: "",
    cvv: "",
  });
  const [debitCardNumber, setDebitCardNumber] = useState("");

  function handleCarddetailOnchange(e) {
    const { name, value } = e.target;
    setDebitCardInfo({
      ...debitCardInfo,
      [name]: value,
    });
  }
  // function debitCardNumberOnchange(e) {
  //   let number = e.target.value;
  //   setDebitCardNumber(number);
  // }
  function debitCardNumberOnchange (event){
    const { value } = event.target;
    const formattedValue = value
      .replace(/\s/g, '') // Remove all spaces
      .replace(/(\d{4})/g, '$1 ') // Add space after every 4 digits
      .trim()
      .substring(0, 19); // Limit input to 16 digits with 3 spaces
      setDebitCardNumber(formattedValue);
  };
  return (
    <div className="card_container">
      <form>
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
        <button>Pay Now</button>
      </form>
    </div>
  );
}

export default DebitCard;
