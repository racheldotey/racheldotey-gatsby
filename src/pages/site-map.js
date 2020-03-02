import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectsBanner from "../components/banner-projects"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Container>
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="page-intro">
          <h1 className="title">Site Map</h1>
          <p className="lead">Trying to find something?</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <h4>Pages</h4>
          <ul>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="Home">About</Link></li>
            <li><Link to="Home">Services</Link></li>
            <li><Link to="Home">Contact</Link></li>
          </ul>
        </Col>
        <Col>
          <h4>Policies</h4>
          <ul>
            <li><Link to="Home">Policies</Link></li>
          </ul>
        </Col>
        <Col>
          <h4>Blogs</h4>
          <ul>
            <li></li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="page-end footer-divider"></div>
  </Layout>
)

export default ServicesPage
