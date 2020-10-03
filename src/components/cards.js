import React from 'react';
import cardsStyles from "./cards.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Card() {
    const data = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "\\/destinations/"}}) {
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
  `)
    return ( 
        <> 
         <div className={cardsStyles.container}>
      <h2>Destinations</h2>
      <p>For anything that brings people together to celebrate an occasion, 
we create truly memorable experiences that you will cherish forever.
</p>
<div className={cardsStyles.divider}></div>

      <div className={cardsStyles.cards}>
        
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className={cardsStyles.card} key={node.id} >
           
             <div className={cardsStyles.cardTag}> {node.frontmatter.title}</div>
            
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            
          </div>
        ))}
      
        
        </div>
        </div>
        </>
    );
}
