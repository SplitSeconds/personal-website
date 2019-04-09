import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import Design from './Design';
import Webdev from './Webdev';


class Portfolio extends Component {
  render() {
    return (
      
      <div className="portfolio">
      <div className="projects">
        <div className="design project">
          <Card className="card">
            <CardImg top width="100%" src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545825885/My-Webpage/20975c29836243.5605c501e9f74.jpg" alt="Design picture" />
            <CardBody>
              <CardTitle>Design and Illustration Projects</CardTitle> 
              <Button><NavLink to="/design">See more</NavLink></Button>
            </CardBody>
          </Card>
        </div>

        <div className="webdev project">
          <Card>
            <CardImg top width="100%" src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1546002318/My-Webpage/Moodify.jpg" alt="Webdev picture" />
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
      </div>
    );
  }
}

export default Portfolio;
