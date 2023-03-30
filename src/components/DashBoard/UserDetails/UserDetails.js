import "./Styles/UserDetails.css";

import {FaMapMarkerAlt,FaStar} from "react-icons/fa"
import { DollarBag, RightArrow } from "../../Logo";
export default function UserDetails() {
  return (
      <div className="mainDiv">
        <div className="div1">
          <div className="user-profile-sec">
            <div className="profile-body">
              <div className="photo">
                <img
                  src="https://i.imgur.com/KdopE7I.png"
                  className="image--cover"
                />
              </div>
              <div className="profile">
                <div id="rating-stars" align="center">
                  <div className="stars">
                    <label
                      aria-label="first-star"
                      className="star-label"
                      htmlFor="rate-1"
                    >
                      <FaStar className="rate-icon star-icon"/>
                    </label>
                    <input
                      className="rate-input"
                      name="rating"
                      id="rate-1"
                      value="1"
                      type="radio"
                    />
                    <label
                      aria-label="second-star"
                      className="star-label"
                      htmlFor="rate-2"
                    >
                      <FaStar className="rate-icon star-icon"/>
                    </label>
                    <input
                      className="rate-input"
                      name="rating"
                      id="rate-2"
                      value="2"
                      type="radio"
                    />
                    <label
                      aria-label="third-star"
                      className="star-label"
                      htmlFor="rate-3"
                    >
                      <FaStar className="rate-icon star-icon"/>
                    </label>
                    <input
                      className="rate-input"
                      name="rating"
                      id="rate-3"
                      value="3"
                      type="radio"
                    />
                    <label
                      aria-label="fourth-star"
                      className="star-label"
                      htmlFor="rate-4"
                    >
                      <FaStar className="rate-icon star-icon"/>
                    </label>
                    <input
                      className="rate-input"
                      name="rating"
                      id="rate-4"
                      value="4"
                      type="radio"
                    />
                    <label
                      aria-label="fifth-star"
                      className="star-label"
                      htmlFor="rate-5"
                    >
                      <FaStar className="rate-icon star-icon"/>
                    </label>
                    <input
                      className="rate-input"
                      name="rating"
                      id="rate-5"
                      value="5"
                      type="radio"
                    />
                  </div>
                </div>

                <h1 className="username">Raju Rastogi</h1>
                <h2 className="profession"> Electrician </h2>
                <h3 className="locationname">
                  <FaMapMarkerAlt/> Bengaluru, India{" "}
                </h3>
                <p className="descricao">
                  Driven and independent electrician with 10 years of experience
                  providing high-quality residential diagnosis, installations
                  and repairs. I am committed to project quality, customer
                  satisfaction, and work according to customer needs.
                </p>
                <p className="profession">
                  &#x260E; +91 88888-88888<strong></strong>
                </p>
              </div>
            </div>
           
          </div>
        </div>
        <div className="div2">
          <div className="credit-card-el">
            <p>
              <span className="bal">Lifetime Earnings</span>
            </p>
            <div className="credit-card-el-amount">
            <DollarBag/>
            <h3 className="amount">₹87,500</h3>
            </div>

            <div className="cardNumber">
              ID : 0007
             
            </div>
          </div>
          <h1 className="bal-latest">Latest Earnings <hr /></h1>
          
          <div className="parent">
            <div className="div1">
             <RightArrow/>
            </div>
            <div className="div2">Rahul Mohan</div>
            <div className="div3">
              <strong className="plus-symbol">+</strong> ₹3500{" "}
            </div>
            <div className="div4">
              <RightArrow/>
            </div>
            <div className="div5">Urvashi Shringla</div>
            <div className="div6">
              {" "}
              <strong className="plus-symbol">+</strong> ₹1500{" "}
            </div>
            <div className="div7">
              {" "}
              <RightArrow/>
            </div>
            <div className="div8">Hardik Khandelwal</div>
            <div className="div9">
              <strong className="plus-symbol">+</strong> ₹5500{" "}
            </div>
          </div>
        </div>
      </div>

  );
}
