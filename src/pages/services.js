import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/banner-callout"

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      imageAnalytics: file(relativePath: { eq: "stock-online-marketing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageResponsivePhone: file(relativePath: { eq: "stock-colorful-phone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageMonitorCode: file(relativePath: { eq: "stock-monitor-code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
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
      </Container>

      <Container className="my-5">
        <Row>
          <Col>

            <Card>
              <Card.Body>

                <Container className="mt-3 mb-1">
                  <Row>
                    <Col>
                      <h3 className="text-center mb-2">Services</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} md={6} lg={4} className="pb-4">
                      <h4 className="text-center">Responsive Web Design</h4>
                      <div className="image-framed">
                        <Img fluid={data.imageResponsivePhone.childImageSharp.fluid} />
                      </div>
                      <ul className="mt-3">
                        <li>Mobile first web design</li>
                        <li>WordPress themes and plugins</li>
                        <li>Membership websites</li>
                        <li>eCommerce websites</li>
                        <li>SASS websites</li>
                        <li>Portfolio websites</li>
                        <li>ADA Accessible and 508 Compliance</li>
                      </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="pb-4">
                      <h4 className="text-center">Search Engine Marketing</h4>
                      <div className="image-framed">
                        <Img fluid={data.imageAnalytics.childImageSharp.fluid} />
                      </div>
                      <ul className="mt-3">
                        <li>Local business user targeting strategy</li>
                        <li>Google and Facebook paid ads</li>
                        <li>Social media marketing</li>
                        <li>SEO and content optimization</li>
                        <li>Email marketing</li>
                        <li>Google Analytics</li>
                      </ul>
                    </Col>
                    <Col md={12} lg={4} className="pb-4">
                      <h4 className="text-center">Software Development</h4>
                      <div className="image-framed">
                        <Img fluid={data.imageMonitorCode.childImageSharp.fluid} />
                      </div>
                      <ul className="mt-3">
                        <li>Full stack software development</li>
                        <li>Angular.js and React.js website development</li>
                        <li>App development</li>
                        <li>Domain name registration</li>
                        <li>Website hosting</li>
                        <li>Maintenance & Support</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>

              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>


      <Container className="my-5">
        <Row>
          <Col>
            <p className="lead">Are you looking for a software development service that isn't listed? I am a full stack developer with a wide range of experience. Tell me about your project, get a quick estimate and a plan for making it live.</p>
          </Col>
        </Row>
      </Container>
      <CallOutBanner />
    </Layout>
  )
}

export default ServicesPage
