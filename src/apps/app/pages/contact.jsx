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
            <form name="contact" method="POST" data-netlify="true" action="/thanks">
              <div className="form-group">
                <div className="controls-label">
                  <label htmlFor="email">
                    E-mail
                  </label>
                </div>
                <div className="controls-text">
                  <input type="text" id="email" name="email" />
                </div>                
              </div>
              <div className="form-group">
                <div className="controls-label">
                  <label htmlFor="message">
                    Message
                  </label>
                </div>
                <div className="controls-text">
                  <textarea id="message" name="message"></textarea>
                </div>                
              </div>
              <button type="subbmit" className="btn-primary">
                Send me message
              </button>
            </form>
          </div>
        </div>        
      </div>
    );
  }
}