import Home from './components/Home/Home';
import Dashboard from "./pages/Dashboard";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'
import Services from './pages/Services';
import PaymentPage from './components/Payment/PaymentPage';
import ErrorPage from './pages/ErrorPage';

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
