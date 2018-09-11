import React from "react";

export default class Contact extends React.Component {
  render() {
    
    return (
      <div>
        <h1>
          Say hello
        </h1>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <form action="https://formspree.io/ivos.stork@gmail.com" method="POST">
              <div className="form-group">
                <div className="controls-label">
                  <label htmlFor="email">
                    E-mail
                  </label>
                </div>
                <div className="controls-text">
                  <input type="text" id="email" name="email" type="email" required />
                </div>  
                <div className="label-description">Required item</div>              
              </div>
              <div className="form-group">
                <div className="controls-label">
                  <label htmlFor="message">
                    Message
                  </label>
                </div>
                <div className="controls-text">
                  <textarea id="message" name="message" required></textarea>
                </div>
                <div className="label-description">Required item</div>                              
              </div>
              <button type="submit" type="submit" className="btn-primary">Send me message</button>                
            </form>
          </div>
        </div>        
      </div>
    );
  }
}