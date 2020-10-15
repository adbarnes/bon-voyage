import React, { Component } from 'react';
import { Link } from "gatsby"
import menuStyles from './menu.module.css'

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

class header extends Component {
  state ={className: menuStyles.headerWrapper };
  
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  
  handleScroll=()=>{
    if (window.pageYOffset > 0) {
        if(this.state.className === menuStyles.headerWrapper){
          this.setState({ className: menuStyles.headerWrapperScroll });   
        }
    }else{
        if(this.state.className){
          this.setState({ className: menuStyles.headerWrapper });
        }
    }
   
  }
  render() {
    return (
      <div ref={(r)=>this.ref=r} className={this.state.className}>
      <header>
        <nav>
         <Link className={menuStyles.brand} to="/">
          Bon voyage trips 
         </Link>
           <ul className={menuStyles.menu}>
             <ListLink to="/">HOME</ListLink>
             <ListLink to="/">ABOUT</ListLink>
             <ListLink to="/">CONTACT</ListLink>
             <ListLink to="/">BLOG</ListLink>
             <ListLink to="/">BOOK NOW</ListLink>
           </ul>
           </nav>
       </header>
       </div>
    );
  }
}

export default header;
