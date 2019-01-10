import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

const NavMenu = () => {
  return (
    <Router>
      <div>
        <div className="nav">
          <ul className="nav">
            <li><Link to="/" className="name">Pierce James Morris</Link></li>
            <li>
              <NavLink to="/contact/" className="nav-item hover" activeClassName="active">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about/" className="nav-item hover" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/" className="nav-item hover" activeClassName="active">Portfolio</NavLink>
            </li>
          </ul>
        </div>

        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/portfolio/" exact component={Portfolio} />
      </div>
    </Router>
  );
}

export default NavMenu;