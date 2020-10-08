import React from "react";
import {Link} from "react-router-dom";
import "./header.style.scss";

const Header = () => (
    <header id="AshrafPatel" className="header">
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Ashraf Patel</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav nav nav-fill w-100">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
)

export default Header;