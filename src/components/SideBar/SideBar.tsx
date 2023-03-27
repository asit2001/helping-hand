import {
    MdDashboard,
    MdOutlineHistory,
    MdPendingActions,
  } from "react-icons/md";
import { RiSettings3Line, RiShoppingCart2Fill } from "react-icons/ri";
import "./Styles/SideBar.css";
function SideBar() {
  return (
    <div className="dashboard__container__left">
          <div className="container__left__logo">
            <h1>Helping</h1>
          </div>
          <ul className="container__left__list">
            <li className="container__left__list__item">
                <a  className="list__item__link">
                    <MdDashboard className="list__item__icon" />
                    <span className="list__item__name">Dashboard</span>
                </a>
            </li>
            <li className="container__left__list__item active">
                <a  className="list__item__link">
                    <RiShoppingCart2Fill className="list__item__icon" />
                    <span className="list__item__name">Orders</span>
                </a>
            </li>
            <li className="container__left__list__item">
                <a  className="list__item__link">
                    <MdOutlineHistory className="list__item__icon" />
                    <span className="list__item__name">History</span>
                </a>
            </li>
            <li className="container__left__list__item">
                <a  className="list__item__link">
                    <MdPendingActions className="list__item__icon" />
                    <span className="list__item__name">Pending</span>
                </a>
            </li>
            <li className="container__left__list__item">
                <a  className="list__item__link">
                    <RiSettings3Line className="list__item__icon" />
                    <span className="list__item__name">Setting</span>
                </a>
            </li>
          </ul>
        </div>
  )
}

export default SideBar