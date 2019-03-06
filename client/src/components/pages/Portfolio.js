import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import Design from './Design';
import Webdev from './Webdev';


class Portfolio extends Component {
  render() {
    return (
      
      <div className="Portfolio projects">
        <div className="design project">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Design picture" />
            <CardBody>
              <CardTitle>Design and Illustration Projects</CardTitle> 
              <Button><NavLink to="/design">See more</NavLink></Button>
            </CardBody>
          </Card>
        </div>

        <div className="webdev project">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Webdev picture" />
            <CardBody>
              <CardTitle>Webdevelopment and Webdesign Projects</CardTitle> 
              <Button><NavLink to="/webdev">See more</NavLink></Button>
            </CardBody>
          </Card>
        </div>

      <Switch>
          <Route path="/design" component={Design} />
          <Route path="/webdev" component={Webdev} />
      </Switch>
      </div>
    );
  }
}

export default Portfolio;
