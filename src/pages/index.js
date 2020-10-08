import React from "react"
import Layout from "../components/layout"
import Cards from "../components/cards"
import Contact from "../components/contact"
import News from "../components/news"
import Testimonials from "../components/testimonials"
import Footer from '../components/footer'

export default function Home({ data }) {
  return (
    <Layout>
      <Cards />
      <Testimonials />
      <Contact heading="CONTACT US" />
      <News heading="NEWS" />
      <Footer />
    </Layout>
  );
}


