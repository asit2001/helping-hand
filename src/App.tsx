import Home from './components/Home/Home';
import Dashboard from "./pages/Dashboard";
import {createBrowserRouter,redirect,RouterProvider} from 'react-router-dom'
import './pages/HomeStyles/style/Homemediaquery.css'
import './App.css'
import Services from './pages/Services';
import PaymentPage from './components/Payment/PaymentPage';
import ErrorPage from './pages/ErrorPage';
import UserSingIn from './components/LoginSignup/UserSingIn';
import UserSignUp from './components/LoginSignup/UserSignUp'
import Summary from './pages/Summary';
function checkLogin(){
  if (localStorage.getItem("user") == null) {
  return redirect("/signin");
  }
  return null;
}

const router = createBrowserRouter([{
  path:"/",
  element:<Home/>
},{
  path:"/dashboard",
  element:<Dashboard/>,
  loader:checkLogin
},
{
  path:"/services/:id",
  element:<Services/>
},
{
  path:"/signin",
  element:<div className="login"><UserSingIn/></div>
},
{
  path:"/signup",
  element:<div className="login"><UserSignUp/></div>
},
{
path:"/summary",
element:<Summary/>
},
{
  path:"/services/payment",
  element:<PaymentPage />,
  loader:checkLogin
},
{
  path:"*",
  element:<ErrorPage/>
},
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
