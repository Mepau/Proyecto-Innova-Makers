import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "../Views/home";
import DevicesView from "../Views/devices";
import NeedKnowerView from "../Views/need_knower";

const Nav = (props) => {

    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ">

                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Devices">Devices</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Need_Knower">Needs Knower</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>

            </nav>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/Devices' element={< DevicesView />}/>
                <Route exact path='/Need_Knower' element={< NeedKnowerView />}/>
            </Routes>

        </Router>
    )
}

export default Nav;