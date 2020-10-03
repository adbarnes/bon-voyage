import React from "react"
import bottomCurve from '../../src/images/curve-bottom.svg'
import star from '../../src/images/star.svg'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import testimonialsStyles from "./testimonials.module.css"

export default function Testimonials(props) {
    const data = useStaticQuery(
        graphql`
            query {
            file(relativePath: { eq: "head.png" }) {
                childImageSharp {
                fixed(width: 167, height: 167) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
        }
    `)
  return (
    <>
      <div className={testimonialsStyles.container}>
        <div className={testimonialsStyles.right}>
          <h2>Testimonials</h2>
          <p>
            For anything that brings people together to celebrate an occasion,
            we create truly memorable experiences that you will cherish forever.
          </p>

          <div className={testimonialsStyles.divider}></div>
        </div>
      </div>
      <div className={testimonialsStyles.testimonialsContainer}>
        <img className={testimonialsStyles.topCurve} src={bottomCurve} alt="Top Curve" />
        <div className={testimonialsStyles.content}>
          <div className={testimonialsStyles.contentBox}>
            {/* <div className={testimonialsStyles.contentBorder}></div> */}
            <Img fixed={data.file.childImageSharp.fixed} alt="A boat from above" />
            
            <p className={testimonialsStyles.testimonialText}>
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            </p>
            <p className={testimonialsStyles.bold}>Mark, Wimbledon.</p>
            <div className={testimonialsStyles.testimonialReview}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
        <img className={testimonialsStyles.bottomCurve} src={bottomCurve} alt="Bottom Curve" />
      </div>
    </>
  )
}

// export const query = graphql`
// query MyQuery {
//   file(relativePath: {eq: "head.png"}) {
//     childImageSharp {
//       fixed(width: 167, height: 167) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// }
// `


