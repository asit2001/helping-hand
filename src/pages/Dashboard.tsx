import { Suspense, useState } from "react";
import "./Styles/Dashboard.css";
import SideBar from "../components/SideBar/SideBar";
import Orders from "../components/DashBoard/Orders/Orders";
import DashBoardHeader from "../components/Header/DashBoardHeader";
import UserDetails from "../components/DashBoard/UserDetails/UserDetails";
import { Await, Navigate, useLoaderData } from "react-router-dom";
function Dashboard() {
  const [state, setState] = useState("dashboard");
  const { provider } = useLoaderData() as { provider: boolean };
  return (
    <Suspense fallback={<Navigate to={"/"} />}>
      <Await resolve={provider}>
        {
          provider?<div className="dashboard">
          <div className="dashboard__container">
            <SideBar state={state} setState={setState} />
            <div className="dashboard__container__right">
              <DashBoardHeader />
              {state === "dashboard" && <UserDetails />}
              {state === "order" && <Orders />}
            </div>
          </div>
        </div>:<Navigate to={"/"} />
        }
      </Await>
    </Suspense>
  );
}

export default Dashboard;
