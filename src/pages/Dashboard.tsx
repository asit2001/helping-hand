import { useState } from "react";
import "./Styles/Dashboard.css";
import SideBar from "../components/SideBar/SideBar";
import Orders from "../components/DashBoard/Orders/Orders";
import DashBoardHeader from "../components/Header/DashBoardHeader";
import UserDetails from "../components/DashBoard/UserDetails/UserDetails";
function Dashboard() {
  const [state,setState] = useState("dashboard");
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <SideBar state={state} setState={setState}/>
        <div className="dashboard__container__right">
           <DashBoardHeader/>   
            {state === "dashboard" && <UserDetails/>}
            {state === "order" && <Orders/>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
