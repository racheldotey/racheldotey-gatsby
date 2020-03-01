import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/callout-banner"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div class="container">
      <h1 className="page-header">Hi from the services page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div className="page-end"></div>
    <CallOutBanner />
  </Layout>
)

export default ServicesPage
