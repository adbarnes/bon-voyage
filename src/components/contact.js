import React from "react"
import contactStyles from "./contact.module.css"
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

function Contact(props) {

  const data = useStaticQuery(
    graphql`
      query {
        indexImage: file(relativePath: { eq: "contact-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    `
  )
  return (
    <section className={contactStyles.container}>
      <h2 data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease">{props.heading}</h2>
      <p data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease">
        Contact us below with any questions or queries you may have about Bon Voyage trips and expeditions.
      </p>
      <div className={contactStyles.divider}></div>
      <div className={contactStyles.contactContainer}>
      <BackgroundImage
      style={{backgroundSize: 'cover'}}
      className={contactStyles.intro}
      fluid={data.indexImage.childImageSharp.fluid}>
        
          <h3>Have a question?</h3>

          <p>
            Vivamus tempor nunc vel nisi tristique, id ultrices massa dictum.
            Proin vel consequat metus. In hac habitasse platea dictumst. Fusce
            elementum convallis nisi, nec commodo nulla efficitur at morbi
            euismod diam vel.
          </p>

          <p>
            Tortor dignissim mollis. Integer iaculis, sem ac cursus congue, mi
            orci faucibus arcu, ut tristique ligula tortor sed nulla. Phasellus
            laoreet tempor justo id elementum. Suspendisse mattis, justo congue
            suscipit pharetra, felis nibh bibendum nibh, sit amet luctus metus
            nibh pharetra.
          </p>

          <p>
            Note: Vivamus tempor nunc vel nisi tristique, id ultrices massa
            dictum.
          </p>
        
        </BackgroundImage>
        <div className={contactStyles.form}>
          <form>
            <div className={contactStyles.section}>
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" placeholder="John" />
            </div>
            <div className={contactStyles.section}>
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" placeholder="Smith" />
            </div>
            <div className={contactStyles.section}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div className={contactStyles.section}>
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
