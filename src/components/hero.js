import React from 'react';
import heroStyles from './hero.module.css'
import bottomCurve from '../../src/images/curve-bottom.svg'
import Img from "gatsby-image"
import { useStaticQuery, Link, graphql } from "gatsby"


export default function Hero(props) {
    const data = useStaticQuery(
        graphql`
          query {
            file(relativePath: { eq: "boat.png" }) {
              childImageSharp {
                fluid (maxWidth: 754) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
        }
    `)
    return (
        <>
        <div className={heroStyles.hero}>
          <div className={heroStyles.heroBorder}></div>
          <div className={heroStyles.imgWrapper}><Img fluid={data.file.childImageSharp.fluid} alt="A boat from above" /></div>
          <h1>WAVE GOODBYE</h1>
          <div className={heroStyles.divider}></div>
            <p>Set sale on the ocean waves and make your dreams come true.</p>
            <Link className={heroStyles.btn} to="/">BOOK NOW</Link>
        </div>
      
      <img className={heroStyles.bottomCurve} src={bottomCurve} alt="Bottom Curve" /> 

        </>
    );
}

