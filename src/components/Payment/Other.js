import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Other() {
  const navigate = useNavigate()
  const [otherPaymentOption, setOtherPaymentOption] = useState({
    upi: true,
    cash: false,
  });
  const [error,setError] = useState({status:false,msg:''})
  const [isChecked,setIsChecked] = useState(false) 
  const borderStyle = {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  };

  function handleSetError(status,msg){
    setError({
      ...error,
      status:status,
      msg:msg
    })
  }

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
  function handleUpiPay(e){
    e.preventDefault();
    let formdata = new FormData(e.target)
    let upidata = formdata.get('upi')
    if(upidata === ''){
      handleSetError(true,'All Filed are Required')
      return
    }
    else if(upidata.length < 10){
      handleSetError(true,'Please Enter valid Upi Id')
      return
    }

    alert('Payment success')
    navigate('/')

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
            <form onSubmit={handleUpiPay}>                
              <input placeholder="XXXXXXXXXX@Upi" name="upi" onChange={()=>{
                handleSetError(false,'')
              }}/>
              {error.status && <span style={{color:'red'}}>*{error.msg}</span>}
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
              <button type="button" disabled={isChecked?false:true} onClick={(e)=>{
                  e.preventDefault()
                  alert('Thanks for order')
                  navigate('/')
              }}>Proceed</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Other;
