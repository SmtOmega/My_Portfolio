import { NavLink} from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const NavMenu = () => {
  const [showLinks, setShowLinks] = useState(false);

  const showLinkHandler = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="toggle-menu">
        {!showLinks ? (
          <button className="menu-btn" onClick={showLinkHandler}>
            <MdMenu />
          </button>
        ) : (
          <button className="menu-btn" onClick={showLinkHandler}>
            <MdClose />
          </button>
        )}
      </div>
      <div
        className={
          showLinks ? "links-container show-link-container" : "links-container"
        }
      >
        <ul className="links">
          <li>
            <NavLink to="/landing" onClick={showLinkHandler}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={showLinkHandler}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={showLinkHandler}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={showLinkHandler}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
