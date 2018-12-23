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
      <div className="Countries">
        <h2>Blog</h2>
       
      </div>
    );
  }
  componentDidMount() {
    // api.getCountries()
    //   .thes Blog => {
    //     console.log(countries)
    //     this.setState({
    //       countries: countries
    //     })
    //   })
    //   .catch(err => console.log(err))
  }
}

export default Blog;
