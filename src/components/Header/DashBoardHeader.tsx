import {RiArrowDownSLine } from "react-icons/ri";
import {IoIosSearch} from 'react-icons/io';
import {HiOutlineAdjustmentsHorizontal as AdjustIcon} from 'react-icons/hi2';
import {CiBellOn} from 'react-icons/ci';

import "./styles/DashBoardHeader.css";

function DashBoardHeader() {
  return (
    <div className="container__right__header">
        <div className="header__searchBox">
            <IoIosSearch className="header__searchBox__icon"/>
            <input type="text" className="header__searchBox__input" placeholder="Search"/>
        </div>
        <div className="header__filter">
            <AdjustIcon className="header__icon"/>
            Advanced search
        </div>
        <div className="header__profile">
            <CiBellOn className="header__icon"/>
            <img className="header__profile__img" src="https://i.pravatar.cc/150?u=ronaldo" alt="user profile" />
            <p className="header__profile__name">Asit Biswas <RiArrowDownSLine/></p>
        </div>
    </div>
  )
}

export default DashBoardHeader