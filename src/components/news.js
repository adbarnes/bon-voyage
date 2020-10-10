import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import newsStyles from "./news.module.css"

export default function News(props) {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/blog/" } }
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
    <>
      <div className={newsStyles.container}>
        <div className={newsStyles.right}>
          <h2 data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease">{props.heading}</h2>
          <p data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease">
          Regularly updated news, articles, guides and blogs about Bon Voyage and its services.
          </p>
          <div className={newsStyles.divider}></div>
        </div>

        <div className={newsStyles.newsContainer}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
              className={newsStyles.newsItem}
              key={node.id}
            >
              <div className={newsStyles.titleTag}>
                {" "}
                {node.frontmatter.title}
              </div>
              <div className={newsStyles.dateTag}>{node.frontmatter.date}</div>
              <div className={newsStyles.imgWrapper}>
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
