import React from "react";

export default class About extends React.Component {
  render() {    
    return (
      <div>
        <h1>
          My skills
        </h1>          
        <p className="text-width-500">
          I am an experienced front-end developer. 
          My main specialization is setting up brand for complex web applications - using HTML/SCSS and React or Pug. 
        </p>
        <p className="text-width-500">
          I can also create designs for web pages and web apps using my friend Sketch. Please see my <a href="">GitHub</a> or <a href="">LinkedIn</a>
        </p>
      </div>
    );
  }
}