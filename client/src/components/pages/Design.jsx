import React, { Component } from 'react';

class Design extends Component {
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
          <h2>Hello Design</h2>
        </div>

        
      </div>
    );
  }
}

export default Design;