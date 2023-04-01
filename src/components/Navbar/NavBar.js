import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion';
import '../../pages/HomeStyles/style/navbar.css'
import { NavLink, json, useNavigate } from "react-router-dom";
import navlogo from '../../images/NavLogo.jpeg'
import {IoMdArrowDropdown} from 'react-icons/io'




const NavMenu = [
  { icon: "", title: "Home", link: "" },
  { icon: "", title: "Help", link: "" },
  { icon: "", title: "Login/Sign Up", link: "/signin" },
];

function NavBar() {
  const [isMobileNavOpen,setIsMobileNavOpen] = useState(false)
  const [isOpenProfile,setIsOpenProfile] = useState(false)
  const [isLogin,setIsLogin] = useState({status:false})

  const navigate = useNavigate()
  const mobNavVariante = {
    isOpen :{
      opacity : 1,
      height:'unset'
    },
    isClose:{
      height: 0,
      opacity : 0,
    }
  }
  function handlelogout(){
    if(localStorage.getItem('user') && localStorage.getItem('auth')){
      localStorage.removeItem('user')
      localStorage.removeItem('auth')
      setIsLogin({
        status:false
      })
    }
  }
  
  useEffect(()=>{
    console.log('working')
    if(localStorage.getItem('user') && localStorage.getItem('auth')){
      let userdata = JSON.parse(localStorage.getItem('user'))
      if(userdata?.shopeTitle){
        setIsLogin({
          ...isLogin,
          status:false          
        })
      }
      else{
          setIsLogin({
            ...isLogin,
            status:true,
            ...userdata
          })
      }
    }
  },[isLogin.status])

  return (
    <nav className="com_nav">
      <motion.div 
      animate={{y:0,opacity:1}}
      initial={{y:-30,opacity:0}}
      transition={{duration:2,delay:1.5,type:'spring',bounce:.5}}
      className="nav-wrapper">
        <NavLink className="nav-logo">
           {/* Helping Hand */}
           <img src={navlogo} alt="" width={130}/>
        </NavLink>
        <div className="nav-links">
          <form>
            <input type={"text"} placeholder="Search for services" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {NavMenu.map((menu, idx) => {
            return (
              isLogin.status?
                menu.title !== 'Login/Sign Up' &&
              <NavLink to={menu.link} className="nav-links-menu" key={menu.title + idx}>
                {menu.title}
              </NavLink>
              :  
              <NavLink to={menu.link} className="nav-links-menu" key={menu.title + idx}>
                {menu.title}
              </NavLink>
            );
          })}
          {isLogin.status && <div className="nav_userLogin">
            <div onClick={()=>{setIsOpenProfile(!isOpenProfile)}} className="nav_userLogin_details">
              <div className="nav_userImg">{isLogin?.name.charAt(0)}</div>
              <div className="nav_userName">{isLogin?.name}<IoMdArrowDropdown /></div>
            </div>
            {isOpenProfile && <div className="nav_userLogin_option">
              <ul>
                <li>Your Profile</li>
                {isLogin?.shopeTitle && <li onClick={()=>{navigate('/dashboard')}}>DashBoard</li>}
                <li onClick={handlelogout}>Logout</li>
              </ul>
            </div>}
          </div>}
        </div>
        <FontAwesomeIcon className="nav-mob-bar" onClick={()=>{setIsMobileNavOpen(!isMobileNavOpen)}} size="lg" icon={faBars} />
      </motion.div>
     
      <motion.div
        variants={mobNavVariante}
        animate={isMobileNavOpen?'isOpen':'isClose'}
        initial='isClose'
        transition={{type:'spring',stiffness:50}}
        
       
       className="mobile-nav">
      <form>
          <input type={"text"} placeholder="Search for services" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {NavMenu.map((menu, idx) => {
            return (
              isLogin.status?
                menu.title !== 'Login/Sign Up' &&
              <NavLink to={menu.link} className="nav-links-menu mob_menu" key={menu.title + idx}>
                {menu.title}
              </NavLink>
              :  
              <NavLink to={menu.link} className="nav-links-menu mob_menu" key={menu.title + idx}>
                {menu.title}
              </NavLink>
            );
          })}
          {isLogin.status && <div className="nav_userLogin">
            <div onClick={()=>{setIsOpenProfile(!isOpenProfile)}} className="nav_userLogin_details">
              <div className="nav_userImg">{isLogin?.name.charAt(0)}</div>
              <div className="nav_userName">{isLogin?.name}<IoMdArrowDropdown /></div>
            </div>
            {isOpenProfile && <div className="nav_userLogin_option">
              <ul>
                <li>Your Profile</li>
                {isLogin?.shopeTitle && <li onClick={()=>{navigate('/dashboard')}}>DashBoard</li>}
                <li onClick={handlelogout}>Logout</li>
              </ul>
            </div>}
          </div>}
      </motion.div>

    </nav>
  );
}

export default NavBar;
