import React from "react";
import {Link} from "react-router-dom";

import Logo1 from "./../../../content/project1.jpg";
import Logo2 from "./../../../content/project2.jpg";

export default class Portfolio extends React.Component {
  render() {    
    return (
      <div className="portfolio">
        <div className="portfolio-hero">
          <h1 className="portfolio-hero-copy">
            I specialize in CSS
          </h1>        
          <p className="mb-60">
            I am also a proud dad and a husband
          </p>
          <Link to="/contact" className="btn-primary mb-160">
            Contact me                                     
          </Link>
        </div>        
          <div className="row row-center">
            <div className="col-auto">
              <div className="portfolio-box mb-32">
                <a href="" className="portfolio-link-project1">
                  <img src={Logo1} alt="project1" />
                  <span className="sr-only">
                    Link to project 1
                  </span>                  
                </a>
                <p className="portfolio-project-desc">
                  Web for a friend
                </p>
                <h6>                  
                  bezzavislosti.cz
                </h6>
                <div>
                  <a className="portfolio-project-asset" href="">
                    Sketch artboards
                  </a>
                 </div>
                 <div>
                  <a className="portfolio-project-asset" href="">
                    PUG,SCSS
                  </a>
                  </div>
                </div>                
              </div>
            
            <div className="col-auto">
            <div className="portfolio-box">
                <a href="" className="portfolio-link-project2">
                  <img src={Logo2} alt="project2" />
                  <span className="sr-only">
                    Link to project 1
                  </span>                  
                </a>
                <p className="portfolio-project-desc">
                  Dummy web application for clients demo
                </p>
                <h6>                  
                  Crofts Accountants
                </h6>
                <div>
                  <a className="portfolio-project-asset" href="">
                    Sketch artboards
                  </a>
                  </div>
                  <div>
                  <a className="portfolio-project-asset" href="">
                    Styleguide
                  </a>
                  </div>
                  <a className="portfolio-project-asset" href="">
                    React, SCSS
                  </a>
                  </div>
                </div>  
                </div>              
              </div>                
    );
  }
}