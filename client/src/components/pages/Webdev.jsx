import React, { Component } from 'react';

class Webdev extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secret: null,
      message: null
    }
  }
  render() {
    return (
      <div className="Secret">
        <h2>Designs</h2>

        <div className="result">
          <h2>Hello Webdev</h2>
        </div>

        
      </div>
    );
  }
}

export default Webdev;