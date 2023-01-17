import '../css/Dashboard.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/App.css';
import { navItems } from "./NavItems";
import Button from "./Button1";
import Dropdown from "./Dropdown";

function Dashboard() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="bg_image2"> 
        
    < div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          MELBOURNE
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Admin") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </div>
    <li><h1 className='nav-center'>The Melbourne Hotel Welcomes You</h1></li>
    </div>
  );
}

export default Dashboard;
