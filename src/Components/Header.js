import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/user'>User</Link>
        <Link className='link' to='/users'>Users</Link>
        <Link className='link' to='/sign-in'>Sign in</Link>
        <Link className='link' to='/sign-up'>Sign up</Link>
      </div>
    );
  }
}

export default Header;