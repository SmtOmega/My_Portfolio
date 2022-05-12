import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import logo from "../assets/images/logo.svg";
import { links } from "../util/links";
import { NavLink } from "react-router-dom";

const SmallSideBar = () => {
  const { showSidebar, toggleSideBar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" type="button" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <img src={logo} alt="logo" />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { id, text, icon, path } = link;
              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={toggleSideBar}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  .show-sidebar {
    opacity: 1;
    z-index: 99;
  }
  .content {
    position: relative;
    background: black;
    width: 90vw;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem 2rem;
    border-radius: 4px;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border: transparent;
    color: red;
    font-size: 2rem;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: white;
    padding: 1rem 0;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
  }
  .nav-link:hover {
    color: aqua;
  }
  .nav-link:hover .icon {
    color: #ff7300;
  }
  .icon {
    font-size: 2rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: all 0.3s ease-in-out;
  }
  .active {
    border-bottom: none;
    color: #ff7300;
  }
  .active .icon {
    color: aqua;
  }
`;
export default SmallSideBar;
