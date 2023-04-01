import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MypasswordPana from "../Logo/MypasswordPana";
import { login } from "../../firebase";
import DropDown from "./DropDown";
import {MdOutlineDisabledVisible} from 'react-icons/md'


const optionList = ["user", "serviceprovider"];
function UserSingIn() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [selectDropdown, setSelectDropDown] = useState("user");
  const [error, setError] = useState({ status: false, msg: "" });
  const [btnloader,setBtnLoader] = useState(false)

  function handleSetError(status,msg){
    setError({
      ...error,
      status: status,
      msg: msg
    })
  }


  function logIn(e) {
    e.preventDefault();
    setBtnLoader(true)
    if(loginInfo.email === '' && loginInfo.password === ''){
      handleSetError(true,'All Filed Are Required')
      setBtnLoader(false)
      return;
    }
    else if(loginInfo.email === '' || loginInfo.password === ''){
      handleSetError(true,'Email And Password Required')
      setBtnLoader(false)
      return;
    }

    if (selectDropdown === "user") {
      login(loginInfo.email, loginInfo.password)
        .then((data) => navigate("/", { state: data }))
        .catch((e) =>{
          handleSetError(true,'Please Enter Correct Email & Password')
          setBtnLoader(false)
        });
    } else {
      login(loginInfo.email, loginInfo.password, true)
        .then((data) => navigate("/dashboard", { state: data }))
        .catch((e) =>{
            handleSetError(true,'Please Enter Correct Email & Password')
            setBtnLoader(false)
          }
        );
    }
  }

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>login and enjoy the service</span>
          <form id="form" className="flex flex-col" onSubmit={logIn}>
            <DropDown
              name={selectDropdown}
              changeName={setSelectDropDown}
              droplist={optionList}
            />
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, email: e.target.value });
                handleSetError(false,'')
              }}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, password: e.target.value });
                handleSetError(false,'')
              }}
            />
            {error.status && (
              <span
                className="error"
                style={{ color: "red", fontSize: ".8rem" }}
              >
                *{error.msg}
              </span>
            )}
            <button disabled={btnloader?true:false} className="btn" >{btnloader && <MdOutlineDisabledVisible color="red" />} Log In</button>
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
