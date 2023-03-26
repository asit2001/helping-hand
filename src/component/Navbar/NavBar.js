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
          <form>
            <input type={"text"} placeholder="Search for services" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {NavMenu.map((menu, idx) => {
            return (
              <div className="nav-links-menu" key={menu.title + idx}>
                {menu.title}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
