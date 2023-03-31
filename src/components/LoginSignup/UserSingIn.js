import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MypasswordPana from "../Logo/MypasswordPana";
import {login} from '../../firebase'
import DropDown from "./DropDown";

const optionList =  ['user','serviceprovider']
function UserSingIn() {
  const navigate = useNavigate();
  const [loginInfo,setLoginInfo] = useState({
    email:"",
    password:""
  });
  const [selectDropdown,setSelectDropDown] = useState('user');
  const [error,setError] = useState();
  function logIn(e){
    e.preventDefault();
    if (selectDropdown==="user") {
      login(loginInfo.email,loginInfo.password).then((data)=>navigate("/",{state:data})).catch(e=>setError(e.message));
    }else{
      login(loginInfo.email,loginInfo.password,true).then(data=>navigate("/dashboard",{state:data})).catch(e=>setError(e.message));
    }
  }
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>login and enjoy the service</span>
          <form
            id="form"
            className="flex flex-col" 
            onSubmit={logIn}    
          >
           
            <DropDown name={selectDropdown} changeName={setSelectDropDown} droplist={optionList} />
            <input
              type="email"             
              placeholder="Email Address"
              onChange={e=>{setLoginInfo({...loginInfo,email:e.target.value})}}
            />
            <input
              type="password"
              placeholder="password"
              onChange={e=>{setLoginInfo({...loginInfo,password:e.target.value})}}
            />
            <button className="btn">
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
