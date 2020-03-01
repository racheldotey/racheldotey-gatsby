import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/callout-banner"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div class="container">
      <h1 className="page-header">Hi from the about page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div className="page-end"></div>
    <CallOutBanner />
  </Layout>
)

export default AboutPage
