import React from "react"
import layoutStyles from './layout.module.css'
import Hero from './hero'
import Menu from './menu'
import Drawer from '../components/drawer'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'


export default function Layout( { children }) {
  const data = useStaticQuery(
    graphql`
      query {
        indexImage: file(relativePath: { eq: "header-bg.jpg" }) {
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
    <>
    <Drawer right />
    <BackgroundImage
      style={{backgroundSize: 'cover'}}
      className={layoutStyles.headerContainer}
      fluid={data.indexImage.childImageSharp.fluid}>
    
      <Menu />
      <Hero />
   
    </BackgroundImage>
    <div>
    {children}
    </div>
    </>
  )
}





