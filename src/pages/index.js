import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GreetingBanner from "../components/banner-greeting"
import IntroductionBanner from "../components/banner-introduction"
import ServicesBanner from "../components/banner-services"
import ProjectsBanner from "../components/banner-projects"
import ContactBanner from "../components/banner-contact"

const IndexPage = () => (
  <Layout>
    <div className="pb-5">
      <SEO title="Home" />
      <GreetingBanner />
      <IntroductionBanner />
      <ServicesBanner />
      <Container>
        <Row className="justify-content-center align-self-center">
          <Col md={12} lg={10} className="my-5">
            <p className="h1 highlight text-center">What will connect you with customers?</p>
            <p className="lead text-center">
              Reach out! Lets talk about what will take your business presence to the next level. Whether its a website redesign, a targeted local search campaign, or developing a new application to provide your service to users in an innovative way - I'm the developer you are looking for.
            </p>
          </Col>
        </Row>
      </Container>
      <ContactBanner />
    </div>
    <hr />
  </Layout>
)

export default IndexPage
