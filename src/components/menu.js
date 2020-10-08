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
      <header >
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
       </header>
       </div>
    );
  }
}

export default header;
// import React from 'react';
// import { Link } from "gatsby"
// import menuStyles from './menu.module.css'

// const ListLink = props => (
//     <li>
//       <Link to={props.to}>{props.children}</Link>
//     </li>
//   )

// function header(props) {
//     return (
//         <header>
//         <Link className={menuStyles.brand} to="/">
//           Bon voyage trips 
//         </Link>
       
//           <ul className={menuStyles.menu}>
//             <ListLink to="/">HOME</ListLink>
//             <ListLink to="/about/">ABOUT</ListLink>
//             <ListLink to="/contact/">CONTACT</ListLink>
//             <ListLink to="/contact/">BLOG</ListLink>
//             <ListLink to="/contact/">BOOK NOW</ListLink>
//           </ul>
//       </header>
//     );
// }

// export default header;