import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Design from './pages/Design';
import About from './pages/About';
import Impressum from './pages/Impressum';
import api from '../api';
import Webdev from './pages/Webdev';

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
          <div className="nav-links">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/imprint">Impressum</NavLink>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/split_seconds/" target="_blank" rel="noopener noreferrer" className="Instagram"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545571066/My-Webpage/002-logo.png" alt="insta icon" className="icon" /></a>
            <a href="https://twitter.com/_SplitSeconds" target="_blank" rel="noopener noreferrer" className="Twitter"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545571066/My-Webpage/003-twitter.png" alt="twitter icon" className="icon" /></a>
            <a href="https://www.behance.net/Split_Seconds" target="_blank" rel="noopener noreferrer" className="Behance"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545571066/My-Webpage/001-behance.png" alt="behance icon" className="icon" /></a>
            <a href="https://github.com/SplitSeconds" target="_blank" rel="noopener noreferrer" className="GitHub"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545571066/My-Webpage/004-github.png" alt="github icon" className="icon" /></a>
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/webdev" component={Webdev} />
          <Route path="/design" component={Design} />
          <Route path="/blog" component={Blog} />
          <Route path="/imprint" component={Impressum} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
