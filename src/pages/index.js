import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GreetingBanner from "../components/banner-greeting"
import IntroductionBanner from "../components/banner-introduction"
import ServicesBanner from "../components/banner-services"
import ProjectsBanner from "../components/banner-projects"
import ContactBanner from "../components/banner-contact"

const IndexPage = () => (
  <Layout>
    <div className="py-5">
      <SEO title="Home" />
      <GreetingBanner />
      <IntroductionBanner />
      <ServicesBanner/>
      <ContactBanner/>
    </div>
    <hr/>
  </Layout>
)

export default IndexPage
