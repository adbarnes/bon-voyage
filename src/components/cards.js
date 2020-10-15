import React from "react"
import cardsStyles from "./cards.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Card() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/destinations/" } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                featuredImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <section>
      <div className={cardsStyles.container}>
        <h2 data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease">
          Destinations
        </h2>
        <p data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease">
          Our trips cater for all budgets. Select your destination below for
          more information and booking details.
        </p>
        <div className={cardsStyles.divider}></div>

        <div className={cardsStyles.cards}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
              className={cardsStyles.card}
              key={node.id}
            >
              <div className={cardsStyles.cardTag}>
                {" "}
                {node.frontmatter.title}
              </div>

              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
