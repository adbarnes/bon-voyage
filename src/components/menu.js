import React from 'react';
import { Link } from "gatsby"
import menuStyles from './menu.module.css'
import menuIcon from '../../src/images/menu.svg'

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

function header(props) {
    return (
        <header>
        <Link className={menuStyles.brand} to="/">
          Bon voyage trips 
        </Link>
          <ul className={menuStyles.menu}>
            <ListLink to="/">HOME</ListLink>
            <ListLink to="/about/">ABOUT</ListLink>
            <ListLink to="/contact/">CONTACT</ListLink>
            <ListLink to="/contact/">BLOG</ListLink>
            <ListLink to="/contact/">BOOK NOW</ListLink>
          </ul>
          <Link to="#" className={menuStyles.mobileMenu}><img className={menuStyles.menuIcon} src={menuIcon} /></Link>
      </header>
    );
}

export default header;