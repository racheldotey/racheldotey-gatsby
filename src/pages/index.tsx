import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import GreetingBanner from "../components/banner-greeting"
import IntroductionBanner from "../components/banner-introduction"
import ServicesBanner from "../components/banner-services"
import ContactBanner from "../components/banner-contact"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="pb-5">
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
}

export default IndexPage

export const Head: HeadFC = () => <title>Web & App Development | RachelDotey.ninja</title>
