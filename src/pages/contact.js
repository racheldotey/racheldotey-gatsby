import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/callout-banner/callout-banner"

const ContactPage = () => (
  <Layout>
    <div class="container">
      <SEO title="Contact" />
      <h1>Hi from the contact page.</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <CallOutBanner/>
  </Layout>
)

export default ContactPage
