import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

class Webdev extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secret: null,
      message: null
    }
  }
  render() {
    return (
      <div className="webdev">
        <div className="headline">
          <h2>Hello Webdev</h2>
        </div>

        <div className="projects">

        <div className="project-one">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="project 1 picture" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="project-two">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="project 1 picture" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        </div>

        
      </div>
    );
  }
}

export default Webdev;