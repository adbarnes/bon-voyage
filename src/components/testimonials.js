import React from "react"
import bottomCurve from "../../src/images/curve-bottom.svg"
import star from "../../src/images/star.svg"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import testimonialsStyles from "./testimonials.module.css"

export default function Testimonials(props) {
  const data = useStaticQuery(
    graphql`
      query {
        testImage: file(relativePath: { eq: "head.png" }) {
          childImageSharp {
            fixed(width: 167, height: 167) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        indexImage: file(relativePath: { eq: "testimonials-bg.jpg" }) {
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
    <section>
      <div className={testimonialsStyles.container}>
        <div className={testimonialsStyles.right}>
          <h2
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            Testimonials
          </h2>
          <p data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease">
            See the amazing comments our customers have left about Bon Voyage
            Trips and its 5-star rated trips and expeditions.
          </p>

          <div className={testimonialsStyles.divider}></div>
        </div>
      </div>
      <BackgroundImage
        style={{ backgroundSize: "cover" }}
        className={testimonialsStyles.headerContainer}
        fluid={data.indexImage.childImageSharp.fluid}
      >
        <div className={testimonialsStyles.testimonialsContainer}>
          <img
            className={testimonialsStyles.topCurve}
            src={bottomCurve}
            alt="Top Curve"
          />
          <div className={testimonialsStyles.content}>
            <div
              data-sal="slide-right"
              data-sal-delay="100"
              data-sal-easing="ease"
              className={testimonialsStyles.contentBox}
            >
              <Img
                fixed={data.testImage.childImageSharp.fixed}
                alt="Testimonial person face"
              />
              <blockquote>
                <p className={testimonialsStyles.testimonialText}>
                  Bon Voyage have been brilliant from start to finish. I can't
                  recommend them enough. The whole process was so simple, we had
                  a superb holiday.
                </p>
              </blockquote>
              <p className={testimonialsStyles.bold}>Mark, Wimbledon.</p>
              <div className={testimonialsStyles.testimonialReview}>
                <img width="29" height="27" src={star} alt="star" />
                <img width="29" height="27" src={star} alt="star" />
                <img width="29" height="27" src={star} alt="star" />
                <img width="29" height="27" src={star} alt="star" />
                <img width="29" height="27" src={star} alt="star" />
              </div>
            </div>
          </div>
          <img
            className={testimonialsStyles.bottomCurve}
            src={bottomCurve}
            alt="Bottom Curve"
          />
        </div>
      </BackgroundImage>
    </section>
  )
}
