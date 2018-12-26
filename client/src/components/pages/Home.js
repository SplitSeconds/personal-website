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
        <div className="image">
          <img src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1545825885/My-Webpage/20975c29836243.5605c501e9f74.jpg" alt="Homepage picture" className="home-bg-picture" />
        </div>
        <div className="text">
          <h2>Nele Lüpkes</h2>
          <h3>Web Development, Motion and Graphic Design</h3>
        </div>
      </div>
    );
  }
}

export default Home;
