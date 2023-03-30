
import "./Styles/Dashboard.css";
import SideBar from "../components/SideBar/SideBar";
import Orders from "../components/DashBoard/Orders/Orders";
import DashBoardHeader from "../components/Header/DashBoardHeader";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <SideBar/>
        <div className="dashboard__container__right">
           <DashBoardHeader/>   
        <Orders/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
