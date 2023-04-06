import Home from './components/Home/Home';
import Dashboard from "./pages/Dashboard";
import {createBrowserRouter,redirect,RouterProvider,defer} from 'react-router-dom'
import './pages/HomeStyles/style/Homemediaquery.css'
import './App.css'
import Services from './pages/Services';
import PaymentPage from './components/Payment/PaymentPage';
import ErrorPage from './pages/ErrorPage';
import UserSingIn from './components/LoginSignup/UserSingIn';
import UserSignUp from './components/LoginSignup/UserSignUp'
import Summary from './pages/Summary';
import {auth, isProvider } from './firebase';
async function isLoggedIn() {
  const res = await new Promise<boolean>((resolve)=>{
    auth.onIdTokenChanged(user=>{
      if (user) {
        resolve(true)
      }else{
        resolve(false);
      }
    },()=>resolve(false));
  });
  return res;
}
async function checkIsProvider(){
  const provider = await isProvider();  
  return defer({provider})

}
const router = createBrowserRouter([{
  path:"/",
  element:<Home/>
},{
  path:"/dashboard",
  element:<Dashboard/>,
  loader:checkIsProvider
},
{
  path:"/services/:id",
  element:<Services/>
},
{
  path:"/signin",
  element:<div className="login"><UserSingIn/></div>,
  loader:(async()=> {
    const login = await isLoggedIn();
    if (!login) {
      return null;
    }
    return redirect("/");
  })
},
{
  path:"/signup",
  element:<div className="login"><UserSignUp/></div>,
  loader:(async()=> {
    const login = await isLoggedIn();
    if (!login) {
      return null;
    }
    return redirect("/");
  })
},
{
path:"/summary",
element:<Summary/>
},
{
  path:"/services/payment",
  element:<PaymentPage />,
  loader:(async()=> {
    const login = await isLoggedIn();
    if (login) {
      return null;
    }
    return redirect("/signin");
  })
},
{
  path:"*",
  element:<ErrorPage/>
},
],)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
