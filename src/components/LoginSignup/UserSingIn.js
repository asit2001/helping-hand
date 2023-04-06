import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MypasswordPana from "../Logo/MypasswordPana";
import { login } from "../../firebase";
import { MdOutlineDisabledVisible } from "react-icons/md";
import { forgetPassword } from "../../firebase/index";
import { GiTireIronCross } from "react-icons/gi"
 
function UserSingIn() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ status: false, msg: "", color: "red" });
  const [btnloader, setBtnLoader] = useState(false);
  const [isForngotPassword, setIsForgotPassword] = useState(false);

  function handleSetError(status, msg) {
    setError({
      ...error,
      status: status,
      msg: msg,
      color: "red",
    });
  }

  function logIn(e) {
    e.preventDefault();
    setBtnLoader(true);
    if (loginInfo.email === "" && loginInfo.password === "") {
      handleSetError(true, "All Filed Are Required");
      setBtnLoader(false);
      return;
    } else if (loginInfo.email === "" || loginInfo.password === "") {
      handleSetError(true, "Email And Password Required");
      setBtnLoader(false);
      return;
    }

    login(loginInfo.email, loginInfo.password)
      .then(() => navigate("/"))
      .catch(() => {
        handleSetError(true, "Please Enter Correct Email & Password");
        setBtnLoader(false);
      });
  }

  return (
    <section>
      <div className="register">
        <div className="Signin_BacktoHome" onClick={()=>{navigate('/')}}><GiTireIronCross /></div>
        <div className="col-1">
          <h2>Sign In</h2>
          <span>login and enjoy the service</span>
          <form id="form" className="flex flex-col" onSubmit={logIn}>
            <input
              disabled={isForngotPassword ? true : false}
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, email: e.target.value });
                handleSetError(false, "");
              }}
            />
            <input
              disabled={isForngotPassword ? true : false}
              type="password"
              placeholder="password"
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, password: e.target.value });
                handleSetError(false, "");
              }}
            />
            {error.status && (
              <span
                className="error"
                style={{ color: error.color, fontSize: ".8rem" }}
              >
                *{error.msg}
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                setIsForgotPassword(!isForngotPassword);
              }}
              style={{
                width: "fit-content",
                alignSelf: "end",
                textDecoration: "underline",
                fontSize: ".85rem",
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {!isForngotPassword ? "Forgot Password?" : "Cancel"}
            </button>
            {!isForngotPassword && (
              <button disabled={btnloader ? true : false} className="btn">
                {btnloader && <MdOutlineDisabledVisible color="red" />} Log In
              </button>
            )}
          </form>
          {isForngotPassword && (
            <div className="forgotPassword_container">
              <input
                disabled={btnloader ? true : false}
                type="email"
                placeholder="Enter the Email"
              />
              <button
                disabled={btnloader ? true : false}
                type="button"
                onClick={(e) => {
                  setBtnLoader(true);
                  let fogotval = e.target.previousElementSibling.value;
                  if (fogotval !== "") {
                    forgetPassword(fogotval).then((returndata) => {
                      const { msg, error } = returndata;
                      if (msg) {
                        setError({
                          ...error,
                          status: true,
                          msg: msg,
                          color: "green",
                        });
                        setIsForgotPassword(false);
                      } else if (error) {
                        handleSetError(true, "Invalid Email");
                      }
                      setBtnLoader(false);
                    });
                  } else {
                    handleSetError(true, "Email Required");
                    setBtnLoader(false);
                  }
                }}
              >
                Send to Email
              </button>
            </div>
          )}
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
