import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";


function Other() {
  const [otherPaymentOption, setOtherPaymentOption] = useState({
    upi: true,
    cash: false,
  });
  const [isChecked,setIsChecked] = useState(false) 
  const borderStyle = {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  };

  function handleOpenPaymentOption(e){
      const {id} = e.currentTarget;
    if(id === 'cashico'){
        setOtherPaymentOption({
            ...otherPaymentOption,
            upi: false,
            cash: true,
        })
    }
    else if(id === 'upiico'){
        setOtherPaymentOption({
            ...otherPaymentOption,
            upi: true,
            cash: false,
        })
    }
  }
  function handlecheckCashoption(e){
    setIsChecked(e.target.checked)
  }
  return (
    <div className="otherpayment">
      <div className="otherpayment_option">
        <div className="otherpayment_option_upi">
          <div style={otherPaymentOption.upi ? { ...borderStyle } : {}}>
            UPI{" "}
            {otherPaymentOption.cash && (
                <button className="slideicon" id="upiico" onClick={handleOpenPaymentOption} >
                    <FaPlus size={20} />
                </button>
            )}
          </div>
          {!otherPaymentOption.cash && (
            <form>                
              <input placeholder="XXXXXXXXXX@Upi" />
              <button>Pay</button>
            </form>
          )}
        </div>
        <div className="otherpayment_option_cash">
          <div
            className="otherpayment_option_cash_name"
            style={
              otherPaymentOption.cash
                ? { ...borderStyle }
                : { borderRadius: "10px" }
            }
          >
            Cash{" "}
            {!otherPaymentOption.cash && (
                <button className="slideicon" id="cashico" onClick={handleOpenPaymentOption} >
                    <FaPlus size={20}  />
                </button>
            )}
          </div>
          {!otherPaymentOption.upi && (
            <form>
              <div>
                <label>Cash Payment</label>
                <input type="checkbox" onChange={handlecheckCashoption}/>
              </div>
              <button type="button" disabled={isChecked?false:true}>Proceed</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Other;
