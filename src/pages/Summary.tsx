import './Styles/Summary.css'
import { useState } from 'react';
import { FcMoneyTransfer } from "react-icons/fc";

export default function Summary() {
    const [count_of_products, setcnt] = useState(1)

    return <>
        <div id="bodm">
            <div className='summary'>
                <h1 id="demo" style={{ padding: "20px", borderBottom: '2px solid rgb(225, 225, 225)' , textDecorationLine: "overline"}}>Summary</h1>

                <div id="summary-flex">
                    <div id="sum1">
                        <div id="sum1head" style={{ borderBottom: "3px solid rgb(225, 225, 225)", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "20px", alignItems: "center" }}>
                            <h3>You are saving $20 on this order</h3>
                            <FcMoneyTransfer style={{ color: "green", fontSize: "4rem" }} />
                        </div>

                        <div id="cntr">
                            <p style={{ fontSize: "20px" }}>Service Check Up</p>
                            <div id="cntr-part">
                                <p className='cnt-btn' onClick={() => {
                                    if (count_of_products > 1) setcnt((x) => x - 1)
                                }}>-</p>
                                <p>{count_of_products}</p>
                                <p className='cnt-btn' onClick={() => {
                                    if (count_of_products <= 8) setcnt((x) => x + 1)
                                }}>+</p>
                            </div>
                        </div>

                    </div>

                    {/* PAyment Summary */}
                    <div id='sum2'>
                        <div id="sum2head">
                            <h2 style={{ marginTop: "10px", textAlign: "center", marginBottom: "30px" }}>Product Summary</h2>

                            <div className='Row'>
                                <div id="row1">
                                    <p>Item Total</p>
                                    <p>$299</p>
                                </div>
                                <div id="row1">
                                    <p>Membership Discount</p>
                                    <p style={{color: "red"}}>-$45</p>
                                </div>
                                <div id="row1">
                                    <p>Tax & Fee</p>
                                    <p>$69</p>
                                </div>
                                <div id="row1">
                                    <p>Plus Membership</p>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <p style={{ padding: "0px 5px 0px 0px", textDecorationLine: "line-through" }}>$989</p>
                                        <p style={{ padding: "0px 0px 0px 5px" }}>$299</p>
                                    </div>
                                </div>
                                <div id="row1">
                                    <h3>Total</h3>
                                    <h3>$622</h3>
                                </div>

                                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                    <button id="sum-btn">🎊 You have earned $745 on your bill</button>
                                </div>

                                <section id="stn1">
                                    <h2 style={{fontSize: "22px"}}>Delivery Instructions</h2>
                                    <input type="checkbox" style={{ accentColor: "black", width: "15px", height: "15px", marginRight: "5px" }} />Avoid calling before reaching the location
                                </section>

                                <section id="stn2">
                                    <h3 style={{fontSize: "18px"}}>Coupons & Offers</h3>
                                    <p>View Offers</p>
                                </section>

                                <button id="sub-btn" style={{ cursor: "pointer" }}>Proceed to Confirm</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}