import React from "react";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <nav className="navigation">
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    );
  }
}