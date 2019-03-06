import React, { Component } from 'react';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="home-wrapper">
        
        <video autoPlay muted loop id="myVideo">
          <source type="video/mp4" src="https://res.cloudinary.com/dpjdxqrce/video/upload/v1551812106/My-Webpage/VideoBackground.mp4" />
        </video>

        <div className="content">
          <h1>Nele Lüpkes</h1>
          <h3>Web Development // Motion and Graphic Design // Social Media</h3>
        </div>


      </div>
    );
  }
}

export default Home;
