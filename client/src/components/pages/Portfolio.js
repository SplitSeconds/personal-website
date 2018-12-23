import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
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
    .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      
      <div className="Portfolio">
      <NavLink to="/design">Design</NavLink>
      <NavLink to="/webdev">Webdev</NavLink>
      <Switch>
          <Route path="/design" component={Design} />
          <Route path="/webdev" component={Webdev} />
      </Switch>
      </div>
    );
  }
}

export default Portfolio;
