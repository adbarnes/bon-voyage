import React from "react"
import heroStyles from "./hero.module.css"
import bottomCurve from "../../src/images/curve-bottom.svg"
import Img from "gatsby-image"
import { useStaticQuery, Link, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"

export default function Hero() {
  const props = useSpring({
    height: 540,
    from: { height: 0 },
  })
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "boat.png" }) {
          childImageSharp {
            fluid(maxWidth: 754) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <>
      <div className={heroStyles.hero}>
        <div className={heroStyles.heroBorder}></div>
        <div className={heroStyles.imgWrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="A boat from above"
          />
        </div>
      <div className={heroStyles.headingContainer}>
        <animated.div style={props}>
          <h1>WAVE GOODBYE</h1>
        </animated.div>
        </div>
        <div className={heroStyles.divider}></div>
        <p data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" className={heroStyles.subtitle}>Set sale on the ocean waves and make your dreams come true.</p>
        <Link data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" className={heroStyles.btn} to="/">
          BOOK NOW
        </Link>
      </div>

      <img
        className={heroStyles.bottomCurve}
        src={bottomCurve}
        alt="Bottom Curve"
      />
    </>
  )
}
