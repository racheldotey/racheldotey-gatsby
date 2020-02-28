import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/callout-banner"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the contact page.</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <CallOutBanner/>
  </Layout>
)

export default ContactPage
