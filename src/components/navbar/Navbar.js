import React, { useState } from "react";
import menuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [state, setstate] = useState(false);

  const handleClick = () => {
    setstate(!state);
  };
  return (
    // <nav style={{}}>
    //   <h2 style={{ color: "white" }}>compasslry</h2>
    //   <ul>
    //     <li>Proceess</li>
    //     <li>Service</li>
    //     <li>Whyus</li>
    //     <li>Code of conduct</li>
    //     <li>hr@compasslry.com</li>
    //   </ul>
    // </nav>
    <div>
      <nav className="navbar-items">
        <h1 className="navbar-logo">
          compasslry
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
