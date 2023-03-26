import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion';

const NavMenu = [
  { icon: "", title: "Blog", link: "" },
  { icon: "", title: "Home", link: "" },
  { icon: "", title: "Help", link: "" },
  { icon: "", title: "Login/Sign Up", link: "" },
];

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-logo">Helper Hander</div>
        <div className="nav-links">
          <motion.form initial={{y:-40,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:'spring'}}>
            <input type={"text"} placeholder="Search for services" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </motion.form>

          {NavMenu.map((menu, idx) => {
            return (
              <motion.div className="nav-links-menu" key={menu.title + idx} initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.5,type:'spring',delay:idx}}>
                {menu.title}
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
