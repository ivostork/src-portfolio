import React from "react";

export default class About extends React.Component {
  render() {    
    return (
      <div>
        <h1>
          My skills
        </h1>          
        <p className="text-width-500">
          I am an experienced ux developer. My main specialization is delivering both interaction design and code (React, SCSS and accessible HTML).
        </p>
        <p className="text-width-500">
          Please see my <a href="https://github.com/ivostork" target="_blank" rel="noopener">GitHub</a>, <a href="https://linkedin.com/in/ivo-stork" target="_blank" rel="noopener">LinkedIn</a> or <a href="https://dribbble.com/ivosstork" target="_blank" rel="noopener">Dribbble</a>
        </p>
      </div>
    );
  }
}