import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MypasswordPana from "../Logo/MypasswordPana";
import DropDown from "./DropDown";

const optionList =  ['user','serviceprovider']
function UserSingIn() {
  const [selectDropdown,setSelectDropDown] = useState('user')
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>login and enjoy the service</span>
          <form
            id="form"
            className="flex flex-col"     
          >
           
            <DropDown name={selectDropdown} changeName={setSelectDropDown} droplist={optionList} />
            <input
              type="text"             
              placeholder="username"
            />
            <input
              type="password"
              placeholder="password"
            />
            <button className="btn" type="button">
              Log In
            </button>
          </form>
          <NavLink to={"/signup"}>New to Helping hand? Signup</NavLink>
        </div>
        <div className="col-3">
          <MypasswordPana />
        </div>
      </div>
    </section>
  );
}

export default UserSingIn;
