import Home from './components/Home/Home';
import Dashboard from "./pages/Dashboard";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'
import Services from './pages/Services';
import PaymentPage from './components/Payment/PaymentPage';
import ErrorPage from './pages/ErrorPage';
import UserSingIn from './components/LoginSignup/UserSingIn';
import UserSignUp from './components/LoginSignup/UserSignUp'
import Summary from './pages/Summary';


const router = createBrowserRouter([{
  path:"/",
  element:<Home/>
},{
  path:"/dashboard",
  element:<Dashboard/>
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
  element:<PaymentPage />
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
