import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav
      id="menu"
      class="navbar navbar-default navbar-fixed-top"
      style={{ backgroundColor: "gray" }}
    >
      <div class="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand page-scroll" href="#page-top">
            Landscaper
          </a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>

            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
