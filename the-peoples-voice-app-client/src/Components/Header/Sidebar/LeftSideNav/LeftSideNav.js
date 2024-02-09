import React from "react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

const LeftSideNav = () => {
  const handleMenuToggle = () => {
    var menu_toggle = document.getElementById("toggle");
    var sidebar = document.getElementById("sidebar");
    menu_toggle.classList?.toggle("is-active");
    sidebar.classList?.toggle("is-active");
  };

  return (
    <div className="left-nav">
      <div className="app">
        <div onClick={handleMenuToggle} className="menu-toggle" id="toggle">
          <div className="hamburger">
            <span></span>
          </div>
        </div>

        <aside className="sidebar" id="sidebar">
          <h2>All Category</h2>

          <nav className="menu">
            <Link to="/" className="menu-item is-active">
              Breaking News
            </Link>
            <Link to="/general" href="#" className="menu-item">
              General News
            </Link>
            <Link to="/health" className="menu-item">
              Health News
            </Link>
            <Link to="/sports" className="menu-item">
              Sports
            </Link>
            <Link to="/entertainment" href="#" className="menu-item">
              Entertainment
            </Link>
            <Link to="/science" className="menu-item">
              Science News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
            <Link to="/technology" className="menu-item">
              Technology News
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default LeftSideNav;
