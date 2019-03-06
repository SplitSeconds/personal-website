import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }
  render() {
    return (
      <div className="blog">
        <h3>Blog</h3>

        <h6>Coming soon...</h6>
        <p><a href="https://splitsecondswrites.blogspot.com/" target="_blank" rel="noopener noreferrer">Visit me on Blogger!</a></p>
      </div>
    );
  }
}

export default Blog;
