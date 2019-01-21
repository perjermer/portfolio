import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Portfolio from "./Portfolio";
import Home from "./Home";

const NavMenu = () => {
  return (
    <Router>
      <div>
        <div className="nav">
          <ul className="nav">
            <li>
              <NavLink to="/" className="nav-item hover" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/" className="nav-item hover" activeClassName="active">Portfolio</NavLink>
            </li>
          </ul>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/portfolio/" exact component={Portfolio} />
      </div>
    </Router>
  );
}

export default NavMenu;