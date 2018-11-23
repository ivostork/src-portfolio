import React from "react";
import {Link} from "react-router-dom";

import BezZavislosti from "./../../../content/bez-zavislosti.jpg";
import Spudo from "./../../../content/spudo.jpg";
import Schule from "./../../../content/schule.jpg";

export default class Portfolio extends React.Component {

  renderProjects() {

    let portfolioProjects = [
      {
        mainURL: "https://ivostork.github.io/website-biorezonance/",
        hero: BezZavislosti,
        description: "Web for a friend",
        title: "bezzavislosti.cz",
        links: [
          {
            linkUrl:"https://sketch.cloud/s/711wZ",
            linkTitle:"Sketch artboards"
          },
          {
            linkUrl:"https://github.com/ivostork/biorezonance",
            linkTitle:"PUG,SCSS"
          },
        ]
      },
      {
        mainURL: "https://sketch.cloud/s/dkZGn/QbbGG5m/play",
        hero: Spudo,
        description: "Dummy web application for clients demo",
        title: "SPUDO",
        links: [
          {
            linkUrl:"https://sketch.cloud/s/dkZGn",
            linkTitle:"Sketch artboards"
          }
        ]
      },
      {
        mainURL: "https://sketch.cloud/s/YMObZ/xrgrDjm",
        hero: Schule,
        description: "Dummy web application for clients demo",
        title: "Schule IS",
        links: [
          {
            linkUrl:"https://sketch.cloud/s/YMObZ",
            linkTitle:"Sketch artboards"
          }
        ]
      }
    ];

    let portfolioProjectsJSX = portfolioProjects.map((item,index) => (
      <div className="col-auto" key={index}>
        <div className="portfolio-box mb-60">
            <a href={item.mainURL} target="_blank" rel="noopener" className="portfolio-link-project">
              <img src={item.hero} alt="project image" />
              <span className="sr-only">
                Link to project
              </span>
            </a>
            <p className="portfolio-project-desc">
              {item.description}
            </p>
            <h6>
              {item.title}
            </h6>
              {
                item.links.map((projectLink,projectLinkIndex) => (
                  <div key={projectLinkIndex}>
                    <a href={projectLink.linkUrl} target="_blank" rel="noopener" className="portfolio-project-asset">
                      {projectLink.linkTitle}
                    </a>
                  </div>
                ))
              }
        </div>
      </div>
    )
    );

    return portfolioProjectsJSX;
  }


  render() {    
    return (
      <div className="portfolio">
        <div className="portfolio-hero">
          <h1 className="portfolio-hero-copy">
            I love design and code
          </h1>        
          <p className="mb-60">
            Dad, husband, ux developer
          </p>
          <Link to="/contact" className="btn-primary mb-160">
            Contact me                                     
          </Link>
        </div>
          <div className="row row-center">
            {this.renderProjects()}
          </div>
      </div>
    );
  }
}