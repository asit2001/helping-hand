import {
    MdDashboard,
    MdOutlineHistory,
    MdPendingActions,
  } from "react-icons/md";
import { RiSettings3Line, RiShoppingCart2Fill } from "react-icons/ri";
import Logo from "../Logo";
import "./Styles/SideBar.css";
import { Link } from "react-router-dom";
function SideBar({state,setState}:{state:string,setState:Function}) {
  return (
      <div className="dashboard__container__left">
          <div className="container__left__logo">
            <Logo className="logo__image"/>
          </div>
          <ul className="container__left__list">
            <li className={`container__left__list__item ${state==="dashboard" && "active"}`} onClick={()=>{setState("dashboard")}}>
                <Link to={""}  className="list__item__link">
                    <MdDashboard className="list__item__icon" />
                    <span className="list__item__name">Dashboard</span>
                </Link>
            </li>
            <li className={`container__left__list__item ${state==="order" && "active"}`} onClick={()=>{setState("order")}}>
                <Link to={""}  className="list__item__link">
                    <RiShoppingCart2Fill className="list__item__icon" />
                    <span className="list__item__name">Orders</span>
                </Link>
            </li>
            <li className={`container__left__list__item ${state==="history" && "active"}`} onClick={()=>{setState("history")}}>
                <Link to={""}  className="list__item__link">
                    <MdOutlineHistory className="list__item__icon" />
                    <span className="list__item__name">History</span>
                </Link>
            </li>
            <li className={`container__left__list__item ${state==="pending" && "active"}`} onClick={()=>{setState("pending")}}>
                <Link to={""}  className="list__item__link">
                    <MdPendingActions className="list__item__icon" />
                    <span className="list__item__name">Pending</span>
                </Link>
            </li>
            <li className={`container__left__list__item ${state==="setting" && "active"}`} onClick={()=>{setState("setting")}}>
                <Link to={""}  className="list__item__link">
                    <RiSettings3Line className="list__item__icon" />
                    <span className="list__item__name">Setting</span>
                </Link>
            </li>
          </ul>
        </div>
  )
}

export default SideBar