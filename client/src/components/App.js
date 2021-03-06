import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Design from './pages/Design';
import About from './pages/About';
import Impressum from './pages/Impressum';
import Webdev from './pages/Webdev';

class App extends Component {
  render() {
    return (
      <div className="App">
        <video autoPlay muted loop id="myVideo">
          <source type="video/mp4" src="https://res.cloudinary.com/dpjdxqrce/video/upload/v1551812106/My-Webpage/VideoBackground.mp4" />
        </video> 
        <header className="App-header">
          <div className="header-content">
            <div className="nav-links">
              <NavLink to="/" exact>Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/imprint">Impressum</NavLink>
            </div>
            <div className="social-icons">
              <a href="https://www.instagram.com/split_seconds/" target="_blank" rel="noopener noreferrer" className="Instagram"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1551866132/My-Webpage/instgram-white.png" alt="insta icon" className="icon" /></a>
              <a href="https://twitter.com/_SplitSeconds" target="_blank" rel="noopener noreferrer" className="Twitter"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1551866235/My-Webpage/twitter-white.png" alt="twitter icon" className="icon" /></a>
              <a href="https://www.behance.net/Split_Seconds" target="_blank" rel="noopener noreferrer" className="Behance"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1551866132/My-Webpage/behance-white.png" alt="behance icon" className="icon" /></a>
              <a href="https://github.com/SplitSeconds" target="_blank" rel="noopener noreferrer" className="GitHub"><img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1551866132/My-Webpage/github-white.png" alt="github icon" className="icon" /></a>
            </div>
          </div>
        </header>
        <div>
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
      </div>
    );
  }
}

export default App;
