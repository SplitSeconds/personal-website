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
      <div className="headline">
        <h2>About</h2>

        <div className="result">
          <p>
          Hi, I'm Nele! I'm a Full Stack Web Developer with a background in Social Media, Design and the Video Game Industry.
          Tools of choice: Javascript, HTML & CSS, MongoDB, Express, React, Node, ES6, Photoshop and After Effects. I am highly passionate about technology and design and love to combine those fields.
          </p>
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
