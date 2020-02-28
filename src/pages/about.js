import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/callout-banner"

const AboutPage = () => (
  <Layout>
    <div class="container">
      <SEO title="About" />
      <h1>Hi from the about page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <CallOutBanner />
  </Layout>
)

export default AboutPage
