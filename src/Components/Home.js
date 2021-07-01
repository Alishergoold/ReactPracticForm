import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/sign-in">Sign-in</Link>
        <Link to="/sign-up">Sign-up</Link>
      </div>
    );
  }
}

export default Home;