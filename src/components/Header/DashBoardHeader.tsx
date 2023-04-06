import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal as AdjustIcon } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";

import "./styles/DashBoardHeader.css";
import { Link } from "react-router-dom";
import { auth, logOut } from "../../firebase";
import { useState } from "react";

function DashBoardHeader() {
  const [name,setName] = useState("");
  auth.onAuthStateChanged((user)=>{
    if (user && user.displayName) {
      setName(user.displayName)
    }
  })
  return (
    <div className="container__right__header">
      <div className="header__searchBox">
        <IoIosSearch className="header__searchBox__icon" />
        <input
          type="text"
          className="header__searchBox__input"
          placeholder="Search"
        />
      </div>
      <div className="header__filter">
        <AdjustIcon className="header__icon" />
        <p className="header__filter__text">Advanced search</p>
      </div>
      <div className="header__profile">
        <CiBellOn className="header__icon" />
        <img
          className="header__profile__img"
          src={`https://i.pravatar.cc/150?u=${name}`}
          alt="user profile"
        />
        <div className="dropdown">
        <p className="header_profile_name">{name} <RiArrowDownSLine className="dropdown"/></p>

          <div className="dropdown-content">
            <Link to="/" onClick={logOut}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
