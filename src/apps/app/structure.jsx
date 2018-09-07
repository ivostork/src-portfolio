import React from "react";

import { Route, Link, NavLink } from "react-router-dom";

import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";


export default class Structure extends React.Component {  
  constructor(props) {
    super(props);
  }  

  render() {            
    return (
      <div className="layout">        
          <div className="header">
            <div className="container">
              <div className="header-flex">
                <Link to="/" className="logo">
                  Ivo Stork                                      
                </Link>
                <nav className="navigation">
                  <NavLink to="/portfolio">Portfolio</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </nav>
              </div>                                                                                 
            </div>            
          </div>
          
          <div className="layout-content">
            <div className="container">            
              <Route exact path="/" component={Portfolio} />                        
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />                                                                                       
            </div>
          </div>
          
          <div className="footer">
            <div className="container">
              <div className="footer-flex">
                <span className="footer-copyright">
                  Copyright © 2018 Ivo Stork
                </span>
                <div className="footer-links">
                  <span className="footer-email">
                    Design+Code by ivos.stork@gmail.com
                  </span>
                  <div className="footer-links-icons">
                    <a href="" className="footer-link-github">
                      <span className="sr-only">
                        github link
                      </span>
                    </a>
                    <a href="" className="footer-link-linkedin">
                      <span className="sr-only">
                        Linkedin
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>                                                   
      </div>
    );
  }
}