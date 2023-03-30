import Home from './component/Home/Home';
import Dashboard from "./pages/Dashboard";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'
import Services from './pages/Services';

const router = createBrowserRouter([{
  path:"/",
  element:<Home/>
},{
  path:"/dashboard",
  element:<Dashboard/>
},{
  path:"/services/:id",
  element:<Services/>
}
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
