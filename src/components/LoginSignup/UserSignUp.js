import React, { useState } from "react";
import SignupAmico from "../Logo/SignupAmico";
import { NavLink, useNavigate } from "react-router-dom";
import { HandleUserSignupError } from "../../Utils/HandleUserSignup";
import {
  ValidSpForm1,
  ValidSpForm2,
  ValidSpAddressform,
} from "../../Utils/HandleSpSignup";
import DropDown from "./DropDown";
import { FaArrowLeft } from "react-icons/fa";
import { registerServerProvider, registerUser } from "../../firebase";


const categories = ["user" , "serviceprovider"];
const catOption = ["Cleaning",
"Electrician",
"Carpenter",
"Plumber",
"Salon",
"Body Care",
"Event Management",
"Home Renovation",
"AC Repair Service",
"Security"];

export default function UserSignUp() {
  const [forms, setforms] = useState({
    form1: true,
    form2: false,
    addressForm: false,
  });
  const [error, setError] = useState({ status: false, msg: "" });
  const [userData, setUserData] = useState({});
  const [spData, setSP] = useState({});
  const navigate = useNavigate();

  
    const [user,serviceprovider] = useState('user')
    const [catagery,setCatagery] = useState('Select catagery')
    // const [selectOption, setSelectOption] = useState(false)

  function handleFormdata(frm) {
    let formData = new FormData(frm);
    let objliteral = {};
    for (const [key, value] of formData.entries()) {
      objliteral[key] = value;
    }
    return objliteral;
  }
  function handleUserSignup(e) {
    e.preventDefault();
    let formdata = handleFormdata(e.target);
    let errorMsg = HandleUserSignupError(formdata);

    if (errorMsg !== null) {
      setError({
        ...error,
        status: true,
        msg: errorMsg,
      });
      return;
    }
    setUserData({
      ...userData,
      ...formdata,
    });
    const {username,email,password} = {...userData,...formdata};
    registerUser(username,email,password).then(e=>navigate("/signin")).catch(e=>setError({status:true,msg:e.message}));
    setError({
      ...error,
      status: false,
    });
  }
  function handleStoreSPData(e, obj) {
    e.preventDefault();
    let formdata = handleFormdata(e.target);
    let error = forms.form1
      ? ValidSpForm1(formdata)
      : forms.form2
      ? ValidSpForm2({...formdata,shopcat:catagery})
      : forms.addressForm
      ? ValidSpAddressform(formdata)
      : null;

    if (error !== null) {
      setError({
        ...error,
        status: true,
        msg: error,
      });
      return;
    }
    setError({
      ...error,
      status: false,
    });
    if (obj) {
      setforms({
        ...forms,
        form1: false,
        form2: false,
        addressForm: false,
        ...obj,
      });
    }

    setSP(pre=>{
      if (!obj) {
        let {username,shopname,pincode,password,mobile,email,country,city,address1,address2} = {...pre,...formdata};
        registerServerProvider(username,email,password,shopname,catagery,mobile,address1,address2,city,pincode,country).then(()=>navigate("/signin"))
        .catch(e=> e=>setError({status:true,msg:e.message}))
      }
      return {...pre,...formdata}
    });
  }
  return (
    <section>
      <div className="register">
        <div className="col-1">
          {(forms.form2 || forms.addressForm ) && <FaArrowLeft onClick={()=>{
            forms.form2?
            setforms({...forms,form1:true,form2:false,addressForm:false}) 
            :
            forms.addressForm? 
            setforms({...forms,form1:false,form2:true,addressForm:false})
            : 
            setforms()

          }} className="iconBack" />}
          <h2>Sign Up</h2>
          <span>register and enjoy the service</span>
          {forms.form1 && (
            <form
              onSubmit={(e) => {
                user === "user"
                  ? handleUserSignup(e)
                  : handleStoreSPData(e, { form2: true });
              }}
              id="form"
              className="flex flex-col"
            >
             
              <DropDown name={user} changeName={serviceprovider} droplist={categories}/>               

              <input type="text" placeholder="Name" name="username"  />
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="password" name="password" />
              <input
                type="password"
                placeholder="confirm password"
                name="confirm_password"
              />
              {error.status && <span className="userError">{error.msg}</span>}
              {user === "user" ? (
                <button className="btn" type="submit">
                  Sign up
                </button>
              ) : user === "serviceprovider" ? (
                <button className="btn" type="submit">
                  Continue
                </button>
              ) : null}
            </form>
          )}

          {forms.form2 && (
            <form
              onSubmit={(e) => handleStoreSPData(e, { addressForm: true })}
              id="form"
              className="flex flex-col"
            >
              <input type="text" placeholder="Shop Title" name="shopname"  />
          
              <DropDown name={catagery} changeName={setCatagery} droplist={catOption} />

              <input placeholder="Enter Mobile Number" name="mobile"   pattern="[0-9]+" required/>
              {error.status && <span className="userError">{error.msg}</span>}
              <button className="btn" type="submit">
                Continue
              </button>
            </form>
          )}

          {forms.addressForm && (
            <form
              onSubmit={(e) => handleStoreSPData(e)}
              id="form"
              className="flex flex-col"
            >
              <input placeholder="Address Line 1" name="address1" />
              <input placeholder="Address Line 2" name="address2" />
              <input placeholder="City" name="city"  />
              <input placeholder="pin code" name="pincode" pattern="[0-9]+" required  />
              <input placeholder="country" name="country" pattern="[A-Za-z]+" required />
              {error.status && <span className="userError">{error.msg}</span>}
              <button className="btn" type="submit">
                Sign up
              </button>
            </form>
          )}
          <NavLink to={"/signin"}>Existing User? Login</NavLink>
        </div>
        <div className="col-2">
          <SignupAmico />
        </div>
      </div>
    </section>
  );
}