import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [ selectedMenu, setSelectedMenu ] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen ] = useState(false);

  const hadleMenuCllick = (index) => {
    setSelectedMenu(index);
  };

  const hadleProfileCllick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => hadleMenuCllick(0)}
            >
              <p className={selectedMenu ===0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => hadleMenuCllick(1)}
            >
              <p className={selectedMenu ===1 ? activeMenuClass:menuClass}>Orders</p>
            </Link> 
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => hadleMenuCllick(2)}
            >
              <p className={selectedMenu ===2 ? activeMenuClass:menuClass}>Holdings</p>
            </Link> 
            
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => hadleMenuCllick(3)}
            >
              <p className={selectedMenu ===3 ? activeMenuClass:menuClass}>Positions</p>
            </Link> 
           
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => hadleMenuCllick(4)}
            >
              <p className={selectedMenu ===4 ? activeMenuClass:menuClass}>Funds</p>
            </Link> 
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => hadleMenuCllick(5)}
            >
              <p className={selectedMenu ===5 ? activeMenuClass:menuClass}>Apps</p>
            </Link> 
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={hadleProfileCllick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
