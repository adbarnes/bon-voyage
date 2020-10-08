import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './drawer.css'
import { Link } from "gatsby"


export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      {/* <a className="menu-item" href="/">
        HOME
      </a> */}
    <Link to="/">HOME</Link>
    <Link to="/about/">ABOUT</Link>
    <Link to="/contact/">CONTACT</Link>
    <Link to="/contact/">BLOG</Link>
    <Link to="/contact/">BOOK NOW</Link>

    </Menu>
  );
};