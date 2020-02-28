import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="container">
      <SEO title="Home" />
      <section id="hero">
        <p>Hi, my name is Rachel<br />
          I'm the Unknown Developer.</p>
        <Link to="#contact">Lets Talk</Link>
      </section>
      <section id="about">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        <Link to="/about/">About</Link>
        <Link to="/services/">Services</Link>
        <Link to="#contact">Contact</Link>
      </section>
      <section id="projects">

        <Link to="/about/">About</Link>
        <Link to="/services/">Services</Link>
        <Link to="#contact">Contact</Link>
      </section>
      <section id="contact">

      </section>
    </div>
  </Layout>
)

export default IndexPage
