import { useState } from "react";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { useAppContext } from "../context/appContext";

const NavBar = () => {
  const { user, toggleSideBar, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <div>
            <img src={logo} alt="logo" className="logo" />
            <h3 className="logo-text">Portfolio Dashboard</h3>
          </div>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user && user.firstName}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button className="dropdown-btn" onClick={logoutUser}>logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: black;
  .logo{
      display: flex;
      align-items: center;
      width: 100px;
  }
  .nav-center {
      display: flex;
      width: 90vw;
      align-items: center;
      justify-content: space-between;
  }
  .logo-text{
      display: none;
      margin: 0;
  }
  .toggle-btn {
      background: transparent;
      border: transparent;
      font-size: 1.75rem;
      color: #ff7300;
      cursor: pointer;
      display: flex;
      align-items: center;
  }
  .btn-container {
      position: relative;
  }
  .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      gap: 0 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .dropdown {
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background: #ff3700;
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: 4px;
  }
  .show-dropdown {
      visibility: visible;
  }
  .dropdown-btn {
      background: transparent;
      border: transparent;
      color: #fff;
      cursor: pointer;
      text-transform: capitalize;
      letter-spacing: 1px;
  }
  @media (min-width: 992px){
      position: sticky;
      top: 0;
      .nav-center{
          width: 90%;
      }
      .logo {
          display: none;
          margin: 0;
      }
      .logo-text{
          display: block;
      }
  }
`;
export default NavBar;
