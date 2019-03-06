import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

class Design extends Component {
  render() {
    return (
      <div className="Secret">
        <h2>Designs</h2>

        <div className="result">
          <h2>Hello Design</h2>
        </div>

        <div className="projects">

<div className="project-one project">
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="project 1 picture" />
    <CardBody>
      <CardTitle>Moodify</CardTitle>
      <CardSubtitle>Ironhack Coding Bootcamp final project</CardSubtitle>
      <CardText>MERN stack application based on the Spotify API. Provides the user a unique playlist based on the user’s mood input as well as a mood graph based on his recently played tracks.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
</div>

<div className="project-two project">
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="project 1 picture" />
    <CardBody>
      <CardTitle>Code and Coffee</CardTitle>
      <CardSubtitle>Ironhack Coding Bootcamp project2</CardSubtitle>
      <CardText>An app which helps you to find a café in your area to work from. Created with JS, Handlebars, MongoDB, Express, Mapbox and Cloudinary.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
</div>

<div className="project-three project">
  <Card>
    <CardImg top width="100%" src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545825885/My-Webpage/20975c29836243.5605c501e9f74.jpg" alt="project 1 picture" />
    <CardBody>
      <CardTitle>Self Portrait</CardTitle>
      <CardSubtitle>Digitally painted self portrait</CardSubtitle>
      <CardText>Done with Photoshop.</CardText>
      <Button>Enlarge</Button>
    </CardBody>
  </Card>
</div>
</div>

        
      </div>
    );
  }
}

export default Design;