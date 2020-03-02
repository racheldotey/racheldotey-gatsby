import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GreetingBanner from "../components/greeting-banner"
import IntroductionBanner from "../components/introduction-banner"
import ServicesBanner from "../components/services-banner"
import ProjectsBanner from "../components/projects-banner"
import ContactBanner from "../components/contact-banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GreetingBanner />
    <IntroductionBanner />
    <ServicesBanner/>
    <ContactBanner/>
  </Layout>
)

export default IndexPage
