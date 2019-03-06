import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>About</h2>

        <div className="about-container">
          <img className="profile-pic" alt="Bild von Nele" src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1542029569/worst-video-users/Unbenannt.PNG.png" />

          <p className="about-text">
          Hi, I'm Nele! I'm a Full Stack Web Developer with a background in Social Media, Design and the Video Game Industry.
          Tools of choice: Javascript, HTML && CSS, MongoDB, Express, React, Node, ES6, Photoshop and After Effects. I am highly passionate about technology and design and love to combine those fields.
          </p>

          <p className="about-text">
          I finished my Bachelors degree in Visual and Motion Design in 2012. For the last 2 1/2 years I've been working in the video game industry as a Social Media Manager.
          I started to teach myself some coding with the help of online courses and tutorials and fell in love with it. After I have been offered a schorlarshio
          for the Ironhack Coding Bootcamp I decided to take the chance and immerse myself fully into the coding world.
          </p>
        </div>

        
      </div>
    );
  }
}

export default About;
