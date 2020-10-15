import React from "react"
import Layout from "../components/layout"
import Cards from "../components/cards"
import Contact from "../components/contact"
import News from "../components/news"
import Testimonials from "../components/testimonials"
import Footer from '../components/footer'
import { Helmet } from "react-helmet"

export default function Home({ data }) {
  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Bon Voyage Trips</title>
          <meta name="description" content="Bon Voyage Trips, sailing, boat trips, gatsby"></meta>
          <html lang="en-GB" />
    </Helmet>
    <Layout>
      <main>
      <Cards />
      <Testimonials />
      <Contact heading="CONTACT US" />
      <News heading="NEWS" />
      </main>
      <Footer />
    </Layout>
    </>
  );
}


