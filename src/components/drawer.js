import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './drawer.css'
import { Link } from "gatsby"


export default props => {
  return (
  
    <Menu {...props}>
    <Link to="/">HOME</Link>
    <Link to="/about/">ABOUT</Link>
    <Link to="/contact/">CONTACT</Link>
    <Link to="/contact/">BLOG</Link>
    <Link to="/contact/">BOOK NOW</Link>

    </Menu>
  );
};