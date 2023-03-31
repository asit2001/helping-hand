import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion';
import '../../pages/HomeStyles/style/navbar.css'
import { NavLink } from "react-router-dom";


const NavMenu = [
  { icon: "", title: "Blog", link: "" },
  { icon: "", title: "Home", link: "" },
  { icon: "", title: "Help", link: "" },
  { icon: "", title: "Login/Sign Up", link: "/signin" },
];

function NavBar() {
  const [isMobileNavOpen,setIsMobileNavOpen] = useState(false)

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
  return (
    <nav className="com_nav">
      <motion.div 
      animate={{y:0,opacity:1}}
      initial={{y:-30,opacity:0}}
      transition={{duration:2,delay:1.5,type:'spring',bounce:.5}}
      className="nav-wrapper">
        <NavLink className="nav-logo">
           Helping Hand
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
              <NavLink to={menu.link} className="nav-links-menu" key={menu.title + idx}>
                {menu.title}
              </NavLink>
            );
          })}
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
              <NavLink to={menu.link} className="nav-links-menu mob_menu" key={menu.title + idx}>
                {menu.title}
              </NavLink>
            );
          })}
      </motion.div>

    </nav>
  );
}

export default NavBar;
