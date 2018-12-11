import React, { Component } from 'react';
import api from '../../api';

class About extends Component {
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
        <h2>About</h2>

        <div className="result">
          ...
        </div>

        
      </div>
    );
  }
  componentDidMount() {
    api.getSecret()
      .then(data => this.setState({ secret: data.secret }))
      .catch(err => this.setState({ message: err.toString() }))
  }
}

export default About;
