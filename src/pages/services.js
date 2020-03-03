import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/banner-callout"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="text-center page-intro">
          <h1 className="title">I can do a lot with software, so what can I do to best improve your customer experience?</h1>
          <p className="lead">I work with small businesses to create an online brand through web design an marketing. Would a website redesign improve your image with customers? Do you have an application or software idea?<br />
            Contact me below and lets talk about what we can build together.</p>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
          <h3 className="text-center">Services</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <h4>Web Design and Development</h4>
          <ul>
            <li>Mobile first responsive web design</li>
            <li>WordPress theme design and development</li>
            <li>Membership website development</li>
            <li>eCommerce websites</li>
            <li>SASS websites</li>
            <li>Portfolio websites</li>
            <li>ADA Standards for Accessible Design and 508 Compliance</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h4>Marketing</h4>
          <ul>
            <li>Local business search engine targeting campaigns</li>
            <li>Google Analytics tracking and analysis</li>
            <li>Content optimization</li>
            <li>Google, Facebook,  Adwards campaign management</li>
            <li>Small business marketing strategy</li>
            <li>SEO and search engine marketing</li>
            <li>Email marketing</li>
            <li>Social media marketing and management</li>
          </ul>
        </Col>
        <Col sm={12} md={4}>
          <h4>Software Programming</h4>
          <ul>
            <li>App development</li>
            <li>Angular.js and React.js website development</li>
            <li>Full stack software development</li>
            <li>Domain name registration</li>
            <li>Website hosting</li>
            <li>Maintenance & Support</li>
          </ul>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
        <p className="lead">Are you looking for a software development service that isn't listed? I am a full stack developer with a wide range of experience. Tell us about your project, get a quick estimate and a plan for making it live.</p>
        </Col>
      </Row>
      <Row className="pt-4 pb-5">
        <Col>
          "I'm not sure which service my business needs..."
          Contact Us to discuss your project and business goals.
          We'll recommend a solution tailored to your specific requirements.

          Tell us about your project, get a quick estimate and a plan for making it live.
        </Col>
      </Row>
    </Container>
    <CallOutBanner />
  </Layout>
)

export default ServicesPage
