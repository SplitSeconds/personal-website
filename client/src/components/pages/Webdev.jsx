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
          <h2>My Web Development and Web Design Projects</h2>
        </div>

        <div className="projects">

        <div className="project-three project">
          <Card>
            <CardImg top width="100%" src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1546002318/My-Webpage/Moodify.jpg" alt="project 3 picture" />
            <CardBody>
              <CardTitle>Moodify</CardTitle>
              <CardSubtitle>Ironhack Coding Bootcamp final project</CardSubtitle>
              <CardText>MERN stack application based on the Spotify API. Provides the user a unique playlist based on the user’s mood input as well as a mood graph based on his recently played tracks.</CardText>
              <Button><a href="https://moodify-music.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn-link">Try it!</a></Button>
            </CardBody>
          </Card>
        </div>

        <div className="project-two project">
          <Card>
            <CardImg top width="100%" src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1546002014/My-Webpage/CoffeeCode.jpg" alt="project 2 picture" />
            <CardBody>
              <CardTitle>Code and Coffee</CardTitle>
              <CardSubtitle>Ironhack Coding Bootcamp project2</CardSubtitle>
              <CardText>An app which helps you to find a café in your area to work from. Created with JS, Handlebars, MongoDB, Express, Mapbox and Cloudinary.</CardText>
              <Button><a href="https://coffee-and-code.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn-link">Try it!</a></Button>
            </CardBody>
          </Card>
        </div>

        <div className="project-one project">
          <Card>
            <CardImg top width="100%" src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545571067/My-Webpage/Stressgame.jpg" alt="project 1 picture" />
            <CardBody>
              <CardTitle>The Stress Game</CardTitle>
              <CardSubtitle>Ironhack Coding Bootcamp project1</CardSubtitle>
              <CardText>A 2D Side Scroller Jump 'n' Run created with JavaScript and Canvas. The character and the background graphics were designed by myself, too.</CardText>
              <Button><a href="https://splitseconds.github.io/stress-game/" target="_blank" rel="noopener noreferrer" className="btn-link">Try it!</a></Button>
            </CardBody>
          </Card>
        </div>
        </div>

        
      </div>
    );
  }
}

export default Webdev;