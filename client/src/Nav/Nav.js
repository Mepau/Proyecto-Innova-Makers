import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Views/home";
import DevicesView from "../Views/devices";
import NeedKnowerView from "../Views/need_knower";
import UserView from "../Views/user";

const Nav = (props) => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Devices">
                  Devices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Need_Knower">
                  Needs Knower
                </Link>
              </li>
            </ul>

            <Link className="nav-link" to="/User">
              <img
                src="585e4bf3cb11b227491c339a.png"
                width="50"
              />
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Devices" element={<DevicesView />} />
        <Route exact path="/Need_Knower" element={<NeedKnowerView />} />
        <Route exact path="/User" element={<UserView />} />
      </Routes>
    </Router>
  );
};

export default Nav;
