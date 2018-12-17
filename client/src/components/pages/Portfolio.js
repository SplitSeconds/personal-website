import React, { Component } from 'react';
import Design from './Design';
import Webdev from './Webdev';


class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleClick(e) {
    e.preventDefault()
    console.log('click')
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <div className="Portfolio">
        <h2>Design</h2>
        <Design />
   
        <h2>Webdev></h2>
        <Webdev />
      </div>
    );
  }
}

export default Portfolio;
