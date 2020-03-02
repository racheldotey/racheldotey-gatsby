import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectsBanner from "../components/banner-projects"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="container">
      <h1 className="page-header">Woops, there's nothing here...</h1>
      <p>Sorry but we couldn't find the page you are looking for.</p>
      <p>It's possible that the resource was moved, or maybe you just hit a route that doesn''t exist... the sadness.</p>
      <Link to="/">Go back to the homepage.</Link>
    </div>
    <div className="page-end divider"></div>
  </Layout>
)

export default NotFoundPage
