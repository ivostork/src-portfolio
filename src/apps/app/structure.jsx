import React from "react";

import { Route, Link, NavLink } from "react-router-dom";

import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import Thanks from "./pages/thanks";


export default class Structure extends React.Component {  
  constructor(props) {
    super(props);
  }  

  render() {            

    // only consider an event active if its event id is an odd number
    const isEmptyUrl = (match, location) => {
      if (location.pathname === "/" || match) {
        return true
      }      
      else {
        return false;
      }      
    }

    return (
      <div className="layout">        
          <div className="header">
            <div className="container">
              <div className="header-flex">
                <Link to="/" className="logo">
                  Ivo Stork                                      
                </Link>
                <nav className="navigation">
                  <NavLink to="/portfolio" isActive={isEmptyUrl}>Portfolio</NavLink>
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
              <Route path="/thanks" component={Thanks} />                                                                                       
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
                    <a href="https://github.com/ivostork" target="_blank" rel="noopener" className="footer-link-github">
                      <span className="sr-only">
                        github link
                      </span>
                    </a>
                    <a href="https://linkedin.com/in/ivo-stork" target="_blank" rel="noopener" className="footer-link-linkedin">
                      <span className="sr-only">
                        Linkedin
                      </span>
                    </a>
                    <a href="https://dribbble.com/ivosstork" target="_blank" rel="noopener" className="footer-link-dribble">
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