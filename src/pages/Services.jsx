import React, { useState, useEffect } from 'react';
import './Styles/Services.css';
import Topbar from './Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import getAllData from './firebase';
import { Providercards } from './Providercards';
import { BsBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";

export default function Services() {
    const [nav, setnav] = useState(false);

    // change part
    const [Arr, setlist] = useState([]);
    const [data, setdata] = useState({});

    useEffect(() => {
        if (Arr.length > 0) {
            setdata({ ...Arr[1].data[0] })
        }
    }, [Arr])


    useEffect(() => {
        getAllData(setlist)
    }, []);

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
            setnav(true)
        }
        else {
            setnav(false)
        }
    }

    return (
        <>
            {nav ? <Topbar /> : ""}
            <div id="parent">
                <header id="headvan">
                    <div id="top">
                        <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>{data.serviceName}</h1>
                        <div style={{ fontSize: "1rem", marginBottom: "5px" }}><h5 style={{ marginTop: "0" }}>{data.rating} ({data.bookingNumber} booking)</h5></div>
                        <p id="bar1" style={{ fontSize: "1rem", marginBottom: "5px" }}>Professional Service Guide</p>
                    </div>
                    <img id="headimg" src={data.imgUrl === "" ? "https://ithemes.com/wp-content/uploads/2022/08/Services-Pages.png" : data.imgUrl} />
                </header>

                <div id="bar2">
                    <div id="box">
                        <img src={Object.keys(data).length === 0 ? "https://ithemes.com/wp-content/uploads/2022/08/Services-Pages.png" : data.productImages[0].imgUrl !== "" ? data.productImages[0].imgUrl : "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1642525912071-bdb3c7.png"} />
                        <h5>Super saver Deal</h5>
                    </div>
                    <div id="box">
                        <img src={Object.keys(data).length === 0 ? "https://ithemes.com/wp-content/uploads/2022/08/Services-Pages.png" : data.productImages[1].imgUrl !== "" ? data.productImages[1].imgUrl : "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1636471573202-d913f3.jpeg"} />
                        <h5>Quick Installation</h5>
                    </div>
                    <div id="box">
                        <img src={Object.keys(data).length === 0 ? "https://ithemes.com/wp-content/uploads/2022/08/Services-Pages.png" : data.productImages[2].imgUrl !== "" ? data.productImages[2].imgUrl : "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1627621049998-083197.png"} />
                        <h5>Super saver Pack</h5>
                    </div>
                    <div id="box">
                        <img src={Object.keys(data).length === 0 ? "https://ithemes.com/wp-content/uploads/2022/08/Services-Pages.png" : data.productImages[3].imgUrl !== "" ? data.productImages[3].imgUrl : "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239725633-779eb5.png"} />
                        <h5>Quality Products</h5>
                    </div>
                </div>

                <div id="discount">
                    <div id="box2">
                        <h3><BsFillBookmarkPlusFill style={{ color: "deeppink", fontSize: "25px" }} />  Save 15% on every order</h3>
                        <p>Get Premium now</p>
                    </div>
                    <div id="box2">
                        <h3><BsBookmarkCheckFill style={{ color: "deeppink", fontSize: "25px" }} />   15% off on HDFC cards</h3>
                        <p>25% off on Online Payment</p>
                    </div>
                    <div id="box2">
                        <h3><BsBookmarkCheckFill style={{ color: "tomato", fontSize: "25px" }} />  Razorpay | ZIP</h3>
                        <p>Assured Cashback</p>
                    </div>
                    <div id="box2">
                        <h3><BsBookmarkCheckFill style={{ color: "tomato", fontSize: "25px" }} />  CRED payment</h3>
                        <p>Instant Cashback</p>
                    </div>

                    <div id="box2">
                        <h3><BsBookmarkCheckFill style={{ color: "deeppink", fontSize: "25px" }} />  Get min order Fee off</h3>
                        <p>on orders above $10</p>
                    </div>

                    <div id="box2">
                        <h3><BsBookmarkCheckFill style={{ color: "tomato", fontSize: "25px" }} />  Fast access to services</h3>
                        <p>After booking</p>
                    </div>
                </div>


                <h1 style={{ margin: "20px" }}>Our service Providers</h1>
                <div className='cards'>
                    {data.services === undefined ? "" : data.services.map((e) => <Providercards obt={e} />)}
                </div>
            </div>
        </>
    )
}