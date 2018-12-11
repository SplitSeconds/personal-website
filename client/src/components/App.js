import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Impressum from './pages/Impressum';
import api from '../api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/imprint">Impressum</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/imprint" component={Impressum} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
        <div className="social-icons">
          <a href="" className="Instagram"></a>
          <a href="" className="Twitter"></a>
          <a href="" className="Behance"></a>
          <a href="" className="GitHub"></a>
        </div>
      </div>
    );
  }
}

export default App;
