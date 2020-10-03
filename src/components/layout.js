import React from "react"
import layoutStyles from './layout.module.css'
import Hero from './hero'
import Menu from './menu'


export default function Layout({ children }) {
  
  return (
    <>
    <div className={layoutStyles.headerContainer}>
      <Menu />
      <Hero />
    </div>
    <div>
    {children}
    </div>
    </>
  )
}



